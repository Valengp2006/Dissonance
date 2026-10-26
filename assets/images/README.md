# Imágenes del sitio

Aquí van las imágenes reales del proyecto. **No uses imágenes de stock ni generadas presentadas como capturas auténticas.**

| Carpeta | Qué va aquí | Proporción sugerida |
|---|---|---|
| `galeria/` | Fotos y capturas para la página Galería | 16:9, 4:5 o 1:1 |
| `actos/` | Capturas aprobadas de DECIDIR, BUSCAR y SOBREVIVIR | 16:9 |
| `equipo/` | Retratos del equipo (con autorización) | 4:5 |
| `proceso/` | Evidencias del proceso: moodboards, storyboards, prototipos | 16:9 |
| `../video/` | Videos (MP4/WebM) y sus imágenes de portada | 16:9 |

## Recomendaciones
- Formato **WebP** o **AVIF** (JPG si no hay alternativa). Máximo **1600 px** de ancho.
- Nombres en minúsculas, sin espacios ni tildes: `vr-estacion-01.webp`.
- Texto alternativo (`alt`) descriptivo obligatorio en cada imagen informativa.
- Anota siempre el **crédito** de quien hizo la imagen.

## Cómo publicarlas en la galería
1. Copia el archivo a `galeria/`.
2. Agrega una entrada en `assets/js/media-data.js` (el archivo trae un ejemplo).
3. Haz commit y push a `main`.

Para los retratos y las capturas de los actos, reemplaza el recuadro «POR SUBIR» (`figure.is-placeholder`) de la página por una imagen real dentro de un `figure.media` (hay ejemplos en `documentacion.html`).
