# Vercel + Supabase Migration Blueprint (For `education-app`)

## Goal

Deploy `education-app` on Vercel with Supabase as the system of record, replacing local-only persistence (`localStorage` + IndexedDB + cloud folder sync) with multi-user, server-backed data.

This document is implementation-ready and decision-complete for the current app architecture.

## Current State (What Exists Today)

The app currently uses:

- Client-only auth (`src/stores/userStore.ts`)
- Client-only child selection (`src/stores/childStore.ts`)
- Client-only progress and exam history (`src/stores/progressStore.ts`)
- Client-only assignments (`src/stores/assignmentStore.ts`)
- IndexedDB upload store for uploaded lessons (`src/services/uploadedContentStore.ts`)
- Browser folder sync (`src/services/cloudSyncService.ts`)

Implication: no shared state across devices unless manual sync is used.

## Target Architecture

- Frontend: React + Vite deployed on Vercel.
- Auth: Supabase Auth (email/password, optionally magic link).
- Database: Supabase Postgres with Row Level Security (RLS).
- Content assets (uploaded lessons/images): Supabase Storage.
- App data access: Supabase JS client from frontend.
- Optional secure operations (admin-only imports, privileged writes): Vercel Serverless Functions using Supabase service role.

## Required Online Services

## Required

1. Vercel
2. Supabase
3. GitHub (for CI/CD integration with Vercel)

## Strongly Recommended

1. Sentry (error tracking)
2. PostHog or GA4 (usage analytics)

## Optional

1. Resend/SendGrid (email workflows beyond default Supabase emails)
2. UptimeRobot/Better Stack (uptime monitoring)

## Data Model Mapping (Current Store -> Supabase)

| Current Store/Service | Supabase Target |
|---|---|
| `userStore.users/currentUser` | `auth.users` + `profiles` |
| `childStore.children/activeChild` | `children`, `parent_children`, `child_accounts` |
| `progressStore.children[*].lessons` | `lesson_progress` |
| `progressStore.examAttempts` | `exam_attempts` |
| `assignmentStore.assignments` | `topic_assignments` |
| `uploadedContentStore` | `lesson_catalog` + `lesson_files` + Storage bucket |
| `cloudSyncService` | remove/deprecate (Supabase is source of truth) |

## Canonical IDs

- Keep existing canonical lesson key format:
  - `grade-{grade}-{subject}-q{quarter}-{topicName}`
- Store this key in `lesson_catalog.lesson_key` with unique constraint.

## Supabase Schema (SQL)

Use this as baseline migration SQL.

```sql
-- 1) Profile + role
create type app_role as enum ('parent', 'child', 'admin');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  role app_role not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Child domain
create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  grade int not null check (grade between 1 and 12),
  created_at timestamptz not null default now()
);

-- Parent-child relationship (many-to-many allowed)
create table if not exists public.parent_children (
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_id uuid not null references public.children(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (parent_user_id, child_id)
);

-- Child login account -> child profile (1:1)
create table if not exists public.child_accounts (
  child_user_id uuid primary key references auth.users(id) on delete cascade,
  child_id uuid not null unique references public.children(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- 3) Lessons and lesson files
create table if not exists public.lesson_catalog (
  id uuid primary key default gen_random_uuid(),
  lesson_key text not null unique, -- grade-5-math-q1-topic-fractions
  grade int not null check (grade between 1 and 12),
  subject text not null,
  quarter int not null check (quarter between 1 and 4),
  topic_name text not null,
  display_name text not null,
  metadata jsonb not null default '{}'::jsonb,
  source text not null check (source in ('builtin', 'uploaded')),
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lesson_files (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lesson_catalog(id) on delete cascade,
  file_type text not null check (file_type in ('content', 'metadata', 'practice', 'assessment', 'asset')),
  path text not null, -- storage path
  mime_type text,
  created_at timestamptz not null default now()
);

create unique index if not exists lesson_files_unique_per_type
  on public.lesson_files(lesson_id, file_type, path);

-- 4) Assignments
create table if not exists public.topic_assignments (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  lesson_id uuid not null references public.lesson_catalog(id) on delete cascade,
  assigned_by uuid not null references auth.users(id),
  assigned_at timestamptz not null default now(),
  unique (child_id, lesson_id)
);

-- 5) Lesson progress + attempts
create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  lesson_id uuid not null references public.lesson_catalog(id) on delete cascade,
  started_at timestamptz,
  completed_at timestamptz,
  completed boolean not null default false,
  time_spent_minutes int not null default 0,
  best_score int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (child_id, lesson_id)
);

create table if not exists public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  lesson_id uuid not null references public.lesson_catalog(id) on delete cascade,
  exam_type text not null check (exam_type in ('practice', 'assessment')),
  started_at timestamptz not null,
  completed_at timestamptz,
  score int,
  total_points int,
  passed boolean,
  time_spent_minutes int not null default 0,
  answers jsonb not null default '{}'::jsonb,
  released boolean not null default false,
  released_at timestamptz,
  created_at timestamptz not null default now()
);
```

## Row Level Security (RLS) Policy Model

Enable RLS on all app tables and apply these rules.

```sql
alter table public.profiles enable row level security;
alter table public.children enable row level security;
alter table public.parent_children enable row level security;
alter table public.child_accounts enable row level security;
alter table public.lesson_catalog enable row level security;
alter table public.lesson_files enable row level security;
alter table public.topic_assignments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.exam_attempts enable row level security;
```

## Access rules

1. `profiles`: user can read/update own profile row.
2. `lesson_catalog` + `lesson_files`: authenticated users can read. Upload/write only `parent`/`admin`.
3. `children`: parent can read children linked in `parent_children`; child can read own child row via `child_accounts`.
4. `topic_assignments`, `lesson_progress`, `exam_attempts`:
   - parent can read/write for linked children
   - child can read/write only own child_id rows (via `child_accounts`)
5. only `admin` can directly manage role escalations.

Use SQL helper functions for readability:

- `is_parent_of_child(auth.uid(), child_id)`
- `is_child_owner(auth.uid(), child_id)`
- `is_admin(auth.uid())`

## Storage Design

Create bucket:

- `lesson-assets` (private bucket; access via signed URLs)

Path conventions:

- `lessons/{lesson_key}/content.md`
- `lessons/{lesson_key}/metadata.json`
- `lessons/{lesson_key}/practice.json`
- `lessons/{lesson_key}/assessment.json`
- `lessons/{lesson_key}/images/{filename}`

App flow:

1. Parent uploads ZIP.
2. Client/server unzips and uploads files to Storage.
3. Insert/Upsert `lesson_catalog` and `lesson_files` records.
4. Lesson renderer reads markdown and replaces relative asset paths with signed URLs.

## Frontend Refactor Plan

## Phase 1: Supabase client and auth

1. Add Supabase JS client and provider.
2. Replace `userStore` login/logout/session with Supabase Auth session listener.
3. Keep local role cache only as derived state from `profiles`.

## Phase 2: Replace persisted stores with server-backed operations

1. `childStore`: fetch from `children` joined by permissions.
2. `assignmentStore`: CRUD through `topic_assignments`.
3. `progressStore`: read/write `lesson_progress` and `exam_attempts`.
4. Remove local persist middleware for canonical state; keep optional UI-only cache.

## Phase 3: Content source unification

1. Read built-in lessons from static `public/content` OR preload into `lesson_catalog`.
2. Read uploaded lessons from Supabase Storage + `lesson_catalog`.
3. Remove IndexedDB upload dependency and cloud folder sync service.

## Phase 4: Parent dashboard migration

1. Dashboard charts use SQL queries from `lesson_progress` and `exam_attempts`.
2. Assignment toggles call `topic_assignments` upsert/delete.
3. Import/export moved to DB backup tooling (or scoped export endpoint).

## Vercel + Supabase Environment Variables

Set these in Vercel project settings:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (only for Vercel server functions, never exposed to client)
- `APP_ENV=production`

Optional:

- `SENTRY_DSN`
- `POSTHOG_KEY`

## API/Server Function Decisions

Use frontend direct Supabase client for:

- normal authenticated reads/writes protected by RLS.

Use Vercel Serverless Functions for:

- privileged imports (bulk lesson ZIP ingestion)
- admin operations requiring service role
- signed URL issuing if stricter control needed.

## Migration Strategy From Existing Local Data

Use one-time migration from existing browser state:

1. On first authenticated session, detect legacy keys:
   - `education-app-progress`
   - `education-app-assignments`
   - `education-app-children`
2. Normalize lesson keys (already implemented in app utilities).
3. Upsert rows into Supabase tables.
4. Set `migration_completed_at` in user profile metadata.
5. Stop writing legacy local keys.

## Rollout Plan

1. **Stage A (Dev):** connect auth + read-only DB access.
2. **Stage B (Staging):** enable writes for assignments/progress/attempts.
3. **Stage C (Content):** move uploads to Storage and switch lesson loader.
4. **Stage D (Cleanup):** remove cloud sync + IndexedDB upload store.
5. **Stage E (Prod):** cutover and monitor.

## Testing Checklist

1. Parent login, child login, logout flows.
2. Parent sees only linked children.
3. Child cannot access sibling data.
4. Progress persists across browser/device refreshes.
5. Exam attempts and best score update correctly.
6. Assigned out-of-grade lessons appear only for assigned child.
7. Uploaded lesson images render from Storage URLs.
8. RLS blocks unauthorized direct table reads/writes.

## Operational Checklist

1. Create Supabase project and apply schema + RLS.
2. Configure Vercel env vars.
3. Deploy preview and run staging QA.
4. Enable monitoring and error tracking.
5. Run production cutover.

## What Can Be Removed After Migration

1. `cloudSyncService` and UI controls for folder sync.
2. IndexedDB lesson upload store as primary persistence.
3. Local-only auth/password model.

---

This plan keeps your current UX model (parent/child roles, assignments, progress, exams) while making the app production-ready for multi-device and multi-user use.
