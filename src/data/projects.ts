export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Web App" | "Mobile" | "Platform" | "E-commerce" | "All";
  featured: boolean;
  image: string; // URL externa o path local
  images?: string[]; // Galería de imágenes adicionales
  technologies: string[];
  year: number;
  client?: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "fintech-analytics-dashboard",
    title: "Fintech Analytics Dashboard",
    shortDescription:
      "Plataforma de visualización y análisis de datos financieros en tiempo real para clientes empresariales.",
    description:
      "Una herramienta integral de análisis financiero diseñada para clientes empresariales. El dashboard proporciona visualización en tiempo real de grandes volúmenes de transacciones financieras, métricas de rendimiento, y análisis predictivo. La plataforma incluye gráficos interactivos, reportes personalizables, y alertas automáticas para decisiones estratégicas.",
    category: "Web App",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    year: 2024,
    client: "Empresa FinTech",
    liveUrl: "https://example.com",
    challenge:
      "Visualización ágil de grandes volúmenes de transacciones financieras en tiempo real con latencia mínima.",
    solution:
      "Creación de un dashboard moderno, intuitivo y performante con actualización en vivo utilizando WebSockets y optimización de renderizado con React.",
  },
  {
    id: "2",
    slug: "luxe-ecommerce-replatform",
    title: "Luxe E-Commerce Replatform",
    shortDescription:
      "Plataforma de comercio electrónico de lujo con experiencias de compra personalizadas.",
    description:
      "Plataforma de comercio electrónico de lujo diseñada para marcas premium. Incluye experiencias de compra personalizadas, catálogos interactivos, gestión de inventario avanzada, y sistema de recomendaciones basado en IA. La plataforma ofrece integración con sistemas de pago de alto nivel y gestión de clientes VIP.",
    category: "E-commerce",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    technologies: ["Next.js", "Shopify", "Stripe", "Tailwind CSS"],
    year: 2024,
    client: "Luxe Brands",
    liveUrl: "https://example.com",
    challenge:
      "Crear una experiencia de compra premium que refleje la exclusividad de la marca mientras mantiene alta conversión.",
    solution:
      "Diseño minimalista y elegante con animaciones sutiles, personalización basada en preferencias del usuario, y proceso de checkout optimizado.",
  },
  {
    id: "3",
    slug: "medicare-patient-portal",
    title: "MediCare Patient Portal",
    shortDescription:
      "Sistema integral de gestión de salud para pacientes y proveedores.",
    description:
      "Portal integral de gestión de salud que conecta pacientes con proveedores de atención médica. Incluye programación de citas, acceso a historiales médicos, prescripciones digitales, telemedicina integrada, y recordatorios automáticos. La plataforma cumple con estándares HIPAA y ofrece seguridad de nivel empresarial.",
    category: "Platform",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    technologies: ["React Native", "Firebase", "AWS", "HIPAA Compliance"],
    year: 2023,
    client: "MediCare Systems",
    liveUrl: "https://example.com",
    challenge:
      "Recordatorio de registros integrados complejos con portales de acceso seguros y cumplimiento de regulaciones médicas.",
    solution:
      "App integrada (PWA) con notificaciones push, almacenamiento local seguro, y arquitectura que cumple con estándares de privacidad médica.",
  },
  {
    id: "4",
    slug: "swiftlogistics-crm",
    title: "SwiftLogistics CRM",
    shortDescription:
      "Plataforma empresarial de logística y gestión de cadena de suministro con automatización.",
    description:
      "Sistema CRM especializado para gestión logística y cadena de suministro. Incluye seguimiento de inventario en tiempo real, optimización de rutas, gestión de almacenes automatizada, integración con transportistas, y análisis predictivo de demanda. La plataforma utiliza IoT y automatización para maximizar eficiencia operativa.",
    category: "Platform",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "IoT"],
    year: 2023,
    client: "SwiftLogistics",
    liveUrl: "https://example.com",
    challenge:
      "Control completo de inventarios y precios diferenciados por cliente integrado con sistemas de almacén existentes.",
    solution:
      "Sistema personalizado de gestión de pedidos y pagos con notificaciones push, seguimiento local seguro, y API robusta para integraciones.",
  },
  {
    id: "5",
    slug: "connect-social",
    title: "Connect Social",
    shortDescription:
      "Plataforma de redes sociales de próxima generación con características de engagement en tiempo real.",
    description:
      "Plataforma de redes sociales de próxima generación con características de engagement en tiempo real. Incluye feed personalizado con algoritmo de recomendación, mensajería instantánea, stories efímeras, streaming en vivo, y marketplace integrado. La plataforma prioriza la privacidad del usuario y ofrece herramientas avanzadas de moderación de contenido.",
    category: "Mobile",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    technologies: ["React Native", "GraphQL", "Redis", "WebSocket"],
    year: 2024,
    client: "Connect Inc.",
    liveUrl: "https://example.com",
    challenge:
      "Construir una plataforma social escalable que maneje millones de usuarios simultáneos con baja latencia.",
    solution:
      "Arquitectura de microservicios con GraphQL, caché distribuido con Redis, y WebSockets para comunicación en tiempo real.",
  },
  {
    id: "6",
    slug: "edutech-learning-platform",
    title: "EduTech Learning Platform",
    shortDescription:
      "Sistema integral de gestión de aprendizaje en línea con cursos interactivos.",
    description:
      "Sistema de gestión de aprendizaje en línea completo con cursos interactivos, evaluaciones automatizadas, seguimiento de progreso, certificaciones digitales, y herramientas de colaboración. La plataforma incluye un marketplace de cursos, sistema de calificaciones avanzado, y análisis de rendimiento estudiantil con insights accionables.",
    category: "Platform",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    technologies: ["Next.js", "MongoDB", "Stripe", "Video.js"],
    year: 2023,
    client: "EduTech Solutions",
    liveUrl: "https://example.com",
    challenge:
      "Crear una plataforma educativa que sea intuitiva para estudiantes y profesores, con contenido multimedia rico.",
    solution:
      "Interfaz de usuario moderna con reproductor de video optimizado, sistema de evaluación automatizado, y dashboard de analytics para educadores.",
  },
];

// Función helper para obtener proyectos por categoría
export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

// Función helper para obtener proyecto por slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Obtener todas las categorías únicas
export const categories = [
  "All",
  "Web App",
  "Mobile",
  "Platform",
  "E-commerce",
] as const;
