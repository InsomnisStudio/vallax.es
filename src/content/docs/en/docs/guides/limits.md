---
title: Limits and safety pauses
description: Understand why a search may temporarily stop notifying you.
sidebar:
  order: 6
---

There is one important thing worth knowing: Vallax has safety limits to prevent your account from generating too many notifications in a very short time.

It is not a bug. It is a protection to avoid abnormal behaviour and keep the system stable. These limits are **the same on every plan**.

## Global notification limit

Your account has a global limit of **240 notifications per minute**.

That means that, across all your searches, with or without AI, you cannot exceed that rate.

If together they exceed that limit, Vallax **will temporarily stop all your searches**. During that time:

- Even if you turn them back on, **you will not receive notifications**.
- You will have to wait **1 minute** for them to work normally again.

## AI search limit

Searches that use AI have a stricter global limit: **20 analyses per minute**.

That means that, across all your AI searches, you cannot exceed that cap.

If AI analysis fires more than 20 times in one minute across all of them, Vallax **will turn off all your searches that use AI**. In that case:

- Even if you turn them back on, **you will not receive notifications**.
- You will have to wait **2 minutes** for them to work again.

## Paused by your plan

This is different from safety pauses. If you see a search marked **Paused by your plan**, your current plan does not cover it: you have more active searches than it allows, or it uses regex, keywords or platforms above its limit.

You can edit it to fit or upgrade your plan. See [If you downgrade](/en/docs/guides/plans#if-you-downgrade).

## What this means in practice

If a search triggers too often, it is usually too broad. For example:

- Very generic keywords.
- Few filters.
- AI used on searches that still let too many listings through.

## Recommendation

If a search keeps stopping, make it more precise:

- Refine your **keywords**.
- Add **ignored words** and a **maximum price** to remove noise.
- Use **See latest matches** to check how many notifications per day it generates before saving it.
- Use **AI** only when you really need it.

The more refined a search is, the more useful your notifications will be and the less likely you are to hit these limits.
