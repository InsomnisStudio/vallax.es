# Guía de SEO — Sección /blog/ de vallax.es

*Para implementación directa por el equipo de desarrollo (Astro). Complementa la guía de SEO técnico general — no la sustituye. Antes de tocar esta sección, confirmar que los puntos de prioridad 1 de esa guía (title/meta de home, aviso de no afiliación, copyright, canonical) ya están aplicados; si no, esa guía va primero.*

---

## 0. Antes de escribir una sola línea de código

- El blog **no es contenido genérico** — es la pieza que capta tráfico de gente que busca el problema ("PS5 barata segunda mano"), no la marca ("Vallax"). El SEO se juega en la intención de búsqueda de cada post, no en el volumen de artículos.
- Cada entrada de blog debe seguir **todas** las reglas de metadatos, encabezados y enlazado de la guía general (secciones 2, 3 y 5), aplicadas aquí a nivel de artículo individual.
- **Restricción legal/de marca (no negociable, ver informe legal):**
  - Nombres de plataformas (Wallapop, Vinted, Milanuncios, Todocolección) solo en **texto corrido, uso referencial y descriptivo** — nunca sugiriendo asociación oficial, patrocinio o partnership.
  - Prohibido en cualquier copy: "oficial", "partner de", "en colaboración con", "verificado por".
  - No usar logos ni colores corporativos de las plataformas en las imágenes del blog.
  - No prometer disponibilidad garantizada de un producto o cobertura de una plataforma "para siempre" — el copy debe ser del tipo "aumenta tus opciones de encontrarlo", nunca "consigue seguro tu PS5 barata".
  - Cada post debe llevar el aviso de no afiliación (ver plantilla en sección 5 de esta guía).
- **Regla de naming:** si "Vallax" aparece en un `<title>`, debe ir siempre acompañado de un descriptor funcional (el nombre a secas colisiona en buscadores con un compositor musical que ya ocupa ese término). En los títulos de blog no es obligatorio meter "Vallax" si el título ya es fuerte en keyword — mejor priorizar la keyword y dejar la marca para la meta description y el enlace del footer del artículo.

### Tono y voz — el contenido no puede parecer generado por IA

El público de Vallax (cazadores de chollos, revendedores, coleccionistas) detecta el contenido genérico de IA a la primera frase. Son personas que llevan años peleando en grupos de Telegram, foros de segunda mano y comentarios de YouTube — están acostumbrados a leer a gente real que habla como ellos. Si el blog suena a plantilla corporativa o a texto generado, no van a confiar en la recomendación ni van a descargar la app. Además, Google penaliza cada vez más el contenido que no aporta experiencia real (E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness).

**Reglas obligatorias de redacción:**

- **Escribir como alguien que ha comprado de segunda mano, no como un manual de instrucciones.** El lector quiere sentir que quien escribe ha estado en su misma situación: ha perdido un chollo por llegar tarde, ha negociado un precio, ha recibido un paquete con un arañazo que no salía en las fotos. Incluir ese tipo de situaciones concretas y reconocibles.
- **Prohibido el tono "listículo corporativo".** No empezar párrafos con "En el mundo de la segunda mano…", "En la era digital…", "Es importante destacar que…" ni "Sin duda alguna…". Estos arranques delatan contenido IA y el lector deja de leer.
- **Frases cortas y directas.** El público de Vallax escanea, no lee ensayos. Párrafos de 2-4 líneas máximo. Si un párrafo supera las 5 líneas, cortarlo.
- **Usar lenguaje que el público usa realmente.** "Chollo", "pillar", "volar" (un producto que se vende rápido), "pegarle un tiro" (comprar inmediatamente), "lote", "envío incluido", "precio negociable". No forzar jerga, pero sí usar las expresiones que aparecen en los propios anuncios y grupos de compra-venta.
- **Incluir detalles específicos que solo alguien con experiencia sabría.** Por ejemplo: "los domingos por la mañana es cuando más gente sube anuncios en Wallapop", "en Vinted los gastos de envío los paga el comprador salvo que el vendedor active el descuento", "en Milanuncios los anuncios de particular no llevan comisión pero los profesionales sí". Estos detalles generan confianza y diferencian el contenido de un resumen genérico.
- **Opiniones con matiz, no afirmaciones absolutas.** En vez de "Wallapop es la mejor plataforma para comprar tecnología" → "Para tecnología de segunda mano, Wallapop suele tener más volumen que Vinted, aunque depende mucho de la zona". El lector nota cuándo le están vendiendo humo vs. cuándo le están dando información real.
- **No repetir la keyword de forma forzada.** Si la keyword es "PS5 barata segunda mano", no meterla en cada párrafo — Google ya no funciona así y el lector lo percibe como spam. Usar variaciones naturales: "PlayStation 5 de segunda mano", "una PS5 a buen precio", "consolas usadas".
- **Meter ejemplos concretos con números reales.** "Una PS5 estándar con mando y cables suele moverse entre 280€ y 350€ en Wallapop a fecha de agosto 2026" es más útil y creíble que "los precios varían dependiendo del estado del producto". Marcar siempre que los precios son orientativos y de un momento concreto.
- **No cerrar nunca con un párrafo resumen tipo "En conclusión, hemos visto que…"** — eso es estructura de redacción escolar/IA. Cerrar con el CTA o con un último consejo práctico que el lector pueda aplicar hoy.

**Test rápido antes de publicar:** leer el artículo en voz alta. Si suena como algo que dirías en un grupo de Telegram explicándole a un colega cómo pillar una PS5 barata, va bien. Si suena como un folleto de una consultora, reescribir.

---

## 1. Estructura técnica

- **Ruta de listado:** `/es/blog/` — grid o lista de entradas con título, imagen destacada, extracto (150-200 caracteres) y fecha de publicación.
- **Ruta de entrada individual:** `/es/blog/[slug]/` — slug corto, en minúsculas, con guiones, derivado del H1 (ej. `/es/blog/ps5-barata-segunda-mano/`).
- **Metadatos dinámicos por artículo:** cada entrada genera su propio `<title>`, `<meta description>`, `canonical` (apuntando a sí misma) e imagen Open Graph — nunca heredar los metadatos de la home ni de otro artículo.
- **Imagen OG:** 1200×630px, formato WebP, con `alt` descriptivo (no solo el nombre del archivo).
- Añadir `/blog/` y cada `/blog/[slug]/` al **sitemap.xml** en cuanto se publiquen — no esperar a tener los 4 artículos listos para actualizar el sitemap la primera vez.
- Tras publicar cada artículo, **solicitar indexación manual en Search Console** (Inspección de URL → Solicitar indexación), igual que se hizo con la home.

---

## 2. Metadatos por artículo (prioridad 1, igual que el resto del sitio)

Reglas generales (ya establecidas en la guía técnica, se repiten aquí por claridad):
- Título: 50-60 caracteres máximo.
- Meta description: 150-160 caracteres, con una razón concreta para hacer clic, no solo una descripción.
- Cada `<title>` único en todo el sitio — no puede competir contra la home ni contra las páginas de plataforma.
- Un único `<h1>` por artículo, que contenga la keyword principal.

---

## 3. Estructura de encabezados dentro de cada artículo

- `<h1>`: título del artículo (una sola vez, con la keyword principal).
- `<h2>`: cada sección grande (ver esquema por artículo en la sección 6).
- `<h3>`: subsecciones dentro de un `<h2>` si hace falta desglosar (ej. una tabla de precios por estado del producto).
- No saltar de H1 a H3. No usar encabezados como recurso de estilo visual — si el texto no estructura contenido, no lleva etiqueta de encabezado.
- Si el artículo incluye una sección de preguntas frecuentes visible, añadir el bloque `FAQPage` en JSON-LD (mismo criterio que en la guía general: el contenido del schema debe coincidir exactamente con el texto visible).

---

## 4. Datos estructurados — `BlogPosting`

Añadir JSON-LD en el `<head>` de cada entrada:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "TÍTULO DEL ARTÍCULO",
  "description": "META DESCRIPTION DEL ARTÍCULO",
  "author": {
    "@type": "Organization",
    "name": "Vallax"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vallax",
    "url": "https://vallax.es/es/"
  },
  "datePublished": "FECHA_ISO_8601",
  "dateModified": "FECHA_ISO_8601",
  "image": "URL_IMAGEN_OG",
  "mainEntityOfPage": "URL_CANONICAL_DEL_ARTICULO"
}
```

⚠️ No usar fechas de ejemplo ni placeholders — solo publicar el schema con la fecha real de publicación, y actualizar `dateModified` si se edita el artículo más adelante.

---

## 5. Enlazado interno (obligatorio en los dos sentidos)

- Cada artículo de blog debe enlazar, con texto ancla descriptivo, a la página de plataforma o solución más relevante para su tema (nunca "aquí" o "más info").
- Cada página de `/platforms/*` y `/solutions/*` debe tener un bloque "Artículos relacionados" que enlace a los posts de blog relevantes — esto ya estaba anotado como pendiente en la guía general (sección 5) hasta que existiera contenido de blog; ahora que existe, hay que implementarlo.
- Los 4 artículos de esta primera tanda deben enlazarse entre sí donde tenga sentido temático (ver mapa de enlaces en la sección 6).
- Revisar con una herramienta tipo Screaming Frog que no queden enlaces rotos antes de cada publicación.

**Plantilla de aviso de no afiliación para pie de cada artículo** (mismo texto que el resto del sitio, adaptar si el artículo menciona una plataforma específica):

> *Vallax es un servicio independiente. No está afiliado, patrocinado ni avalado por Wallapop, Vinted, Milanuncios ni Todocolección. Son marcas registradas de sus respectivos titulares y se citan aquí únicamente con fines descriptivos.*

---

## 6. Los 4 artículos de esta primera tanda

### 6.1 — Cómo conseguir una PS5 barata de segunda mano

- **Slug:** `/es/blog/ps5-barata-segunda-mano/`
- **Keyword principal:** "PS5 barata segunda mano"
- **Title (53 car.):** `Cómo conseguir una PS5 barata de segunda mano`
- **Meta description (156 car.):** `Trucos reales para encontrar una PS5 de segunda mano al mejor precio en Wallapop y Vinted, y cómo usar alertas para no llegar tarde al chollo.`
- **H1:** igual que el title.
- **Esquema de H2 sugerido:**
  - Cuánto cuesta una PS5 de segunda mano según su estado (tabla orientativa, marcar explícitamente que son precios de referencia, no garantizados)
  - Dónde buscar: Wallapop y Vinted, diferencias prácticas
  - Qué revisar antes de comprar una consola de segunda mano (estado, garantía, accesorios)
  - Cómo no llegar tarde: alertas en tiempo real
- **Enlaces internos obligatorios:** `/platforms/wallapop-alerts/`, `/platforms/vinted-alerts/`
- **CTA:** crear alerta de "PS5" en Vallax.
- **Cuidado especial:** no usar el logo de PlayStation/Sony ni afirmar stock garantizado.

### 6.2 — Nintendo Switch de segunda mano: guía para no llegar tarde

- **Slug:** `/es/blog/nintendo-switch-segunda-mano/`
- **Keyword principal:** "Nintendo Switch segunda mano barata"
- **Title (56 car.):** `Nintendo Switch de segunda mano: guía para no llegar tarde`
- **Meta description (158 car.):** `Consejos para encontrar una Nintendo Switch de segunda mano al mejor precio, incluidas ediciones limitadas, y cómo Vallax te avisa antes que a nadie.`
- **H1:** igual que el title.
- **Esquema de H2 sugerido:**
  - Modelos de Nintendo Switch que encontrarás de segunda mano (estándar, Lite, OLED)
  - Ediciones limitadas y por qué interesan a coleccionistas
  - Precio orientativo según modelo y estado
  - Cómo detectar el anuncio en el momento en que se publica
- **Enlaces internos obligatorios:** `/platforms/wallapop-alerts/`, `/solutions/for-collectors/`
- **CTA:** crear alerta de "Nintendo Switch" en Vallax.
- **Diferenciación respecto al post de PS5:** aquí el ángulo es ediciones/coleccionismo, no solo precio — evitar repetir la misma estructura de tabla de precios como eje central.

### 6.3 — Reventa de segunda mano: cómo empezar y ganar margen

- **Slug:** `/es/blog/como-empezar-reventa-segunda-mano/`
- **Keyword principal:** "cómo revender en Wallapop"
- **Title (52 car.):** `Reventa de segunda mano: cómo empezar y ganar margen`
- **Meta description (155 car.):** `Guía práctica para empezar a revender productos de segunda mano: dónde comprar barato, cómo fijar precio de reventa y cómo no perder oportunidades.`
- **H1:** igual que el title.
- **Esquema de H2 sugerido:**
  - Qué necesitas antes de empezar (obligaciones fiscales básicas, sin dar asesoría fiscal — remitir a un profesional)
  - Dónde comprar barato para revender: Wallapop, Milanuncios y Todocolección
  - Cómo calcular tu margen antes de comprar
  - Por qué la velocidad es la ventaja competitiva de un revendedor
- **Enlaces internos obligatorios:** `/solutions/for-resellers/` (enlace principal), mención con enlace a `/platforms/milanuncios-alerts/` y `/platforms/todocoleccion-alerts/`
- **CTA:** plan Premium de Vallax para varias alertas simultáneas.
- **Rol de este artículo:** es el post "pilar" — los otros 3 deberían enlazarlo cuando mencionen reventa como caso de uso.
- **Cuidado especial:** no dar asesoramiento fiscal/legal concreto; si se menciona algo de facturación, redactar en términos generales y sugerir consultar a un gestor.

### 6.4 — Wallapop vs Vinted vs Milanuncios: dónde buscar según lo que compres

- **Slug:** `/es/blog/wallapop-vs-vinted-vs-milanuncios/`
- **Keyword principal:** "diferencias Wallapop Vinted Milanuncios"
- **Title (58 car.):** `Wallapop vs Vinted vs Milanuncios: dónde buscar según compres`
- **Meta description (157 car.):** `Comparativa de Wallapop, Vinted y Milanuncios: qué se vende mejor en cada una, para que sepas dónde buscar según lo que quieras comprar o vender.`
- **H1:** igual que el title (ajustar si supera 60 caracteres).
- **Formato:** tabla comparativa (categoría fuerte de cada plataforma, tipo de usuario, volumen aproximado) + desarrollo en texto debajo. Buen candidato a featured snippet si la tabla es clara y concisa.
- **Esquema de H2 sugerido:**
  - Wallapop: para qué es mejor
  - Vinted: para qué es mejor
  - Milanuncios: para qué es mejor
  - Todocolección: el complemento para coleccionismo
  - Por qué no hace falta elegir solo una
- **Enlaces internos obligatorios:** las 4 páginas de `/platforms/*`
- **CTA:** genérico a la home, no a una plataforma concreta (este artículo no debe favorecer a una sola).
- **Cuidado especial:** mantener el tono estrictamente comparativo/informativo — no afirmar cuál es "mejor" en términos absolutos, solo para qué caso de uso encaja cada una.

---

## 7. Rendimiento e imágenes

- Imágenes en WebP/AVIF, con `width`/`height` explícitos para evitar layout shift.
- `loading="lazy"` en cualquier imagen fuera del viewport inicial (soporte nativo en Astro).
- Verificar Core Web Vitals en [PageSpeed Insights](https://pagespeed.web.dev/) para `/blog/` y al menos uno de los 4 artículos tras publicar.

---

## 8. Checklist de verificación antes de publicar cada artículo

- [ ] `<title>` único, 50-60 caracteres, con la keyword principal.
- [ ] `<meta description>` única, 150-160 caracteres, con razón concreta para hacer clic.
- [ ] Un único `<h1>`, coincide con el title o es una variación muy cercana.
- [ ] Jerarquía de encabezados correcta (sin saltos de H1 a H3).
- [ ] `canonical` apunta a la URL del propio artículo.
- [ ] JSON-LD `BlogPosting` presente y con fechas reales (no placeholders).
- [ ] Si hay FAQ visible, el JSON-LD `FAQPage` coincide exactamente con el texto.
- [ ] Enlaces internos obligatorios de la sección 6 implementados, con texto ancla descriptivo.
- [ ] Bloque "Artículos relacionados" añadido en la(s) página(s) de plataforma/solución enlazada(s) desde este artículo.
- [ ] Aviso de no afiliación presente al pie del artículo.
- [ ] Ninguna mención de "oficial", "partner de", "en colaboración con" respecto a Wallapop/Vinted/Milanuncios/Todocolección.
- [ ] Sin logos ni colores corporativos de las plataformas en las imágenes.
- [ ] Ninguna promesa de disponibilidad o stock garantizado.
- [ ] Imágenes en WebP con `width`/`height` y `alt` descriptivo.
- [ ] URL añadida a `sitemap.xml`.
- [ ] Indexación solicitada manualmente en Search Console tras publicar.
- [ ] No hay enlaces internos rotos (verificar con Screaming Frog u equivalente).
