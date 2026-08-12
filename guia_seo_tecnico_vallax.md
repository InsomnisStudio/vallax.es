# Guía de SEO técnico — vallax.es

*Para implementación directa por el equipo de desarrollo. Sitio construido en Astro.*

---

## 1. Indexación básica (prioridad 1 — bloqueante para todo lo demás)

- [ ] **`sitemap.xml`** generado y actualizado automáticamente en cada build, incluyendo todas las rutas: home, `/platforms/*`, `/solutions/*`, `/proposals/*` y futuras páginas de blog/comparativa.
- [ ] **`robots.txt`** en la raíz, permitiendo rastreo de todo el contenido público y referenciando el sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://vallax.es/sitemap.xml
  ```
- [ ] Verificar propiedad del dominio en **Google Search Console** y enviar el sitemap ahí. (Ya está `meta-robots: index,follow` correctamente configurado en la home — confirmado.)
- [ ] Instalar **Google Analytics 4** (o equivalente) con eventos de conversión reales: instalación de app (clic en botón App Store/Google Play), no solo pageviews.
- [ ] Cada URL debe tener **una única versión canónica** (la home ya tiene `canonical: https://vallax.es/es/` correcto — replicar este patrón en el resto de páginas).
- [ ] **Actualizar el copyright del footer** de "© 2025 Vallax" a "© 2026 Vallax" (o dinámico con el año actual, para no tener que tocarlo cada enero).
- [ ] **Solicitar re-indexación en Search Console** (Inspección de URL → Solicitar indexación) para la home y todas las páginas tras aplicar los cambios de esta guía. Se ha detectado que el contenido indexado actualmente en buscadores sigue mostrando copy antiguo centrado en Telegram/bot que ya no está en la versión en vivo — es decir, hay una desactualización real entre lo que Google muestra en resultados y lo que la web ya dice. Esto es prioritario porque puede estar generando fricción de conversión ahora mismo (alguien ve "Telegram" en el resultado de búsqueda y no entra pensando que necesita esa app).

### 1.1 Corrección urgente — texto heredado de la versión Telegram (encontrado en producción, 12 ago 2026)

El `<title>` y la `<meta description>` actuales de la home todavía describen el producto como "bot" (texto de cuando el canal de alertas era Telegram, antes de la app nativa). Esto es fricción real: alguien que busca una app y ve "bot" en el resultado de Google puede rebotar antes de entrar.

**Cambiar:**
```
title: Vallax — Bot de alertas para plataformas de segunda mano (Wallapop, Vinted, Milanuncios...)
meta-description: Vallax es un bot que envía alertas instantáneas de nuevos anuncios de segunda mano en Wallapop, Vinted, Milanuncios y más. Ve las nuevas ofertas antes que nadie.
```

**Por:**
```
title: Vallax — Alertas de Wallapop, Vinted, Milanuncios y Todocolección
meta-description: App para iOS y Android que te avisa al instante cuando aparece un anuncio nuevo en Wallapop, Vinted, Milanuncios o Todocolección. Descárgala gratis.
```

(El title nuevo tiene 58 caracteres, dentro del límite recomendado de 50-60. La meta description, 159 caracteres.)

---

## 2. Metadatos por página (prioridad 1)

Cada página necesita `<title>` y `<meta name="description">` únicos, no genéricos ni duplicados entre páginas de plataforma.

**Regla de naming — importante:** el nombre "Vallax" a secas colisiona en buscadores con un compositor musical que ya ocupa ese término. En **todo `<title>`**, acompañar siempre "Vallax" de un descriptor funcional.

**Home:** aplicar la corrección de la sección 1.1 (quitar "bot", mencionar app/iOS/Android).

**Páginas de plataforma** (`/platforms/wallapop-alerts/`, `/vinted-alerts/`, `/milanuncios-alerts/`, `/todocoleccion-alerts/`): el copy visible en los enlaces del menú ya es bueno y reutilizable como base del `<title>` de cada una — por ejemplo, el enlace actual "Alertas de Wallapop para llegar antes que nadie" funciona bien como título si no supera los 60 caracteres. Verificar que cada una de las 4 páginas tiene su propio `<title>` y `<meta description>` distintos (no una plantilla genérica con solo el nombre de la plataforma cambiado) — Google penaliza contenido casi-duplicado entre páginas similares.

⚠️ **Auditoría pendiente, prioridad alta:** no ha sido posible verificar el código fuente actual de estas 4 páginas individualmente. Dado que el contenido indexado en buscadores de la home todavía mostraba menciones a "Telegram" y "bot" que ya no están en la versión en vivo de la home (ver nota en sección 1.1), es muy posible que alguna de estas páginas de plataforma tenga el mismo copy heredado sin actualizar. **Revisar cada una manualmente antes de dar por buena esta guía**, buscando especialmente: menciones a Telegram como canal de alertas, la palabra "bot", y cualquier `<title>`/`<meta description>` duplicado entre las 4.

**Páginas de solución** (`/solutions/for-resellers/`, `/for-collectors/`, `/for-bargain-hunters/`): mismo criterio — los títulos de los enlaces actuales ("Vallax para revendedores que necesitan velocidad", etc.) ya sirven de base, solo falta confirmar que están también en el `<title>` de cada página, no solo en el texto del enlace desde la home.

**Futura `/comparativa/`:** `Vallax vs otras apps de alertas: comparativa 2026` / meta description enfocada en fiabilidad y cobertura verificable.

**Reglas generales:**
- Título: 50-60 caracteres máx. (se corta en resultados de Google si es más largo).
- Meta description: 150-160 caracteres, siempre con una razón concreta para hacer clic, no solo describir la página.
- No repetir el mismo `<title>` en dos páginas distintas — cada una debe ser única para no competir contra sí misma en el ranking.

---

## 3. Estructura de encabezados (prioridad 1)

- **Un único `<h1>` por página**, que contenga la keyword principal de esa página (ej. en `/platforms/wallapop-alerts/`, el H1 debe incluir literalmente "Wallapop" y "alertas").
- `<h2>`/`<h3>` para subsecciones, siguiendo jerarquía lógica (no saltar de H1 a H3 sin H2).
- Evitar usar encabezados solo por estilo visual — si un texto parece título pero no estructura el contenido, no debe ser un `<h2>`, debe llevar otra etiqueta con la clase CSS correspondiente.

---

## 4. Datos estructurados / Schema.org (prioridad 2)

Añadir JSON-LD en el `<head>` de las páginas relevantes. Esto habilita rich snippets (estrellas, precio) en resultados de Google.

**En la home**, bloque `SoftwareApplication`:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vallax",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "iOS, Android",
  "url": "https://vallax.es/es/",
  "downloadUrl": [
    "https://apps.apple.com/es/app/vallax/id6793169829",
    "https://play.google.com/store/apps/details?id=com.insomnis.vallax"
  ],
  "offers": {
    "@type": "Offer",
    "price": "11.99",
    "priceCurrency": "EUR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "REEMPLAZAR_CON_NOTA_REAL",
    "ratingCount": "REEMPLAZAR_CON_NUMERO_REAL"
  }
}
```
⚠️ No usar valores de ejemplo/ficticios en `aggregateRating` — Google penaliza datos estructurados no verificables. Solo incluir este bloque cuando haya reseñas reales en las stores, con las cifras exactas. Los `downloadUrl` de arriba sí son los reales de producción, confirmados a fecha de esta guía.

**En cualquier página con preguntas frecuentes visibles** (la home ya las tiene), bloque `FAQPage`:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "PREGUNTA TAL CUAL APARECE EN LA PÁGINA",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RESPUESTA TAL CUAL APARECE EN LA PÁGINA"
      }
    }
  ]
}
```
Regla: el contenido del JSON-LD debe coincidir exactamente con el texto visible en la página — no usar el schema para meter texto que el usuario no ve.

---

## 5. Enlazado interno (prioridad 2)

- Cada página de `/platforms/*` debe enlazar a las otras 3 páginas de plataforma y a la home, con texto ancla descriptivo (`"alertas de Vinted"`, no `"aquí"` o `"más info"`).
- Cada página de `/solutions/*` debe enlazar a la página de plataforma más relevante para ese caso de uso.
- Futuras entradas de blog deben enlazar siempre hacia la página de plataforma o solución correspondiente, y viceversa (añadir un bloque "Artículos relacionados" en las páginas de plataforma una vez exista contenido de blog).
- Evitar enlaces rotos o a anclas inexistentes — revisar con una herramienta tipo Screaming Frog antes de cada release grande.

---

## 6. Rendimiento (prioridad 2)

- Verificar **Core Web Vitals** en [PageSpeed Insights](https://pagespeed.web.dev/) para home y al menos una página de plataforma — objetivo: LCP < 2.5s, CLS < 0.1.
- Imágenes en formato **WebP/AVIF** con `width`/`height` explícitos para evitar layout shift.
- Lazy loading en imágenes fuera del viewport inicial (Astro lo soporta nativo con `loading="lazy"`).

---

## 8. Nuevas páginas a crear (prioridad 3, en cuanto haya contenido)

- **`/comparativa/`**: comparativa honesta y basada en datos verificables (cobertura, velocidad, precio) frente a otras apps del sector. Debe seguir todas las reglas de metadatos/H1 de esta guía.
- **`/blog/`**: estructura de listado + entrada individual, con metadatos dinámicos por artículo (título, descripción, imagen OG) y enlace de vuelta a la página de plataforma/solución relacionada.

---

## 9. Aviso de no afiliación (requisito legal, revisado con abogado)

Vallax no tiene relación oficial con Wallapop, Vinted, Milanuncios ni Todocolección — es importante que esto quede explícito en el sitio, no solo por claridad al usuario sino porque forma parte de las medidas para reducir el riesgo legal de mencionar sus marcas (ver informe legal aparte).

**Dónde debe aparecer:**
- [ ] **Footer del sitio**, visible en todas las páginas: una línea corta y clara, por ejemplo: *"Vallax no está afiliado ni respaldado por Wallapop, Vinted, Milanuncios ni Todocolección. Son marcas registradas de sus respectivos titulares."*
- [ ] **Página de cada plataforma** (`/platforms/wallapop-alerts/`, etc.): una mención breve equivalente, adaptada a la plataforma concreta de esa página — por ejemplo, en `/wallapop-alerts/`: *"Esta página no está afiliada con Wallapop."*
- [ ] **Fichas de App Store y Google Play**: incluir la misma aclaración en la descripción larga de la app (esto lo gestiona quien suba el build, no el desarrollo web, pero se deja anotado aquí para que quede como checklist único).

**Cómo redactarlo (reglas de estilo):**
- Nunca usar los nombres de las plataformas en el `<title>` de forma que sugiera oficialidad (evitar títulos tipo "App oficial de alertas Wallapop" — nunca ha sido oficial).
- Los logos de las plataformas que ya aparecen en la sección "Plataformas soportadas" de la home pueden mantenerse (es uso descriptivo legítimo — estás describiendo con qué plataformas es compatible tu producto), pero el aviso de no afiliación debe estar visible en la misma página, no solo en el footer de secciones alejadas.
- Evitar en cualquier copy de marketing/SEO frases que puedan sugerir asociación oficial: "en colaboración con", "partner de", "verificado por" — ninguna de estas aplica y no deben usarse ni siquiera como recurso retórico.

---

## 10. Checklist de verificación antes de cada release

- [ ] Cada página nueva tiene `<title>` y `<meta description>` únicos.
- [ ] Cada página nueva tiene exactamente un `<h1>`.
- [ ] La página aparece en `sitemap.xml`.
- [ ] No hay enlaces internos rotos.
- [ ] PageSpeed Insights no muestra regresión de Core Web Vitals.
- [ ] Si la página tiene FAQ visible, el JSON-LD `FAQPage` coincide con el texto real.
- [ ] El aviso de no afiliación está visible en el footer y en la página de plataforma correspondiente.
- [ ] No hay copy heredado de la versión Telegram ("bot", "en tu Telegram") en ninguna página — revisar especialmente las 4 páginas de plataforma, que no se han podido auditar en esta guía.
