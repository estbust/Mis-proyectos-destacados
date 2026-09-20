# System Specification: Portafolio de Proyectos Interactivo

## 1. Visión General
Una aplicación frontend de una sola página (SPA) que renderiza una galería dinámica de proyectos de desarrollo web. El usuario debe poder filtrar los proyectos por tecnología y alternar la interfaz entre modo claro y oscuro.

## 2. Stack Tecnológico
*   **Framework:** React
*   **Build Tool:** Vite
*   **Estilos:** CSS puro o Tailwind CSS (a discreción del agente para un prototipado rápido).
*   **Control de Versiones:** Git.

## 3. Requerimientos de la Interfaz (UI/UX)
*   **Header:** Debe contener un título a la izquierda y un botón funcional tipo "Toggle" para Modo Oscuro/Claro a la derecha.
*   **Barra de Filtros:** Botones clickeables con las categorías: "Todos", "React", "Python/Django", "Vanilla JS".
*   **Cuadrícula de Proyectos (Grid):** Un diseño responsivo (1 columna en móvil, 2 en tablet, 3 en escritorio) que muestre tarjetas (cards) para cada proyecto.
*   **Animaciones Requeridas:**
    *   Transición de color fluida (0.3s) al cambiar de tema claro a oscuro.
    *   Efecto de "fade-in" o escala cuando las tarjetas se filtran y reordenan.

## 4. Estructura de Datos (Mock Data)
Crea un archivo local de datos (`projectsData.js`) con un array de al menos 6 proyectos simulados. Cada objeto debe incluir: `id`, `titulo`, `descripcionCorta`, `categoria` (debe coincidir con los filtros), y una URL de una imagen de marcador de posición (placeholder).

## 5. Instrucciones Estrictas para el Agente (Antigravity Rules)
*   **Planificación Primero:** Antes de escribir código, debes generar un `Implementation Plan` estructurado.
*   **Ejecución:** Utiliza los comandos estándar de Vite (`npm install`, `npm run dev`) para levantar el entorno.
*   **Validación Visual Obligatoria (Browser Tool):** 
    1. Navega al localhost generado.
    2. Haz clic en el botón de Modo Oscuro y toma una captura de pantalla para verificar que los colores de fondo y texto se inviertan correctamente.
    3. Haz clic en el filtro "React" y toma una captura de pantalla para verificar que la cuadrícula se actualiza dinámicamente.
*   **Corrección Autónoma:** Si notas errores en la consola del navegador o si los filtros no ocultan los elementos correctos en la interfaz, debes corregir la lógica en el código sin solicitar asistencia humana.