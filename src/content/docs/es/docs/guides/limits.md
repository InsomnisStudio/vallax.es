---
title: Limites y pausas de seguridad
description: Entiende por que una alerta puede dejar de avisarte temporalmente.
sidebar:
  order: 3
---

Hay un punto importante que conviene tener claro: Vallax tiene algunos limites de seguridad para impedir que tu cuenta genere demasiadas notificaciones en muy poco tiempo.

No es un fallo. Es una proteccion para evitar comportamientos fuera de lo normal y mantener el sistema estable.

## Limite global de notificaciones

Tu cuenta tiene un limite global de **240 notificaciones por minuto**.

Eso significa que, entre todas tus alertas, usen IA o no, no puedes superar ese ritmo.

Si en conjunto superan ese limite, Vallax **parara todas tus alertas** de forma temporal.

Durante ese tiempo:

- Aunque vuelvas a activarlas, **no recibiras notificaciones**.
- Tendras que esperar **1 minuto** para que puedan volver a funcionar con normalidad.

## Limite de alertas con IA

Las alertas que usan IA tienen un limite global mas estricto: **20 analisis por minuto**.

Eso significa que, entre todas tus alertas con IA, no puedes superar ese tope.

Si el analisis por IA se dispara mas de 20 veces en un minuto entre todas ellas, Vallax **desactivara todas tus alertas que usan IA**.

En ese caso:

- Aunque las vuelvas a activar, **no recibiras notificaciones**.
- Tendras que esperar **2 minutos** para que vuelvan a funcionar.

## Que significa esto en la practica

Si una alerta salta demasiado, normalmente significa que es demasiado amplia.

Por ejemplo:

- Palabras clave muy genericas.
- Pocos filtros.
- Uso de IA en alertas que todavia dejan pasar demasiados anuncios.

## Recomendacion

Si ves que una alerta se para a menudo, lo mejor es hacerla mas precisa:

- Ajusta mejor las **palabras clave**.
- Añade **ignorar palabras** para quitar ruido.
- Usa la **IA** solo cuando realmente haga falta.

Cuanto mas afinada este una alerta, mas utiles seran las notificaciones y menos probabilidades habra de llegar a estos limites.
