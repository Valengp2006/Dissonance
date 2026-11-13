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
 *   category: "Proceso" | "Prototipos" | "Acto I" | "Acto II" | "Acto III" | "Pruebas finales" | "Premiación" | "Making of"
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
    alt: "Una persona frente a un portátil que reproduce el video interactivo, con dos personas más junto a la mesa.",
    title: "Pruebas del video interactivo", caption: "Prueba del Acto I con participantes: el video se reproduce en el portátil.", category: "Acto I" },
  { type: "image", src: "assets/images/galeria/reunion-equipo-01.webp",
    alt: "Varias personas sentadas en círculo en un salón con computadores y un tablero blanco, durante una reunión.",
    title: "Reunión del equipo", caption: "Reunión en un salón de computadores.", category: "Proceso" },
  { type: "image", src: "assets/images/galeria/reunion-equipo-02.webp",
    alt: "Reunión del equipo desde otro ángulo: personas sentadas en círculo en un salón con computadores, con un perro tumbado en el suelo.",
    title: "Reunión del equipo", caption: "Otra vista de la reunión.", category: "Proceso" },
  { type: "video", src: "assets/video/prueba-video-observadores.mp4", poster: "assets/images/galeria/prueba-video-observadores-poster.webp",
    title: "Pruebas del video interactivo", caption: "Participantes en un salón de computadores durante las pruebas del video interactivo. Sin sonido.", category: "Acto I" },
  { type: "video", src: "assets/video/prueba-vr-visor-01.mp4", poster: "assets/images/galeria/prueba-vr-visor-01-poster.webp",
    title: "Primera prueba con visor de VR", caption: "Una persona con el visor de realidad virtual puesto, al aire libre. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/prueba-vr-visor-02.mp4", poster: "assets/images/galeria/prueba-vr-visor-02-poster.webp",
    title: "Prueba con visor de VR conectado", caption: "Una persona con el visor de VR y el cable conectado durante la prueba. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/prueba-vr-reaccion.mp4", poster: "assets/images/galeria/prueba-vr-reaccion-poster.webp",
    title: "Reacción durante la prueba de VR", caption: "Una persona con el visor de VR puesto reacciona mientras el equipo observa. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/prueba-sitio-atlas-01.mp4", poster: "assets/images/galeria/prueba-sitio-atlas-01-poster.webp",
    title: "Prueba del sitio web de Atlas", caption: "Observación de la prueba del sitio de Atlas en un portátil. Sin sonido.", category: "Acto II" },
  { type: "video", src: "assets/video/prueba-sitio-atlas-02.mp4", poster: "assets/images/galeria/prueba-sitio-atlas-02-poster.webp",
    title: "Prueba del sitio de Atlas en primer plano", caption: "Detalle de la prueba del sitio de Atlas en un portátil. Sin sonido.", category: "Acto II" },
  { type: "video", src: "assets/video/vr-astronauta-enlace.mp4", poster: "assets/images/galeria/vr-astronauta-enlace-poster.webp",
    title: "VR: el astronauta abre el enlace", caption: "Pantalla de inicio del astronauta en la experiencia de realidad virtual. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/vr-operador-conectado.mp4", poster: "assets/images/galeria/vr-operador-conectado-poster.webp",
    title: "VR: el operador se conecta", caption: "El astronauta ve que el operador está conectado y confirma que está listo. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/vr-panel-senal.mp4", poster: "assets/images/galeria/vr-panel-senal-poster.webp",
    title: "VR: panel de señal", caption: "El panel de control con el monitor de señal dentro de la nave. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/pc-enlace-codigo.mp4", poster: "assets/images/galeria/pc-enlace-codigo-poster.webp",
    title: "Estación PC: código de enlace", caption: "El operador en tierra escribe el código de enlace que ve el astronauta en su visor. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/pc-enlace-establecido.mp4", poster: "assets/images/galeria/pc-enlace-establecido-poster.webp",
    title: "Estación PC: enlace establecido", caption: "El enlace queda establecido y el operador espera al astronauta. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/pc-monitor-senal.mp4", poster: "assets/images/galeria/pc-monitor-senal-poster.webp",
    title: "Estación PC: monitor de señal", caption: "Monitor de señal en la estación del operador, con parámetros y botón de verificación. Sin sonido.", category: "Acto III" },
  { type: "video", src: "assets/video/acto-i-presentacion.mp4", poster: "assets/images/galeria/acto-i-presentacion-poster.webp",
    title: "Acto I: la presentación", caption: "El presentador de Atlas Corp da la bienvenida en el video interactivo. Con subtítulos; sin sonido.", category: "Acto I" },
  { type: "video", src: "assets/video/acto-i-archivo.mp4", poster: "assets/images/galeria/acto-i-archivo-poster.webp",
    title: "Acto I: imágenes de archivo", caption: "Imágenes de archivo de la carrera espacial dentro del video interactivo. Con subtítulos; sin sonido.", category: "Acto I" },
  { type: "video", src: "assets/video/acto-i-decision.mp4", poster: "assets/images/galeria/acto-i-decision-poster.webp",
    title: "Acto I: un punto de decisión", caption: "Aparecen las opciones de respuesta sobre el video y el participante elige. Con subtítulos; sin sonido.", category: "Acto I" },
  { type: "video", src: "assets/video/acto-ii-acceso.mp4", poster: "assets/images/galeria/acto-ii-acceso-poster.webp",
    title: "Acto II: acceso al terminal", caption: "Pantalla de acceso del sitio de Atlas. Sin sonido.", category: "Acto II" },
  { type: "video", src: "assets/video/acto-ii-inicio.mp4", poster: "assets/images/galeria/acto-ii-inicio-poster.webp",
    title: "Acto II: página de inicio", caption: "Página de inicio del sistema de información pública de Atlas. Sin sonido.", category: "Acto II" },
  { type: "image", src: "assets/images/galeria/premiacion-01.webp", alt: "Seis personas posan en un pasillo exterior sosteniendo tarjetas naranjas y rosadas con el texto DEX.",
    title: "Premiación", caption: "El grupo con las tarjetas DEX.", category: "Premiación" },
  { type: "image", src: "assets/images/galeria/premiacion-02.webp", alt: "Seis personas se tapan la cara con tarjetas naranjas y rosadas con el texto DEX, frente a un pasillo exterior.",
    title: "Premiación", caption: "Otra foto del grupo con las tarjetas.", category: "Premiación" },
  { type: "image", src: "assets/images/galeria/premiacion-03.webp", alt: "Seis personas posan sosteniendo tarjetas DEX bajo un cuadro en la pared; una de ellas levanta el brazo detrás del grupo.",
    title: "Premiación", caption: "El grupo con las tarjetas DEX.", ratio: "4x5", category: "Premiación" },
  { type: "image", src: "assets/images/galeria/premiacion-04.webp", alt: "Seis personas se ríen y miran hacia un lado mientras sostienen tarjetas naranjas y rosadas con el texto DEX.",
    title: "Premiación", caption: "Un momento de la premiación.", category: "Premiación" },
  { type: "image", src: "assets/images/galeria/pf-foto-01.webp", alt: "Una participante de espaldas frente a un portátil y a un monitor que muestran el video interactivo del Acto I.",
    title: "Pruebas finales: video interactivo", caption: "Una participante ve el video del Acto I.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-02.webp", alt: "Una participante de espaldas ve el video interactivo en un monitor y en un portátil, con más personas al fondo.",
    title: "Pruebas finales: video interactivo", caption: "Participantes durante la prueba del Acto I.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-03.webp", alt: "Un participante con las manos en la cara mira atento un portátil, rodeado de otras personas.",
    title: "Pruebas finales: atención", caption: "Un participante sigue la prueba con atención.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-04.webp", alt: "Dos manos usan el teclado y el panel táctil de un portátil que muestra el formulario de postulación del sitio de Atlas.",
    title: "Pruebas finales: sitio de Atlas", caption: "Prueba del formulario de postulación del Acto II.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-05.webp", alt: "Un participante con audífonos frente a un portátil que muestra el monitor de señal de la estación del operador.",
    title: "Pruebas finales: estación del operador", caption: "Un participante resuelve el monitor de señal en la estación PC.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-06.webp", alt: "Una participante sentada con el visor de realidad virtual puesto y los controles en las manos.",
    title: "Pruebas finales: realidad virtual", caption: "Una participante antes de empezar la experiencia en VR.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-07.webp", alt: "Una participante con visor de realidad virtual y audífonos sentada, con otras dos personas observando al fondo.",
    title: "Pruebas finales: realidad virtual", caption: "Una participante en la experiencia en VR, observada por el equipo.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-08.webp", alt: "Pantalla de un portátil con la ventana de controles de luz de la estación del operador, con cuatro botones de colores.",
    title: "Pruebas finales: controles de luz", caption: "Los controles de luz de la estación del operador.", ratio: "4x5", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-09.webp", alt: "Una participante con audífonos frente al portátil de la estación del operador, con el logotipo del proyecto en pantalla.",
    title: "Pruebas finales: estación del operador", caption: "Una participante en la estación del operador.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-10.webp", alt: "Un participante con el visor de realidad virtual sentado, con los controles en las manos y el equipo de pie a su alrededor.",
    title: "Pruebas finales: realidad virtual", caption: "Un participante en VR durante las pruebas.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-11.webp", alt: "Una participante con visor y audífonos de realidad virtual recibe instrucciones de un miembro del equipo.",
    title: "Pruebas finales: realidad virtual", caption: "Un miembro del equipo explica los controles de VR.", category: "Pruebas finales" },
  { type: "image", src: "assets/images/galeria/pf-foto-12.webp", alt: "Una participante de espaldas frente a un portátil, junto a otro participante con el visor de VR y un afiche del proyecto sobre la mesa.",
    title: "Pruebas finales: las dos estaciones", caption: "La estación del operador y la del astronauta funcionando a la vez.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-i-video.mp4", poster: "assets/images/galeria/pf-acto-i-video-poster.webp",
    title: "Pruebas finales: video interactivo", caption: "Una participante ve el video del Acto I en el monitor y en el portátil. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-ii-formulario.mp4", poster: "assets/images/galeria/pf-acto-ii-formulario-poster.webp",
    title: "Pruebas finales: sitio de Atlas", caption: "Una participante completa el formulario del Acto II. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-vr-01.mp4", poster: "assets/images/galeria/pf-acto-iii-vr-01-poster.webp",
    title: "Pruebas finales: preparación del visor", caption: "Un participante recibe ayuda para ponerse el visor de VR. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-vr-02.mp4", poster: "assets/images/galeria/pf-acto-iii-vr-02-poster.webp",
    title: "Pruebas finales: sala de VR", caption: "Vista de la sala durante una prueba con el visor. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-operador-01.mp4", poster: "assets/images/galeria/pf-acto-iii-operador-01-poster.webp",
    title: "Pruebas finales: estación del operador", caption: "Un participante elige su perfil y empieza en la estación PC. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-operador-02.mp4", poster: "assets/images/galeria/pf-acto-iii-operador-02-poster.webp",
    title: "Pruebas finales: monitor de señal", caption: "Un participante trabaja en el monitor de señal. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-operador-03.mp4", poster: "assets/images/galeria/pf-acto-iii-operador-03-poster.webp",
    title: "Pruebas finales: cabina del operador", caption: "El operador trabaja en su cabina, aislado del resto. Sin sonido.", category: "Pruebas finales" },
  { type: "video", src: "assets/video/pf-acto-iii-operador-04.mp4", poster: "assets/images/galeria/pf-acto-iii-operador-04-poster.webp",
    title: "Pruebas finales: ATLAS-NET en la estación PC", caption: "Un participante navega por ATLAS-NET en la estación del operador. Sin sonido.", category: "Pruebas finales" },
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
  src: "https://www.youtube-nocookie.com/embed/FelQVvzuw-k",
  title: "Making of de DISSONANCE"
};
