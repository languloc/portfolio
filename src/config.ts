type Certification = { name: string; date: string; url: string; credentialId?: string };

const es = {
  name: "Luis Angulo Couso",
  title: "Data Engineer",
  description: "Portfolio de Luis Angulo Couso, Data Engineer",
  accentColor: "#1f5f8b",
  accentColorDark: "#5b9fd1",
  social: {
    email: "langulocouso@gmail.com",
    linkedin: "https://www.linkedin.com/in/luisangulocouso",
    github: "https://github.com/languloc",
  },
  aboutMe:
    "Ingeniero de Datos con experiencia en el desarrollo y mantenimiento de plataformas de datos sobre Azure. Participo tanto en el desarrollo de pipelines ETL/ELT como en la administración de la plataforma, incluyendo infraestructura cloud, Kubernetes, Azure DevOps (CI/CD), Azure Functions y la optimización del rendimiento y los costes. Uso GitHub Copilot y Claude Code como apoyo para desarrollar, probar y documentar soluciones, validando siempre sus resultados. Mi objetivo es seguir creciendo hacia roles de arquitectura y liderazgo técnico.",
  skills: [
    "Azure",
    "Databricks",
    "Spark",
    "Snowflake",
    "Airflow",
    "Python",
    "SQL",
    "Kubernetes",
    "Docker",
    "Azure DevOps",
    "Azure Functions",
    "Azure Data Factory",
    "Power BI",
    "PostgreSQL",
    "SQL Server",
    "GitHub Actions",
    "GitHub Copilot",
    "Claude Code",
  ],
  projects: [
    {
      name: "Migración a Airflow 3",
      description:
        "Migración completa de la plataforma de orquestación de datos de Cosentino a Airflow 3.2.2.",
      link: "",
      skills: ["Airflow"],
    },
    {
      name: "Trazabilidad y costes de fabricación",
      description:
        "Optimización de la trazabilidad y de los costes de fabricación de los distintos materiales.",
      link: "",
      skills: [],
    },
    {
      name: "KPIs para el equipo de ventas",
      description:
        "Implantación de un sistema de indicadores clave de rendimiento (KPI) para el equipo de ventas.",
      link: "",
      skills: [],
    },
    {
      name: "Reporte diario de ofertas de empleo",
      description:
        "Herramienta propia que busca cada día ofertas de Data Engineering en LinkedIn, descarta consultoras analizando la industria real de cada empresa, filtra por tecnología, sector y modalidad, y envía por correo solo las novedades. Se ejecuta sola cada mañana con GitHub Actions.",
      link: "https://github.com/languloc/linkedin-job-report",
      skills: ["Python", "Web scraping", "GitHub Actions", "pytest", "GitHub Copilot", "Claude Code"],
    },
    {
      name: "Movie Score Pipeline",
      description:
        "Pipeline ETL que lee datos de películas de tres proveedores distintos (CSV y JSON) y los unifica en un único dataset. Diseño extensible: añadir una nueva fuente es añadir una sola clase.",
      link: "https://github.com/languloc/movie-score",
      skills: ["Python", "ETL", "pytest"],
    },
  ],
  experience: [
    {
      company: "Cosentino",
      title: "Data Engineer & DevOps",
      dateRange: "2025 - Actualidad · Madrid",
      bullets: [
        "Diseño y desarrollo de soluciones Data Engineering sobre Azure utilizando Databricks, Spark, Snowflake y Airflow.",
        "Responsable del ciclo de vida completo de la plataforma de datos: infraestructura, despliegues, operación, monitorización y evolución tecnológica.",
        "Administración de servicios desplegados sobre Kubernetes y desarrollo de componentes serverless mediante Azure Functions.",
        "Implementación de pipelines CI/CD con Azure DevOps para automatizar despliegues de infraestructura y aplicaciones.",
        "Gestión de costes cloud y optimización del rendimiento de los recursos de la plataforma.",
        "Resolución de incidencias complejas, soporte a entornos productivos y mejora continua de la arquitectura y la fiabilidad del sistema.",
        "Stack: Azure DevOps, Python, SQL, APIs REST, Spark, Kubernetes, Airflow, Docker, Power BI, Databricks, Snowflake, SQL Server, PostgreSQL, GitHub Actions.",
      ],
    },
    {
      company: "TMC for Gestamp",
      title: "Data Engineer",
      dateRange: "2024 - 2025 · Madrid",
      bullets: [
        "Diseño e implementación de flujos de datos evolutivos con Azure Data Factory y Databricks.",
        "Creación y gestión de pipelines de datos, incluyendo el monitoreo y mejora del rendimiento de las cargas de trabajo.",
        "Colaboración con equipos multidisciplinarios para integrar y transformar datos, mejorando la calidad de los datos en toda la organización.",
        "Stack: Azure Data Factory, Databricks, Spark, Airflow, SQL Server, Python.",
      ],
    },
    {
      company: "Nuve Consulting S. L.",
      title: "Junior Consultant",
      dateRange: "2022 - 2023 · León",
      bullets: [
        "Supervisión de proyectos estratégicos y elaboración de planes para empresas, asociaciones y administraciones públicas.",
        "Participación en análisis de impactos económicos, definición de estructuras organizativas (RPT) y cálculos de viabilidad de proyectos.",
        "Colaboración en proyecto IT: desarrollo de marketplace digital en León, gestionando requisitos y coordinación de equipos.",
      ],
    },
  ],
  education: [
    {
      school: "Escuela de Organización Industrial (EOI)",
      degree: "Master in Big Data & Business Analytics",
      dateRange: "2023 - 2024 · Madrid",
      achievements: [
        "Asignaturas relevantes: Python, Java, SQL, data management, ETL, crawlers, APIs, Hadoop, Spark, Scala, MongoDB, Storm, Flink, NiFi, Kafka, Elasticsearch, R, Machine Learning, Neo4j, Cassandra, Power BI, Tableau, QGIS y arquitectura de datos.",
      ],
    },
    {
      school: "Universidad de León",
      degree: "Ingeniería Mecánica",
      dateRange: "2017 - 2023 · León",
      achievements: [
        "Trabajo Final de Grado: estudio de prefactibilidad para sustituir un tren diésel por uno de hidrógeno verde en la línea León – Bilbao.",
        "Premio al Mejor Proyecto de Eficiencia Energética por la Asociación A3E.",
        "Erasmus en la Università degli Studi di Perugia (2021 - 2022).",
      ],
    },
    {
      school: "",
      degree: "Idiomas",
      dateRange: "",
      achievements: [
        "Español: nativo",
        "Inglés: B2 (Cambridge Advanced English)",
        "Italiano: B1 (Europass Italian Language School)",
      ],
    },
  ],
  // url: enlace a la credencial (Credly, Microsoft Learn...). Vacío = sin enlace.
  certifications: [
    { name: "Databricks Data Engineer Professional", date: "En curso", url: "" },
    { name: "Microsoft Certified: DevOps Engineer Expert (AZ-400)", date: "09/2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LuisAngulo-4991/4CD59AA27C756999?sharingId=250246F314599F1E" },
    { name: "Astronomer Certification DAG Authoring for Apache Airflow 3", date: "09/2026", url: "https://www.credly.com/badges/2a25a7b8-f2ff-4bcb-93d5-9f01c584aeda" },
    { name: "Astronomer Certified for AI Orchestration Fundamentals", date: "09/2026", url: "https://www.credly.com/badges/141ffe99-89e0-4b12-9a85-e63c9af31074" },
    { name: "Microsoft Certified: Azure Administrator Associate (AZ-104)", date: "08/2026", url: "https://learn.microsoft.com/api/credentials/share/en-us/LuisAngulo-4991/F432876B57115D1E?sharingId=250246F314599F1E" },
    { name: "SnowPro Associate: Platform Certification", date: "06/2025", url: "", credentialId: "S101997-250627-SOL" },
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", date: "10/2024", url: "https://learn.microsoft.com/api/credentials/share/en-us/LuisAngulo-4991/F03442009142B677?sharingId=250246F314599F1E" },
    { name: "Curso BIM Revit y Navisworks, Cámara de Comercio de León (350 horas)", date: "2023 - 2024", url: "" },
  ] as Certification[],
  personal: {
    intro:
      "Fuera del trabajo soy una persona entusiasta y social, amante del pueblo, de lo rural, la naturaleza y el aire libre. El deporte forma parte de mi día a día y me encanta marcarme nuevos retos.",
    interests: [
      {
        emoji: "🏋️",
        title: "Hyrox y CrossFit",
        description: "Mi rutina diaria: clases de Hyrox y CrossFit en el gimnasio.",
      },
      {
        emoji: "🏃",
        title: "Running",
        description: "Después del gimnasio suelo salir a correr.",
      },
      {
        emoji: "🚴",
        title: "Ciclismo",
        description: "Bici de montaña y de carretera cada vez que vuelvo a casa.",
      },
      {
        emoji: "🏅",
        title: "Carreras y retos",
        description: "Trail y otras pruebas de resistencia.",
      },
      {
        emoji: "⛰️",
        title: "Montaña y nieve",
        description: "Senderismo, montaña, esquí y snowboard.",
      },
      {
        emoji: "🌾",
        title: "Pueblo y naturaleza",
        description: "Lo rural y el aire libre son mi forma de desconectar.",
      },
    ],
  },
};

const en: typeof es = {
  name: es.name,
  title: "Data Engineer",
  description: "Portfolio of Luis Angulo Couso, Data Engineer",
  accentColor: es.accentColor,
  accentColorDark: es.accentColorDark,
  social: es.social,
  aboutMe:
    "Data Engineer with experience building and maintaining data platforms on Azure. I work both on ETL/ELT pipeline development and on platform administration, including cloud infrastructure, Kubernetes, Azure DevOps (CI/CD), Azure Functions, and performance and cost optimization. I use GitHub Copilot and Claude Code to support development, testing and documentation, while validating their output. My goal is to keep growing towards architecture and technical leadership roles.",
  skills: es.skills,
  projects: [
    {
      name: "Airflow 3 migration",
      description:
        "End-to-end migration of Cosentino's data orchestration platform to Airflow 3.2.2.",
      link: "",
      skills: ["Airflow"],
    },
    {
      name: "Manufacturing traceability and costs",
      description:
        "Improved traceability and optimized manufacturing costs across the different materials.",
      link: "",
      skills: [],
    },
    {
      name: "Sales team KPIs",
      description:
        "Rolled out a key performance indicator (KPI) system for the sales team.",
      link: "",
      skills: [],
    },
    {
      name: "Daily job offers report",
      description:
        "Personal tool that searches LinkedIn every day for Data Engineering roles, filters out consultancies by checking each company's actual industry, filters by technology, sector and work mode, and emails only the new offers. It runs automatically every morning on GitHub Actions.",
      link: "https://github.com/languloc/linkedin-job-report",
      skills: ["Python", "Web scraping", "GitHub Actions", "pytest", "GitHub Copilot", "Claude Code"],
    },
    {
      name: "Movie Score Pipeline",
      description:
        "ETL pipeline that reads movie data from three different providers (CSV and JSON) and merges it into a single unified dataset. Extensible design: adding a new source means adding a single class.",
      link: "https://github.com/languloc/movie-score",
      skills: ["Python", "ETL", "pytest"],
    },
  ],
  experience: [
    {
      company: "Cosentino",
      title: "Data Engineer & DevOps",
      dateRange: "2025 - Present · Madrid",
      bullets: [
        "Design and development of Data Engineering solutions on Azure using Databricks, Spark, Snowflake and Airflow.",
        "Owner of the full lifecycle of the data platform: infrastructure, deployments, operations, monitoring and technology evolution.",
        "Administration of services running on Kubernetes and development of serverless components with Azure Functions.",
        "Implementation of CI/CD pipelines with Azure DevOps to automate infrastructure and application deployments.",
        "Cloud cost management and performance optimization of platform resources.",
        "Resolution of complex incidents, production support and continuous improvement of the system's architecture and reliability.",
        "Stack: Azure DevOps, Python, SQL, REST APIs, Spark, Kubernetes, Airflow, Docker, Power BI, Databricks, Snowflake, SQL Server, PostgreSQL, GitHub Actions.",
      ],
    },
    {
      company: "TMC for Gestamp",
      title: "Data Engineer",
      dateRange: "2024 - 2025 · Madrid",
      bullets: [
        "Design and implementation of evolving data flows with Azure Data Factory and Databricks.",
        "Building and managing data pipelines, including monitoring and improving workload performance.",
        "Collaboration with cross-functional teams to integrate and transform data, improving data quality across the organization.",
        "Stack: Azure Data Factory, Databricks, Spark, Airflow, SQL Server, Python.",
      ],
    },
    {
      company: "Nuve Consulting S. L.",
      title: "Junior Consultant",
      dateRange: "2022 - 2023 · León",
      bullets: [
        "Supervision of strategic projects and preparation of plans for companies, associations and public administrations.",
        "Economic impact analysis, organizational structure design and project feasibility studies.",
        "IT project collaboration: development of a digital marketplace in León, managing requirements and team coordination.",
      ],
    },
  ],
  education: [
    {
      school: "Escuela de Organización Industrial (EOI)",
      degree: "Master in Big Data & Business Analytics",
      dateRange: "2023 - 2024 · Madrid",
      achievements: [
        "Relevant subjects: Python, Java, SQL, data management, ETL, crawlers, APIs, Hadoop, Spark, Scala, MongoDB, Storm, Flink, NiFi, Kafka, Elasticsearch, R, Machine Learning, Neo4j, Cassandra, Power BI, Tableau, QGIS and data architecture.",
      ],
    },
    {
      school: "University of León",
      degree: "Mechanical Engineering",
      dateRange: "2017 - 2023 · León",
      achievements: [
        "Final degree project: pre-feasibility study for replacing a diesel train with a green hydrogen train on the León – Bilbao line.",
        "Best Energy Efficiency Project Award from the A3E Association.",
        "Erasmus at the Università degli Studi di Perugia (2021 - 2022).",
      ],
    },
    {
      school: "",
      degree: "Languages",
      dateRange: "",
      achievements: [
        "Spanish: native",
        "English: Advanced (Cambridge Advanced English)",
        "Italian: Intermediate (Europass Italian Language School)",
      ],
    },
  ],
  certifications: es.certifications.map((cert) => ({
    ...cert,
    name: cert.name.replace(
      "Curso BIM Revit y Navisworks, Cámara de Comercio de León (350 horas)",
      "BIM Revit and Navisworks course, León Chamber of Commerce (350 hours)",
    ),
    date: cert.date.replace("En curso", "In progress"),
  })),
  personal: {
    intro:
      "Outside of work I'm an enthusiastic and social person who loves village life, the countryside, nature and the outdoors. Sport is part of my daily routine and I love setting myself new challenges.",
    interests: [
      {
        emoji: "🏋️",
        title: "Hyrox & CrossFit",
        description: "My daily routine: Hyrox and CrossFit classes at the gym.",
      },
      {
        emoji: "🏃",
        title: "Running",
        description: "After the gym I usually go for a run.",
      },
      {
        emoji: "🚴",
        title: "Cycling",
        description: "Mountain and road biking whenever I'm back home.",
      },
      {
        emoji: "🏅",
        title: "Races & challenges",
        description: "Trail running and other endurance events.",
      },
      {
        emoji: "⛰️",
        title: "Mountains & snow",
        description: "Hiking, mountaineering, skiing and snowboarding.",
      },
      {
        emoji: "🌾",
        title: "Village life & nature",
        description: "The countryside and the outdoors are how I disconnect.",
      },
    ],
  },
};

export const siteConfigs = { es, en };
export type Lang = keyof typeof siteConfigs;

export const ui = {
  es: {
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Formación",
    certifications: "Certificaciones",
    personal: "Personal",
    personalHeading: "Más allá del código",
    hello: "¡Hola! 👋",
    iam: "Soy",
    rights: "Todos los derechos reservados.",
    credentialId: "ID de credencial",
    themeToggle: "Cambiar modo claro/oscuro",
  },
  en: {
    about: "About",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    personal: "Personal",
    personalHeading: "Beyond the code",
    hello: "Hello! 👋",
    iam: "I'm",
    rights: "All rights reserved.",
    credentialId: "Credential ID",
    themeToggle: "Toggle light/dark mode",
  },
};
