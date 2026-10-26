/*
 * Material de la galería. Agrega un objeto por foto o video y guarda el archivo en la carpeta media/.
 * Mientras la lista esté vacía, la galería muestra espacios reservados (no son capturas reales).
 *
 * Campos:
 *   type:     "image" | "video" | "embed"   (embed = URL de YouTube/Vimeo con permiso de uso)
 *   src:      ruta del archivo, p. ej. "media/vr-estacion-01.jpg" (o URL de embed)
 *   poster:   (solo video) imagen de portada, p. ej. "media/trailer-poster.jpg"
 *   alt:      (solo imagen) descripción útil para lectores de pantalla
 *   title:    título corto
 *   caption:  descripción opcional
 *   credit:   autoría / créditos (obligatorio si no es del equipo)
 *   category: "Experiencia" | "Proceso" | "Detrás de cámaras" | ...
 *
 * Ejemplo:
 *   { type: "image", src: "media/storyboard-01.jpg", alt: "Storyboard del Acto I",
 *     title: "Storyboard de DECIDIR", caption: "Primera versión.", credit: "Equipo DISSONANCE",
 *     category: "Proceso" },
 */
window.DISSONANCE_MEDIA = [
];
