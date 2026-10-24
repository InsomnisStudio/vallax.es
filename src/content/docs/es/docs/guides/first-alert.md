---
title: Cómo crear tu primera búsqueda
description: Aprende a configurar una búsqueda útil sin complicarte.
sidebar:
  order: 2
---

Crear una búsqueda en Vallax es sencillo, pero hay varios campos que conviene entender bien para que los avisos sean realmente útiles.

No hace falta complicarlo todo desde el principio. Lo importante es saber para qué sirve cada parte y usar solo lo necesario. El formulario sigue este mismo orden.

## Nombre

Solo sirve para reconocer la búsqueda en tu lista. No afecta a los resultados.

## Palabras clave («¿Qué buscas?»)

Es el campo más importante. Le dice a Vallax qué tipo de anuncio quieres encontrar.

Escribe las palabras como en un buscador. Cada palabra se convierte en una etiqueta y **el anuncio tendrá que contenerlas todas, en cualquier orden**.

Si necesitas una frase exacta, escríbela **entre comillas**: `"play station 2"`.

### Opciones: alternativas dentro de la misma búsqueda

Puedes añadir varias **opciones**. Cada opción se comprueba por separado y basta con que se cumpla **una** para que el anuncio pase el filtro.

Por ejemplo:

- Opción 1: `nintendo switch` → el anuncio debe contener *nintendo* **y** *switch*.
- Opción 2: `consola nintendo`
- Opción 3: `"switch oled"`

Las opciones sirven para sinónimos y para las distintas formas de escribir lo mismo (`PS4`, `PlayStation 4`…).

Cuantas más palabras pongas en una misma opción, menos anuncios encajarán.

### Cómo coincide el texto

- Las palabras clave **no distinguen entre mayúsculas y minúsculas**.
- La coincidencia **no es estricta por palabra completa**. Si buscas `tractor`, también puede encajar `extractor`.

Si necesitas algo más estricto, usa comillas o, en Pro, una **regex**.

### Límite de palabras clave

El número total de palabras clave por búsqueda depende de tu plan: **5 en Gratis, 15 en Plus y 50 en Pro**.

## Plataformas y categorías

Elige dónde debe buscar Vallax: Wallapop, Vinted, Milanuncios y Todocolección. En el plan **Gratis** puedes elegir **1 plataforma** por búsqueda; en **Plus** y **Pro**, todas.

La **categoría** es opcional. Cada plataforma tiene su propio árbol de categorías. Úsala solo si la búsqueda te trae resultados de otro tipo de producto.

## Precio y ubicación

Los dos son opcionales. Déjalos vacíos para no descartar nada.

- **Precio:** indica un máximo o un rango mínimo–máximo.
- **Ubicación:** elige una zona y un radio máximo, por ejemplo Alicante a 50 km. Tiene sentido cuando quieres comprar cerca, ver el artículo en persona o evitar desplazamientos.

Si pones un máximo o un radio muy ajustados, recibirás menos avisos.

### Importante: Vinted

En **Vinted** la ubicación no se aplica, porque la plataforma no ofrece una localización lo bastante precisa para trabajar con distancias. Seguirás recibiendo anuncios de fuera de tu zona aunque la configures.

## Más filtros

### Sin estas palabras

Hace lo contrario que las palabras clave: descarta los anuncios que contengan ciertas palabras.

Un caso típico sería buscar una consola pero no querer anuncios que pongan `mando`, `roto`, `para piezas` o `caja vacía`. Es una forma muy útil de quitar ruido sin tocar el resto de la búsqueda.

### Vendedores

- **Solo de estos vendedores:** la búsqueda se centra en esos usuarios.
- **Nunca de estos vendedores:** sus anuncios se descartan.

Útil si ya conoces vendedores que te interesan o, al contrario, quieres evitar cuentas concretas. Si no sabes cómo encontrar el identificador de un vendedor, mira [esta guía](/es/guides/get-seller-identifier).

### Dónde mirar en el anuncio

Para cada filtro de texto (palabras, palabras a ignorar, regex y regex a ignorar) puedes elegir si se comprueba en el **título**, en la **descripción** o en **ambos**.

En **Vinted** no hay descripción, así que los filtros se comprueban en el **título** y en la **marca**.

## Regex (solo Pro)

Una **regex** es una forma de buscar patrones de texto más concretos. No hace falta en búsquedas normales, pero puede venir bien cuando las palabras clave se te quedan cortas: variantes de nombres, modelos o formatos de texto.

- **Regex personalizado:** el anuncio tiene que cumplir el patrón. Ejemplo: `^(Leica|Hasselblad).*(M[0-9]).*`
- **Regex a ignorar:** descarta los anuncios que cumplan el patrón aunque encajen con el resto. Ejemplo: `(?i)(replica|copia|inspirad[oa])`

Para hacer pruebas, una página útil es **regex101**. Usa el motor de **Rust**.

Las regex son una función del plan **Pro**. Si bajas de plan, las búsquedas con regex se pausan hasta que las edites (más en [Planes](/es/docs/guides/plans#si-bajas-de-plan)).

## Filtro de IA

Este campo sirve para dar una instrucción extra a la inteligencia artificial de Vallax.

La IA es un **segundo filtro**: no se aplica a todos los anuncios. Primero se pasan tus palabras, precio, zona y demás filtros y, solo después, la IA revisa los anuncios que ya han encajado y descarta los que no cumplan tu instrucción. **Nunca añade anuncios** que tus filtros no hubieran encontrado.

### Qué analiza

La IA puede revisar:

- Las **fotos** del anuncio: tú eliges cuántas, de **0 a 10**. Con 0 solo lee el texto.
- El **título**.
- La **descripción**, cuando la plataforma la ofrece.
- El **precio**.
- En **Vinted**, también la **marca**.

### Para qué sirve

La IA es útil cuando quieres confirmar algo que no siempre queda claro solo con palabras clave.

Ejemplo: tu búsqueda puede detectar `PS4`, pero eso no significa que el anuncio sea una consola. Podría ser un mando, una caja vacía o un accesorio. En ese caso, puedes añadir una instrucción como esta:

`Quiero que sea una consola PlayStation 4 completa, no un mando ni un accesorio.`

Así la IA usa el texto y las imágenes para comprobar si el anuncio realmente es lo que buscas.

### Usar el precio con contexto

La IA también puede relacionar el precio con lo que incluye el anuncio, algo que un precio mínimo o máximo no puede expresar:

`Acepta anuncios de hasta 40 € si incluyen juegos; si no incluyen juegos, acepta solo hasta 20 €.`

### Tokens de IA

Cada anuncio que revisa la IA gasta **tokens de IA**, encaje o no. El gasto depende sobre todo del número de fotos analizadas y de la longitud del anuncio.

- Cualquier plan, también **Gratis**, puede usar el filtro de IA si tiene tokens.
- Necesitas **al menos 3 tokens** para activar el análisis con IA en una búsqueda.
- Si tu saldo llega a 0, el filtro de IA se desactiva, pero la búsqueda sigue funcionando sin él.

Para gastar menos, usa palabras clave concretas, palabras a ignorar y un rango de precio: así la IA solo revisa los anuncios que de verdad pueden interesarte.

Cómo conseguir tokens (Pro, packs y tienda de puntos) está explicado en [Planes y tokens de IA](/es/docs/guides/plans#tokens-de-ia).

## Prueba la búsqueda antes de guardarla

Con **Ver últimas coincidencias** Vallax comprueba tu filtro con los anuncios publicados en las **últimas 24 horas** y te dice:

- Cuántas coincidencias habría habido y cuántos avisos al día recibirías, aproximadamente.
- Algunos anuncios de ejemplo (son anuncios ya publicados, no avisos: no aparecerán en tu lista).

Si salen demasiados, ponle un precio máximo o añade alguna palabra más. Si no sale ninguno, lo más habitual es que falle alguna palabra clave, o que el precio, la zona o la categoría sean demasiado estrictos.

## Compartir e importar búsquedas

Desde las acciones de una búsqueda puedes **Compartir búsqueda**: Vallax genera un código y lo copia al portapapeles. Quien lo reciba puede usar **Importar búsqueda**, revisarla y guardarla.

Si la búsqueda importada usa opciones de Pro (como regex) y tú no tienes Pro, tendrás que quitarlas para poder guardarla.

## Recomendación para empezar

Si es tu primera búsqueda, lo más práctico es esto:

1. Define bien las **palabras clave** y añade opciones para los sinónimos.
2. Usa **sin estas palabras** para quitar anuncios molestos.
3. Añade **precio** y **ubicación** si quieres acotar.
4. **Prueba la búsqueda** para ver cuántos avisos recibirías.
5. Usa la **IA** cuando necesites relacionar texto, fotos y precio o aplicar condiciones que los filtros básicos no pueden expresar.

Con eso ya puedes montar búsquedas bastante finas sin complicarte demasiado.
