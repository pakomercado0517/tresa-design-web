export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
  image?: string;
  wide?: boolean;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Web App" | "Mobile" | "Platform" | "E-commerce" | "All";
  featured: boolean;
  image: string;
  images?: string[];
  technologies: string[];
  year: number;
  client?: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
  headline?: string;
  badge?: string;
  objectives?: string[];
  features?: ProjectFeature[];
  metrics?: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "contafy",
    title: "Contafy",
    headline: "Contafy: Inteligencia financiera automatizada.",
    badge: "Financial Tech SaaS",
    shortDescription:
      "Plataforma SaaS para organizar, procesar y analizar información financiera a partir de comprobantes fiscales CFDI en México.",
    description:
      "Contafy es una plataforma SaaS desarrollada para empresas, profesionistas y contadores que necesitan centralizar y comprender la información contenida en sus comprobantes fiscales digitales. La aplicación permite gestionar múltiples perfiles fiscales, procesar automáticamente archivos XML CFDI, identificar operaciones cobradas, pagadas y pendientes, relacionar complementos de pago con facturas PPD y visualizar la información mediante dashboards y reportes.",
    category: "Web App",
    featured: true,
    image: "/projects/contafy/cover.png",
    images: [
      "/projects/contafy/dashboard.png",
      "/projects/contafy/invoices.png",
      "/projects/contafy/reports.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Recharts",
      "Stripe",
      "Brevo",
    ],
    year: 2026,
    client: "Producto propio — TresA Design",
    liveUrl: "https://contafy.com.mx",
    challenge:
      "La información fiscal proveniente de archivos CFDI XML puede resultar difícil de organizar y analizar cuando una persona o despacho gestiona múltiples RFC, especialmente al distinguir operaciones cobradas, pagadas, pendientes y facturas PPD relacionadas con complementos de pago.",
    solution:
      "Se desarrolló una plataforma centralizada que procesa automáticamente archivos XML CFDI, organiza la información por perfil fiscal, relaciona complementos de pago con sus facturas y presenta los datos mediante dashboards, métricas y reportes para facilitar el seguimiento financiero.",
    objectives: [
      "Automatizar la ingestión y el procesamiento de CFDI XML para múltiples perfiles fiscales.",
      "Ofrecer dashboards y reportes claros que separen cobrado, pagado y pendiente.",
      "Relacionar complementos de pago con facturas PPD sin fricción manual.",
    ],
    features: [
      {
        title: "Visualización en tiempo real",
        description:
          "Dashboards con métricas financieras que se actualizan conforme se procesan nuevos comprobantes fiscales.",
        icon: "analytics",
      },
      {
        title: "Gestión multi-RFC",
        description:
          "Organización de información por perfil fiscal con claridad operativa para despachos y empresas.",
        icon: "security",
        image: "/projects/contafy/dashboard.png",
        wide: true,
      },
      {
        title: "Reportes automatizados",
        description:
          "Reportes y vistas que facilitan el seguimiento de operaciones cobradas, pagadas y pendientes.",
        icon: "description",
        image: "/projects/contafy/reports.png",
        wide: true,
      },
      {
        title: "Parsing de CFDI",
        description:
          "Procesamiento optimizado de archivos XML para convertir datos fiscales complejos en información accionable.",
        icon: "bolt",
      },
    ],
    metrics: [
      { value: "Multi-RFC", label: "Gestión centralizada" },
      { value: "XML", label: "Procesamiento CFDI" },
      { value: "PPD", label: "Relación de pagos" },
    ],
  },
  {
    id: "2",
    slug: "sumit",
    title: "SUMIT",
    headline: "SUMIT: Operación financiera industrial unificada.",
    badge: "Enterprise Platform",
    shortDescription:
      "Plataforma empresarial para centralizar la gestión financiera y operativa de empresas de construcción e industria.",
    description:
      "SUMIT es una plataforma empresarial desarrollada para centralizar la operación financiera y administrativa de empresas con múltiples áreas, usuarios y proyectos. El sistema permite registrar y consultar ingresos, egresos, nómina, financiamientos, préstamos, caja, proveedores, clientes y obras desde una misma plataforma, ofreciendo además una visión ejecutiva del negocio, control de acceso por roles e informes mensuales alineados con los procesos reales de la empresa.",
    category: "Platform",
    featured: true,
    image: "/projects/sumit/cover.png",
    images: [
      "/projects/sumit/dashboard.png",
      "/projects/sumit/movimientos.png",
      "/projects/sumit/informes.png",
      "/projects/sumit/obras.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "Shadcn/ui",
      "TanStack Query",
      "Zustand",
      "TanStack Table",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    year: 2026,
    client: "Empresa del sector industrial y construcción",
    liveUrl: "https://sumit-tuxpan.vercel.app",
    challenge:
      "La empresa necesitaba centralizar información financiera y operativa que se encontraba distribuida entre diferentes procesos, responsables y archivos, dificultando obtener una visión actualizada del negocio y consolidar la información necesaria para el cierre mensual.",
    solution:
      "Se desarrolló una plataforma empresarial multiusuario y multiempresa que centraliza la captura de entradas y salidas de dinero, la administración de obras y catálogos, el control de usuarios mediante roles y permisos, y la generación de información financiera. La solución incluye un dashboard ejecutivo, contexto global por obra, módulos especializados de captura y un flujo guiado para revisar, generar y cerrar cada periodo financiero.",
    objectives: [
      "Centralizar capturas financieras y operativas en una sola plataforma multiusuario.",
      "Dar contexto global por obra para decisiones ejecutivas actualizadas.",
      "Guiar el cierre mensual con un flujo claro de revisión y generación de informes.",
    ],
    features: [
      {
        title: "Dashboard ejecutivo",
        description:
          "Visión consolidada del negocio con métricas financieras y operativas en un solo lugar.",
        icon: "monitoring",
      },
      {
        title: "Control por roles",
        description:
          "Acceso segmentado por permisos para proteger información sensible y ordenar responsabilidades.",
        icon: "admin_panel_settings",
        image: "/projects/sumit/movimientos.png",
        wide: true,
      },
      {
        title: "Cierre de periodo",
        description:
          "Flujo guiado para revisar, generar y cerrar cada periodo financiero alineado a la operación real.",
        icon: "calendar_month",
        image: "/projects/sumit/informes.png",
        wide: true,
      },
      {
        title: "Gestión de obras",
        description:
          "Administración de obras y catálogos con contexto operativo persistente en toda la plataforma.",
        icon: "apartment",
      },
    ],
    metrics: [
      { value: "Multi", label: "Empresa y usuarios" },
      { value: "1", label: "Fuente de verdad" },
      { value: "Mensual", label: "Cierre guiado" },
    ],
  },
  {
    id: "3",
    slug: "catalogos-de-sissy",
    title: "Catálogos de Sissy",
    headline: "Catálogos de Sissy: moda multimarca centralizada.",
    badge: "Retail Web App",
    shortDescription:
      "Plataforma web para centralizar y consultar múltiples catálogos de moda y accesorios desde una sola experiencia digital.",
    description:
      "Catálogos de Sissy es una plataforma web diseñada para facilitar la consulta de productos provenientes de diferentes catálogos comerciales. La solución centraliza el acceso a múltiples marcas en una sola interfaz, permitiendo a los usuarios explorar productos, realizar búsquedas asistidas por inteligencia artificial, recibir ayuda mediante un asistente integrado y solicitar cotizaciones de manera más directa.",
    category: "Web App",
    featured: true,
    image: "/projects/catalogos-de-sissy/cover.png",
    images: [
      "/projects/catalogos-de-sissy/cover.png",
      "/projects/catalogos-de-sissy/catalogos.png",
      "/projects/catalogos-de-sissy/productos.png",
      "/projects/catalogos-de-sissy/busqueda.png",
    ],
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Flowbite React",
      "Redux Toolkit",
      "React Router",
      "OpenAI",
      "Puppeteer",
    ],
    year: 2025,
    client: "Proyecto comercial independiente",
    liveUrl: "https://catalogos-de-sissy.vercel.app",
    challenge:
      "Consultar productos de diferentes marcas implicaba acceder individualmente a múltiples catálogos, dificultando la búsqueda y comparación de opciones y haciendo menos práctico el proceso de atención a clientes interesados en cotizar productos.",
    solution:
      "Se desarrolló una plataforma web centralizada que reúne múltiples catálogos en una sola experiencia, facilita la exploración de productos e incorpora herramientas de búsqueda asistida por inteligencia artificial y contacto directo para simplificar el proceso de consulta y cotización.",
    objectives: [
      "Unificar múltiples catálogos comerciales en una sola experiencia de consulta.",
      "Acelerar la búsqueda de productos con asistencia por inteligencia artificial.",
      "Facilitar cotizaciones y atención directa sin saltar entre plataformas.",
    ],
    features: [
      {
        title: "Catálogo unificado",
        description:
          "Consulta de múltiples marcas desde una interfaz centralizada y fácil de navegar.",
        icon: "storefront",
      },
      {
        title: "Búsqueda con IA",
        description:
          "Exploración asistida para encontrar productos relevantes con menos fricción.",
        icon: "psychology",
        image: "/projects/catalogos-de-sissy/busqueda.png",
        wide: true,
      },
      {
        title: "Exploración de productos",
        description:
          "Navegación clara por catálogos y fichas de producto orientada a decisión de compra.",
        icon: "grid_view",
        image: "/projects/catalogos-de-sissy/productos.png",
        wide: true,
      },
      {
        title: "Cotización directa",
        description:
          "Contacto inmediato para cotizar productos sin abandonar el flujo de exploración.",
        icon: "chat",
      },
    ],
    metrics: [
      { value: "Multi", label: "Catálogos unidos" },
      { value: "IA", label: "Búsqueda asistida" },
      { value: "1", label: "Experiencia única" },
    ],
  },
  {
    id: "4",
    slug: "contatools",
    title: "ContaTools",
    headline: "ContaTools: herramientas contables en un solo lugar.",
    badge: "Productivity Platform",
    shortDescription:
      "Plataforma web que centraliza herramientas contables y administrativas, incluyendo generación profesional de contratos y documentos empresariales.",
    description:
      "ContaTools es una plataforma web creada para simplificar tareas contables, administrativas y documentales que normalmente requieren diferentes herramientas o procesos independientes. La aplicación reúne generación estructurada de contratos, creación de cotizaciones profesionales, búsqueda de claves SAT, cálculos especializados y utilidades para el control financiero dentro de una sola experiencia digital.",
    category: "Platform",
    featured: false,
    image: "/projects/contatools/cover.png",
    images: [
      "/projects/contatools/dashboard.png",
      "/projects/contatools/contratos.png",
      "/projects/contatools/cotizaciones.png",
      "/projects/contatools/claves-sat.png",
      "/projects/contatools/calculadoras.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "PostgreSQL",
      "Supabase",
      "jsPDF",
      "PDF-lib",
      "Fuse.js",
    ],
    year: 2025,
    client: "Producto propio — TresA Design",
    liveUrl: "https://conta-tools.vercel.app",
    challenge:
      "Profesionales y pequeños negocios suelen depender de múltiples archivos, plantillas y herramientas separadas para elaborar contratos, generar cotizaciones, realizar cálculos y consultar información administrativa, lo que provoca procesos fragmentados y repetitivos.",
    solution:
      "Se desarrolló una plataforma centralizada que integra herramientas especializadas para tareas contables y administrativas, destacando un módulo estructurado para la generación de contratos mediante captura guiada de información, definición de condiciones y cláusulas, vista previa y generación de documentos profesionales en PDF.",
    objectives: [
      "Centralizar herramientas contables y administrativas en una sola plataforma.",
      "Guiar la generación de contratos profesionales hasta un PDF listo para usar.",
      "Reducir fricción en cotizaciones, claves SAT y cálculos frecuentes.",
    ],
    features: [
      {
        title: "Generador de contratos",
        description:
          "Captura guiada de información, cláusulas y vista previa para documentos profesionales en PDF.",
        icon: "description",
      },
      {
        title: "Cotizaciones claras",
        description:
          "Creación de cotizaciones estructuradas sin depender de plantillas dispersas.",
        icon: "request_quote",
        image: "/projects/contatools/cotizaciones.png",
        wide: true,
      },
      {
        title: "Claves SAT y cálculos",
        description:
          "Utilidades especializadas para consultas y operaciones administrativas del día a día.",
        icon: "calculate",
        image: "/projects/contatools/calculadoras.png",
        wide: true,
      },
      {
        title: "Suite integrada",
        description:
          "Un flujo único para tareas repetitivas que antes vivían en archivos y herramientas sueltas.",
        icon: "widgets",
      },
    ],
    metrics: [
      { value: "PDF", label: "Documentos listos" },
      { value: "1", label: "Suite integrada" },
      { value: "SAT", label: "Consulta asistida" },
    ],
  },
  {
    id: "5",
    slug: "apff-sistema-arrecifal-lobos-tuxpan",
    title: "APFF Sistema Arrecifal Lobos-Tuxpan",
    headline: "APFF Lobos-Tuxpan: operación turística regulada.",
    badge: "GovTech Platform",
    shortDescription:
      "Plataforma para gestionar y regular la operación turística de prestadores de servicios dentro de Áreas Naturales Protegidas.",
    description:
      "Sistema web desarrollado para digitalizar la gestión de operaciones turísticas dentro del APFF Sistema Arrecifal Lobos-Tuxpan. La plataforma permite administrar prestadores de servicios, permisos, actividades, activos, bloques horarios, capacidad operativa y eventos turísticos, ofreciendo trazabilidad y control sobre las operaciones realizadas dentro del Área Natural Protegida.",
    category: "Platform",
    featured: true,
    image: "/projects/apff-sistema-arrecifal-lobos-tuxpan/cover.png",
    images: [
      "/projects/apff-sistema-arrecifal-lobos-tuxpan/dashboard.png",
      "/projects/apff-sistema-arrecifal-lobos-tuxpan/prestadores.png",
      "/projects/apff-sistema-arrecifal-lobos-tuxpan/actividades.png",
      "/projects/apff-sistema-arrecifal-lobos-tuxpan/activos.png",
      "/projects/apff-sistema-arrecifal-lobos-tuxpan/eventos.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Stripe",
    ],
    year: 2026,
    client:
      "Proyecto para gestión de operación turística en Área Natural Protegida",
    liveUrl: "https://conanp-prestadores.vercel.app",
    challenge:
      "La operación turística dentro de un Área Natural Protegida requiere coordinar prestadores de servicios, permisos, actividades, activos y límites de capacidad bajo reglas operativas específicas, haciendo difícil mantener control, trazabilidad y visibilidad cuando los procesos se gestionan de forma dispersa.",
    solution:
      "Se desarrolló una plataforma multiusuario y multi-tenant que centraliza la gestión de prestadores, permisos, activos, actividades y eventos operativos, permitiendo aplicar reglas de capacidad, horarios y autorización según el contexto de cada área y dependencia.",
    objectives: [
      "Digitalizar la gestión de prestadores, permisos y actividades turísticas.",
      "Aplicar reglas de capacidad y horarios con trazabilidad operativa.",
      "Dar visibilidad multi-tenant a dependencias y áreas involucradas.",
    ],
    features: [
      {
        title: "Control operativo",
        description:
          "Visibilidad centralizada de la operación diaria dentro del área protegida.",
        icon: "dashboard",
      },
      {
        title: "Prestadores y permisos",
        description:
          "Administración de prestadores autorizados y sus permisos bajo reglas claras.",
        icon: "badge",
        image: "/projects/apff-sistema-arrecifal-lobos-tuxpan/prestadores.png",
        wide: true,
      },
      {
        title: "Actividades y activos",
        description:
          "Gestión de actividades, activos y capacidad operativa con control por bloques horarios.",
        icon: "event",
        image: "/projects/apff-sistema-arrecifal-lobos-tuxpan/actividades.png",
        wide: true,
      },
      {
        title: "Eventos trazables",
        description:
          "Registro de eventos turísticos para mantener historial, control y cumplimiento.",
        icon: "map",
      },
    ],
    metrics: [
      { value: "Multi", label: "Tenant y roles" },
      { value: "ANP", label: "Reglas operativas" },
      { value: "100%", label: "Trazabilidad" },
    ],
  },
];

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const categories = [
  "All",
  "Web App",
  "Mobile",
  "Platform",
  "E-commerce",
] as const;
