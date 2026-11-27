ACTUALIZACIÓN DE LA PWA RENPA — v6

En el repositorio renpa_movil, sustituir únicamente:
- index.html
- sw.js

La página muestra una invitación a instalar en el navegador móvil, no dentro de la app ya instalada.
Android: si Chrome habilita la instalación, se abre su diálogo nativo; si no, se explican los pasos manuales.
iPhone/iPad: Apple no ofrece el mismo aviso automático de instalación; se muestran instrucciones para Safari > Compartir > Añadir a pantalla de inicio.
El service worker usa una versión de caché nueva para facilitar la actualización.
No se cambian datos, correcciones ni estilos generales.
