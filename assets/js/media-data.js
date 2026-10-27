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
 *   category: "Proceso" | "Prototipos" | "Making of"
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

/*
 * Video del making of (sección «Detrás de cámaras» de la galería).
 * Mientras valga null se muestra un recuadro «VIDEO POR SUBIR». Guarda el archivo en assets/video/.
 *
 *   type:   "video" (archivo MP4/WebM) | "embed" (URL de YouTube/Vimeo con permiso de uso)
 *   src:    "assets/video/making-of.mp4"  (o URL de embed, p. ej. "https://www.youtube.com/embed/ID")
 *   poster: "assets/video/making-of-poster.webp"  (portada, solo para type "video")
 *   title:  "Making of de DISSONANCE"
 *   credit: autoría / créditos
 *
 * Ejemplo:
 *   window.DISSONANCE_MAKING_OF = { type: "video", src: "assets/video/making-of.mp4",
 *     poster: "assets/video/making-of-poster.webp", title: "Making of de DISSONANCE", credit: "Equipo DISSONANCE" };
 */
window.DISSONANCE_MAKING_OF = {
  type: "embed",
  src: "https://www.youtube-nocookie.com/embed/lv_F3MA3iHY",
  title: "Making of de DISSONANCE (versión temporal)"
};

/*
 * Enlaces que aparecen solo cuando tienen una URL. Mientras valgan "" no se muestra nada.
 *   videoIntro: video introductorio del Acto I (se muestra en la página Las experiencias).
 *               Ejemplo: "https://www.youtube.com/watch?v=ID"
 */
window.DISSONANCE_LINKS = {
  videoIntro: ""
};
