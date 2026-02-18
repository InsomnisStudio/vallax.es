import type GettingStarted from "../components/sections/Getting-started.astro";

export type Locale = "es" | "en" | "fr" | "it" | "pl";
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

export const locales: Locale[] = ["es", "en", "fr", "it", "pl"];
export const localeLabels: Record<Locale, string> = {
  es: "Espanol",
  en: "English",
  fr: "Francais",
  it: "Italiano",
  pl: "Polski",
};

export const translations = {
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
} as Record<Locale, Translation>;

translations.fr = {
  ...translations.en,
  locale: "fr",
  seo: {
    title:
      "Vallax — Bot d'alertes Vinted et annonces d'occasion (Wallapop, Vinted, Milanuncios...)",
    description:
      "Vallax envoie des alertes instantanees pour les nouvelles annonces sur Vinted, Wallapop, Milanuncios et plus.",
  },
  navbar: {
    ...translations.en.navbar,
    links: {
      gettingStarted: "Demarrage",
      features: "Avantages",
      faq: "FAQ",
      pricing: "Tarifs",
      community: "Communaute",
      guides: "Guides",
    },
    languageSwitcher: {
      label: "Langue",
      shortLabel: "FR",
      target: "fr",
      href: "/fr/",
    },
    primaryCta: "Aller a Vallax",
  },
  hero: {
    title: "Decouvrez les nouvelles offres d'occasion avant tout le monde",
    description:
      "Vallax surveille chaque nouvelle annonce en temps reel et vous alerte instantanement.",
    primaryCta: "Creez votre premiere alerte",
    platforms: { title: "Plateformes compatibles" },
  },
  features: {
    title: "Pourquoi utiliser Vallax",
    description:
      "Tout ce qu'il faut pour rester en avance sur les autres acheteurs.",
    features: [
      {
        title: "Multi-plateforme",
        description:
          "Wallapop, Vinted, Milanuncios et Todocoleccion au meme endroit.",
      },
      {
        title: "Instantane",
        description:
          "Quand une annonce est publiee, l'alerte arrive tout de suite sur Telegram.",
      },
      {
        title: "Precis",
        description: "Filtrez par mots-cles, exclusions, prix et localisation.",
      },
      {
        title: "Simple",
        description:
          "Creez, modifiez ou mettez en pause vos alertes facilement.",
      },
    ],
  },
  gettingStarted: {
    title: "Comment commencer",
    description: "Vous avez seulement besoin de Telegram et de quelques clics.",
    videoFallback: "Votre navigateur ne prend pas en charge la video.",
    steps: [
      {
        title: "Lancez l'app",
        description: "Cherchez @vallaxbot sur Telegram et appuyez sur Open.",
      },
      {
        title: "Creez votre alerte",
        description: "Definissez vos criteres: mot-cle, prix maximum, etc.",
      },
      {
        title: "Recevez les alertes",
        description:
          "Vous recevrez une notification pour chaque nouvelle correspondance.",
      },
    ],
  },
  changelog: {
    title: "Notes de version",
    description: "Dernieres modifications et evolutions du produit.",
    eyebrow: "Mises a jour",
    lastUpdatedLabel: "Derniere mise a jour:",
    currentLabel: "Actuelle",
  },
  pricing: {
    ...translations.en.pricing,
    title: "Plans et tarifs",
    description:
      "Trois facons d'utiliser Vallax: gratuit, Premium ou un plan personnalise.",
  },
  community: {
    title: "Communaute Telegram",
    description:
      "Rejoignez la communaute pour suivre les mises a jour et partager vos alertes.",
    button: "Rejoindre",
  },
  guides: {
    title: "Guides de configuration",
    description: "Ressources rapides pour tirer le meilleur parti de Vallax.",
    eyebrow: "Guides",
    emptyMessage: "De nouveaux tutoriels arrivent bientot.",
    cardLabel: "Ressource",
    viewGuide: "Voir le guide",
  },
  faq: {
    title: "Questions frequentes",
    items: [
      {
        question: "Puis-je acceder au programme d'affiliation ?",
        answer:
          'Oui. Vallax utilise le programme officiel de Telegram. Ouvrez @vallaxbot et utilisez le lien de promotion disponible dans le profil du bot. Details: <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
      },
      {
        question: "Pourquoi Vallax met certaines alertes en pause ?",
        answer:
          "Si une alerte genere trop d'annonces en peu de temps, elle est mise en pause pour respecter les limites Telegram.",
      },
      {
        question: "Pourquoi je recois des annonces non pertinentes ?",
        answer:
          "Certains vendeurs utilisent des categories ou mots-cles incorrects. Ajoutez des exclusions ou regex.",
      },
      {
        question: "La localisation fonctionne-t-elle partout ?",
        answer:
          "Wallapop, Milanuncios et Todocoleccion utilisent localisation et categories. Vinted non.",
      },
    ],
  },
  footer: {
    ...translations.en.footer,
    rights: "© 2025 Vallax. Tous droits reserves.",
  },
};

translations.it = {
  ...translations.en,
  locale: "it",
  seo: {
    title:
      "Vallax — Bot alert Vinted e annunci usato (Wallapop, Vinted, Milanuncios...)",
    description:
      "Vallax invia avvisi istantanei per nuovi annunci su Vinted, Wallapop, Milanuncios e altro.",
  },
  navbar: {
    ...translations.en.navbar,
    links: {
      gettingStarted: "Come iniziare",
      features: "Vantaggi",
      faq: "FAQ",
      pricing: "Prezzi",
      community: "Comunita",
      guides: "Guide",
    },
    languageSwitcher: {
      label: "Lingua",
      shortLabel: "IT",
      target: "it",
      href: "/it/",
    },
    primaryCta: "Vai a Vallax",
  },
  hero: {
    title: "Scopri nuove offerte usato prima di tutti",
    description:
      "Vallax controlla ogni nuovo annuncio in tempo reale e ti avvisa subito.",
    primaryCta: "Crea il tuo primo avviso",
    platforms: { title: "Piattaforme supportate" },
  },
  features: {
    title: "Perche usare Vallax",
    description:
      "Tutto cio che ti serve per restare avanti agli altri acquirenti.",
    features: [
      {
        title: "Multi-piattaforma",
        description:
          "Wallapop, Vinted, Milanuncios e Todocoleccion in un unico posto.",
      },
      {
        title: "Istantaneo",
        description:
          "Quando esce un annuncio nuovo, la notifica arriva subito su Telegram.",
      },
      {
        title: "Preciso",
        description:
          "Filtra per parole chiave, esclusioni, prezzo e posizione.",
      },
      {
        title: "Semplice",
        description:
          "Crea, modifica o metti in pausa gli avvisi senza complicazioni.",
      },
    ],
  },
  gettingStarted: {
    title: "Come iniziare",
    description: "Ti basta Telegram e pochi tocchi per iniziare.",
    videoFallback: "Il tuo browser non supporta il video.",
    steps: [
      {
        title: "Apri l'app",
        description: "Cerca @vallaxbot su Telegram e premi Open.",
      },
      {
        title: "Crea un avviso",
        description: "Imposta i criteri: parola chiave, prezzo massimo, ecc.",
      },
      {
        title: "Ricevi gli avvisi",
        description:
          "Riceverai una notifica ogni volta che appare una nuova corrispondenza.",
      },
    ],
  },
  changelog: {
    title: "Note di versione",
    description: "Ultime modifiche e novita del prodotto.",
    eyebrow: "Aggiornamenti",
    lastUpdatedLabel: "Ultimo aggiornamento:",
    currentLabel: "Attuale",
  },
  pricing: {
    ...translations.en.pricing,
    title: "Piani e prezzi",
    description:
      "Tre modi per usare Vallax: gratis, Premium o piano personalizzato.",
  },
  community: {
    title: "Comunita Telegram",
    description: "Unisciti per seguire gli aggiornamenti e condividere avvisi.",
    button: "Unisciti",
  },
  guides: {
    title: "Guide di configurazione",
    description: "Risorse rapide per ottenere il massimo da Vallax.",
    eyebrow: "Guide",
    emptyMessage: "Nuovi tutorial in arrivo.",
    cardLabel: "Risorsa",
    viewGuide: "Apri guida",
  },
  faq: {
    title: "Domande frequenti",
    items: [
      {
        question: "Posso usare il programma affiliati?",
        answer:
          'Si. Vallax usa il programma affiliati ufficiale di Telegram. Apri @vallaxbot e usa il link promozionale nel profilo del bot. Dettagli: <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
      },
      {
        question: "Perche Vallax mette in pausa alcuni avvisi?",
        answer:
          "Se un avviso genera troppi annunci in poco tempo, viene messo in pausa per rispettare i limiti di Telegram.",
      },
      {
        question: "Perche ricevo annunci non pertinenti?",
        answer:
          "Alcuni venditori usano categorie o parole chiave non corrette. Aggiungi esclusioni o regex.",
      },
      {
        question: "La posizione funziona su tutte le piattaforme?",
        answer:
          "Wallapop, Milanuncios e Todocoleccion supportano posizione e categorie. Vinted no.",
      },
    ],
  },
  footer: {
    ...translations.en.footer,
    rights: "© 2025 Vallax. Tutti i diritti riservati.",
  },
};

translations.pl = {
  ...translations.en,
  locale: "pl",
  seo: {
    title:
      "Vallax — Bot alertow Vinted i ofert z drugiej reki (Wallapop, Vinted, Milanuncios...)",
    description:
      "Vallax wysyla natychmiastowe alerty o nowych ogloszeniach na Vinted, Wallapop, Milanuncios i innych platformach.",
  },
  navbar: {
    ...translations.en.navbar,
    links: {
      gettingStarted: "Jak zaczac",
      features: "Korzysci",
      faq: "FAQ",
      pricing: "Cennik",
      community: "Spolecznosc",
      guides: "Poradniki",
    },
    languageSwitcher: {
      label: "Jezyk",
      shortLabel: "PL",
      target: "pl",
      href: "/pl/",
    },
    primaryCta: "Przejdz do Vallax",
  },
  hero: {
    title: "Nowe oferty z drugiej reki zanim zobacza je inni",
    description:
      "Vallax monitoruje nowe ogloszenia w czasie rzeczywistym i natychmiast wysyla alert.",
    primaryCta: "Utworz pierwszy alert",
    platforms: { title: "Obslugiwane platformy" },
  },
  features: {
    title: "Dlaczego Vallax",
    description:
      "Wszystko, czego potrzebujesz, aby byc szybszym od innych kupujacych.",
    features: [
      {
        title: "Wiele platform",
        description:
          "Wallapop, Vinted, Milanuncios i Todocoleccion w jednym miejscu.",
      },
      {
        title: "Natychmiast",
        description:
          "Gdy pojawia sie nowe ogloszenie, alert trafia od razu na Telegram.",
      },
      {
        title: "Precyzyjnie",
        description:
          "Filtruj po slowach kluczowych, wykluczeniach, cenie i lokalizacji.",
      },
      {
        title: "Prosto",
        description: "Tworz, edytuj i wstrzymuj alerty bez komplikacji.",
      },
    ],
  },
  gettingStarted: {
    title: "Jak zaczac",
    description: "Wystarczy Telegram i kilka klikniec.",
    videoFallback: "Twoja przegladarka nie obsluguje wideo.",
    steps: [
      {
        title: "Uruchom aplikacje",
        description: "Wyszukaj @vallaxbot w Telegramie i kliknij Open.",
      },
      {
        title: "Utworz alert",
        description: "Ustaw kryteria: slowo kluczowe, maksymalna cena itp.",
      },
      {
        title: "Otrzymuj alerty",
        description: "Dostaniesz powiadomienie przy kazdym nowym dopasowaniu.",
      },
    ],
  },
  changelog: {
    title: "Historia zmian",
    description: "Najnowsze zmiany i aktualizacje produktu.",
    eyebrow: "Aktualizacje",
    lastUpdatedLabel: "Ostatnia aktualizacja:",
    currentLabel: "Biezaca",
  },
  pricing: {
    ...translations.en.pricing,
    title: "Plany i ceny",
    description:
      "Trzy sposoby korzystania z Vallax: darmowy, Premium lub plan indywidualny.",
  },
  community: {
    title: "Spolecznosc Telegram",
    description: "Dolacz, aby sledzic aktualizacje i dzielic sie alertami.",
    button: "Dolacz",
  },
  guides: {
    title: "Poradniki konfiguracji",
    description: "Szybkie zasoby, aby wycisnac maksimum z Vallax.",
    eyebrow: "Poradniki",
    emptyMessage: "Nowe poradniki wkrotce.",
    cardLabel: "Material",
    viewGuide: "Otworz poradnik",
  },
  faq: {
    title: "Najczestsze pytania",
    items: [
      {
        question: "Czy moge korzystac z programu afiliacyjnego?",
        answer:
          'Tak. Vallax korzysta z oficjalnego programu afiliacyjnego Telegrama. Otworz @vallaxbot i uzyj linku promocyjnego z profilu bota. Szczegoly: <a class="faq-link" href="https://telegram.org/tour/affiliate-programs" target="_blank" rel="noreferrer">telegram.org/tour/affiliate-programs</a>.',
      },
      {
        question: "Dlaczego Vallax wstrzymuje niektore alerty?",
        answer:
          "Jesli alert generuje zbyt wiele ogloszen w krotkim czasie, jest wstrzymywany, aby zachowac limity Telegrama.",
      },
      {
        question: "Dlaczego dostaje niedopasowane ogloszenia?",
        answer:
          "Sprzedawcy czasem wpisuja bledne kategorie lub slowa kluczowe. Dodaj wykluczenia albo regex.",
      },
      {
        question: "Czy lokalizacja dziala na wszystkich platformach?",
        answer:
          "Wallapop, Milanuncios i Todocoleccion obsluguja lokalizacje i kategorie. Vinted nie.",
      },
    ],
  },
  footer: {
    ...translations.en.footer,
    rights: "© 2025 Vallax. Wszelkie prawa zastrzezone.",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as string[]).includes(value);
}
