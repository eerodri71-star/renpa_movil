
# Aplicación móvil RENPA

Aplicación móvil de consulta y análisis territorial de la Red de Espacios Naturales Protegidos de Andalucía (RENPA).

Permite consultar los espacios naturales protegidos relacionados con los municipios andaluces, visualizar su distribución geográfica y conocer las superficies y porcentajes de intersección territorial.

La aplicación está desarrollada como una **Progressive Web App (PWA)**, por lo que puede utilizarse desde el navegador o instalarse en la pantalla de inicio de dispositivos Android e iOS, sin necesidad de descargarla desde una tienda de aplicaciones.

## Acceso a la aplicación

**[Abrir aplicación móvil RENPA](https://eerodri71-star.github.io/renpa_movil/)**

También existe una versión web pública:

**[Acceder al visor web RENPA](https://eerodri71-star.github.io/renpa_web/)**

## 1. Descripción

La aplicación móvil RENPA es una herramienta digital diseñada para facilitar el acceso a información territorial sobre los espacios naturales protegidos de Andalucía desde teléfonos móviles y tabletas.

Su desarrollo responde a la necesidad de disponer de una herramienta de consulta sencilla, accesible y adaptable a diferentes dispositivos, especialmente útil para trabajos de campo, visitas técnicas y actuaciones relacionadas con la planificación y dinamización socioeconómica de los espacios naturales protegidos.

La aplicación utiliza información geográfica previamente procesada, permitiendo realizar consultas sin necesidad de utilizar programas especializados de Sistemas de Información Geográfica (SIG).

Su ámbito territorial comprende las ocho provincias de Andalucía.

## 2. Funcionalidades principales

### 2.1. Consulta por municipio

Permite seleccionar un municipio andaluz y conocer:

- Los espacios naturales protegidos relacionados con su término municipal.
- Las figuras de protección correspondientes.
- La superficie municipal incluida en cada espacio, expresada en hectáreas.
- El porcentaje de superficie municipal afectada.
- El porcentaje del espacio protegido situado dentro del municipio.
- La representación cartográfica de las relaciones territoriales.

### 2.2. Consulta por espacio natural

Permite seleccionar un espacio natural protegido y consultar:

- Los municipios relacionados con el espacio seleccionado.
- La provincia de cada municipio.
- Las superficies y porcentajes de intersección.
- Su distribución territorial en el visor cartográfico.

Las distintas figuras de protección se mantienen diferenciadas para evitar mezclar superficies correspondientes a designaciones diferentes.

### 2.3. Visor cartográfico

La aplicación incorpora un mapa interactivo adaptado a dispositivos móviles.

Permite:

- Visualizar los límites municipales.
- Representar los espacios naturales protegidos.
- Diferenciar las figuras de protección.
- Consultar información territorial de los elementos representados.
- Desplazarse por el mapa y modificar el nivel de zoom.
- Examinar las relaciones espaciales entre municipios y espacios protegidos.

### 2.4. Identificación de posibles errores geométricos

La aplicación identifica los solapes de superficie reducida que pueden deberse a desajustes entre las capas cartográficas originales.

La clasificación se realiza en función del porcentaje de superficie municipal afectada.

| Clasificación | Criterio | Interpretación |
|---|---|---|
| RUIDO | ≤ 0,01 % de la superficie municipal | Posible desajuste geométrico |
| REVISAR | > 0,01 % y ≤ 0,10 % | Solape reducido pendiente de revisión |
| CLARO | > 0,10 % | Relación no señalada por su tamaño reducido |

Los avisos no implican necesariamente que exista un error, ya que algunos solapes pequeños pueden corresponder a situaciones territoriales reales.

## 3. Instalación

La aplicación no requiere una instalación convencional ni está distribuida mediante tiendas de aplicaciones.

Puede añadirse directamente a la pantalla de inicio del dispositivo.

### Android

1. Abrir el enlace de la aplicación desde Google Chrome.
2. Acceder al menú del navegador.
3. Seleccionar **Instalar aplicación** o **Añadir a pantalla de inicio**, según el dispositivo.
4. Confirmar la instalación.

La aplicación aparecerá en la pantalla de inicio con su propio icono.

### iPhone y iPad

1. Abrir el enlace de la aplicación desde Safari.
2. Pulsar el botón de compartir.
3. Seleccionar **Añadir a pantalla de inicio**.
4. Confirmar.

La aplicación podrá abrirse desde su icono, sin necesidad de acceder manualmente al navegador.

## 4. Funcionamiento sin conexión

La aplicación incorpora un sistema de almacenamiento local mediante un **Service Worker**, que permite conservar los recursos necesarios para su funcionamiento.

Una vez abierta correctamente con conexión a Internet y almacenados los recursos esenciales, puede utilizarse sin conexión para consultar:

- Los municipios de Andalucía.
- Los espacios naturales protegidos.
- Las relaciones territoriales entre municipios y espacios.
- Las superficies y porcentajes de intersección.
- Las geometrías previamente almacenadas.

La cartografía de fondo procedente de servicios externos puede requerir conexión a Internet.

Para garantizar la disponibilidad de los datos, se recomienda abrir la aplicación con conexión antes de utilizarla en zonas sin cobertura.

## 5. Información geográfica

La aplicación utiliza información cartográfica de los espacios naturales protegidos de Andalucía, procedente de la Red de Información Ambiental de Andalucía (REDIAM).

Se contemplan diferentes grupos de figuras de protección:

- Espacios Naturales Protegidos.
- Red Natura 2000 (ZEC y ZEPA).
- Reservas de la Biosfera.
- Zonas Especialmente Protegidas de Importancia para el Mediterráneo (ZEPIM).

Esta información se relaciona espacialmente con los límites municipales de Andalucía.

Los cálculos de intersección se realizan previamente y sus resultados se almacenan en archivos independientes, evitando repetir operaciones espaciales durante las consultas.

## 6. Sincronización de correcciones

La aplicación móvil comparte el sistema de correcciones cartográficas con el visor web público.

Las correcciones se gestionan desde una herramienta administrativa independiente, utilizada para revisar y validar las relaciones entre municipios y espacios protegidos.

Esta herramienta permite registrar:

- Exclusiones de relaciones incorrectas.
- Restauraciones de relaciones excluidas.
- Confirmaciones de solapes pequeños reales.
- Retiradas de confirmaciones.

Las correcciones efectivas se publican mediante un archivo JSON compartido.

**[Repositorio de correcciones RENPA](https://github.com/eerodri71-star/renpa_datos)**

Archivo utilizado:

`https://eerodri71-star.github.io/renpa_datos/correcciones.json`

### 6.1. Actualización de correcciones

Cuando se abre la aplicación con conexión a Internet, esta intenta consultar el archivo público de correcciones.

Si encuentra una versión válida, aplica las exclusiones y confirmaciones disponibles y conserva una copia local.

Si no puede acceder al archivo, utiliza:

1. La última copia válida almacenada en el dispositivo.
2. En su defecto, las correcciones iniciales incluidas en la aplicación.

Este procedimiento permite mantener la consulta operativa cuando no existe conexión a Internet.

### 6.2. Publicación de nuevas correcciones

El procedimiento de actualización es el siguiente:

1. Registrar las modificaciones en el buscador administrativo.
2. Generar el archivo `correcciones.json` actualizado.
3. Sustituir el archivo anterior en el repositorio `renpa_datos`.
4. Esperar a que GitHub Pages publique los cambios.
5. Abrir o actualizar la aplicación móvil con conexión a Internet.

**No es necesario volver a publicar toda la aplicación móvil cada vez que se modifica una corrección cartográfica.**

Las correcciones publicadas no contienen nombres de usuarios, motivos de revisión ni historiales internos.

## 7. Estructura del proyecto

Los principales archivos y carpetas de la aplicación son:

    renpa_movil/
    │
    ├── index.html
    ├── manifest.webmanifest
    ├── sw.js
    ├── icon-180.png
    ├── icon-192.png
    ├── icon-512.png
    │
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── public.js
    │
    ├── data/
    │   ├── RENPA_datos.js
    │   └── RENPA_geo.js
    │
    ├── assets/
    │   └── cabecera.png
    │
    ├── config-publicacion.js
    ├── cargar-correcciones.js
    ├── correcciones-iniciales.js
    └── README.md

### Descripción de los archivos

| Archivo | Función |
|---|---|
| `index.html` | Estructura principal de la aplicación |
| `css/styles.css` | Diseño y adaptación a dispositivos móviles |
| `js/public.js` | Lógica de búsqueda, consulta y representación cartográfica |
| `data/RENPA_datos.js` | Información de relaciones territoriales |
| `data/RENPA_geo.js` | Geometrías municipales y de espacios protegidos |
| `manifest.webmanifest` | Configuración de instalación de la PWA |
| `sw.js` | Gestión del almacenamiento en caché y funcionamiento sin conexión |
| `icon-180.png` | Icono para dispositivos Apple |
| `icon-192.png` | Icono de la aplicación |
| `icon-512.png` | Icono de alta resolución |
| `config-publicacion.js` | Dirección del archivo público de correcciones |
| `cargar-correcciones.js` | Descarga y aplicación de las correcciones |
| `correcciones-iniciales.js` | Correcciones incorporadas como respaldo |

## 8. Tecnologías utilizadas

La aplicación está desarrollada utilizando:

- HTML5.
- CSS3.
- JavaScript.
- GeoJSON.
- Service Workers.
- Web App Manifest.
- GitHub Pages.

Su funcionamiento se basa en una arquitectura web estática, sin necesidad de disponer de una base de datos externa o un servidor de aplicaciones propio.

## 9. Publicación y mantenimiento

La aplicación está publicada mediante GitHub Pages en el repositorio `renpa_movil`.

Se distinguen tres tipos de actualización.

### 9.1. Actualización de correcciones

Se realiza mediante el archivo `correcciones.json` del repositorio `renpa_datos`.

No requiere modificar los archivos principales de la aplicación.

### 9.2. Actualización de datos cartográficos

Cuando se actualizan las capas de origen, deben regenerarse los archivos de datos y geometrías correspondientes.

Estos cambios deben publicarse en los repositorios de las aplicaciones que utilizan dicha información.

### 9.3. Actualización de código y diseño

Las modificaciones del funcionamiento o de la interfaz requieren sustituir los archivos afectados en el repositorio `renpa_movil`.

Cuando se modifica una versión almacenada en caché, puede ser necesario actualizar también el archivo `sw.js` para que los dispositivos instalados obtengan los nuevos recursos.

Tras la publicación, la aplicación instalada puede tardar en reflejar los cambios debido al almacenamiento local.

## 10. Relación con el visor web público

La aplicación móvil forma parte de un sistema de consulta territorial compuesto por:

- **Buscador administrativo:** gestión interna y validación de incidencias.
- **Visor web público:** consulta territorial desde navegadores.
- **Aplicación móvil:** consulta adaptada a dispositivos móviles y uso sin conexión.
- **Repositorio de correcciones:** distribución de las exclusiones y confirmaciones validadas.

La versión móvil y el visor web público comparten la lógica principal de consulta y el sistema de correcciones, aunque se publican en repositorios independientes.

**[Repositorio del visor web público](https://github.com/eerodri71-star/renpa_web)**

## 11. Consideraciones de uso

La información mostrada procede del análisis espacial de las capas cartográficas utilizadas y depende de su precisión, escala y fecha de actualización.

Un mismo territorio puede estar incluido en varias figuras de protección, por lo que los porcentajes de distintas figuras no deben sumarse directamente.

Los resultados tienen carácter técnico y orientativo y no sustituyen a la cartografía oficial ni a los instrumentos normativos de delimitación de los espacios naturales protegidos.

La aplicación móvil es exclusivamente consultiva y no permite modificar relaciones territoriales ni gestionar incidencias.

---

**Proyecto:** Herramienta digital de consulta y análisis territorial de la RENPA.

**Ámbito:** Comunidad Autónoma de Andalucía.

**Modalidad:** Aplicación web progresiva (PWA) para Android e iOS.

**Contexto:** Actuaciones de dinamización socioeconómica de espacios naturales protegidos. Expediente 2023/038. Programa FEDER Andalucía 2021-2027.
