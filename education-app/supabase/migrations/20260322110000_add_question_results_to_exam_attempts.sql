alter table public.exam_attempts
add column if not exists question_results jsonb not null default '{}'::jsonb;
