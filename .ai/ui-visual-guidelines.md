# Stitch Project Analysis: Senior Frontend Portfolio - Danny Ospino

Este documento detalla el análisis del proyecto extraído desde Stitch para la plataforma "Senior Frontend Portfolio - Danny Ospino", abarcando tanto el sistema de diseño (Design System) configurado como las pantallas generadas en el proyecto.

## 1. Información General del Proyecto

- **Project ID:** `13012642970098807028`
- **Nombre:** Senior Frontend Portfolio - Danny Ospino
- **Tipo de Proyecto:** TEXT_TO_UI_PRO
- **Dispositivo Objetivo:** DESKTOP
- **Modo de Color:** DARK (Oscuro)

## 2. Sistema de Diseño (Design System)

El "Design System" de este proyecto se basa en el principio creativo denominado **"The Ethereal Architect"**. Este enfoque busca romper con la naturaleza de cajas tradicionales en el desarrollo web y moverlo hacia un espacio que se sienta como una galería digital de alta gama.

### Paleta de Colores y Superficies

- **Colores Principales:**
  - **Background:** `#0b1326` (Tono profundo y nocturno).
  - **Primary Custom Color:** `#2E5BFF` (Azul eléctrico).
  - Otros acentos incluyen tonos violetas, cian y azules eléctricos como `#8B5CF6` (Secondary) y `#0EA5E9` (Tertiary).
- **Regla de "No-Line" (Sin Líneas):** Se prohíben los bordes estándar de 1px. La separación entre secciones debe lograrse mediante cambios tonales, brillos radiales (gradientes) de 5 al 10% de opacidad y superposición de contenedores (`surface_container_low`).

### Tipografía (The Editorial Scale)

- **Fuentes:**
  - **Titulares (Display & Headlines):** **Manrope** (Estilo geométrico con -0.02em de letter-spacing).
  - **Cuerpo y Textos Pequeños (Body & Labels):** **Inter** (Limpia y legible con un line-height generoso de 1.6).

### Profundidad y Diseño (Glassmorphism & Depth)

- **Roundness (Bordes):** `roundedness.xl` (0.75rem / ROUND_FOUR) en la mayoría de los casos.
- **Glassmorphism (Regla del Vidrio y Gradientes):** En elementos flotantes y tarjetas se requiere fondo a 60-80% de opacidad (usando `surface_container_high`) con `backdrop-filter: blur(12px)`.
- **Ghost Borders:** Para evitar la falta de contraste, si no hay contenedor visible, se emplea un "Ghost Border" usando `#434656` al 20% de opacidad.
- **Glow y Transiciones:** Uso de sombras "atmosféricas" suaves y difuminadas. Interacciones de _hover_ deben acompañarse de animaciones como `300ms cubic-bezier(0.4, 0, 0.2, 1)`.

### Componentes Especiales

- **Spotlight:** Cita específicamente la recomendación de implementar un componente "Spotlight" (una luz de gradiente suave) que siga el cursor tras las tarjetas de cristal (Glass Cards).
- **Bento Grids & Cards:** Se usan espacios amplios entre ellas (por ejemplo, `spacing.8` para tarjetas y `spacing.24` entre grandes secciones).

## 3. Pantallas Extraídas

El proyecto cuenta con cinco pantallas ("screens") generadas que se componen bajo esta misma estética:

1. **Senior Frontend Portfolio - Alex Vance** _(ID: a340c2...)_: Pantalla principal de la vista general.
2. **Technical Expertise** _(ID: df2870...)_: Sección que probablemente muestra herramientas, frameworks y lenguajes mediante grids o Bento grids.
3. **Selected Work - Portfolio** _(ID: 9048c5...)_: Exposición detallada de los proyectos, donde aplica el diseño flotante ("Glassmorphism").
4. **Engineering Process** _(ID: 89f621...)_: Pantalla informativa del desarrollo, posiblemente utilizando un layout vertical extenso dictado por el alto de 7432px de la captura generada.
5. **Start a Conversation** _(ID: 0a5863...)_: Formulario o sección de contacto y pie de página minimalista ("ghost border" fallback aplicable a inputs).

---

Con los hallazgos de este análisis (fuentes, estructura de capas _Glassmorphism_, gradientes, _Ghost Borders_ y _Spotlight_), nuestro objetivo al llevarlo a Next.js (Tailwind 4, Framer Motion) deberá mantener estricta coherencia para replicar al 100% esta dirección creativa.
