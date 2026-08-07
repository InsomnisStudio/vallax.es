export type Locale = "es" | "en" | "fr" | "it" | "pl";
export interface Translation {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    links: {
      home: string;
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
    availability: string;
    platforms: { title: string };
  };
  features: {
    title: string;
    description: string;
    features: { title: string; description: string }[];
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
    tagline: string;
    productTitle: string;
    legalTitle: string;
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
        home: "Inicio",
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
        "Vallax detecta nuevos anuncios en Wallapop, Vinted, Milanuncios y mas en cuanto aparecen. Ve las nuevas ofertas antes que nadie y llega primero.",
      primaryCta: "Descargar para Android",
      availability: "Disponible en Android e iOS",
      platforms: {
        title: "Plataformas soportadas",
      },
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
            "En cuanto se publica un anuncio nuevo, la alerta aparece al instante sin esperas.",
        },
        {
          title: "Preciso",
          description:
            "Usa palabras clave, exclusiones, precio y ubicación para encontrar solo los anuncios que te interesan.",
        },
        {
          title: "Inteligencia artificial",
          description:
            "Analiza anuncios para ayudarte a detectar mejores oportunidades y filtrar resultados con mas criterio.",
        },
      ],
    },
    pricing: {
      title: "Planes y precios",
      description:
        "Tres formas de usar Vallax: empieza gratis, desbloquea todo con Premium o cuéntanos qué necesitas a medida.",
      plans: [
        {
          name: "Gratuito",
          price: "0€",
          description:
            "Ideal si solo necesitas controlar una busqueda puntual para uso personal.",
          features: [
            "1 alerta creada",
            "1 alerta activa",
            "Hasta 5 palabras clave por alerta",
            "1 plataforma por alerta",
          ],
          ctaLabel: "Empieza gratis",
          ctaHref: "#download-app",
        },
        {
          name: "Premium",
          price: "11,99€",
          description:
            "Pensado para revendedores, coleccionistas o usuarios que necesitan mas capacidad, analisis inteligente y filtros mas avanzados.",
          features: [
            "Hasta 15 alertas creadas",
            "15 alertas activas al mismo tiempo",
            "Todas las plataformas disponibles por alerta",
            "Hasta 24 palabras clave por alerta",
            "Inteligencia artificial para analizar anuncios",
            "Filtros avanzados: Regex y Regex inverso",
          ],
          ctaLabel: "Hazte Premium",
          ctaHref: "#download-app",
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
      title: "Comunidad",
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
          question: "¿Qué hace Vallax Premium?",
          answer:
            "Vallax Premium amplía la capacidad de alertas, habilita filtros avanzados y añade inteligencia artificial para analizar anuncios con más contexto.",
        },
        {
          question: "¿Por qué Vallax detiene algunas alertas?",
          answer:
            "Si una alerta genera demasiados resultados en poco tiempo, puede pausarse para proteger la estabilidad del servicio. Revísala, ajusta filtros si hace falta y vuelve a activarla.",
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
      tagline:
        "La herramienta definitiva para cazadores de chollos. La app mas rapida del mercado para profesionales.",
      productTitle: "Producto",
      legalTitle: "Legal",
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
        home: "Home",
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
        "Vallax detects new listings on Wallapop, Vinted, Milanuncios and more as soon as they appear. See new deals before anyone else and get there first.",
      primaryCta: "Download for Android",
      availability: "Available on Android and iOS",
      platforms: {
        title: "Supported platforms",
      },
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
            "The moment a listing goes live, the alert appears instantly with no delay.",
        },
        {
          title: "Precise",
          description:
            "Use keywords, exclusions, price, and location to find only the listings you're really interested in.",
        },
        {
          title: "Artificial intelligence",
          description:
            "Analyze listings to spot better opportunities and filter results with more context.",
        },
      ],
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
            "1 alert created",
            "1 active alert",
            "Up to 5 keywords per alert",
            "1 marketplace per alert",
          ],
          ctaLabel: "Start free",
          ctaHref: "#download-app",
        },
        {
          name: "Premium",
          price: "€11.99",
          description:
            "For users who need more capacity, smart analysis and advanced filters.",
          features: [
            "Up to 15 alerts created",
            "15 simultaneous active alerts",
            "All marketplaces available per alert",
            "Up to 24 keywords per alert",
            "Artificial intelligence to analyze listings",
            "Advanced filters: Regex and reverse Regex",
          ],
          ctaLabel: "Upgrade to Premium",
          ctaHref: "#download-app",
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
      title: "Community",
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
          question: "What does Vallax Premium include?",
          answer:
            "Vallax Premium increases your alert capacity, unlocks advanced filters and adds artificial intelligence to analyze listings with more context.",
        },
        {
          question: "Why does Vallax pause some alerts?",
          answer:
            "If an alert produces too many matches in a short period, it may be paused to protect service stability. Review it, tighten the filters if needed and reactivate it.",
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
      tagline:
        "The definitive tool for bargain hunters. The fastest app on the market for professionals.",
      productTitle: "Product",
      legalTitle: "Legal",
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
      home: "Accueil",
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
      "Vallax detecte les nouvelles annonces sur Wallapop, Vinted, Milanuncios et plus des leur publication. Voyez les meilleures offres avant tout le monde.",
    primaryCta: "Télécharger pour Android",
    availability: "Disponible sur Android et iOS",
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
          "Quand une annonce est publiee, l'alerte apparait tout de suite sans attente.",
      },
      {
        title: "Precis",
        description: "Filtrez par mots-cles, exclusions, prix et localisation.",
      },
      {
        title: "Intelligence artificielle",
        description:
          "Analyse les annonces pour identifier de meilleures opportunites et filtrer avec plus de contexte.",
      },
    ],
  },
  pricing: {
    title: "Plans et tarifs",
    description:
      "Trois facons d'utiliser Vallax: gratuit, Premium ou un plan personnalise.",
    plans: [
      {
        name: "Gratuit",
        price: "0 €",
        description:
          "Ideal pour surveiller une recherche ponctuelle pour un usage personnel.",
        features: [
          "1 alerte creee",
          "1 alerte active",
          "Jusqu'a 5 mots-cles par alerte",
          "1 plateforme par alerte",
        ],
        ctaLabel: "Commencer gratuitement",
        ctaHref: "#download-app",
      },
      {
        name: "Premium",
        price: "11,99 €",
        description:
          "Pour les utilisateurs qui ont besoin de plus de capacite, d'analyse intelligente et de filtres avances.",
        features: [
          "Jusqu'a 15 alertes creees",
          "15 alertes actives simultanement",
          "Toutes les plateformes disponibles par alerte",
          "Jusqu'a 24 mots-cles par alerte",
          "Intelligence artificielle pour analyser les annonces",
          "Filtres avances: regex et regex inversee",
        ],
        ctaLabel: "Passer a Premium",
        ctaHref: "#download-app",
        badge: "Le plus populaire",
      },
      {
        name: "Sur mesure",
        price: "Sur mesure",
        description:
          "Besoin de quelque chose en plus ? Dites-nous ce dont vous avez besoin.",
        features: [
          "Capacite et automatisations personnalisees",
          "Integrations avec vos outils preferes",
          "Support dedie et accords sur mesure",
        ],
        ctaLabel: "Parlons-en",
        ctaHref: "mailto:vallaxdev@gmail.com?subject=Vallax%20custom%20plan",
      },
    ],
  },
  community: {
    title: "Communaute",
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
        question: "Que comprend Vallax Premium ?",
        answer:
          "Vallax Premium augmente le nombre d'alertes, active des filtres avances et ajoute de l'intelligence artificielle pour analyser les annonces avec plus de contexte.",
      },
      {
        question: "Pourquoi Vallax met certaines alertes en pause ?",
        answer:
          "Si une alerte genere trop de resultats en peu de temps, elle peut etre mise en pause pour proteger la stabilite du service.",
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
    tagline:
      "L'outil ideal pour les chasseurs de bonnes affaires. Une app rapide pensee pour les utilisateurs exigeants.",
    productTitle: "Produit",
    legalTitle: "Legal",
    legal: [
      { label: "Conditions d'utilisation", href: "/docs/terms-of-service" },
      { label: "Politique de confidentialite", href: "/docs/privacy-policy" },
      { label: "Politique de cookies", href: "/docs/cookie-policy" },
      { label: "Mentions legales", href: "/docs/legal-notice" },
    ],
    contactEmailLabel: "vallaxdev@gmail.com",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
      { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
    ],
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
      home: "Home",
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
      "Vallax rileva nuovi annunci su Wallapop, Vinted, Milanuncios e altro non appena compaiono. Vedi le occasioni prima di tutti e arriva per primo.",
    primaryCta: "Scarica per Android",
    availability: "Disponibile su Android e iOS",
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
          "Quando viene pubblicato un nuovo annuncio, l'avviso appare subito senza attese.",
      },
      {
        title: "Preciso",
        description:
          "Filtra per parole chiave, esclusioni, prezzo e posizione.",
      },
      {
        title: "Intelligenza artificiale",
        description:
          "Analizza gli annunci per individuare occasioni migliori e filtrare i risultati con piu criterio.",
      },
    ],
  },
  pricing: {
    title: "Piani e prezzi",
    description:
      "Tre modi per usare Vallax: gratis, Premium o piano personalizzato.",
    plans: [
      {
        name: "Gratuito",
        price: "0 €",
        description:
          "Ideale per monitorare una ricerca specifica per uso personale.",
        features: [
          "1 avviso creato",
          "1 avviso attivo",
          "Fino a 5 parole chiave per avviso",
          "1 piattaforma per avviso",
        ],
        ctaLabel: "Inizia gratis",
        ctaHref: "#download-app",
      },
      {
        name: "Premium",
        price: "11,99 €",
        description:
          "Per chi ha bisogno di piu capacita, analisi intelligente e filtri avanzati.",
        features: [
          "Fino a 15 avvisi creati",
          "15 avvisi attivi simultanei",
          "Tutte le piattaforme disponibili per avviso",
          "Fino a 24 parole chiave per avviso",
          "Intelligenza artificiale per analizzare gli annunci",
          "Filtri avanzati: regex e regex inversa",
        ],
        ctaLabel: "Passa a Premium",
        ctaHref: "#download-app",
        badge: "Il piu popolare",
      },
      {
        name: "Personalizzato",
        price: "Su misura",
        description:
          "Serve qualcosa oltre questa tabella? Raccontaci le tue esigenze.",
        features: [
          "Capacita e automazioni personalizzate",
          "Integrazioni con i tuoi strumenti preferiti",
          "Supporto dedicato e accordi su misura",
        ],
        ctaLabel: "Contattaci",
        ctaHref: "mailto:vallaxdev@gmail.com?subject=Vallax%20custom%20plan",
      },
    ],
  },
  community: {
    title: "Comunita",
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
        question: "Cosa include Vallax Premium?",
        answer:
          "Vallax Premium aumenta la capacita degli avvisi, sblocca filtri avanzati e aggiunge intelligenza artificiale per analizzare meglio gli annunci.",
      },
      {
        question: "Perche Vallax mette in pausa alcuni avvisi?",
        answer:
          "Se un avviso genera troppi risultati in poco tempo, puo essere messo in pausa per proteggere la stabilita del servizio.",
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
    tagline:
      "Lo strumento definitivo per chi cerca occasioni. L'app piu veloce sul mercato per utenti esigenti.",
    productTitle: "Prodotto",
    legalTitle: "Legale",
    legal: [
      { label: "Termini di servizio", href: "/docs/terms-of-service" },
      { label: "Informativa sulla privacy", href: "/docs/privacy-policy" },
      { label: "Informativa sui cookie", href: "/docs/cookie-policy" },
      { label: "Note legali", href: "/docs/legal-notice" },
    ],
    contactEmailLabel: "vallaxdev@gmail.com",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
      { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
    ],
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
      home: "Start",
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
      "Vallax wykrywa nowe ogloszenia na Wallapop, Vinted, Milanuncios i innych platformach zaraz po publikacji. Zobacz okazje przed innymi i badz pierwszy.",
    primaryCta: "Pobierz na Androida",
    availability: "Dostepne na Androidzie i iOS",
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
          "Gdy pojawia sie nowe ogloszenie, alert wyswietla sie od razu bez opoznien.",
      },
      {
        title: "Precyzyjnie",
        description:
          "Filtruj po slowach kluczowych, wykluczeniach, cenie i lokalizacji.",
      },
      {
        title: "Sztuczna inteligencja",
        description:
          "Analizuje ogloszenia, aby szybciej wylapywac lepsze okazje i lepiej filtrowac wyniki.",
      },
    ],
  },
  pricing: {
    title: "Plany i ceny",
    description:
      "Trzy sposoby korzystania z Vallax: darmowy, Premium lub plan indywidualny.",
    plans: [
      {
        name: "Darmowy",
        price: "0 €",
        description:
          "Idealny do monitorowania pojedynczego wyszukiwania na uzytek prywatny.",
        features: [
          "1 utworzony alert",
          "1 aktywny alert",
          "Do 5 slow kluczowych na alert",
          "1 platforma na alert",
        ],
        ctaLabel: "Zacznij za darmo",
        ctaHref: "#download-app",
      },
      {
        name: "Premium",
        price: "11,99 €",
        description:
          "Dla tych, ktorzy potrzebuja wiekszej pojemnosci, inteligentnej analizy i zaawansowanych filtrow.",
        features: [
          "Do 15 utworzonych alertow",
          "15 aktywnych alertow jednoczesnie",
          "Wszystkie platformy dostepne dla alertu",
          "Do 24 slow kluczowych na alert",
          "Sztuczna inteligencja do analizy ogloszen",
          "Zaawansowane filtry: regex i odwrotny regex",
        ],
        ctaLabel: "Przejdz na Premium",
        ctaHref: "#download-app",
        badge: "Najpopularniejszy",
      },
      {
        name: "Indywidualny",
        price: "Na zamowienie",
        description:
          "Potrzebujesz czegos wiecej niz w tabeli? Daj nam znac.",
        features: [
          "Indywidualna pojemnosc i automatyzacje",
          "Integracje z Twoimi narzedziami",
          "Dedykowane wsparcie i umowy na miare",
        ],
        ctaLabel: "Porozmawiajmy",
        ctaHref: "mailto:vallaxdev@gmail.com?subject=Vallax%20custom%20plan",
      },
    ],
  },
  community: {
    title: "Spolecznosc",
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
        question: "Co obejmuje Vallax Premium?",
        answer:
          "Vallax Premium zwieksza limit alertow, odblokowuje zaawansowane filtry i dodaje sztuczna inteligencje do analizy ogloszen.",
      },
      {
        question: "Dlaczego Vallax wstrzymuje niektore alerty?",
        answer:
          "Jesli alert generuje zbyt wiele wynikow w krotkim czasie, moze zostac wstrzymany, aby chronic stabilnosc uslugi.",
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
    tagline:
      "Najlepsze narzedzie dla lowcow okazji. Szybka aplikacja dla wymagajacych uzytkownikow.",
    productTitle: "Produkt",
    legalTitle: "Informacje prawne",
    legal: [
      { label: "Regulamin", href: "/docs/terms-of-service" },
      { label: "Polityka prywatnosci", href: "/docs/privacy-policy" },
      { label: "Polityka cookies", href: "/docs/cookie-policy" },
      { label: "Nota prawna", href: "/docs/legal-notice" },
    ],
    contactEmailLabel: "vallaxdev@gmail.com",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/vallaxbot/" },
      { label: "YouTube", href: "https://www.youtube.com/@vallax-app/" },
    ],
    rights: "© 2025 Vallax. Wszelkie prawa zastrzezone.",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as string[]).includes(value);
}
