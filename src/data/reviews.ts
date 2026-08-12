import type { Locale } from "../i18n";

export const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.insomnis.vallax";

export const featuredReviews = [
    {
        author: "Ivan Brotons Portero",
        rating: 5,
        datePublished: "2026-08-07",
        body: "tiene mucho potencial!",
        language: "es",
    },
    {
        author: "Rìta Rowe",
        rating: 5,
        datePublished: "2026-08-04",
        body: "It is very fast at finding opportunities so you don't waste your time",
        language: "en",
    },
    {
        author: "Darel Chaviano",
        rating: 5,
        datePublished: "2026-08-04",
        body: "10/10 la recomendaba",
        language: "es",
    },
] as const;

export const reviewsUi: Record<
    Locale,
    { eyebrow: string; title: string; description: string; source: string }
> = {
    es: {
        eyebrow: "Opiniones verificadas",
        title: "Lo que dicen quienes llegan primero",
        description: "Reseñas publicadas por usuarios reales de Vallax en Google Play.",
        source: "Ver Vallax en Google Play",
    },
    en: {
        eyebrow: "Verified reviews",
        title: "What early adopters say",
        description: "Reviews posted by real Vallax users on Google Play.",
        source: "View Vallax on Google Play",
    },
    fr: {
        eyebrow: "Avis vérifiés",
        title: "Ce qu'en disent les utilisateurs",
        description: "Avis publiés par de vrais utilisateurs de Vallax sur Google Play.",
        source: "Voir Vallax sur Google Play",
    },
    it: {
        eyebrow: "Recensioni verificate",
        title: "Cosa dicono gli utenti",
        description: "Recensioni pubblicate da utenti reali di Vallax su Google Play.",
        source: "Vedi Vallax su Google Play",
    },
    pl: {
        eyebrow: "Zweryfikowane opinie",
        title: "Co mówią użytkownicy",
        description: "Opinie prawdziwych użytkowników Vallax opublikowane w Google Play.",
        source: "Zobacz Vallax w Google Play",
    },
};
