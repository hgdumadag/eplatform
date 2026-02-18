-- eplatform / education-app baseline schema for Vercel + Supabase
-- Creates core tables, helper functions, RLS policies, and storage bucket policies.

begin;

create extension if not exists pgcrypto;

-- -----------------------------
-- Types
-- -----------------------------
do $$
begin
  if not exists (
    select 1
    from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where t.typname = 'app_role'
      and n.nspname = 'public'
  ) then
    create type public.app_role as enum ('parent', 'child', 'admin');
  end if;
end
$$;

-- -----------------------------
-- Core tables
-- -----------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  role public.app_role not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  grade int not null check (grade between 1 and 12),
  created_at timestamptz not null default now()
);

create table if not exists public.parent_children (
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_id uuid not null references public.children(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (parent_user_id, child_id)
);

create table if not exists public.child_accounts (
  child_user_id uuid primary key references auth.users(id) on delete cascade,
  child_id uuid not null unique references public.children(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_catalog (
  id uuid primary key default gen_random_uuid(),
  lesson_key text not null unique,
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
  path text not null,
  mime_type text,
  created_at timestamptz not null default now()
);

create table if not exists public.topic_assignments (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children(id) on delete cascade,
  lesson_id uuid not null references public.lesson_catalog(id) on delete cascade,
  assigned_by uuid not null references auth.users(id),
  assigned_at timestamptz not null default now(),
  unique (child_id, lesson_id)
);

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

-- -----------------------------
-- Indexes
-- -----------------------------
create unique index if not exists lesson_files_unique_per_type
  on public.lesson_files(lesson_id, file_type, path);

create index if not exists parent_children_child_id_idx on public.parent_children(child_id);
create index if not exists topic_assignments_child_id_idx on public.topic_assignments(child_id);
create index if not exists topic_assignments_lesson_id_idx on public.topic_assignments(lesson_id);
create index if not exists lesson_progress_child_id_idx on public.lesson_progress(child_id);
create index if not exists lesson_progress_lesson_id_idx on public.lesson_progress(lesson_id);
create index if not exists exam_attempts_child_id_idx on public.exam_attempts(child_id);
create index if not exists exam_attempts_lesson_id_idx on public.exam_attempts(lesson_id);
create index if not exists exam_attempts_completed_at_idx on public.exam_attempts(completed_at);

-- -----------------------------
-- Updated-at trigger
-- -----------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_lesson_catalog_updated_at on public.lesson_catalog;
create trigger set_lesson_catalog_updated_at
before update on public.lesson_catalog
for each row
execute function public.set_updated_at();

drop trigger if exists set_lesson_progress_updated_at on public.lesson_progress;
create trigger set_lesson_progress_updated_at
before update on public.lesson_progress
for each row
execute function public.set_updated_at();

-- -----------------------------
-- RLS helper functions
-- -----------------------------
create or replace function public.is_admin(user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = user_id
      and p.role = 'admin'::public.app_role
  );
$$;

create or replace function public.is_parent(user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = user_id
      and p.role = 'parent'::public.app_role
  );
$$;

create or replace function public.is_parent_or_admin(user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_parent(user_id) or public.is_admin(user_id);
$$;

create or replace function public.is_parent_of_child(user_id uuid, in_child_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.parent_children pc
    where pc.parent_user_id = user_id
      and pc.child_id = in_child_id
  );
$$;

create or replace function public.is_child_owner(user_id uuid, in_child_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.child_accounts ca
    where ca.child_user_id = user_id
      and ca.child_id = in_child_id
  );
$$;

grant execute on function public.is_admin(uuid) to authenticated;
grant execute on function public.is_parent(uuid) to authenticated;
grant execute on function public.is_parent_or_admin(uuid) to authenticated;
grant execute on function public.is_parent_of_child(uuid, uuid) to authenticated;
grant execute on function public.is_child_owner(uuid, uuid) to authenticated;

-- -----------------------------
-- Enable RLS
-- -----------------------------
alter table public.profiles enable row level security;
alter table public.children enable row level security;
alter table public.parent_children enable row level security;
alter table public.child_accounts enable row level security;
alter table public.lesson_catalog enable row level security;
alter table public.lesson_files enable row level security;
alter table public.topic_assignments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.exam_attempts enable row level security;

-- -----------------------------
-- Policies: profiles
-- -----------------------------
drop policy if exists profiles_select_own_or_admin on public.profiles;
create policy profiles_select_own_or_admin
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.is_admin(auth.uid()));

drop policy if exists profiles_insert_own_non_admin on public.profiles;
create policy profiles_insert_own_non_admin
on public.profiles
for insert
to authenticated
with check (
  id = auth.uid()
  and role in ('parent'::public.app_role, 'child'::public.app_role)
);

drop policy if exists profiles_update_own_no_role_escalation on public.profiles;
create policy profiles_update_own_no_role_escalation
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (
  id = auth.uid()
  and role = (select p.role from public.profiles p where p.id = auth.uid())
);

-- -----------------------------
-- Policies: children + relationships
-- -----------------------------
drop policy if exists children_select_scoped on public.children;
create policy children_select_scoped
on public.children
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), id)
  or public.is_child_owner(auth.uid(), id)
);

drop policy if exists children_insert_parent_or_admin on public.children;
create policy children_insert_parent_or_admin
on public.children
for insert
to authenticated
with check (public.is_parent_or_admin(auth.uid()));

drop policy if exists children_update_scoped on public.children;
create policy children_update_scoped
on public.children
for update
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), id)
)
with check (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), id)
);

drop policy if exists children_delete_scoped on public.children;
create policy children_delete_scoped
on public.children
for delete
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), id)
);

drop policy if exists parent_children_select_scoped on public.parent_children;
create policy parent_children_select_scoped
on public.parent_children
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or parent_user_id = auth.uid()
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists parent_children_insert_parent_or_admin on public.parent_children;
create policy parent_children_insert_parent_or_admin
on public.parent_children
for insert
to authenticated
with check (
  public.is_admin(auth.uid())
  or parent_user_id = auth.uid()
);

drop policy if exists parent_children_delete_parent_or_admin on public.parent_children;
create policy parent_children_delete_parent_or_admin
on public.parent_children
for delete
to authenticated
using (
  public.is_admin(auth.uid())
  or parent_user_id = auth.uid()
);

drop policy if exists child_accounts_select_scoped on public.child_accounts;
create policy child_accounts_select_scoped
on public.child_accounts
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or child_user_id = auth.uid()
  or public.is_parent_of_child(auth.uid(), child_id)
);

drop policy if exists child_accounts_manage_admin_only on public.child_accounts;
create policy child_accounts_manage_admin_only
on public.child_accounts
for all
to authenticated
using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

-- -----------------------------
-- Policies: content
-- -----------------------------
drop policy if exists lesson_catalog_select_authenticated on public.lesson_catalog;
create policy lesson_catalog_select_authenticated
on public.lesson_catalog
for select
to authenticated
using (true);

drop policy if exists lesson_catalog_write_parent_or_admin on public.lesson_catalog;
create policy lesson_catalog_write_parent_or_admin
on public.lesson_catalog
for all
to authenticated
using (public.is_parent_or_admin(auth.uid()))
with check (public.is_parent_or_admin(auth.uid()));

drop policy if exists lesson_files_select_authenticated on public.lesson_files;
create policy lesson_files_select_authenticated
on public.lesson_files
for select
to authenticated
using (true);

drop policy if exists lesson_files_write_parent_or_admin on public.lesson_files;
create policy lesson_files_write_parent_or_admin
on public.lesson_files
for all
to authenticated
using (public.is_parent_or_admin(auth.uid()))
with check (public.is_parent_or_admin(auth.uid()));

-- -----------------------------
-- Policies: assignments and progress
-- -----------------------------
drop policy if exists topic_assignments_select_scoped on public.topic_assignments;
create policy topic_assignments_select_scoped
on public.topic_assignments
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists topic_assignments_write_parent_or_admin on public.topic_assignments;
create policy topic_assignments_write_parent_or_admin
on public.topic_assignments
for all
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
)
with check (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
);

drop policy if exists lesson_progress_select_scoped on public.lesson_progress;
create policy lesson_progress_select_scoped
on public.lesson_progress
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists lesson_progress_write_scoped on public.lesson_progress;
create policy lesson_progress_write_scoped
on public.lesson_progress
for all
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
)
with check (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists exam_attempts_select_scoped on public.exam_attempts;
create policy exam_attempts_select_scoped
on public.exam_attempts
for select
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists exam_attempts_insert_scoped on public.exam_attempts;
create policy exam_attempts_insert_scoped
on public.exam_attempts
for insert
to authenticated
with check (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
  or public.is_child_owner(auth.uid(), child_id)
);

drop policy if exists exam_attempts_update_parent_or_admin on public.exam_attempts;
create policy exam_attempts_update_parent_or_admin
on public.exam_attempts
for update
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
)
with check (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
);

drop policy if exists exam_attempts_delete_parent_or_admin on public.exam_attempts;
create policy exam_attempts_delete_parent_or_admin
on public.exam_attempts
for delete
to authenticated
using (
  public.is_admin(auth.uid())
  or public.is_parent_of_child(auth.uid(), child_id)
);

-- -----------------------------
-- Storage bucket + policies
-- -----------------------------
insert into storage.buckets (id, name, public)
values ('lesson-assets', 'lesson-assets', false)
on conflict (id) do nothing;

drop policy if exists lesson_assets_select_authenticated on storage.objects;
create policy lesson_assets_select_authenticated
on storage.objects
for select
to authenticated
using (bucket_id = 'lesson-assets');

drop policy if exists lesson_assets_insert_parent_or_admin on storage.objects;
create policy lesson_assets_insert_parent_or_admin
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'lesson-assets'
  and public.is_parent_or_admin(auth.uid())
);

drop policy if exists lesson_assets_update_parent_or_admin on storage.objects;
create policy lesson_assets_update_parent_or_admin
on storage.objects
for update
to authenticated
using (
  bucket_id = 'lesson-assets'
  and public.is_parent_or_admin(auth.uid())
)
with check (
  bucket_id = 'lesson-assets'
  and public.is_parent_or_admin(auth.uid())
);

drop policy if exists lesson_assets_delete_parent_or_admin on storage.objects;
create policy lesson_assets_delete_parent_or_admin
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'lesson-assets'
  and public.is_parent_or_admin(auth.uid())
);

commit;
