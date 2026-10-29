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
  adHero: {
    title: string;
    description: string;
    primaryCta: string;
    availability: string;
    reviewSource: string;
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
      period?: string;
      annualPrice?: string;
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
        "Vallax — Alertas de Wallapop, Vinted, Milanuncios y Todocolección",
      description:
        "App para iOS y Android que te avisa al instante cuando aparece un anuncio nuevo en Wallapop, Vinted, Milanuncios o Todocolección. Descárgala gratis.",
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
    adHero: {
      title: "Te avisamos al instante cuando suben lo que buscas",
      description:
        "Crea una búsqueda y recibe una notificación en cuanto aparezca un anuncio nuevo en Wallapop, Vinted, Milanuncios o Todocoleccion. Llega antes que nadie a las gangas.",
      primaryCta: "Descargar gratis",
      availability: "Avisos al instante en Wallapop y Vinted",
      reviewSource: "Reseña en Google Play",
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
            "Filtra cada anuncio con una instrucción en lenguaje natural y descubre a cuánto se vende un artículo a partir de su foto.",
        },
      ],
    },
    pricing: {
      title: "Planes y precios",
      description: "Empieza gratis y sube de plan cuando lo necesites. Todos los planes reciben los anuncios a la misma velocidad.",
      plans: [
        {
          name: "Gratis",
          price: "0 €",
          description: "Ideal para vigilar una búsqueda puntual en una sola plataforma.",
          features: [
            "1 búsqueda activa",
            "5 palabras clave por búsqueda",
            "1 plataforma por búsqueda",
            "Filtro de IA comprando tokens",
          ],
          ctaLabel: "Empieza gratis",
          ctaHref: "#download-app",
        },
        {
          name: "Plus",
          price: "3,99 €",
          period: "/ mes",
          annualPrice: "o 29,99 € al año",
          description: "Para seguir varias búsquedas en todas las plataformas con más control.",
          features: [
            "5 búsquedas activas",
            "15 palabras clave por búsqueda",
            "Wallapop, Vinted, Milanuncios y Todocolección en cada búsqueda",
            "Filtro de IA comprando tokens",
          ],
          ctaLabel: "Elegir Plus",
          ctaHref: "#download-app",
        },
        {
          name: "Pro",
          price: "11,99 €",
          period: "/ mes",
          annualPrice: "o 99,99 € al año",
          description: "Para buscar a fondo con filtros avanzados e IA incluida cada mes.",
          features: [
            "50 búsquedas activas",
            "50 palabras clave por búsqueda",
            "Todas las plataformas en cada búsqueda",
            "25.000 tokens de IA al mes",
            "Regex y regex a ignorar",
            "Prueba gratis de 7 días",
          ],
          ctaLabel: "Probar Pro gratis",
          ctaHref: "#download-app",
          badge: "Más completo",
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
          question: "¿Qué diferencia hay entre Plus y Pro?",
          answer:
            "Plus te da 5 búsquedas activas, 15 palabras clave y todas las plataformas en cada búsqueda. Pro sube a 50 búsquedas y 50 palabras clave, añade regex e incluye 25.000 tokens de IA cada mes. Los dos reciben los anuncios a la misma velocidad que el plan gratuito.",
        },
        {
          question: "¿Necesito pagar para usar la IA?",
          answer:
            "No. Cualquier plan puede usar el filtro de IA y el botón «¿Cuánto cuesta?» comprando packs de tokens o canjeándolos con puntos. Pro incluye 25.000 tokens al mes.",
        },
        {
          question: "¿Puedo conseguir Plus o Pro gratis?",
          answer:
            "Sí. Ganas 1 punto por cada amigo que use tu código y cree su primera búsqueda. Con 3 puntos canjeas 7 días de Plus, y también hay días de Pro y tokens de IA en la tienda de puntos.",
        },
        {
          question: "¿Qué pasa con mis búsquedas si bajo de plan?",
          answer:
            "Nunca se borran. Las que no caben en tu nuevo plan se pausan y se reactivan solas si vuelves a subir. También puedes editarlas para que encajen.",
        },
        {
          question: "¿Por qué Vallax detiene algunas búsquedas?",
          answer:
            "Si una búsqueda genera demasiados resultados en poco tiempo, puede pausarse para proteger la estabilidad del servicio. Revísala, ajusta filtros si hace falta y vuelve a activarla.",
        },
        {
          question: "¿Funciona la ubicación en todas las plataformas?",
          answer:
            "Wallapop, Milanuncios y Todocolección sí respetan la ubicación. Vinted no ofrece una localización precisa, por lo que seguirás recibiendo anuncios fuera de tu zona incluso si la configuras.",
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
      rights: "© 2026 Vallax. Todos los derechos reservados.",
    },
  },
  en: {
    locale: "en",
    seo: {
      title:
        "Vallax — Wallapop, Vinted and Milanuncios Alerts",
      description:
        "The iOS and Android app that alerts you as soon as a new listing appears on Wallapop, Vinted, Milanuncios or Todocoleccion. Download it free.",
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
    adHero: {
      title: "Get instant alerts for the deals you want",
      description:
        "Create a search and get a notification as soon as a new listing appears on Wallapop, Vinted, Milanuncios or Todocoleccion. Reach the bargains before anyone else.",
      primaryCta: "Download free",
      availability: "Instant alerts for Wallapop and Vinted",
      reviewSource: "Review on Google Play",
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
            "Filter every listing with a plain-language instruction and find out what an item sells for from its photo.",
        },
      ],
    },
    pricing: {
      title: "Plans & pricing",
      description: "Start free and upgrade when you need more. Every plan gets new listings at the same speed.",
      plans: [
        {
          name: "Free",
          price: "€0",
          description: "Ideal for watching a single search on one platform.",
          features: [
            "1 active search",
            "5 keywords per search",
            "1 platform per search",
            "AI filter with purchased tokens",
          ],
          ctaLabel: "Start free",
          ctaHref: "#download-app",
        },
        {
          name: "Plus",
          price: "€3.99",
          period: "/ month",
          annualPrice: "or €29.99 per year",
          description: "For following several searches across every platform with more control.",
          features: [
            "5 active searches",
            "15 keywords per search",
            "Wallapop, Vinted, Milanuncios and Todocoleccion in every search",
            "AI filter with purchased tokens",
          ],
          ctaLabel: "Choose Plus",
          ctaHref: "#download-app",
        },
        {
          name: "Pro",
          price: "€11.99",
          period: "/ month",
          annualPrice: "or €99.99 per year",
          description: "For deep searching with advanced filters and AI included every month.",
          features: [
            "50 active searches",
            "50 keywords per search",
            "Every platform in every search",
            "25,000 AI tokens per month",
            "Regex and ignore regex",
            "7-day free trial",
          ],
          ctaLabel: "Try Pro free",
          ctaHref: "#download-app",
          badge: "Most complete",
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
          question: "What is the difference between Plus and Pro?",
          answer:
            "Plus gives you 5 active searches, 15 keywords and every platform in each search. Pro goes up to 50 searches and 50 keywords, adds regex and includes 25,000 AI tokens every month. Both get listings at the same speed as the free plan.",
        },
        {
          question: "Do I need to pay to use AI?",
          answer:
            "No. Any plan can use the AI filter and the \"How much is it?\" button by buying token packs or redeeming them with points. Pro includes 25,000 tokens per month.",
        },
        {
          question: "Can I get Plus or Pro for free?",
          answer:
            "Yes. You earn 1 point for every friend who uses your code and creates their first search. 3 points get you 7 days of Plus, and the points shop also has days of Pro and AI tokens.",
        },
        {
          question: "What happens to my searches if I downgrade?",
          answer:
            "They are never deleted. Searches that don't fit your new plan are paused and resume automatically if you upgrade again. You can also edit them to fit.",
        },
        {
          question: "Why does Vallax pause some searches?",
          answer:
            "If a search generates too many results in a short time, it may be paused to protect service stability. Review it, adjust filters if needed, and turn it back on.",
        },
        {
          question: "Does location work on every platform?",
          answer:
            "Wallapop, Milanuncios and Todocoleccion respect location. Vinted does not provide a precise location, so you may still get listings outside your area.",
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
      rights: "© 2026 Vallax. All rights reserved.",
    },
  },
} as Record<Locale, Translation>;

translations.fr = {
  ...translations.en,
  locale: "fr",
  seo: {
    title:
      "Vallax — Alertes Wallapop, Vinted et Milanuncios",
    description:
      "L'app iOS et Android vous avertit dès qu'une annonce paraît sur Wallapop, Vinted, Milanuncios ou Todocoleccion. Téléchargez-la gratuitement.",
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
  adHero: {
    title: "Soyez alerté dès que sort ce que vous cherchez",
    description:
      "Créez une recherche et recevez une notification dès qu'une nouvelle annonce apparaît sur Wallapop, Vinted, Milanuncios ou Todocoleccion. Arrivez avant tout le monde sur les bonnes affaires.",
    primaryCta: "Télécharger gratuitement",
    availability: "Alertes instantanées pour Wallapop et Vinted",
    reviewSource: "Avis sur Google Play",
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
          "Filtrez chaque annonce avec une instruction en langage naturel et découvrez à quel prix se vend un article à partir de sa photo.",
      },
    ],
  },
  pricing: {
    title: "Plans et tarifs",
    description: "Commencez gratuitement et passez à un plan supérieur quand vous en avez besoin. Tous les plans reçoivent les annonces à la même vitesse.",
    plans: [
      {
        name: "Gratuit",
        price: "0 €",
        description: "Idéal pour surveiller une recherche ponctuelle sur une seule plateforme.",
        features: [
          "1 recherche active",
          "5 mots-clés par recherche",
          "1 plateforme par recherche",
          "Filtre IA avec des tokens achetés",
        ],
        ctaLabel: "Commencer gratuitement",
        ctaHref: "#download-app",
      },
      {
        name: "Plus",
        price: "3,99 €",
        period: "/ mois",
        annualPrice: "ou 29,99 € par an",
        description: "Pour suivre plusieurs recherches sur toutes les plateformes avec plus de contrôle.",
        features: [
          "5 recherches actives",
          "15 mots-clés par recherche",
          "Wallapop, Vinted, Milanuncios et Todocoleccion dans chaque recherche",
          "Filtre IA avec des tokens achetés",
        ],
        ctaLabel: "Choisir Plus",
        ctaHref: "#download-app",
      },
      {
        name: "Pro",
        price: "11,99 €",
        period: "/ mois",
        annualPrice: "ou 99,99 € par an",
        description: "Pour chercher à fond avec des filtres avancés et l'IA incluse chaque mois.",
        features: [
          "50 recherches actives",
          "50 mots-clés par recherche",
          "Toutes les plateformes dans chaque recherche",
          "25 000 tokens IA par mois",
          "Regex et regex à ignorer",
          "Essai gratuit de 7 jours",
        ],
        ctaLabel: "Essayer Pro gratuitement",
        ctaHref: "#download-app",
        badge: "Le plus complet",
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
        question: "Quelle est la différence entre Plus et Pro ?",
        answer:
          "Plus vous donne 5 recherches actives, 15 mots-clés et toutes les plateformes dans chaque recherche. Pro passe à 50 recherches et 50 mots-clés, ajoute les regex et inclut 25 000 tokens IA chaque mois. Les deux reçoivent les annonces à la même vitesse que le plan gratuit.",
      },
      {
        question: "Faut-il payer pour utiliser l'IA ?",
        answer:
          "Non. Tous les plans peuvent utiliser le filtre IA et le bouton « Combien ça coûte ? » en achetant des packs de tokens ou en les échangeant contre des points. Pro inclut 25 000 tokens par mois.",
      },
      {
        question: "Puis-je obtenir Plus ou Pro gratuitement ?",
        answer:
          "Oui. Vous gagnez 1 point pour chaque ami qui utilise votre code et crée sa première recherche. Avec 3 points, vous obtenez 7 jours de Plus, et la boutique de points propose aussi des jours de Pro et des tokens IA.",
      },
      {
        question: "Que deviennent mes recherches si je change pour un plan inférieur ?",
        answer:
          "Elles ne sont jamais supprimées. Celles qui ne rentrent pas dans le nouveau plan sont mises en pause et se réactivent seules si vous repassez à un plan supérieur.",
      },
      {
        question: "Pourquoi Vallax met certaines recherches en pause ?",
        answer:
          "Si une recherche génère trop de résultats en peu de temps, elle peut être mise en pause pour protéger la stabilité du service.",
      },
      {
        question: "La localisation fonctionne-t-elle partout ?",
        answer:
          "Wallapop, Milanuncios et Todocoleccion respectent la localisation. Vinted ne fournit pas de localisation précise.",
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
    rights: "© 2026 Vallax. Tous droits reserves.",
  },
};

translations.it = {
  ...translations.en,
  locale: "it",
  seo: {
    title:
      "Vallax — Alert Wallapop, Vinted e Milanuncios",
    description:
      "L'app iOS e Android ti avvisa appena appare un nuovo annuncio su Wallapop, Vinted, Milanuncios o Todocoleccion. Scaricala gratuitamente.",
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
  adHero: {
    title: "Ti avvisiamo subito quando pubblicano ciò che cerchi",
    description:
      "Crea una ricerca e ricevi una notifica appena compare un nuovo annuncio su Wallapop, Vinted, Milanuncios o Todocoleccion. Arriva prima di tutti alle occasioni.",
    primaryCta: "Scarica gratis",
    availability: "Avvisi istantanei per Wallapop e Vinted",
    reviewSource: "Recensione su Google Play",
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
          "Filtra ogni annuncio con un'istruzione in linguaggio naturale e scopri a quanto si vende un articolo partendo dalla sua foto.",
      },
    ],
  },
  pricing: {
    title: "Piani e prezzi",
    description: "Inizia gratis e passa a un piano superiore quando ti serve. Tutti i piani ricevono gli annunci alla stessa velocità.",
    plans: [
      {
        name: "Gratis",
        price: "0 €",
        description: "Ideale per tenere d'occhio una ricerca puntuale su una sola piattaforma.",
        features: [
          "1 ricerca attiva",
          "5 parole chiave per ricerca",
          "1 piattaforma per ricerca",
          "Filtro IA acquistando token",
        ],
        ctaLabel: "Inizia gratis",
        ctaHref: "#download-app",
      },
      {
        name: "Plus",
        price: "3,99 €",
        period: "/ mese",
        annualPrice: "o 29,99 € all'anno",
        description: "Per seguire più ricerche su tutte le piattaforme con più controllo.",
        features: [
          "5 ricerche attive",
          "15 parole chiave per ricerca",
          "Wallapop, Vinted, Milanuncios e Todocoleccion in ogni ricerca",
          "Filtro IA acquistando token",
        ],
        ctaLabel: "Scegli Plus",
        ctaHref: "#download-app",
      },
      {
        name: "Pro",
        price: "11,99 €",
        period: "/ mese",
        annualPrice: "o 99,99 € all'anno",
        description: "Per cercare a fondo con filtri avanzati e IA inclusa ogni mese.",
        features: [
          "50 ricerche attive",
          "50 parole chiave per ricerca",
          "Tutte le piattaforme in ogni ricerca",
          "25.000 token IA al mese",
          "Regex e regex da ignorare",
          "Prova gratuita di 7 giorni",
        ],
        ctaLabel: "Prova Pro gratis",
        ctaHref: "#download-app",
        badge: "Il più completo",
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
        question: "Che differenza c'è tra Plus e Pro?",
        answer:
          "Plus ti dà 5 ricerche attive, 15 parole chiave e tutte le piattaforme in ogni ricerca. Pro arriva a 50 ricerche e 50 parole chiave, aggiunge le regex e include 25.000 token IA ogni mese. Entrambi ricevono gli annunci alla stessa velocità del piano gratuito.",
      },
      {
        question: "Devo pagare per usare l'IA?",
        answer:
          "No. Qualsiasi piano può usare il filtro IA e il pulsante «Quanto costa?» acquistando pacchetti di token o riscattandoli con i punti. Pro include 25.000 token al mese.",
      },
      {
        question: "Posso ottenere Plus o Pro gratis?",
        answer:
          "Sì. Guadagni 1 punto per ogni amico che usa il tuo codice e crea la sua prima ricerca. Con 3 punti riscatti 7 giorni di Plus, e nel negozio punti ci sono anche giorni di Pro e token IA.",
      },
      {
        question: "Cosa succede alle mie ricerche se passo a un piano inferiore?",
        answer:
          "Non vengono mai eliminate. Quelle che non rientrano nel nuovo piano vengono messe in pausa e si riattivano da sole se torni a un piano superiore.",
      },
      {
        question: "Perché Vallax mette in pausa alcune ricerche?",
        answer:
          "Se una ricerca genera troppi risultati in poco tempo, può essere messa in pausa per proteggere la stabilità del servizio.",
      },
      {
        question: "La posizione funziona su tutte le piattaforme?",
        answer:
          "Wallapop, Milanuncios e Todocoleccion rispettano la posizione. Vinted non fornisce una posizione precisa.",
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
    rights: "© 2026 Vallax. Tutti i diritti riservati.",
  },
};

translations.pl = {
  ...translations.en,
  locale: "pl",
  seo: {
    title:
      "Vallax — Alerty Wallapop, Vinted i Milanuncios",
    description:
      "Aplikacja na iOS i Android powiadamia o nowych ofertach na Wallapop, Vinted, Milanuncios i Todocoleccion. Pobierz ją bezpłatnie.",
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
  adHero: {
    title: "Powiadomimy Cię, gdy pojawi się to, czego szukasz",
    description:
      "Utwórz wyszukiwanie i otrzymaj powiadomienie, gdy tylko pojawi się nowe ogłoszenie na Wallapop, Vinted, Milanuncios lub Todocoleccion. Zdobądź okazje przed innymi.",
    primaryCta: "Pobierz za darmo",
    availability: "Natychmiastowe alerty z Wallapop i Vinted",
    reviewSource: "Opinia w Google Play",
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
          "Filtruj każde ogłoszenie poleceniem w zwykłym języku i sprawdź, za ile sprzedaje się przedmiot na podstawie jego zdjęcia.",
      },
    ],
  },
  pricing: {
    title: "Plany i ceny",
    description: "Zacznij za darmo i przejdź na wyższy plan, gdy będziesz potrzebować więcej. Wszystkie plany otrzymują ogłoszenia z tą samą szybkością.",
    plans: [
      {
        name: "Darmowy",
        price: "0 €",
        description: "Idealny do śledzenia jednego wyszukiwania na jednej platformie.",
        features: [
          "1 aktywne wyszukiwanie",
          "5 słów kluczowych na wyszukiwanie",
          "1 platforma na wyszukiwanie",
          "Filtr AI z kupionymi tokenami",
        ],
        ctaLabel: "Zacznij za darmo",
        ctaHref: "#download-app",
      },
      {
        name: "Plus",
        price: "3,99 €",
        period: "/ mies.",
        annualPrice: "lub 29,99 € rocznie",
        description: "Do śledzenia kilku wyszukiwań na wszystkich platformach z większą kontrolą.",
        features: [
          "5 aktywnych wyszukiwań",
          "15 słów kluczowych na wyszukiwanie",
          "Wallapop, Vinted, Milanuncios i Todocoleccion w każdym wyszukiwaniu",
          "Filtr AI z kupionymi tokenami",
        ],
        ctaLabel: "Wybierz Plus",
        ctaHref: "#download-app",
      },
      {
        name: "Pro",
        price: "11,99 €",
        period: "/ mies.",
        annualPrice: "lub 99,99 € rocznie",
        description: "Do dokładnego szukania z zaawansowanymi filtrami i AI w cenie co miesiąc.",
        features: [
          "50 aktywnych wyszukiwań",
          "50 słów kluczowych na wyszukiwanie",
          "Wszystkie platformy w każdym wyszukiwaniu",
          "25 000 tokenów AI miesięcznie",
          "Regex i regex do ignorowania",
          "7 dni za darmo",
        ],
        ctaLabel: "Wypróbuj Pro za darmo",
        ctaHref: "#download-app",
        badge: "Najpełniejszy",
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
        question: "Czym różni się Plus od Pro?",
        answer:
          "Plus daje 5 aktywnych wyszukiwań, 15 słów kluczowych i wszystkie platformy w każdym wyszukiwaniu. Pro to 50 wyszukiwań i 50 słów kluczowych, regex oraz 25 000 tokenów AI co miesiąc. Oba plany otrzymują ogłoszenia z tą samą szybkością co plan darmowy.",
      },
      {
        question: "Czy muszę płacić, żeby korzystać z AI?",
        answer:
          "Nie. Każdy plan może używać filtra AI i przycisku „Ile to kosztuje?”, kupując pakiety tokenów lub wymieniając je za punkty. Pro zawiera 25 000 tokenów miesięcznie.",
      },
      {
        question: "Czy mogę dostać Plus lub Pro za darmo?",
        answer:
          "Tak. Zdobywasz 1 punkt za każdego znajomego, który użyje Twojego kodu i utworzy pierwsze wyszukiwanie. Za 3 punkty dostajesz 7 dni Plus, a w sklepie punktów są też dni Pro i tokeny AI.",
      },
      {
        question: "Co się stanie z moimi wyszukiwaniami po zmianie na niższy plan?",
        answer:
          "Nigdy nie są usuwane. Te, które nie mieszczą się w nowym planie, zostają wstrzymane i wznawiają się same, gdy wrócisz na wyższy plan.",
      },
      {
        question: "Dlaczego Vallax wstrzymuje niektóre wyszukiwania?",
        answer:
          "Gdy wyszukiwanie generuje zbyt wiele wyników w krótkim czasie, może zostać wstrzymane dla stabilności usługi.",
      },
      {
        question: "Czy lokalizacja działa wszędzie?",
        answer:
          "Wallapop, Milanuncios i Todocoleccion uwzględniają lokalizację. Vinted nie podaje dokładnej lokalizacji.",
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
    rights: "© 2026 Vallax. Wszelkie prawa zastrzezone.",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return (locales as string[]).includes(value);
}
