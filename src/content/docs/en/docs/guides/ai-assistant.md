---
title: Create alerts with ChatGPT, Claude, Gemini or Grok
description: Connect your Vallax account to your AI assistant and manage your searches by talking to it.
sidebar:
  order: 7
---

You can connect your Vallax account to **ChatGPT**, **Claude**, **Gemini**, **Grok** or any **MCP**-compatible assistant and ask for things in your own words, just like you'd ask a person:

- "Let me know when a Nintendo Switch Lite under €90 shows up on Wallapop"
- "How much does a used iPhone 13 128 GB sell for?"
- "Which searches do I have active?"
- "Pause my sneaker searches"

The assistant creates or changes the search in your account, and notifications keep arriving in the **Vallax app** as usual. You don't need any technical knowledge: you only connect it once.

## Before you start

- You need a **Vallax account** (the one from the app).
- You connect it from the assistant's **website**, on a computer or in your phone's browser: [chatgpt.com](https://chatgpt.com) or [claude.ai](https://claude.ai), or that of the assistant you use. Once connected, it also works in their apps.
- This is the address you'll be asked for. It's the same for everyone:

```
https://backend.vallax.es/mcp
```

## Connect with Claude

1. Go to [claude.ai](https://claude.ai) and open **Customize → Connectors**.
2. Tap **+ Add**, then **Add custom connector**.
3. Type **Vallax** as the name, paste the address above and tap **Continue**.
4. Claude detects the authentication on its own: leave it as is and tap **Continue**.
5. Under **Authentication**, choose **Sign in now** and tap **Add**.
6. The Vallax page will open: **sign in** with the same Google, Apple or email you use in the app and tap **Allow**.

Done. In a new conversation, tap **+ → Connectors** in the lower left and check that Vallax is turned on.

## Connect with ChatGPT

1. Go to [chatgpt.com](https://chatgpt.com) and open **Settings → Apps**.
2. Tap **Browse catalog**.
3. In the top right, tap **Add** and choose **Add custom MCP**.
4. Fill in the details:
   - **Name:** Vallax
   - **Description:** optional, you can leave it empty.
   - **Connection URL:** the address above.
   - **Authentication:** OAuth.
5. Accept the terms and create the app.
6. ChatGPT will ask you to **connect it** before you can use it. The Vallax page will open: **sign in** with the same Google, Apple or email you use in the app and tap **Allow**.

In the chat, turn Vallax on from the **+** button if ChatGPT doesn't use it on its own.

> Menu names may change slightly depending on your version and plan. On Claude's free plan you can add one custom connector.

## Connect with other assistants (Gemini, Grok…)

Vallax works with any assistant that lets you add **MCP** connectors, not just ChatGPT and Claude. The steps are almost always the same:

1. Look in its settings for the option to add a **connector**, **MCP server** or **integration**.
2. Paste the address above and, if asked, choose **OAuth** as the authentication.
3. The Vallax page will open: **sign in** with the same Google, Apple or email you use in the app and tap **Allow**.

## What the assistant can do

- **See your searches** and explain what each one watches.
- **Create new searches** with keywords, excluded words, price, platforms and category.
- **Edit, pause, resume or delete** searches.
- **Find listings published right now** on Wallapop, Vinted and Todocoleccion.
- **Tell you what something sells for** second-hand before you create the search.
- **Show you your latest notifications.**
- **Answer questions about Vallax**: plans, AI tokens, points or limits.

## Limits

Searches created by the assistant count the same as the ones you create in the app, so the same [plan limits](/en/docs/guides/plans) apply.

Live listing searches and market prices are **unlimited on Plus and Pro**. On the **Free** plan you get a few per day.

## Privacy and disconnecting

- The assistant can only do what's on the list above. **It doesn't see your password** or payment details.
- Check what it suggests before confirming, especially if you're deleting searches.
- To disconnect it, remove **Vallax** from the connectors or apps in your assistant's settings.

## If something doesn't work

- **It won't let me sign in:** use the same method as in the app. If you signed in with Google on your phone, use Google here too.
- **The assistant says it has no access to Vallax:** check that the connector is turned on in that conversation and reconnect it if needed.
- Still not working? Write to us in the [Telegram group](https://t.me/vallax_group).
