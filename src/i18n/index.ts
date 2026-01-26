import type GettingStarted from "../components/sections/Getting-started.astro";

export type Locale = "es" | "en";
export interface Translation {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    links: {
      gettingStarted: string;
      features: string;
      faq: string;
      pricing: string;
      community: string;
      guides: string;
    };
    languageSwitcher: {
      label: string;
      shortLabel: string;
      target: Locale;
      href: string;
    };
    primaryCta: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    platforms: { title: string };
  };
  features: {
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
  changelog: {
    title: string;
    description: string;
    eyebrow: string;
    lastUpdatedLabel: string;
    currentLabel: string;
  };
  pricing: {
    title: string;
    description: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      ctaLabel: string;
      ctaHref: string;
      badge?: string;
      promo?: {
        label: string;
        price: string;
        originalPrice?: string;
        startDate: string;
        durationMonths?: number;
        durationDays?: number;
        countdownLabel: string;
        endedLabel: string;
      };
    }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  gettingStarted: {
    title: string;
    description: string;
    videoFallback: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  community: {
    title: string;
    description: string;
    button: string;
  };
  guides: {
    title: string;
    description: string;
    eyebrow: string;
    emptyMessage: string;
    cardLabel: string;
    viewGuide: string;
  };
  footer: {
    legal: { label: string; href?: string }[];
    contactEmailLabel: string;
    socials: { label: string; href: string }[];
    rights: string;
  };
}

export const locales: Locale[] = ["es", "en"];

export const translations: Record<Locale, Translation> = {
  es: {
    locale: "es",
    seo: {
      title:
        "Vallax — Bot de alertas para plataformas de segunda mano (Wallapop, Vinted, Milanuncios...)",
      description:
        "Vallax es un bot que envía alertas instantáneas de nuevos anuncios de segunda mano en Wallapop, Vinted, Milanuncios y más. Ve las nuevas ofertas antes que nadie.",
    },
    navbar: {
      links: {
        gettingStarted: "Cómo empezar",
        features: "Beneficios",
        faq: "FAQ",
        community: "Comunidad",
        pricing: "Planes",
        guides: "Guías",
      },
      languageSwitcher: {
        label: "English",
        shortLabel: "EN",
        target: "en",
        href: "/en/",
      },
      primaryCta: "Ir a Vallax",
    },
    hero: {
      title: "Descubre las nuevas ofertas de segunda mano antes que nadie",
      description:
        "Vallax revisa cada nuevo anuncio en tiempo real y te avisa al instante. Ideal para cazar chollos o encontrar ese artículo único antes que nadie.",
      primaryCta: "Crea tu primera alerta",
      platforms: {
        title: "Plataformas soportadas",
      },
    },
    gettingStarted: {
      title: "Cómo empezar",
      description:
        "Solo necesitas Telegram y un par de toques para poner a Vallax a trabajar.",
      videoFallback: "Tu navegador no soporta el elemento de video.",
      steps: [
        {
          title: "Lanza la app",
          description: "Busca @vallaxbot en Telegram y pulsa Open.",
        },
        {
          title: "Crea tu alerta",
          description:
            "Especifica los criterios de tu alerta: palabra clave, precio máximo, etc.",
        },
        {
          title: "Recibe las alertas",
          description:
            "Recibirás una notificación cada vez que aparezca una nueva coincidencia.",
        },
      ],
    },
    features: {
      title: "Razones para usar Vallax",
      description:
        "Todo lo que necesitas para adelantarte a cualquier comprador.",
      features: [
        {
          title: "Multiplataforma",
          description:
            "Wallapop, Vinted, Milanuncios y Todocoleccion en un solo lugar.",
        },
        {
          title: "Instantáneo",
          description:
            "En cuanto se publica un anuncio nuevo, la alerta aparece en tu Telegram sin esperas.",
        },
        {
          title: "Preciso",
          description:
            "Usa palabras clave, exclusiones, precio y ubicación para encontrar solo los anuncios que te interesan.",
        },
        {
          title: "Sencillo",
          description:
            "Gestiona tus alertas con facilidad. Crea, edita o páusalas cuando quieras, sin complicaciones.",
        },
      ],
    },
    changelog: {
      title: "Notas de versión",
      description: "Cambios recientes y notas rápidas de cada versión.",
      eyebrow: "Release log",
      lastUpdatedLabel: "Última actualización:",
      currentLabel: "Actual",
    },
    pricing: {
      title: "Planes y precios",
      description:
        "Tres formas de usar Vallax: empieza gratis, desbloquea todo con Premium o cuéntanos qué necesitas a medida.",
      plans: [
        {
          name: "Gratuito",
          price: "0 €",
          description:
            "Ideal si solo necesitas controlar una búsqueda puntual para uso personal.",
          features: [
            "Hasta 3 alertas creadas",
            "1 alerta activa al mismo tiempo",
            "Hasta 5 palabras clave por alerta",
            "1 plataforma por alerta",
          ],
          ctaLabel: "Empieza gratis",
          ctaHref: "https://t.me/vallaxbot",
        },
        {
          name: "Premium",
          price: "8 €/mes",
          description:
            "Pensado para revendedores, coleccionistas o usuarios que necesitan tener varias búsquedas activas con máxima precisión y más capacidad.",
          promo: {
            label: "Por tiempo limitado",
            price: "6 €/mes",
            originalPrice: "8 €/mes",
            startDate: "2026-01-26",
            durationMonths: 1,
            countdownLabel: "Termina en",
            endedLabel: "Promo finalizada",
          },
          features: [
            "Hasta 15 alertas creadas",
            "15 alertas activas al mismo tiempo",
            "Todas las plataformas disponibles por alerta",
            "Hasta 24 palabras clave por alerta",
            "Filtros avanzados: Regex y Regex inverso",
            "Crea tu bot de Telegram para evitar rate limit",
          ],
          ctaLabel: "Hazte Premium",
          ctaHref: "https://t.me/vallaxbot",
          badge: "Más popular",
        },
        {
          name: "Plan personalizado",
          price: "A medida",
          description:
            "Si necesitas más capacidad, integraciones o automatizaciones concretas, lo preparamos junto a ti.",
          features: [
            "Capacidad y automatizaciones personalizadas",
            "Integraciones con tus herramientas",
            "Soporte dedicado y acuerdos a medida",
          ],
          ctaLabel: "Habla con nosotros",
          ctaHref:
            "mailto:vallaxdev@gmail.com?subject=Plan%20personalizado%20Vallax",
        },
      ],
    },
    community: {
      title: "Communidad de Telegram",
      description:
        "Entra para estar al día de las actualizaciones, proponer mejoras y compartir alertas con otros usuarios de Vallax.",
      button: "Unirme",
    },
    guides: {
      title: "Guías de configuración",
      description: "Recursos rápidos para sacar el máximo partido a Vallax.",
      eyebrow: "Guías",
      emptyMessage: "Muy pronto añadiremos tutoriales aquí.",
      cardLabel: "Recurso",
      viewGuide: "Ver guía",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Puedo acceder al sistema de afiliados?",
          answer:
            'Sí. Vallax usa el sistema de afiliados oficial de Telegram. Abre @vallaxbot, entra en la información del bot y usa el enlace de promoción que encontrarás allí. Puedes ver todos los detalles en <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
        },
        {
          question: "¿Por qué Vallax detiene algunas alertas?",
          answer:
            "Si una alerta dispara demasiados anuncios en poco tiempo, la pausamos para respetar los límites de Telegram. Revísala, ajusta filtros si hace falta y vuelve a activarla desde el bot.",
        },
        {
          question: "¿Por qué recibo anuncios que no encajan?",
          answer:
            "Puede deberse a que el vendedor usó categorías o palabras clave que no reflejan el contenido real. Ajusta exclusiones o regex para filtrar esos casos.",
        },
        {
          question: "¿Funciona la ubicación en todas las plataformas?",
          answer:
            "Wallapop, Milanuncios y Todocoleccion sí respetan ubicación y categorías. Vinted no usa ese campo, por lo que seguirás recibiendo anuncios fuera de tu zona incluso si lo configuras.",
        },
      ],
    },
    footer: {
      legal: [
        {
          label: "Términos de Servicio",
          href: "/docs/condiciones-generales-de-contratacion",
        },
        {
          label: "Política de Privacidad",
          href: "/docs/politica-de-privacidad",
        },
        {
          label: "Política de Cookies",
          href: "/docs/politica-de-cookies",
        },
        { label: "Aviso Legal", href: "/docs/aviso-legal" },
      ],
      contactEmailLabel: "vallaxdev@gmail.com",
      socials: [
        { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
        { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
      ],
      rights: "© 2025 Vallax. Todos los derechos reservados.",
    },
  },
  en: {
    locale: "en",
    seo: {
      title:
        "Vallax — Alert Bot for Second-Hand Marketplaces (Wallapop, Vinted, Milanuncios...)",
      description:
        "Vallax is a bot that sends instant alerts for new second-hand listings on Wallapop, Vinted, Milanuncios and more. See new deals before anyone else.",
    },
    navbar: {
      links: {
        gettingStarted: "Getting Started",
        features: "Benefits",
        faq: "FAQ",
        community: "Community",
        pricing: "Plans",
        guides: "Guides",
      },
      languageSwitcher: {
        label: "Español",
        shortLabel: "ES",
        target: "es",
        href: "/es/",
      },
      primaryCta: "Launch Vallax",
    },
    hero: {
      title: "See new second-hand deals before anyone else",
      description:
        "Vallax checks every new listing in real time and alerts you instantly. Ideal for hunting down bargains or finding that unique item before anyone else.",
      primaryCta: "Create Your First Alert",
      platforms: {
        title: "Supported platforms",
      },
    },
    gettingStarted: {
      title: "Getting started",
      description:
        "All you need is Telegram and a couple of taps to put Vallax to work.",
      videoFallback: "Your browser does not support the video element.",
      steps: [
        {
          title: "Launch the app",
          description: "Find @vallaxbot on Telegram and tap Open.",
        },
        {
          title: "Create your alert",
          description:
            "Specify your alert's criteria: keyword, max price, etc.",
        },
        {
          title: "Get the alerts",
          description:
            "You'll receive a notification every time a new match appears.",
        },
      ],
    },
    features: {
      title: "Benefits",
      description: "Everything you need to stay ahead of other buyers.",
      features: [
        {
          title: "Multiplatform",
          description:
            "Wallapop, Vinted, Milanuncios and Todocoleccion in one place.",
        },
        {
          title: "Instant",
          description:
            "The moment a listing goes live, the alert lands in your Telegram with zero delay.",
        },
        {
          title: "Precise",
          description:
            "Use keywords, exclusions, price, and location to find only the listings you're really interested in.",
        },
        {
          title: "Effortless",
          description:
            "A straightforward interface to create, edit and pause alerts without complications.",
        },
      ],
    },
    changelog: {
      title: "Release notes",
      description: "Quick look at the latest releases and what's new.",
      eyebrow: "Product updates",
      lastUpdatedLabel: "Last updated:",
      currentLabel: "Current release",
    },
    pricing: {
      title: "Plans & pricing",
      description:
        "Pick the package that fits today: start free, upgrade to Premium, or reach out for a tailored setup.",
      plans: [
        {
          name: "Free",
          price: "€0",
          description:
            "Great for monitoring a specific search for personal use when you only need Vallax occasionally.",
          features: [
            "Up to 3 alerts created",
            "1 active alert at a time",
            "Up to 5 keywords per alert",
            "1 marketplace per alert",
          ],
          ctaLabel: "Start free",
          ctaHref: "https://t.me/vallaxbot",
        },
        {
          name: "Premium",
          price: "€8 / month",
          description:
            "For users who need full speed, flexibility, and advanced filters.",
          promo: {
            label: "Limited time",
            price: "€6 / month",
            originalPrice: "€8 / month",
            startDate: "2026-01-26",
            durationMonths: 1,
            countdownLabel: "Ends in",
            endedLabel: "Promotion ended",
          },
          features: [
            "Up to 15 alerts created",
            "15 simultaneous active alerts",
            "All marketplaces available per alert",
            "Up to 24 keywords per alert",
            "Advanced filters: Regex and reverse Regex",
            "Create your own Telegram bot to avoid rate limits",
          ],
          ctaLabel: "Upgrade to Premium",
          ctaHref: "https://t.me/vallaxbot",
          badge: "Most popular",
        },
        {
          name: "Custom",
          price: "Tailored",
          description:
            "Need something beyond this table? Tell us what your operation requires.",
          features: [
            "Custom capacity and automations",
            "Integrations with your preferred tools",
            "Dedicated support and bespoke agreements",
          ],
          ctaLabel: "Talk to us",
          ctaHref: "mailto:vallaxdev@gmail.com?subject=Vallax%20custom%20plan",
        },
      ],
    },
    community: {
      title: "Telegram Community Channel",
      description:
        "Join to stay informed about updates, suggest improvements and share alerts with other Vallax users.",
      button: "Join",
    },
    guides: {
      title: "Setup guides",
      description: "Quick tutorials to get the most out of Vallax.",
      eyebrow: "Guides",
      emptyMessage: "We’ll share new tutorials here soon.",
      cardLabel: "Resource",
      viewGuide: "Open guide",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Can I access the affiliate program?",
          answer:
            'Yes. Vallax uses Telegram’s native affiliate system. Open @vallaxbot, check the bot info and share the promotion link you’ll find there. You can see all the details at <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
        },
        {
          question: "Why does Vallax pause some alerts?",
          answer:
            "If an alert fires too many listings in a short time, we pause it to respect Telegram’s limits. Review it, tweak the filters if needed and reactivate it from the bot.",
        },
        {
          question: "Why do I receive listings that don’t match?",
          answer:
            "Sellers sometimes choose categories or keywords that don’t match the item. Add exclusions or regex filters to block those cases.",
        },
        {
          question: "Does location work on every marketplace?",
          answer:
            "Wallapop, Milanuncios and Todocoleccion honor location and categories. Vinted does not, so you may still get items outside your area even if you set one.",
        },
      ],
    },
    footer: {
      legal: [
        { label: "Terms of Service", href: "/docs/terms-of-service" },
        { label: "Privacy Policy", href: "/docs/privacy-policy" },
        { label: "Cookie Policy", href: "/docs/cookie-policy" },
        { label: "Legal Notice", href: "/docs/legal-notice" },
      ],
      contactEmailLabel: "vallaxdev@gmail.com",
      socials: [
        { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
        { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
      ],
      rights: "© 2025 Vallax. All rights reserved.",
    },
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as string[]).includes(value);
}
