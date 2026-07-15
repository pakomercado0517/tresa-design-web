#!/usr/bin/env node
/*
Seed script for Supabase: inserts projects and project_images based on local data
Requirements:
- Set env vars: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
- Install dependency: npm i @supabase/supabase-js
Usage:
  SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-supabase-projects.js
*/

// Load .env automatically when present
import 'dotenv/config';

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('ERROR: please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

// Projects data (copied from src/data/projects.ts — edit as needed)
const projects = [
  {
    id: null,
    slug: 'fintech-analytics-dashboard',
    title: 'Fintech Analytics Dashboard',
    short_description: 'Plataforma de visualización y análisis de datos financieros en tiempo real para clientes empresariales.',
    description: 'Una herramienta integral de análisis financiero diseñada para clientes empresariales. El dashboard proporciona visualización en tiempo real de grandes volúmenes de transacciones financieras, métricas de rendimiento, y análisis predictivo. La plataforma incluye gráficos interactivos, reportes personalizables, y alertas automáticas para decisiones estratégicas.',
    category: 'Web App',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
    ],
    technologies: ['React','TypeScript','D3.js','Node.js','PostgreSQL'],
    year: 2024,
    client: 'Empresa FinTech',
    live_url: 'https://example.com',
    challenge: 'Visualización ágil de grandes volúmenes de transacciones financieras en tiempo real con latencia mínima.',
    solution: 'Creación de un dashboard moderno, intuitivo y performante con actualización en vivo utilizando WebSockets y optimización de renderizado con React.',
    status: 'published'
  },
  {
    id: null,
    slug: 'luxe-ecommerce-replatform',
    title: 'Luxe E-Commerce Replatform',
    short_description: 'Plataforma de comercio electrónico de lujo con experiencias de compra personalizadas.',
    description: 'Plataforma de comercio electrónico de lujo diseñada para marcas premium. Incluye experiencias de compra personalizadas, catálogos interactivos, gestión de inventario avanzada, y sistema de recomendaciones basado en IA. La plataforma ofrece integración con sistemas de pago de alto nivel y gestión de clientes VIP.',
    category: 'E-commerce',
    featured: true,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    images: [],
    technologies: ['Next.js','Shopify','Stripe','Tailwind CSS'],
    year: 2024,
    client: 'Luxe Brands',
    live_url: 'https://example.com',
    status: 'published'
  },
  {
    id: null,
    slug: 'medicare-patient-portal',
    title: 'MediCare Patient Portal',
    short_description: 'Sistema integral de gestión de salud para pacientes y proveedores.',
    description: 'Portal integral de gestión de salud que conecta pacientes con proveedores de atención médica. Incluye programación de citas, acceso a historiales médicos, prescripciones digitales, telemedicina integrada, y recordatorios automáticos. La plataforma cumple con estándares HIPAA y ofrece seguridad de nivel empresarial.',
    category: 'Platform',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    images: [],
    technologies: ['React Native','Firebase','AWS','HIPAA Compliance'],
    year: 2023,
    client: 'MediCare Systems',
    live_url: 'https://example.com',
    status: 'published'
  },
  {
    id: null,
    slug: 'swiftlogistics-crm',
    title: 'SwiftLogistics CRM',
    short_description: 'Plataforma empresarial de logística y gestión de cadena de suministro con automatización.',
    description: 'Sistema CRM especializado para gestión logística y cadena de suministro. Incluye seguimiento de inventario en tiempo real, optimización de rutas, gestión de almacenes automatizada, integración con transportistas, y análisis predictivo de demanda. La plataforma utiliza IoT y automatización para maximizar eficiencia operativa.',
    category: 'Platform',
    featured: false,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    images: [],
    technologies: ['Vue.js','Python','Django','PostgreSQL','IoT'],
    year: 2023,
    client: 'SwiftLogistics',
    live_url: 'https://example.com',
    status: 'published'
  },
  {
    id: null,
    slug: 'connect-social',
    title: 'Connect Social',
    short_description: 'Plataforma de redes sociales de próxima generación con características de engagement en tiempo real.',
    description: 'Plataforma de redes sociales de próxima generación con características de engagement en tiempo real. Incluye feed personalizado con algoritmo de recomendación, mensajería instantánea, stories efímeras, streaming en vivo, y marketplace integrado. La plataforma prioriza la privacidad del usuario y ofrece herramientas avanzadas de moderación de contenido.',
    category: 'Mobile',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    images: [],
    technologies: ['React Native','GraphQL','Redis','WebSocket'],
    year: 2024,
    client: 'Connect Inc.',
    live_url: 'https://example.com',
    status: 'published'
  },
  {
    id: null,
    slug: 'edutech-learning-platform',
    title: 'EduTech Learning Platform',
    short_description: 'Sistema integral de gestión de aprendizaje en línea con cursos interactivos.',
    description: 'Sistema de gestión de aprendizaje en línea completo con cursos interactivos, evaluaciones automatizadas, seguimiento de progreso, certificaciones digitales, y herramientas de colaboración. La plataforma incluye un marketplace de cursos, sistema de calificaciones avanzado, y análisis de rendimiento estudiantil con insights accionables.',
    category: 'Platform',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    images: [],
    technologies: ['Next.js','MongoDB','Stripe','Video.js'],
    year: 2023,
    client: 'EduTech Solutions',
    live_url: 'https://example.com',
    status: 'published'
  }
];

async function upsertTechnology(name) {
  const { data, error } = await supabase.from('technologies').upsert({ name }, { onConflict: 'name' }).select('id').limit(1);
  if (error) throw error;
  return (data && data[0] && data[0].id) || null;
}

async function main() {
  console.log('Starting seed...');

  for (const p of projects) {
    const projectPayload = {
      slug: p.slug,
      title: p.title,
      short_description: p.short_description,
      description: p.description,
      category: p.category,
      featured: p.featured || false,
      year: p.year || null,
      client: p.client || null,
      live_url: p.live_url || null,
      seo_title: p.title,
      seo_description: p.short_description || null,
      meta: {},
      status: p.status || 'published'
    };

    // Upsert project (on conflict slug update fields)
    const { data: projData, error: projErr } = await supabase
      .from('projects')
      .upsert(projectPayload, { onConflict: 'slug' })
      .select('id')
      .limit(1);

    if (projErr) {
      console.error('Error upserting project', p.slug, projErr);
      continue;
    }

    const projectId = projData[0].id;
    console.log('Upserted project', p.slug, projectId);

    // Technologies
    if (p.technologies && p.technologies.length) {
      for (const techName of p.technologies) {
        const techId = await upsertTechnology(techName);
        if (techId) {
          await supabase.from('project_technologies').upsert({ project_id: projectId, technology_id: techId }, { onConflict: ['project_id','technology_id'] });
        }
      }
    }

    // Main image
    if (p.image) {
      await supabase.from('project_images').upsert({ project_id: projectId, storage_path: p.image, role: 'hero', alt_text: p.title + ' — hero' }, { onConflict: ['project_id','role'] });
    }

    // Gallery images
    if (p.images && p.images.length) {
      for (let i = 0; i < p.images.length; i++) {
        const img = p.images[i];
        await supabase.from('project_images').insert({ project_id: projectId, storage_path: img, role: 'gallery', "order": i });
      }
    }

  }

  console.log('Seed complete');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
