# Fuentes (autoalojadas)

Fuentes propuestas en DESIGN.md (licencia SIL OFL), pendientes de aprobación del equipo:

| Rol | Fuente | Archivo esperado |
|---|---|---|
| Titulares | Instrument Serif 400 y 400 italic | `InstrumentSerif-Regular.woff2`, `InstrumentSerif-Italic.woff2` |
| Cuerpo | Inter (variable) | `Inter-Variable.woff2` |
| Anotaciones | JetBrains Mono 400 y 500 | `JetBrainsMono-Regular.woff2`, `JetBrainsMono-Medium.woff2` |

Mientras no estén los archivos, el sitio usa las fuentes de respaldo del sistema.

## Cómo activarlas
1. Copia los `.woff2` (subset latino + latino extendido) a esta carpeta.
2. En cada `.html` de `paginas/` (y en `index.html` con la ruta `assets/fonts/fonts.css`), añade dentro de `<head>`, antes de `styles.css`:
   `<link rel="stylesheet" href="../assets/fonts/fonts.css">`
3. Opcional: precarga `InstrumentSerif-Regular.woff2` e `Inter-Variable.woff2` con `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
