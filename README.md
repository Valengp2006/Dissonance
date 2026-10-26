# DISSONANCE — sitio público

Sitio web del proyecto **DISSONANCE**, una experiencia inmersiva de terror cósmico (video interactivo, exploración web y VR cooperativa). HTML, CSS y JavaScript estáticos, sin framework ni build.

Publicado con GitHub Pages: <https://valengp2006.github.io/Dissonance/>

## Estructura

```
index.html                 Inicio (debe quedar en la raíz para GitHub Pages)
paginas/                   Resto de páginas
  proyecto.html            El proyecto
  experiencias.html        Las tres experiencias
  galeria.html             Fotos y videos
  proceso.html             Proceso e investigación
  documentacion.html       Documentación de diseño y técnica
  equipo.html              Equipo
  contacto.html            Contacto
assets/
  css/styles.css           Estilos y tokens de diseño (variables en :root)
  js/script.js             Menú, estrellas, scroll, copiar
  js/gallery.js            Galería, filtros y visor
  js/media-data.js         ← AQUÍ se registran las fotos y videos de la galería
  images/                  Imágenes (ver assets/images/README.md)
    galeria/ actos/ equipo/ proceso/
  video/                   Videos y portadas
  fonts/                   Fuentes autoalojadas (ver assets/fonts/README.md)
  icons/favicon.svg        Favicon
```

## Tareas frecuentes

| Quiero… | Dónde |
|---|---|
| Añadir una foto o video a la galería | Guardar el archivo en `assets/images/galeria/` o `assets/video/` y registrarlo en `assets/js/media-data.js` |
| Poner el retrato de una persona del equipo | Guardar en `assets/images/equipo/` y reemplazar el recuadro «RETRATO POR SUBIR» en `paginas/equipo.html` |
| Poner una captura de un acto | Guardar en `assets/images/actos/` y reemplazar el recuadro en `index.html` y `paginas/experiencias.html` |
| Cambiar colores, fuentes o espaciado | `assets/css/styles.css` (bloque `:root` al inicio) |
| Activar las fuentes propias | `assets/fonts/README.md` |

## Reglas de contenido
- Español por defecto. No inventar datos del equipo, créditos, fechas ni contactos.
- Todo lo que aún no existe se muestra como placeholder etiquetado (nunca como captura real).
- No revelar el giro narrativo final ni secretos del sitio ficticio de Atlas en este sitio público.

## Probar en local
```bash
python3 -m http.server 8123
```
Abrir <http://localhost:8123>.
