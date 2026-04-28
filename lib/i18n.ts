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
    },
    expertise: {
      title: "Technical Expertise",
      subtitle: "A comprehensive approach to modern frontend engineering, balancing technical rigor with creative vision.",
      items: [
        {
          title: "System Architecture",
          description: "Designing scalable, type-safe frontend systems using Next.js, TypeScript, and micro-frontend patterns.",
          details: ["Next.js App Router", "TypeScript", "System Design"],
        },
        {
          title: "Fluid Motion",
          description: "Orchestrating complex, performant animations with Framer Motion and GSAP.",
        },
        {
          title: "Performance",
          description: "Optimizing Core Web Vitals, server-side efficiency, and asset delivery.",
        },
        {
          title: "Modern Stack",
          description: "Mastering the cutting edge of the React ecosystem, Tailwind 4, and advanced build tools.",
        },
        {
          title: "UI/UX Engineering",
          description: "Bridging the gap between high-fidelity design and technical implementation with precision.",
        },
      ],
    },
    work: {
      title: "Selected Work",
      subtitle: "A curated selection of projects that demonstrate my focus on performance, aesthetics, and scalable architecture.",
      projects: [
        {
          title: "Quantum Dashboard",
          description: "A high-performance data visualization platform with real-time stream processing and advanced analytics.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Ethereal UI Kit",
          description: "A comprehensive design system focused on glassmorphism, depth, and atmospheric motion.",
          live: "Live Demo",
          source: "Source",
        },
        {
          title: "Wedding Invitation",
          description: "A beautiful and interactive wedding invitation with elegant design, smooth animations, and personalized experience.",
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
    contact: {
      title: "Start a Conversation",
      subtitle: "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative architectural ideas.",
      email_label: "Email Me",
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
      headline: "Arquitectando Experiencias Digitales Etéreas",
      subheadline: "Creando aplicaciones web de alta gama con enfoque en rendimiento, estética y diseño de interacción centrado en el humano.",
      cta_work: "Explorar Mi Trabajo",
      cta_about: "Sobre Mí",
    },
    expertise: {
      title: "Experiencia Técnica",
      subtitle: "Un enfoque integral de la ingeniería frontend moderna, equilibrando el rigor técnico con la visión creativa.",
      items: [
        {
          title: "Arquitectura de Sistemas",
          description: "Diseño de sistemas frontend escalables y seguros con Next.js, TypeScript y patrones de micro-frontends.",
          details: ["Next.js App Router", "TypeScript", "Diseño de Sistemas"],
        },
        {
          title: "Movimiento Fluido",
          description: "Orquestación de animaciones complejas y de alto rendimiento con Framer Motion y GSAP.",
        },
        {
          title: "Rendimiento",
          description: "Optimización de Core Web Vitals, eficiencia del lado del servidor y entrega de activos.",
        },
        {
          title: "Stack Moderno",
          description: "Dominio de la vanguardia del ecosistema React, Tailwind 4 y herramientas de construcción avanzadas.",
        },
        {
          title: "Ingeniería UI/UX",
          description: "Cerrando la brecha entre el diseño de alta fidelidad y la implementación técnica con precisión.",
        },
      ],
    },
    work: {
      title: "Proyectos Seleccionados",
      subtitle: "Una selección curada de proyectos que demuestran mi enfoque en el rendimiento, la estética y la arquitectura escalable.",
      projects: [
        {
          title: "Quantum Dashboard",
          description: "Plataforma de visualización de datos de alto rendimiento con procesamiento en tiempo real y analítica avanzada.",
          live: "Demo en Vivo",
          source: "Código",
        },
        {
          title: "Ethereal UI Kit",
          description: "Sistema de diseño completo centrado en el glassmorphism, la profundidad y el movimiento atmosférico.",
          live: "Demo en Vivo",
          source: "Código",
        },
        {
          title: "Invitación de Boda",
          description: "Una hermosa e interactiva invitación de boda con diseño elegante, animaciones fluidas y experiencia personalizada.",
          live: "Demo en Vivo",
          source: "Código",
        },
      ],
    },
    process: {
      title: "Proceso de Ingeniería",
      subtitle: "Un enfoque metódico para construir productos digitales modernos, asegurando la calidad en cada etapa del ciclo de vida.",
      steps: [
        {
          title: "Descubrimiento y Estrategia",
          description: "Inmersión profunda en requisitos, necesidades de usuario y restricciones técnicas para definir una hoja de ruta clara.",
        },
        {
          title: "Diseño y Arquitectura",
          description: "Creación de una base técnica escalable y una dirección visual de alta fidelidad con profundidad atmosférica.",
        },
        {
          title: "Desarrollo y Pulido",
          description: "Construcción iterativa con enfoque en código limpio, rendimiento y micro-detalles interactivos.",
        },
        {
          title: "Despliegue y Crecimiento",
          description: "Lanzamiento con confianza y establecimiento de una base para la mejora continua y escala global.",
        },
      ],
    },
    contact: {
      title: "Inicia una Conversación",
      subtitle: "¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a discutir nuevas oportunidades e ideas arquitectónicas creativas.",
      email_label: "Envíame un Email",
      social_label: "Presencia Social",
      availability_title: "Disponibilidad Actual",
      availability_desc: "Actualmente acepto nuevos proyectos freelance y consultorías para el tercer trimestre de 2026.",
      form: {
        name: "Nombre",
        name_placeholder: "Tu Nombre",
        email: "Correo",
        email_placeholder: "tu@email.com",
        message: "Mensaje",
        message_placeholder: "Cuéntame sobre tu proyecto o visión...",
        cta: "Enviar Mensaje",
      },
    },
    footer: {
      desc: "Diseñando e ingenierizando experiencias digitales de alta gama con enfoque en rendimiento, profundidad atmosférica e interacción centrada en el humano.",
      nav_title: "Navegación",
      connect_title: "Conectar",
      rights: "Todos los derechos reservados.",
    },
  },
}
