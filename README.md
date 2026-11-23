# RENPA — publicación compartida de correcciones (v3)

## Qué hay en esta entrega

- `01_ADMIN_PRIVADA`: para la carpeta compartida de AMAYA. NO publicar en GitHub Pages. Conserva historial interno, nombres y motivos.
- `02_WEB_PUBLICA`: para un repositorio GitHub Pages público, solo consultas.
- `03_APP_MOVIL`: para sustituir el contenido del repositorio `renpa_movil`, conservando la PWA y sus iconos.
- `04_DATOS_PUBLICOS_GITHUB`: repositorio independiente `renpa_datos` con **un solo archivo**, `correcciones.json`.

## Paso 1. Crear el repositorio común

En GitHub crea un repositorio **público** llamado `renpa_datos`. Sube `04_DATOS_PUBLICOS_GITHUB/correcciones.json`. En Settings > Pages, publica desde la rama principal y la carpeta raíz. Comprueba que abre:

https://eerodri71-star.github.io/renpa_datos/correcciones.json

Si usas otra cuenta o nombre de repositorio, cambia la URL en `config-publicacion.js` de la web y el móvil antes de publicarlos.

## Paso 2. Publicar la web

Crea un repositorio público `renpa_web` y sube el **contenido** de `02_WEB_PUBLICA` (no la carpeta contenedora). Activa GitHub Pages en la rama principal y raíz. URL esperada:

https://eerodri71-star.github.io/renpa_web/

## Paso 3. Actualizar el móvil

En el repositorio existente `renpa_movil`, sustituye/actualiza los archivos con el contenido de `03_APP_MOVIL`, sin cambiar la URL pública. La PWA mantiene datos y geometrías locales y obtiene las correcciones desde el repositorio común. Puede tardar una recarga adicional en aplicar la nueva versión del service worker.

## Paso 4. Correcciones posteriores

1. Desde `01_ADMIN_PRIVADA/admin.html` con Live Server, abre y modifica los JS **reales de la carpeta compartida**. Guarda las correcciones.
2. Pulsa «Preparar correcciones.json para GitHub». Selecciona **primero** `RENPA_exclusiones.js` y **después** `RENPA_solapes_confirmados.js` de la carpeta compartida.
3. Se descarga `correcciones.json`, que contiene exclusivamente las claves de las relaciones actualmente excluidas y confirmadas, **sin usuarios, fechas, motivos ni historial**.
4. En GitHub, en el repositorio `renpa_datos`, reemplaza `correcciones.json` por el nuevo archivo y confirma el cambio. La publicación suele tardar unos minutos.
5. Web y móvil consultan esa URL cuando se abren. Si falla Internet, usan la última copia pública guardada o la incluida inicialmente.

No es sincronización automática desde la carpeta compartida: **hay que subir un solo archivo a GitHub** cuando se quieran publicar correcciones. Una vez publicado, las dos aplicaciones se actualizan sin subir sus códigos.

## Seguridad y privacidad

- **Nunca publiques** `01_ADMIN_PRIVADA`, `RENPA_exclusiones.js` o `RENPA_solapes_confirmados.js` originales: contienen datos internos.
- No publiques la carpeta compartida ni enlaces a ella. Los permisos de acceso a la carpeta son la barrera de acceso interna, no una autenticación web.
- GitHub Pages es público: `correcciones.json` y las claves de relación son accesibles para cualquiera.
- La publicación requiere acceso a GitHub; no se sube automáticamente desde la red corporativa.
- La caché offline es por dispositivo/navegador. La primera carga necesita conexión. En modo sin conexión no se reciben cambios nuevos.
- La clasificación de solapes se calcula según `pct_municipio` en ambas versiones públicas; no según `pct_espacio`.
- Los archivos `RENPA_datos.js` y `RENPA_geo.js` no se actualizan con este mecanismo; si cambian, habrá que actualizar ambas aplicaciones o ampliar la sincronización.

## Comprobación rápida

1. Comprueba que `correcciones.json` se abre desde su URL pública.
2. Abre web y móvil conectados a Internet; debe aparecer «Correcciones: actualizadas desde GitHub».
3. Prueba un municipio con una relación excluida y otra confirmada.
4. Desconecta Internet y recarga la PWA previamente instalada: debe usar la copia guardada.
5. Para comprobar el circuito, realiza una corrección de prueba en el entorno interno, exporta, publica, comprueba y restaura si procede.

Esta entrega no ha sido probada en el Edge corporativo ni desplegada en tu cuenta de GitHub; hay que hacer esas verificaciones antes de considerarla lista para producción.
