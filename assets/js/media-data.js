/*
 * Material de la galería. Las rutas son relativas a la raíz del repositorio (no pongas ../). Guarda los archivos en assets/images/galeria/ (fotos) o assets/video/ (videos)
 * y agrega un objeto por pieza. Mientras la lista esté vacía, la galería muestra un estado vacío.
 *
 * Campos:
 *   type:     "image" | "video" | "embed"   (embed = URL de YouTube/Vimeo con permiso de uso)
 *   src:      ruta del archivo, p. ej. "assets/images/galeria/vr-estacion-01.webp" (o URL de embed)
 *   poster:   (video) imagen de portada, p. ej. "assets/video/trailer-poster.webp"
 *   alt:      (imagen) descripción útil para lectores de pantalla (obligatoria)
 *   title:    título corto
 *   caption:  descripción opcional
 *   credit:   autoría / créditos
 *   ratio:    "16x9" (por defecto) | "4x5" | "1x1"
 *   width, height: (opcional) dimensiones reales del archivo
 *
 * Ejemplo:
 *   { type: "image", src: "assets/images/galeria/storyboard-01.webp", alt: "Storyboard del Acto I",
 *     title: "Storyboard de DECIDIR", caption: "Primera versión.", credit: "Equipo DISSONANCE", ratio: "16x9" },
 */
window.DISSONANCE_MEDIA = [
];
