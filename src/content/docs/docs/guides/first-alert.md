---
title: Como crear tu primera alerta
description: Aprende a configurar una alerta util sin complicarte.
sidebar:
  order: 2
---

Crear una alerta en Vallax es sencillo, pero hay varios campos que conviene entender bien para que las notificaciones sean realmente utiles.

No hace falta complicarlo todo desde el principio. Lo importante es saber para que sirve cada parte y usar solo lo necesario.

## Palabras clave

Este es el campo mas importante.

Las palabras clave le dicen a Vallax que tipo de anuncio quieres encontrar. Puedes crear varias opciones distintas dentro de la misma alerta.

### Como funcionan las opciones

Cada opcion se comprueba por separado. Si se cumple una sola opcion, el anuncio se considera valido.

Dentro de cada opcion, las palabras se escriben en el mismo input separadas por comas.

Por ejemplo:

- Opcion 1: `Nintendo, Switch`
- Opcion 2: `PlayStation 4`
- Opcion 3: `PS4`

En una opcion como `Nintendo, Switch`, lo que le estas diciendo a Vallax es simplemente: quiero anuncios donde coincidan esas dos palabras.

Si un anuncio cumple cualquiera de esas opciones, pasa este filtro.

### Importante sobre como coincide el texto

- Las palabras clave **no distinguen entre mayusculas y minusculas**.
- La coincidencia **no es estricta por palabra completa**.

Por ejemplo, si buscas `tractor`, tambien puede considerarse valido un texto como `extractor`.

Si necesitas algo mas estricto, ahi es donde puede tener sentido usar **regex**.

### Donde se comprueban

Las palabras clave no se miran igual en todas las plataformas:

- En **Wallapop**, **Milanuncios** y **Todocoleccion** se revisan en el **titulo** y en la **descripcion**.
- En **Vinted** no tenemos descripcion, asi que se revisan en el **titulo** y en la **marca**.

## Localizacion

Este campo te permite indicar una zona y una distancia maxima.

Por ejemplo, puedes decir que quieres anuncios en Alicante y a un maximo de 50 km.

Esto tiene sentido cuando quieres comprar algo cerca de ti, verlo en persona o evitar desplazamientos largos.

### Importante: Vinted

En **Vinted** este filtro no se aplica igual, porque esa plataforma no ofrece una localizacion precisa como para trabajar bien con distancia.

Si eliges una distancia concreta, lo normal es que busques anuncios cercanos. Por eso este punto no tiene mucho valor en Vinted.

## Categoria

La categoria puede ayudarte a acotar la busqueda, aunque no siempre es lo mas importante.

Lo relevante aqui es esto: **en Vinted no trabajamos con categorias por ahora**. Por eso en el formulario no veras categorias para esa plataforma.

No es un error. Simplemente esa opcion no esta disponible en Vinted en este momento.

## Ignorar palabras

Este campo hace lo contrario que las palabras clave.

Sirve para decirle a Vallax que descarte anuncios que incluyan ciertas palabras que no te interesan.

Un caso tipico seria buscar una consola pero no querer anuncios que pongan `mando`, `rota`, `leer` o `solo caja`.

Es una forma muy util de quitar ruido sin tocar demasiado el resto de la alerta.

## Seguir usuarios e ignorar usuarios

Estos campos sirven para filtrar anuncios segun el usuario que publica.

- Si añades usuarios en **seguir usuarios**, la alerta se centra en esos vendedores.
- Si añades usuarios en **ignorar usuarios**, sus anuncios se descartan.

Es util si ya conoces vendedores que te interesan o, al contrario, quieres evitar cuentas concretas.

## Regex

Una **regex** es una forma de buscar patrones de texto mas concretos.

No hace falta usarla en alertas normales, pero puede venir bien si quieres afinar mucho una busqueda y las palabras clave se te quedan cortas.

Por ejemplo, puede servir para detectar variantes concretas de nombres, modelos o formatos de texto.

Si vas a probar regex, una pagina util es **regex101**. Si haces pruebas ahi, usa el motor de **Rust**.

## Campo de IA

Este campo sirve para dar una instruccion extra a la inteligencia artificial de Vallax.

La IA **no se aplica a todos los anuncios**. Primero se pasan los filtros normales de la alerta y, solo despues, la IA revisa los anuncios que ya han encajado.

Esto es importante porque la IA no sustituye a los filtros basicos. Va un paso mas alla.

### Que analiza

La IA puede revisar:

- Hasta las **3 primeras fotos** del anuncio.
- El **titulo**.
- La **descripcion**, cuando la plataforma la ofrece.
- En **Vinted**, tambien la **marca**.

Segun la plataforma, Vallax tiene acceso a unos campos u otros.

### Para que sirve

La IA es util cuando quieres confirmar algo que no siempre queda claro solo con palabras clave.

Ejemplo: tu alerta puede detectar `PS4`, pero eso no significa que el anuncio sea una consola. Podria ser un mando, una caja vacia o un accesorio.

En ese caso, puedes añadir una instruccion como esta:

`Quiero que sea una consola PlayStation 4 completa, no un mando ni un accesorio.`

Asi la IA usa el texto y las imagenes para comprobar si el anuncio realmente es lo que buscas.

### Que no hace falta pedirle

No tiene mucho sentido usar la IA para repetir filtros que ya hace Vallax por su cuenta, como el precio minimo o maximo.

La IA funciona mejor como una capa extra para interpretar el contenido del anuncio, no para sustituir reglas que ya existen.

## Recomendacion para empezar

Si es tu primera alerta, lo mas practico es empezar con esto:

1. Define bien las **palabras clave**.
2. Usa **ignorar palabras** para quitar anuncios molestos.
3. Añade **localizacion** si quieres comprar cerca.
4. Usa la **IA** solo cuando necesites confirmar detalles que el texto por si solo no deja claros.

Con eso ya puedes montar alertas bastante finas sin complicarte demasiado.
