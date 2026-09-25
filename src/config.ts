export const siteConfig = {
  name: "Luis Angulo Couso",
  title: "Data Engineer",
  description: "Portfolio de Luis Angulo Couso, Data Engineer",
  accentColor: "#1f5f8b",
  social: {
    email: "langulocouso@gmail.com",
    linkedin: "https://www.linkedin.com/in/luisangulocouso",
    twitter: "",
    github: "https://github.com/languloc",
  },
  aboutMe:
    "Ingeniero de Datos con experiencia en el desarrollo y mantenimiento de plataformas de datos sobre Azure. Participo tanto en el desarrollo de pipelines ETL/ELT como en la administración de la plataforma, incluyendo infraestructura cloud, Kubernetes, Azure DevOps (CI/CD), Azure Functions y la optimización del rendimiento y los costes. Mi objetivo es seguir creciendo hacia roles de arquitectura y liderazgo técnico.",
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
      link: "",
      skills: ["Python", "Web scraping", "GitHub Actions", "pytest"],
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
      title: "Data Engineer",
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
    { name: "Microsoft Certified: Designing and Implementing Microsoft DevOps Solutions (AZ-400)", date: "09/2026", url: "" },
    { name: "Astronomer Certification DAG Authoring for Apache Airflow 3", date: "09/2026", url: "" },
    { name: "Astronomer Certified AI Orchestration Fundamentals", date: "09/2026", url: "" },
    { name: "Microsoft Certified: Azure Administrator (AZ-104)", date: "08/2026", url: "" },
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", date: "10/2024", url: "" },
    { name: "SnowPro Associate: Platform Certification", date: "06/2024", url: "" },
    { name: "Curso BIM Revit y Navisworks, Cámara de Comercio de León (350 horas)", date: "2023 - 2024", url: "" },
  ],
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
        description: "Triatlón, trail y otras pruebas de resistencia.",
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
