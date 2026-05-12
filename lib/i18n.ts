export type Locale = "en" | "es"

export const translations = {
  en: {
    nav: {
      expertise: "Expertise",
      work: "Work",
      process: "Process",
      contact: "Contact",
      settings: "Settings",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Senior Frontend Architect",
      headline: "Architecting Ethereal Digital Experiences",
      subheadline: "Crafting high-end web applications with a focus on performance, aesthetics, and human-centric interaction design.",
      cta_work: "Explore My Work",
      cta_about: "About Me",
      status: "Status",
      op: "OP",
      deployment: "Deployment",
      location: "Location",
    },
    expertise: {
      title: "Expertise",
      subtitle: "5+ years of engineering high-end frontend systems with a focus on architecture, performance, and scalability.",
      console_label: "Senior_Engineer_Console",
      exp_badge: "5+ YEARS",
      items: [
        {
          title: "Enterprise Architecture",
          description: "Specialized in building robust systems with Angular and TypeScript, mastering RxJS and complex state management patterns.",
          details: ["Angular", "TypeScript", "RxJS", "Observables"],
        },
        {
          title: "Solid Foundations",
          description: "Architecting scalable applications using SOLID principles, Design Patterns, and Atomic Design methodologies.",
          details: ["SOLID", "Design Patterns", "Atomic Design"],
        },
        {
          title: "Modern Ecosystems",
          description: "Proficient in React, Next.js, and Vue, choosing the best tool to solve specific business and technical challenges.",
          details: ["Next.js", "React", "Vue"],
        },
        {
          title: "Technical Styling",
          description: "Advanced UI engineering using SASS and Tailwind CSS to create pixel-perfect, highly maintainable design systems.",
          details: ["SASS", "Tailwind CSS", "Motion"],
        },
        {
          title: "Performance Engineering",
          description: "Maximizing speed through Lazy Loading, bundle optimization, and deep focus on Core Web Vitals and fluid UX.",
          details: ["Performance", "Optimization", "State"],
        },
      ],
    },
    work: {
      title: "Selected Work",
      subtitle: "A curated selection of projects that demonstrate my focus on performance, aesthetics, and scalable architecture.",
      projects: [
        {
          title: "PokÃ©mon Go Explorer",
          description: "A high-performance interactive dashboard for PokÃ©mon data, featuring real-time filtering and an immersive UX built with React and advanced CSS.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Yupy TV",
          description: "A premium streaming platform experience with a sleek interface, categorized content, and a focus on high-quality video delivery and user engagement.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Wedding Invitation",
          description: "A beautiful and interactive wedding invitation with elegant design, smooth animations, and personalized experience.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Food Delivery",
          description: "A beautiful and interactive wedding invitation with elegant design, smooth animations, and personalized experience.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "AreaDot",
          description: "A radiography analysis tool that applies Monte Carlo simulation methods to calculate and optimize radiation dose distribution across imaging areas, enabling more precise diagnostic planning and area coverage estimation.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Monarca Tasks",
          description: "A task and commitment management application designed to efficiently organize both personal and work responsibilities. With an intuitive interface and practical features, it allows daily control of pending tasks, improving productivity and order in day-to-day life.",
          live: "Live Demo",
          source: "Source",
        },
      ],
    },
    process: {
      title: "Engineering Process",
      subtitle: "A methodical approach to building modern digital products, ensuring quality at every stage of the lifecycle.",
      steps: [
        {
          title: "Discovery & Strategy",
          description: "Deep diving into requirements, user needs, and technical constraints to define a clear architectural roadmap.",
        },
        {
          title: "Design & Architecture",
          description: "Crafting a scalable technical foundation and a high-fidelity visual direction with atmospheric depth.",
        },
        {
          title: "Development & Polish",
          description: "Iterative building with a focus on clean code, performance, and interactive micro-details.",
        },
        {
          title: "Deployment & Growth",
          description: "Launching with confidence and establishing a baseline for continuous improvement and global scale.",
        },
      ],
    },
   about: {
      title: "Behind the Architecture",
      subtitle: "More than just code â€” it's about building solutions that last.",
      p1: "I'm Danny, a Senior Frontend Developer with over 5 years of experience in the industry. My journey started with a curiosity about how digital products work, which quickly evolved into a passion for building scalable, high-performance web applications.",
      p2: "Specialized in the Angular ecosystem, I focus on turning complex requirements into clear, efficient, and user-centered interfaces. I believe every technical decision should deliver value, and that solid architecture is the foundation of long-lasting products.",
      p3: "When I'm not designing solutions, I'm exploring new UI trends, sharpening my skills, or sharing knowledge with other developers. Let's build something well-crafted.",
      stats: {
        experience: "Experience",
        exp_value: "5+ Years",
        projects: "Personal Projects",
        proj_value: "6+ Completed",
        products: "Products",
        prod_value: "10+ in Production"
      }
    },
    contact: {
      title: "Start a Conversation",
      subtitle: "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative architectural ideas.",
      email_label: "Email Me",
      email_value: "dannii.ospino@gmail.com",
      social_label: "Social Presence",
      availability_title: "Current Availability",
      availability_desc: "I'm currently accepting new freelance projects and consulting engagements for Q3 2026.",
      form: {
        name: "Name",
        name_placeholder: "Your Name",
        email: "Email",
        email_placeholder: "your@email.com",
        message: "Message",
        message_placeholder: "Tell me about your project or vision...",
        cta: "Send Message",
      },
    },
    footer: {
      desc: "Designing and engineering high-end digital experiences with a focus on performance, atmospheric depth, and human-centric interaction.",
      nav_title: "Navigation",
      connect_title: "Connect",
      rights: "All rights reserved.",
    },
    settings_page: {
      title: "Settings",
      subtitle: "Customize your experience and manage your application preferences.",
      appearance: {
        title: "Appearance",
        description: "Customize the look and feel of the application.",
        light: "Light",
        dark: "Dark",
      },
      language: {
        title: "Language",
        description: "Select your preferred language for the interface.",
      },
      general: {
        title: "General Preferences",
        coming_soon: "More settings coming soon...",
      },
    },
  },
  es: {
    nav: {
      expertise: "Experiencia",
      work: "Proyectos",
      process: "Proceso",
      contact: "Contacto",
      settings: "Ajustes",
      cta: "Hablemos",
    },
    hero: {
      badge: "Arquitecto Frontend Senior",
      headline: "Arquitectando Experiencias Digitales EtÃ©reas",
      subheadline: "Creando aplicaciones web de alta gama con enfoque en rendimiento, estÃ©tica y diseÃ±o de interacciÃ³n centrado en el humano.",
      cta_work: "Explorar Mi Trabajo",
      cta_about: "Sobre MÃ­",
      status: "Estado",
      op: "OP",
      deployment: "Despliegue",
      location: "UbicaciÃ³n",
    },
    expertise: {
      title: "Experticia",
      subtitle: "5+ aÃ±os de ingenierÃ­a en sistemas frontend de alta gama con enfoque en arquitectura, rendimiento y escalabilidad.",
      console_label: "Consola_Ingeniero_Senior",
      exp_badge: "5+ AÃ‘OS",
      items: [
        {
          title: "Arquitectura Empresarial",
          description: "Especializado en construir sistemas robustos con Angular y TypeScript, dominando RxJS y patrones complejos de gestiÃ³n de estado.",
          details: ["Angular", "TypeScript", "RxJS", "Observables"],
        },
        {
          title: "Bases SÃ³lidas",
          description: "Arquitectando aplicaciones escalables utilizando principios SOLID, Patrones de DiseÃ±o y metodologÃ­as de DiseÃ±o AtÃ³mico.",
          details: ["SOLID", "Design Patterns", "Atomic Design"],
        },
        {
          title: "Ecosistemas Modernos",
          description: "Dominio de React, Next.js y Vue, eligiendo la mejor herramienta para resolver desafÃ­os tÃ©cnicos y de negocio especÃ­ficos.",
          details: ["Next.js", "React", "Vue"],
        },
        {
          title: "Estilado TÃ©cnico",
          description: "IngenierÃ­a de UI avanzada utilizando SASS y Tailwind CSS para crear sistemas de diseÃ±o pixel-perfect y altamente mantenibles.",
          details: ["SASS", "Tailwind CSS", "Motion"],
        },
        {
          title: "IngenierÃ­a de Rendimiento",
          description: "Maximizando la velocidad a travÃ©s de Lazy Loading, optimizaciÃ³n de bundles y enfoque profundo en Core Web Vitals.",
          details: ["Performance", "Optimization", "State"],
        },
      ],
    },
    work: {
      title: "Proyectos Seleccionados",
      subtitle: "Una selecciÃ³n curada de proyectos que demuestran mi enfoque en el rendimiento, la estÃ©tica y la arquitectura escalable.",
      projects: [
        {
          title: "PokÃ©mon Go Explorer",
          description: "Un dashboard interactivo de alto rendimiento para datos de PokÃ©mon, con filtrado en tiempo real y una UX inmersiva construida con React y CSS avanzado.",
          live: "Demo en Vivo",
          source: "CÃ³digo",
        },
        {
          title: "Yupi TV",
          description: "Una experiencia de plataforma de streaming premium con una interfaz elegante, contenido categorizado y un enfoque en la entrega de video de alta calidad.",
          live: "Demo en Vivo",
          source: "CÃ³digo",
        },
        {
          title: "InvitaciÃ³n de Boda",
          description: "Una hermosa e interactiva invitaciÃ³n de boda con diseÃ±o elegante, animaciones fluidas y experiencia personalizada.",
          live: "Demo en Vivo",
          source: "CÃ³digo",
        },
        {
          title: "Food Delivery",
          description: "Una manera practica y rapida de guardar nota y inventario de tu refrigerador y despenza en tu casa.",
          live: "Demo en Vivo",
          source: "CÃ³digo",
        },
        {
          title: "AreaDot",
          description: "Una herramienta de anÃ¡lisis radiogrÃ¡fico que aplica mÃ©todos de simulaciÃ³n Monte Carlo para calcular y optimizar la distribuciÃ³n de dosis de radiaciÃ³n en Ã¡reas de imagen, permitiendo una planificaciÃ³n diagnÃ³stica mÃ¡s precisa y estimaciÃ³n de cobertura.",
          live: "Demo en Vivo",
          source: "CÃ³digo",
        },
        {
          title: "Monarca Tasks",
          description: "Una aplicación de gestión de tareas y compromisos diseñada para organizar tanto responsabilidades personales como laborales de manera eficiente. Con una interfaz intuitiva y funcionalidades prácticas, permite mantener el control diario de pendientes, mejorando la productividad y el orden en el día a día.",
          live: "Demo en Vivo",
          source: "Código",
        },
      ],
    },
    process: {
      title: "Proceso de IngenierÃ­a",
      subtitle: "Un enfoque metÃ³dico para construir productos digitales modernos, asegurando la calidad en cada etapa del ciclo de vida.",
      steps: [
        {
          title: "Descubrimiento y Estrategia",
          description: "InmersiÃ³n profunda en requisitos, necesidades de usuario y restricciones tÃ©cnicas para definir una hoja de ruta clara.",
        },
        {
          title: "DiseÃ±o y Arquitectura",
          description: "CreaciÃ³n de una base tÃ©cnica escalable y una direcciÃ³n visual de alta fidelidad con profundidad atmosfÃ©rica.",
        },
        {
          title: "Desarrollo y Pulido",
          description: "ConstrucciÃ³n iterativa con enfoque en cÃ³digo limpio, rendimiento y micro-detalles interactivos.",
        },
        {
          title: "Despliegue y Crecimiento",
          description: "Lanzamiento con confianza y establecimiento de una base para la mejora continua y escala global.",
        },
      ],
    },
    about: {
      title: "DetrÃ¡s de la Arquitectura",
      subtitle: "MÃ¡s que solo cÃ³digo, se trata de construir soluciones que perduren.",
      p1: "Soy Danny, un Ingeniero Frontend Senior con mÃ¡s de 5 aÃ±os de experiencia en la industria. Mi viaje comenzÃ³ con la curiosidad de cÃ³mo funcionan las cosas digitales, lo que rÃ¡pidamente evolucionÃ³ en una pasiÃ³n por construir aplicaciones web escalables y de alto rendimiento.",
      p2: "Especializado en el ecosistema de Angular, me enfoco en transformar requerimientos complejos en interfaces claras, eficientes y centradas en el usuario. Creo que cada decisiÃ³n tÃ©cnica debe aportar valor y que una buena arquitectura es la base de productos sÃ³lidos a largo plazo.",
      p3: "Cuando no estoy diseÃ±ando soluciones, estoy explorando nuevas tendencias de UI, fortaleciendo mis habilidades o compartiendo conocimiento con otros desarrolladores. Construyamos algo bien hecho.",
      stats: {
        experience: "Experiencia",
        exp_value: "05+ AÃ±os",
        projects: "Proyectos personales",
        proj_value: "6+ Listos",
        products: "Productos",
        prod_value: "10+ Pdn",
      }
    },
    contact: {
      title: "Inicia una ConversaciÃ³n",
      subtitle: "Â¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a discutir nuevas oportunidades e ideas arquitectÃ³nicas creativas.",
      email_label: "EnvÃ­ame un Email",
      email_value: "dannii.ospino@gmail.com",
      social_label: "Presencia Social",
      availability_title: "Disponibilidad Actual",
      availability_desc: "Actualmente acepto nuevos proyectos freelance y consultorÃ­as para el tercer trimestre de 2026.",
      form: {
        name: "Nombre",
        name_placeholder: "Tu Nombre",
        email: "Correo",
        email_placeholder: "tu@email.com",
        message: "Mensaje",
        message_placeholder: "CuÃ©ntame sobre tu proyecto o visiÃ³n...",
        cta: "Enviar Mensaje",
      },
    },
    footer: {
      desc: "DiseÃ±ando e ingenierizando experiencias digitales de alta gama con enfoque en rendimiento, profundidad atmosfÃ©rica e interacciÃ³n centrada en el humano.",
      nav_title: "NavegaciÃ³n",
      connect_title: "Conectar",
      rights: "Todos los derechos reservados.",
    },
    settings_page: {
      title: "Ajustes",
      subtitle: "Personaliza tu experiencia y gestiona tus preferencias de la aplicaciÃ³n.",
      appearance: {
        title: "Apariencia",
        description: "Personaliza el aspecto y la sensaciÃ³n de la aplicaciÃ³n.",
        light: "Claro",
        dark: "Oscuro",
      },
      language: {
        title: "Idioma",
        description: "Selecciona tu idioma preferido para la interfaz.",
      },
      general: {
        title: "Preferencias Generales",
        coming_soon: "MÃ¡s ajustes prÃ³ximamente...",
      },
    },
  },
}
