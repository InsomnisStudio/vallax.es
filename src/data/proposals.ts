import type { Locale } from "../i18n";

export type ProposalStatus = "accepted" | "completed";
export type ProposalOrigin = "team" | "community";

export interface Proposal {
    id: string;
    status: ProposalStatus;
    origin: ProposalOrigin;
    author?: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
}

export const proposals: Proposal[] = [
    {
        id: "ios-app",
        status: "accepted",
        origin: "team",
        title: {
            es: "Aplicación para iOS",
            en: "iOS app",
            fr: "Application iOS",
            it: "App per iOS",
            pl: "Aplikacja na iOS",
        },
        description: {
            es: "Llevar la experiencia de Vallax a iPhone y iPad.",
            en: "Bring the Vallax experience to iPhone and iPad.",
            fr: "Proposer l'expérience Vallax sur iPhone et iPad.",
            it: "Portare l'esperienza Vallax su iPhone e iPad.",
            pl: "Udostepnienie Vallax na iPhone i iPad.",
        },
    },
    {
        id: "android-app",
        status: "completed",
        origin: "team",
        title: {
            es: "Aplicación para Android",
            en: "Android app",
            fr: "Application Android",
            it: "App per Android",
            pl: "Aplikacja na Androida",
        },
        description: {
            es: "Vallax ya está disponible para descargar y utilizar en dispositivos Android.",
            en: "Vallax is now available to download and use on Android devices.",
            fr: "Vallax est maintenant disponible au téléchargement sur les appareils Android.",
            it: "Vallax è ora disponibile per il download sui dispositivi Android.",
            pl: "Vallax jest juz dostepny do pobrania na urzadzeniach z Androidem.",
        },
    },
    {
        id: "ai-filter",
        status: "completed",
        origin: "team",
        title: {
            es: "Implementación de filtro con inteligencia artificial",
            en: "AI-powered filter implementation",
            fr: "Mise en place d'un filtre avec intelligence artificielle",
            it: "Implementazione del filtro con intelligenza artificiale",
            pl: "Wdrozenie filtra opartego na sztucznej inteligencji",
        },
        description: {
            es: "Filtrado inteligente para encontrar anuncios más relevantes y reducir resultados no deseados.",
            en: "Smart filtering to find more relevant listings and reduce unwanted results.",
            fr: "Un filtrage intelligent pour trouver des annonces plus pertinentes et réduire les résultats indésirables.",
            it: "Filtro intelligente per trovare annunci più pertinenti e ridurre i risultati indesiderati.",
            pl: "Inteligentne filtrowanie ulatwiajace znajdowanie trafniejszych ogloszen i ograniczanie niepozadanych wynikow.",
        },
    },
    {
        id: "alert-list-views",
        status: "completed",
        origin: "community",
        author: "José Ramón",
        title: {
            es: "Vistas compactas para los avisos",
            en: "Compact views for alerts",
            fr: "Vues compactes pour les alertes",
            it: "Viste compatte per gli avvisi",
            pl: "Kompaktowe widoki alertow",
        },
        description: {
            es: "Permite alternar entre la vista detallada y diseños compactos de dos o tres columnas para ver más avisos sin hacer tanto scroll.",
            en: "Switch between the detailed view and compact two- or three-column layouts to see more alerts with less scrolling.",
            fr: "Permet de passer de la vue détaillée à des vues compactes sur deux ou trois colonnes pour voir plus d'alertes sans autant faire défiler.",
            it: "Permette di alternare la vista dettagliata con layout compatti a due o tre colonne per vedere più avvisi scorrendo meno.",
            pl: "Pozwala przelaczac miedzy widokiem szczegolowym a kompaktowym ukladem dwu- lub trzykolumnowym, aby widziec wiecej alertow bez przewijania.",
        },
    },
];

export const proposalsUi: Record<Locale, {
    navLabel: string;
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    acceptedTitle: string;
    acceptedDescription: string;
    completedTitle: string;
    completedDescription: string;
    empty: string;
    formEyebrow: string;
    formTitle: string;
    formDescription: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    proposalLabel: string;
    proposalPlaceholder: string;
    submit: string;
    mailNotice: string;
    emailSubject: string;
}> = {
    es: {
        navLabel: "Propuestas",
        seoTitle: "Vallax - Propuestas y próximas mejoras",
        seoDescription: "Consulta las próximas mejoras de Vallax, descubre las propuestas terminadas y envíanos tu idea.",
        eyebrow: "Construimos Vallax contigo",
        title: "Propuestas que se convierten en producto",
        description: "Aquí puedes seguir las ideas aceptadas, ver qué mejoras ya están terminadas y proponernos qué debería venir después.",
        acceptedTitle: "Próximas implementaciones",
        acceptedDescription: "Propuestas aceptadas que tenemos previsto incorporar a Vallax.",
        completedTitle: "Terminadas",
        completedDescription: "Ideas que ya forman parte de Vallax.",
        empty: "Todavía no hay propuestas en esta sección.",
        formEyebrow: "Tu turno",
        formTitle: "Envíanos una propuesta",
        formDescription: "Cuéntanos qué mejorarías o qué funcionalidad te gustaría utilizar. Cuanto más concreta sea la idea, mejor podremos valorarla.",
        nameLabel: "Nombre",
        namePlaceholder: "Cómo te llamas",
        emailLabel: "Email",
        emailPlaceholder: "tu@email.com",
        subjectLabel: "Título de la propuesta",
        subjectPlaceholder: "Resume tu idea en una frase",
        proposalLabel: "Propuesta",
        proposalPlaceholder: "Explica el problema y cómo te gustaría resolverlo...",
        submit: "Preparar correo",
        mailNotice: "Al continuar se abrirá tu aplicación de correo. Revisa el mensaje y pulsa enviar para hacérnoslo llegar.",
        emailSubject: "Propuesta para Vallax",
    },
    en: {
        navLabel: "Ideas", seoTitle: "Vallax - Ideas and upcoming improvements", seoDescription: "Explore upcoming Vallax improvements, completed ideas and send us your proposal.", eyebrow: "Building Vallax with you", title: "Ideas that become part of the product", description: "Follow accepted ideas, see what has already shipped and suggest what should come next.", acceptedTitle: "Coming next", acceptedDescription: "Accepted ideas that we plan to add to Vallax.", completedTitle: "Completed", completedDescription: "Ideas that are already part of Vallax.", empty: "There are no ideas in this section yet.", formEyebrow: "Your turn", formTitle: "Send us an idea", formDescription: "Tell us what you would improve or which feature you would like to use. The more specific the idea, the better we can assess it.", nameLabel: "Name", namePlaceholder: "Your name", emailLabel: "Email", emailPlaceholder: "you@email.com", subjectLabel: "Idea title", subjectPlaceholder: "Sum up your idea in one sentence", proposalLabel: "Your idea", proposalPlaceholder: "Explain the problem and how you would like to solve it...", submit: "Prepare email", mailNotice: "Your email app will open next. Review the message and press send to deliver it to us.", emailSubject: "Idea for Vallax",
    },
    fr: {
        navLabel: "Propositions", seoTitle: "Vallax - Propositions et améliorations à venir", seoDescription: "Découvrez les prochaines améliorations de Vallax, les idées terminées et envoyez-nous votre proposition.", eyebrow: "Construisons Vallax ensemble", title: "Des idées qui deviennent réalité", description: "Suivez les idées acceptées, découvrez les améliorations terminées et proposez la prochaine étape.", acceptedTitle: "Prochainement", acceptedDescription: "Les propositions acceptées que nous prévoyons d'ajouter à Vallax.", completedTitle: "Terminées", completedDescription: "Les idées qui font déjà partie de Vallax.", empty: "Aucune proposition dans cette section pour le moment.", formEyebrow: "À vous", formTitle: "Envoyez-nous une proposition", formDescription: "Dites-nous ce que vous amélioreriez ou quelle fonctionnalité vous aimeriez utiliser. Plus l'idée est précise, mieux nous pourrons l'évaluer.", nameLabel: "Nom", namePlaceholder: "Votre nom", emailLabel: "E-mail", emailPlaceholder: "vous@email.com", subjectLabel: "Titre de la proposition", subjectPlaceholder: "Résumez votre idée en une phrase", proposalLabel: "Proposition", proposalPlaceholder: "Expliquez le problème et la solution souhaitée...", submit: "Préparer l'e-mail", mailNotice: "Votre application de messagerie va s'ouvrir. Vérifiez le message puis envoyez-le pour nous le transmettre.", emailSubject: "Proposition pour Vallax",
    },
    it: {
        navLabel: "Proposte", seoTitle: "Vallax - Proposte e prossimi miglioramenti", seoDescription: "Scopri i prossimi miglioramenti di Vallax, le idee completate e inviaci la tua proposta.", eyebrow: "Costruiamo Vallax insieme", title: "Proposte che diventano prodotto", description: "Segui le idee accettate, scopri quelle già completate e proponi cosa dovrebbe arrivare dopo.", acceptedTitle: "In arrivo", acceptedDescription: "Proposte accettate che prevediamo di aggiungere a Vallax.", completedTitle: "Completate", completedDescription: "Idee che fanno già parte di Vallax.", empty: "Non ci sono ancora proposte in questa sezione.", formEyebrow: "Tocca a te", formTitle: "Inviaci una proposta", formDescription: "Raccontaci cosa miglioreresti o quale funzione vorresti usare. Più l'idea è concreta, meglio potremo valutarla.", nameLabel: "Nome", namePlaceholder: "Il tuo nome", emailLabel: "Email", emailPlaceholder: "tu@email.com", subjectLabel: "Titolo della proposta", subjectPlaceholder: "Riassumi la tua idea in una frase", proposalLabel: "Proposta", proposalPlaceholder: "Spiega il problema e come vorresti risolverlo...", submit: "Prepara email", mailNotice: "Si aprirà la tua app di posta. Controlla il messaggio e premi invia per farcelo arrivare.", emailSubject: "Proposta per Vallax",
    },
    pl: {
        navLabel: "Pomysly", seoTitle: "Vallax - Pomysly i nadchodzace ulepszenia", seoDescription: "Poznaj nadchodzace ulepszenia Vallax, ukonczone pomysly i wyslij nam swoja propozycje.", eyebrow: "Tworzymy Vallax razem", title: "Pomysly, ktore staja sie produktem", description: "Sledz zaakceptowane pomysly, zobacz ukonczone ulepszenia i zaproponuj, co powinno pojawic sie dalej.", acceptedTitle: "W planach", acceptedDescription: "Zaakceptowane pomysly, ktore planujemy dodac do Vallax.", completedTitle: "Ukonczone", completedDescription: "Pomysly, ktore sa juz czescia Vallax.", empty: "W tej sekcji nie ma jeszcze pomyslow.", formEyebrow: "Twoja kolej", formTitle: "Wyslij nam pomysl", formDescription: "Napisz, co warto ulepszyc lub jakiej funkcji potrzebujesz. Im bardziej konkretny pomysl, tym lepiej mozemy go ocenic.", nameLabel: "Imie", namePlaceholder: "Twoje imie", emailLabel: "Email", emailPlaceholder: "ty@email.com", subjectLabel: "Tytul pomyslu", subjectPlaceholder: "Podsumuj pomysl w jednym zdaniu", proposalLabel: "Pomysl", proposalPlaceholder: "Opisz problem i sposob, w jaki chcesz go rozwiazac...", submit: "Przygotuj email", mailNotice: "Za chwile otworzy sie aplikacja pocztowa. Sprawdz wiadomosc i nacisnij wyslij.", emailSubject: "Pomysl dla Vallax",
    },
};
