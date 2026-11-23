RENPA móvil (PWA, solo consulta)
1. Sube esta carpeta completa a un alojamiento HTTPS (la PWA no funciona desde carpeta de red ni file://).
2. Abre la URL en el móvil: Android/Chrome -> "Instalar aplicación"; iOS/Safari -> Compartir -> "Añadir a pantalla de inicio".
3. La primera carga descarga ~13 MB; después funciona sin conexión (salvo el mapa de fondo).
Actualizar correcciones: sustituye data/RENPA_exclusiones.js y data/RENPA_solapes_confirmados.js (se recogen solos al haber conexión).
Actualizar datos/cartografía: sustituye data/RENPA_datos.js y data/RENPA_geo.js y cambia V en sw.js.

RENPA MÓVIL — PAQUETE LISTO PARA PUBLICAR

QUÉ CONTIENE
Esta carpeta contiene la aplicación web instalable (PWA) de consulta de la RENPA, con una pantalla inicial que guía al usuario para instalarla:
- index.html: aplicación.
- manifest.webmanifest: identidad e instalación en pantalla de inicio.
- sw.js: caché y funcionamiento sin conexión.
- data/: datos, correcciones y cartografía.
- lib/: Leaflet y sus estilos.
- iconos e imagen de cabecera.

IMPORTANTE
La aplicación necesita publicarse en una dirección HTTPS para poder instalarse.
No funciona correctamente abriendo index.html directamente desde el móvil ni desde file://.
El mapa y los datos/cartografía de la aplicación se guardan para consulta sin conexión tras la primera carga.
El mapa de fondo satélite necesita conexión a Internet.

INSTALAR EN ANDROID
1. Abrir el enlace con Chrome.
2. Abrir el menú ⋮ y elegir «Instalar aplicación» o «Añadir a pantalla de inicio».
3. Confirmar. Aparecerá el icono RENPA entre las aplicaciones.

INSTALAR EN IPHONE
1. Abrir el enlace con Safari (no desde el navegador integrado de WhatsApp).
2. Pulsar Compartir.
3. Elegir «Añadir a pantalla de inicio».
4. Confirmar «Añadir». Aparecerá el icono RENPA en la pantalla de inicio.

PRIMER USO Y MODO SIN CONEXIÓN
- La primera vez, abrir la aplicación con conexión y esperar a que termine de cargar la cartografía.
- Después se puede activar el modo avión y comprobar la consulta de datos y geometrías.
- El fondo satélite no estará disponible sin conexión.

ACTUALIZACIONES
- Para actualizar datos o geometrías, sustituir los archivos correspondientes en data/ y cambiar la constante V de sw.js (por ejemplo, renpa-movil-v2).
- Para actualizar la aplicación publicada en Netlify, volver a arrastrar la carpeta completa a Netlify Drop.
- Tras una actualización, cerrar y volver a abrir la aplicación. Si un dispositivo conserva la versión anterior, abrir el enlace con conexión y recargar.

NOTAS
- Esta aplicación es de consulta; no es una aplicación nativa distribuida por Google Play o App Store.
- La instalación mediante PWA funciona en Android y iPhone, pero los pasos y los textos de menú pueden variar según el navegador y la versión del sistema.
- El mapa base satélite utiliza el servicio de teselas de Esri y, por tanto, requiere conexión y está sujeto a sus condiciones de uso.
