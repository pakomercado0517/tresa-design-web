-- Migration: create projects and images schema
-- Run in Supabase SQL editor or via migrations tool

-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tipos
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_status') THEN
    CREATE TYPE project_status AS ENUM ('draft', 'published', 'archived');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'image_role') THEN
    CREATE TYPE image_role AS ENUM ('hero', 'gallery', 'thumbnail', 'placeholder');
  END IF;
END$$;

-- Tabla: projects
CREATE TABLE IF NOT EXISTS public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  short_description text,
  description text,
  category text,
  status project_status NOT NULL DEFAULT 'draft',
  featured boolean NOT NULL DEFAULT false,
  year integer,
  client text,
  live_url text,
  seo_title text,
  seo_description text,
  meta jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Tabla: project_images (storage_path nullable to allow external URLs initially)
CREATE TABLE IF NOT EXISTS public.project_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  storage_path text, -- e.g. resized/slug/1280-<hash>.webp or external URL
  role image_role NOT NULL DEFAULT 'gallery',
  width integer,
  height integer,
  format text, -- 'jpeg', 'webp', 'avif'
  size_bytes bigint,
  alt_text text,
  placeholder text, -- blurhash or tiny base64
  hash text, -- short content hash for versioning
  "order" integer DEFAULT 0,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Tabla: technologies (catálogo)
CREATE TABLE IF NOT EXISTS public.technologies (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE
);

-- Tabla: project_technologies (m2m)
CREATE TABLE IF NOT EXISTS public.project_technologies (
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  technology_id int NOT NULL REFERENCES public.technologies(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, technology_id)
);

-- Índices recomendados
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_project_images_project_id ON public.project_images(project_id);
CREATE INDEX IF NOT EXISTS idx_project_images_role ON public.project_images(role);

-- Trigger: actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION public.trigger_set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS set_updated_at ON public.projects;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE PROCEDURE public.trigger_set_updated_at();

-- Habilitar RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;

-- Policy: permitir SELECT público solo en proyectos publicados
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'projects' AND policyname = 'public_select_published_projects'
  ) THEN
    CREATE POLICY public_select_published_projects
      ON public.projects
      FOR SELECT
      USING (status = 'published');
  END IF;
END$$;

-- Policy: permitir SELECT de images solo si el proyecto es published
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'project_images' AND policyname = 'public_select_images_for_published_projects'
  ) THEN
    CREATE POLICY public_select_images_for_published_projects
      ON public.project_images
      FOR SELECT
      USING (
        EXISTS (
          SELECT 1 FROM public.projects p
          WHERE p.id = public.project_images.project_id AND p.status = 'published'
        )
      );
  END IF;
END$$;

-- Nota: No se crean policies para INSERT/UPDATE/DELETE aquí. Escrituras se deben hacer desde service_role o funciones server-side.

-- Opcional: seed minimal (ejemplo de inserción rápida)
-- INSERT INTO public.projects (slug,title,short_description,status,featured,year) VALUES ('example-project','Example Project','Short desc','published',false,2026);

```