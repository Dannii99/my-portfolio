# Análisis de Diseño: Portafolio Senior Frontend - Danny Ospino

Este documento presenta un análisis detallado del diseño generado en Stitch para el portafolio de Danny Ospino, integrando la visión creativa, el sistema de diseño y las especificaciones técnicas para su implementación en Next.js.

## 1. Visión y Concepto Creativo: "The Ethereal Architect"

El diseño rompe con el paradigma tradicional de "cajas y bordes" para adoptar una estética de **galería digital de alta gama**. La interfaz debe sentirse fluida, profunda y "viva".

- **Objetivo:** Memorable, profesional y técnicamente impecable.
- **Atmósfera:** Espacio nocturno, sofisticado, con uso extensivo de profundidad y luz.

## 2. Sistema de Diseño (Design System)

### 2.1. Paleta de Colores (Deep Space & Neon)
- **Fondo Base:** `#0b1326` (Deep Navy).
- **Colores de Acento:**
  - Primario: `#2E5BFF` (Electric Blue).
  - Secundario: `#8B5CF6` (Vivid Violet).
  - Terciario: `#0EA5E9` (Sky Cyan).
- **Regla de Oro:** **No usar bordes de 1px sólidos**. La separación se logra mediante:
  - Cambios tonales sutiles.
  - Gradientes radiales (brillos) con opacidad del 5-10%.
  - Superposición de capas (Z-index y sombras atmosféricas).

### 2.2. Tipografía (The Editorial Scale)
- **Titulares (Display/Headlines):** **Manrope**.
  - *Tracking:* -0.02em para un look más "editorial".
- **Cuerpo y Labels:** **Inter**.
  - *Line-height:* 1.6 para máxima legibilidad.
- **Jerarquía:** Contrastes marcados de peso y tamaño para guiar la lectura.

### 2.3. Efectos y Texturas (Glassmorphism)
- **Material:** Vidrio esmerilado (`backdrop-filter: blur(12px)`).
- **Opacidad:** 60-80% usando el token `surface_container_high`.
- **Bordes Fantasma (Ghost Borders):** Usar `#434656` al 20% de opacidad solo cuando sea necesario definir un límite sin usar una línea sólida.
- **Roundness:** `roundedness.xl` (0.75rem / 12px).

## 3. Estructura de Vistas (Pantallas)

Basado en el análisis de Stitch, el portafolio se divide en las siguientes vistas clave:

1.  **Home / Hero (Alex Vance Portfolio):** Introducción de alto impacto con el concepto "Spotlight" (luz que sigue al cursor).
2.  **Technical Expertise:** Presentación de habilidades mediante un sistema de **Bento Grids**.
3.  **Selected Work:** Galería de proyectos con tarjetas estilo "Glass Card".
4.  **Engineering Process:** Una vista narrativa (scroll vertical extenso) que detalla la metodología de trabajo.
5.  **Contact (Start a Conversation):** Formulario minimalista con efectos de foco "neon-glow".

## 4. Estrategia de Implementación Técnica

### Tecnologías
- **Framework:** Next.js 16.2.0 (App Router).
- **Estilos:** Tailwind CSS 4.
- **Animaciones:** 
  - Framer Motion para entradas, hover y micro-interacciones.
  - GSAP para efectos de scroll complejos y el componente "Spotlight".
- **Componentes:** shadcn/ui (estilo radix-nova) personalizado.

### Componentes Críticos a Desarrollar
1.  **`SpotlightCard`**: Tarjeta con gradiente radial que reacciona al mouse.
2.  **`GlassContainer`**: Abstracción para el efecto de vidrio esmerilado.
3.  **`BentoGrid`**: Layout flexible para la sección de expertise.
4.  **`AnimatedBackground`**: Fondo con gradientes suaves y movimiento atmosférico.

---
*Análisis generado a partir de las guías de proyecto y referencias de Stitch (ID: 13012642970098807028).*
