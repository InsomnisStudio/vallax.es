// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: "https://vallax.es",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },

  i18n: {
    locales: ["en", "es", "fr", "it", "pl"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap(),
    starlight({
      title: "Vallax",
      customCss: ["./src/assets/css/starlight.css"],
      logo: {
        dark: "./src/assets/vallax-logo.svg",
        light: "./src/assets/vallax-logo-light.svg",
        alt: "Vallax",
      },
      components: {
        LanguageSelect: "./src/components/starlight/LanguageSelect.astro",
      },
      social: [
        {
          icon: "external",
          label: "Web de Vallax",
          href: "https://www.vallax.es",
        },
        {
          icon: "telegram",
          label: "Comunidad de Vallax",
          href: "https://t.me/vallax_group",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/vallax.es/",
        },
        {
          icon: "youtube",
          label: "YouTube",
          href: "https://www.youtube.com/@vallax-app",
        },
      ],
      sidebar: [
        { slug: "docs/guides/start" },
        { slug: "docs/guides/first-alert" },
        { slug: "docs/guides/limits" },
      ],
    }),
  ],
});
