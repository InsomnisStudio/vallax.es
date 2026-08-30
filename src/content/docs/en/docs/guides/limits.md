---
title: Limits and safety pauses
description: Understand why an alert may temporarily stop sending notifications.
sidebar:
  order: 3
---

There is one important thing worth knowing to avoid surprises: Vallax has safety limits to prevent your account from generating too many notifications in a very short time.

It is not a bug. It is a protection mechanism to keep the system stable.

## Global notification limit

Your account has a global limit of **240 notifications per minute**.

That means all your alerts combined, whether they use AI or not, cannot go beyond that rate.

If they exceed that limit together, Vallax will **temporarily stop all your alerts**.

During that time:

- Even if you reactivate them, **you will not receive notifications**.
- You will need to wait **1 minute** before they can work normally again.

## Limit for AI alerts

Alerts using AI have a stricter global limit: **20 analyses per minute**.

That means all your AI alerts combined cannot go beyond that cap.

If AI analysis runs more than 20 times in one minute across all of them, Vallax will **disable all your AI alerts**.

In that case:

- Even if you reactivate them, **you will not receive notifications**.
- You will need to wait **2 minutes** before they work again.

## What this means in practice

If an alert hits these limits too often, it usually means the alert is too broad.

For example:

- Keywords that are too generic.
- Too few filters.
- AI enabled on alerts that still let too many listings pass through.

## Recommendation

If an alert keeps stopping, the best approach is to make it more precise:

- Refine your **keywords**.
- Add **excluded words** to remove noise.
- Use **AI** only when it is actually needed.

The more focused an alert is, the more useful the notifications will be and the less likely you are to hit these limits.
