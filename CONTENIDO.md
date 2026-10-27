# Datos que el equipo debe completar

Este archivo es solo para ustedes: no se publica como parte visible del
sitio, pero es la lista de todo lo que falta llenar con datos reales.

## 1. Número de WhatsApp
Archivo: `js/config.js`, variable `HOODBAG_WHATSAPP_NUMBER`.
Formato: código de país + número, sin el signo "+" y sin espacios.
Ejemplo: `"51987654321"`.

## 2. Enlaces de redes sociales
Archivo: `js/config.js`, objeto `HOODBAG_SOCIAL_LINKS`.
Reemplazar las tres URL (TikTok, Instagram, Facebook) por las reales del negocio.

## 3. Medidas de la tabla de tallas
Archivo: `index.html`, sección `#tallas-y-colores`.
Completar las celdas marcadas "Por completar" para las tallas S, M, L y XL
(pecho/contorno, largo total y manga), con las medidas reales del
prototipo.

## 4. Fotos que faltan
El sitio no usa fotos de internet. Se dejaron bloques de color e ilustraciones
en SVG como reemplazo temporal. Cuando tengan fotos reales del prototipo
(formato WebP), avísenme o pídanme que las incluya en estos lugares:

- Portada: foto principal del producto puesto o en uso.
- Sección "El producto": 1 o 2 fotos de detalle (compartimento, costuras,
  capucha).
- Sección "Tallas y colores": foto de las dos variantes de color (blanco y
  rojo) lado a lado.

## 5. Precio del modelo Premium
Archivo: `js/config.js`, variable `HOODBAG_PRECIO_PREMIUM`.
Mientras sea `null`, el precio Premium no se muestra en la página. Si
deciden mostrarlo, reemplazar `null` por el precio entre comillas, por
ejemplo `"75.00"`.

## 6. Dominio del sitio (robots.txt y sitemap.xml)
Estos dos archivos usan el dominio de ejemplo `https://hoodbag.vercel.app/`.
Cuando Vercel les asigne el enlace real, reemplazar esa dirección en:

- `robots.txt`
- `sitemap.xml`

## 7. Recordatorio
El plan gratuito de Vercel es solo para uso personal y no comercial. El
sitio está hecho con HTML, CSS y JavaScript simples (sin frameworks ni
base de datos), así que puede moverse sin cambios a otro alojamiento
estático gratuito que sí permita uso comercial — por ejemplo Cloudflare
Pages o GitHub Pages — cuando Hoodbag empiece a vender de forma formal.
