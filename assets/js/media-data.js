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
  { type: "image", src: "assets/images/galeria/pruebas-vr-visor.webp",
    alt: "Una persona con un visor de realidad virtual puesto, de pie junto a una mesa al aire libre donde otra persona usa un portátil.",
    title: "Pruebas con realidad virtual", caption: "Sesión de pruebas al aire libre con un visor de VR.", category: "Prototipos" },
  { type: "image", src: "assets/images/galeria/pruebas-audifonos.webp",
    alt: "Una persona con audífonos sentada frente a un portátil, mientras otra se inclina junto a ella para mirar.",
    title: "Pruebas con audífonos", caption: "Observación de una sesión de pruebas.", category: "Prototipos" },
  { type: "image", src: "assets/images/galeria/pruebas-sitio-atlas.webp",
    alt: "Dos personas frente a un portátil que muestra la página de inicio del sitio de Atlas, con otras personas trabajando al fondo.",
    title: "Pruebas del sitio web de Atlas", caption: "Primeras pruebas del sitio del Acto II.", category: "Prototipos" },
  { type: "image", src: "assets/images/galeria/pruebas-portatil-video.webp",
    alt: "Una persona frente a un portátil que reproduce un video, con dos personas más junto a la mesa.",
    title: "Sesión de pruebas frente al portátil", caption: "Primeras pruebas con participantes.", category: "Prototipos" },
  { type: "image", src: "assets/images/galeria/reunion-equipo-01.webp",
    alt: "Varias personas sentadas en círculo en un salón con computadores y un tablero blanco, durante una reunión.",
    title: "Reunión del equipo", caption: "Reunión en un salón de computadores.", category: "Proceso" },
  { type: "image", src: "assets/images/galeria/reunion-equipo-02.webp",
    alt: "Reunión del equipo desde otro ángulo: personas sentadas en círculo en un salón con computadores, con un perro tumbado en el suelo.",
    title: "Reunión del equipo", caption: "Otra vista de la reunión.", category: "Proceso" },  { type: "video", src: "assets/video/prueba-video-observadores.mp4", poster: "assets/images/galeria/prueba-video-observadores-poster.webp",
    title: "Pruebas del video interactivo", caption: "Participantes en un salón de computadores mientras el video se reproduce en un monitor. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/prueba-vr-visor-01.mp4", poster: "assets/images/galeria/prueba-vr-visor-01-poster.webp",
    title: "Primera prueba con visor de VR", caption: "Una persona con el visor de realidad virtual puesto, al aire libre. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/prueba-vr-visor-02.mp4", poster: "assets/images/galeria/prueba-vr-visor-02-poster.webp",
    title: "Prueba con visor de VR conectado", caption: "Una persona con el visor de VR y el cable conectado durante la prueba. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/prueba-vr-reaccion.mp4", poster: "assets/images/galeria/prueba-vr-reaccion-poster.webp",
    title: "Reacción durante la prueba de VR", caption: "Una persona con el visor de VR puesto reacciona mientras el equipo observa. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/prueba-sitio-atlas-01.mp4", poster: "assets/images/galeria/prueba-sitio-atlas-01-poster.webp",
    title: "Prueba del sitio web de Atlas", caption: "Observación de la prueba del sitio de Atlas en un portátil. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/prueba-sitio-atlas-02.mp4", poster: "assets/images/galeria/prueba-sitio-atlas-02-poster.webp",
    title: "Prueba del sitio de Atlas en primer plano", caption: "Detalle de la prueba del sitio de Atlas en un portátil. Sin sonido.", category: "Prototipos" },  { type: "video", src: "assets/video/vr-astronauta-enlace.mp4", poster: "assets/images/galeria/vr-astronauta-enlace-poster.webp",
    title: "VR: el astronauta abre el enlace", caption: "Pantalla de inicio del astronauta en la experiencia de realidad virtual. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/vr-operador-conectado.mp4", poster: "assets/images/galeria/vr-operador-conectado-poster.webp",
    title: "VR: el operador se conecta", caption: "El astronauta ve que el operador está conectado y confirma que está listo. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/vr-panel-senal.mp4", poster: "assets/images/galeria/vr-panel-senal-poster.webp",
    title: "VR: panel de señal", caption: "El panel de control con el monitor de señal dentro de la nave. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/pc-enlace-codigo.mp4", poster: "assets/images/galeria/pc-enlace-codigo-poster.webp",
    title: "Estación PC: código de enlace", caption: "El operador en tierra escribe el código de enlace que ve el astronauta en su visor. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/pc-enlace-establecido.mp4", poster: "assets/images/galeria/pc-enlace-establecido-poster.webp",
    title: "Estación PC: enlace establecido", caption: "El enlace queda establecido y el operador espera al astronauta. Sin sonido.", category: "Prototipos" },
  { type: "video", src: "assets/video/pc-monitor-senal.mp4", poster: "assets/images/galeria/pc-monitor-senal-poster.webp",
    title: "Estación PC: monitor de señal", caption: "Monitor de señal en la estación del operador, con parámetros y botón de verificación. Sin sonido.", category: "Prototipos" },
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
