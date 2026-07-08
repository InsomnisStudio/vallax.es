import type { Locale } from "../i18n";

export interface SeoDetail {
    slug: string;
    locale: Record<
        Locale,
        {
            title: string;
            description: string;
            intro: string;
            bullets: string[];
            cta: string;
        }
    >;
}

export const seoUi: Record<
    Locale,
    {
        platformHubTitle: string;
        platformHubDescription: string;
        solutionHubTitle: string;
        solutionHubDescription: string;
        cardCta: string;
        keyPointsTitle: string;
        relatedTitle: string;
        homeSectionTitle: string;
        homeSectionDescription: string;
        platformGroupTitle: string;
        solutionGroupTitle: string;
        openGroup: string;
    }
> = {
    es: {
        platformHubTitle: "Alertas por plataforma",
        platformHubDescription:
            "Explora como usar Vallax en cada marketplace y que ventajas obtienes en cada uno.",
        solutionHubTitle: "Vallax segun tu caso de uso",
        solutionHubDescription:
            "Elige la forma de usar Vallax que mejor encaja contigo: reventa, coleccionismo o caza de chollos.",
        cardCta: "Ver mas",
        keyPointsTitle: "Puntos clave",
        relatedTitle: "Tambien te puede interesar",
        homeSectionTitle: "Explora Vallax por plataforma o por objetivo",
        homeSectionDescription:
            "Una estructura pensada para atacar busquedas mas concretas y ayudarte a llegar antes al contenido que necesitas.",
        platformGroupTitle: "Plataformas",
        solutionGroupTitle: "Casos de uso",
        openGroup: "Abrir",
    },
    en: {
        platformHubTitle: "Alerts by marketplace",
        platformHubDescription:
            "See how Vallax works on each marketplace and what advantage you get from each one.",
        solutionHubTitle: "Vallax by use case",
        solutionHubDescription:
            "Choose the Vallax setup that fits you best: resale, collecting or bargain hunting.",
        cardCta: "Learn more",
        keyPointsTitle: "Key points",
        relatedTitle: "You may also like",
        homeSectionTitle: "Explore Vallax by marketplace or goal",
        homeSectionDescription:
            "A structure designed to target more specific searches and get users to the right content faster.",
        platformGroupTitle: "Marketplaces",
        solutionGroupTitle: "Use cases",
        openGroup: "Open",
    },
    fr: {
        platformHubTitle: "Alertes par plateforme",
        platformHubDescription:
            "Decouvrez comment Vallax fonctionne sur chaque marketplace et quels avantages vous obtenez.",
        solutionHubTitle: "Vallax selon votre usage",
        solutionHubDescription:
            "Choisissez l'approche Vallax qui vous convient: revente, collection ou bonnes affaires.",
        cardCta: "Voir plus",
        keyPointsTitle: "Points cles",
        relatedTitle: "A voir aussi",
        homeSectionTitle: "Explorez Vallax par plateforme ou par objectif",
        homeSectionDescription:
            "Une structure pensee pour viser des recherches plus precises et guider plus vite vers le bon contenu.",
        platformGroupTitle: "Plateformes",
        solutionGroupTitle: "Cas d'usage",
        openGroup: "Ouvrir",
    },
    it: {
        platformHubTitle: "Avvisi per piattaforma",
        platformHubDescription:
            "Scopri come usare Vallax su ogni marketplace e quali vantaggi offre ciascuno.",
        solutionHubTitle: "Vallax per caso d'uso",
        solutionHubDescription:
            "Scegli l'approccio Vallax piu adatto: rivendita, collezionismo o caccia alle occasioni.",
        cardCta: "Scopri di piu",
        keyPointsTitle: "Punti chiave",
        relatedTitle: "Ti puo interessare anche",
        homeSectionTitle: "Esplora Vallax per piattaforma o obiettivo",
        homeSectionDescription:
            "Una struttura pensata per intercettare ricerche piu specifiche e portare prima al contenuto giusto.",
        platformGroupTitle: "Piattaforme",
        solutionGroupTitle: "Casi d'uso",
        openGroup: "Apri",
    },
    pl: {
        platformHubTitle: "Alerty wedlug platformy",
        platformHubDescription:
            "Sprawdz, jak Vallax dziala na kazdej platformie i jakie daje przewagi.",
        solutionHubTitle: "Vallax wedlug zastosowania",
        solutionHubDescription:
            "Wybierz podejscie Vallax dla odsprzedazy, kolekcjonowania lub polowania na okazje.",
        cardCta: "Zobacz wiecej",
        keyPointsTitle: "Najwazniejsze punkty",
        relatedTitle: "Moze Cie zainteresowac",
        homeSectionTitle: "Poznaj Vallax wedlug platformy lub celu",
        homeSectionDescription:
            "Struktura przygotowana pod bardziej konkretne wyszukiwania i szybsze dotarcie do wlasciwej tresci.",
        platformGroupTitle: "Platformy",
        solutionGroupTitle: "Zastosowania",
        openGroup: "Otworz",
    },
};

export const platformPages: SeoDetail[] = [
    {
        slug: "wallapop-alerts",
        locale: {
            es: {
                title: "Alertas de Wallapop para llegar antes que nadie",
                description:
                    "Configura alertas de Wallapop con Vallax y recibe nuevos anuncios al instante para reaccionar antes que otros compradores.",
                intro:
                    "Wallapop se mueve muy rapido. Vallax te ayuda a detectar nuevos anuncios al momento para que no llegues tarde a los mejores precios.",
                bullets: [
                    "Detecta nuevas publicaciones en cuanto aparecen.",
                    "Filtra por precio, palabras clave y exclusiones.",
                    "Ideal para tecnologia, consolas, moviles y lotes de reventa.",
                ],
                cta: "Crear alerta de Wallapop",
            },
            en: {
                title: "Wallapop alerts to get there first",
                description:
                    "Set up Wallapop alerts with Vallax and receive new listings instantly so you can act before other buyers.",
                intro:
                    "Wallapop moves fast. Vallax helps you detect new listings immediately so you do not miss the best prices.",
                bullets: [
                    "Detect new listings as soon as they go live.",
                    "Filter by price, keywords and exclusions.",
                    "Great for tech, consoles, phones and resale bundles.",
                ],
                cta: "Create Wallapop alert",
            },
            fr: {
                title: "Alertes Wallapop pour arriver avant tout le monde",
                description:
                    "Configurez des alertes Wallapop avec Vallax et recevez les nouvelles annonces instantanement.",
                intro:
                    "Wallapop va tres vite. Vallax vous aide a detecter les nouvelles annonces au bon moment pour ne pas manquer les meilleurs prix.",
                bullets: [
                    "Detection immediate des nouvelles annonces.",
                    "Filtres par prix, mots-cles et exclusions.",
                    "Utile pour tech, consoles, telephones et lots de revente.",
                ],
                cta: "Creer une alerte Wallapop",
            },
            it: {
                title: "Alert Wallapop per arrivare prima degli altri",
                description:
                    "Configura alert Wallapop con Vallax e ricevi i nuovi annunci subito.",
                intro:
                    "Wallapop e molto rapido. Vallax ti aiuta a intercettare i nuovi annunci in tempo per non perdere i prezzi migliori.",
                bullets: [
                    "Rilevamento immediato dei nuovi annunci.",
                    "Filtri per prezzo, parole chiave ed esclusioni.",
                    "Perfetto per tecnologia, console, telefoni e lotti da rivendita.",
                ],
                cta: "Crea alert Wallapop",
            },
            pl: {
                title: "Alerty Wallapop, aby byc przed innymi",
                description:
                    "Skonfiguruj alerty Wallapop w Vallax i otrzymuj nowe ogloszenia natychmiast po publikacji.",
                intro:
                    "Wallapop dziala bardzo szybko. Vallax pomaga wychwycic nowe ogloszenia od razu, zanim znikna najlepsze ceny.",
                bullets: [
                    "Natychmiastowe wykrywanie nowych ogloszen.",
                    "Filtry ceny, slow kluczowych i wykluczen.",
                    "Dobre dla elektroniki, konsol, telefonow i zestawow do odsprzedazy.",
                ],
                cta: "Utworz alert Wallapop",
            },
        },
    },
    {
        slug: "vinted-alerts",
        locale: {
            es: {
                title: "Alertas de Vinted para detectar oportunidades antes",
                description:
                    "Usa Vallax para recibir alertas de Vinted y enterarte antes de nuevas prendas, zapatillas y lotes interesantes.",
                intro:
                    "Vinted es clave para moda y coleccionables. Con Vallax puedes reaccionar rapido y filtrar mejor lo que realmente quieres comprar.",
                bullets: [
                    "Alertas inmediatas cuando aparece un anuncio interesante.",
                    "Muy util para ropa, sneakers y lotes con margen.",
                    "Combina palabras clave y exclusiones para afinar resultados.",
                ],
                cta: "Crear alerta de Vinted",
            },
            en: {
                title: "Vinted alerts to spot opportunities faster",
                description:
                    "Use Vallax to get Vinted alerts and hear about new clothing, sneaker and bundle listings before others.",
                intro:
                    "Vinted is a strong channel for fashion and collectibles. Vallax helps you react fast and filter what you actually want to buy.",
                bullets: [
                    "Instant alerts when interesting listings appear.",
                    "Useful for clothing, sneakers and profitable bundles.",
                    "Combine keywords and exclusions for cleaner results.",
                ],
                cta: "Create Vinted alert",
            },
            fr: {
                title: "Alertes Vinted pour reperer les bonnes opportunites",
                description:
                    "Recevez des alertes Vinted avec Vallax pour voir les nouvelles annonces avant les autres.",
                intro:
                    "Vinted est tres utile pour la mode et certains collectibles. Vallax vous aide a reagir vite et a mieux filtrer.",
                bullets: [
                    "Alertes instantanees sur les nouvelles annonces.",
                    "Utile pour vetements, sneakers et lots interessants.",
                    "Associez mots-cles et exclusions pour plus de precision.",
                ],
                cta: "Creer une alerte Vinted",
            },
            it: {
                title: "Alert Vinted per trovare occasioni piu in fretta",
                description:
                    "Ricevi alert Vinted con Vallax per vedere nuovi capi, sneakers e lotti prima degli altri.",
                intro:
                    "Vinted e molto utile per moda e alcuni articoli da collezione. Vallax ti aiuta a reagire subito e filtrare meglio.",
                bullets: [
                    "Alert immediati sui nuovi annunci interessanti.",
                    "Ideale per abbigliamento, sneakers e lotti interessanti.",
                    "Combina parole chiave ed esclusioni per maggiore precisione.",
                ],
                cta: "Crea alert Vinted",
            },
            pl: {
                title: "Alerty Vinted, by szybciej znajdowac okazje",
                description:
                    "Korzystaj z Vallax, aby dostawac alerty Vinted o nowych ubraniach, sneakersach i zestawach zanim zrobi to konkurencja.",
                intro:
                    "Vinted dobrze sprawdza sie przy modzie i wybranych kolekcjach. Vallax pomaga reagowac szybciej i lepiej filtrowac wyniki.",
                bullets: [
                    "Natychmiastowe alerty o ciekawych ogloszeniach.",
                    "Przydatne przy odziezy, sneakersach i zestawach.",
                    "Lacz slowa kluczowe z wykluczeniami dla lepszej precyzji.",
                ],
                cta: "Utworz alert Vinted",
            },
        },
    },
    {
        slug: "milanuncios-alerts",
        locale: {
            es: {
                title: "Alertas de Milanuncios para busquedas mas amplias",
                description:
                    "Recibe alertas de Milanuncios con Vallax y monitoriza anuncios de segunda mano con mas volumen y variedad.",
                intro:
                    "Milanuncios sigue siendo una plataforma enorme para encontrar tecnologia, vehiculos, herramientas y oportunidades locales.",
                bullets: [
                    "Vigila un volumen alto de anuncios sin revisar manualmente.",
                    "Filtra con precision para reducir ruido.",
                    "Muy util para buscar articulos raros o con poca competencia.",
                ],
                cta: "Crear alerta de Milanuncios",
            },
            en: {
                title: "Milanuncios alerts for broader searches",
                description:
                    "Get Milanuncios alerts with Vallax and monitor a high volume of second-hand listings with less manual work.",
                intro:
                    "Milanuncios remains a huge marketplace for tech, vehicles, tools and local opportunities.",
                bullets: [
                    "Watch a large volume of listings without manual refresh.",
                    "Filter precisely to cut noise.",
                    "Useful for rare items or lower competition niches.",
                ],
                cta: "Create Milanuncios alert",
            },
            fr: {
                title: "Alertes Milanuncios pour des recherches plus larges",
                description:
                    "Recevez des alertes Milanuncios avec Vallax et surveillez un grand volume d'annonces.",
                intro:
                    "Milanuncios reste une grande plateforme pour la tech, les outils, les vehicules et les opportunites locales.",
                bullets: [
                    "Surveillez beaucoup d'annonces sans rafraichir manuellement.",
                    "Filtres precis pour reduire le bruit.",
                    "Utile pour les objets rares ou moins concurrentiels.",
                ],
                cta: "Creer une alerte Milanuncios",
            },
            it: {
                title: "Alert Milanuncios per ricerche piu ampie",
                description:
                    "Ricevi alert Milanuncios con Vallax e monitora molti annunci di seconda mano con meno lavoro manuale.",
                intro:
                    "Milanuncios resta una piattaforma importante per tecnologia, utensili, veicoli e occasioni locali.",
                bullets: [
                    "Controlla molti annunci senza aggiornare a mano.",
                    "Filtri precisi per ridurre il rumore.",
                    "Utile per oggetti rari o nicchie con meno concorrenza.",
                ],
                cta: "Crea alert Milanuncios",
            },
            pl: {
                title: "Alerty Milanuncios do szerszych wyszukiwan",
                description:
                    "Otrzymuj alerty Milanuncios z Vallax i monitoruj duza liczbe ogloszen bez recznego sprawdzania.",
                intro:
                    "Milanuncios to nadal duza platforma dla elektroniki, narzedzi, pojazdow i lokalnych okazji.",
                bullets: [
                    "Monitoruj duzy wolumen ogloszen bez odswiezania recznego.",
                    "Precyzyjne filtry ograniczaja szum.",
                    "Przydatne dla rzadkich przedmiotow i mniej konkurencyjnych nisz.",
                ],
                cta: "Utworz alert Milanuncios",
            },
        },
    },
    {
        slug: "todocoleccion-alerts",
        locale: {
            es: {
                title: "Alertas de Todocoleccion para coleccionistas",
                description:
                    "Configura alertas de Todocoleccion con Vallax para encontrar piezas, lotes y articulos dificiles de ver a tiempo.",
                intro:
                    "Todocoleccion es especialmente interesante para objetos raros. Vallax te ayuda a seguir ese mercado con mas rapidez y menos trabajo manual.",
                bullets: [
                    "Pensado para articulos de coleccion y nichos concretos.",
                    "Muy util para piezas dificiles de repetir.",
                    "Recibe avisos rapidos y decide antes que otros compradores.",
                ],
                cta: "Crear alerta de Todocoleccion",
            },
            en: {
                title: "Todocoleccion alerts for collectors",
                description:
                    "Set up Todocoleccion alerts with Vallax to catch rare pieces, bundles and niche listings in time.",
                intro:
                    "Todocoleccion is especially valuable for rare objects. Vallax helps you follow that market faster and with less manual effort.",
                bullets: [
                    "Built for collectibles and narrow niches.",
                    "Very useful for hard-to-repeat pieces.",
                    "Get fast alerts and decide before other buyers.",
                ],
                cta: "Create Todocoleccion alert",
            },
            fr: {
                title: "Alertes Todocoleccion pour collectionneurs",
                description:
                    "Configurez des alertes Todocoleccion avec Vallax pour reperer des pieces rares et des lots specialises.",
                intro:
                    "Todocoleccion est ideal pour les objets difficiles a trouver. Vallax vous aide a suivre ce marche plus vite.",
                bullets: [
                    "Adapte aux collections et niches precises.",
                    "Tres utile pour des pieces rarement disponibles.",
                    "Recevez vite les alertes et decidez avant les autres.",
                ],
                cta: "Creer une alerte Todocoleccion",
            },
            it: {
                title: "Alert Todocoleccion per collezionisti",
                description:
                    "Configura alert Todocoleccion con Vallax per intercettare pezzi rari e lotti di nicchia in tempo.",
                intro:
                    "Todocoleccion e molto interessante per oggetti rari. Vallax ti aiuta a seguire quel mercato piu velocemente.",
                bullets: [
                    "Pensato per collezionabili e nicchie precise.",
                    "Utile per pezzi difficili da trovare di nuovo.",
                    "Ricevi avvisi rapidi e decidi prima degli altri.",
                ],
                cta: "Crea alert Todocoleccion",
            },
            pl: {
                title: "Alerty Todocoleccion dla kolekcjonerow",
                description:
                    "Skonfiguruj alerty Todocoleccion w Vallax, aby szybciej lapac rzadkie przedmioty i zestawy.",
                intro:
                    "Todocoleccion jest szczegolnie wartosciowe dla rzadkich obiektow. Vallax pomaga sledzic ten rynek szybciej i wygodniej.",
                bullets: [
                    "Przygotowane pod kolekcje i konkretne nisze.",
                    "Bardzo przydatne przy trudnych do powtorzenia okazjach.",
                    "Szybkie alerty pomagaja podjac decyzje przed innymi.",
                ],
                cta: "Utworz alert Todocoleccion",
            },
        },
    },
];

export const solutionPages: SeoDetail[] = [
    {
        slug: "for-resellers",
        locale: {
            es: {
                title: "Vallax para revendedores que necesitan velocidad",
                description:
                    "Usa Vallax para detectar stock interesante antes que otros revendedores y reducir el tiempo perdido revisando anuncios manualmente.",
                intro:
                    "Si revendes, el tiempo importa. Vallax te ayuda a detectar anuncios utiles, priorizar oportunidades y reaccionar antes de que el margen desaparezca.",
                bullets: [
                    "Ideal para lotes, consolas, moviles y electronica.",
                    "Filtros avanzados para reducir anuncios poco utiles.",
                    "Mas capacidad y analisis con Premium.",
                ],
                cta: "Ver plan Premium",
            },
            en: {
                title: "Vallax for resellers who need speed",
                description:
                    "Use Vallax to find attractive stock before other resellers and spend less time checking listings manually.",
                intro:
                    "If you resell, timing matters. Vallax helps you spot useful listings, prioritize opportunities and react before the margin disappears.",
                bullets: [
                    "Great for bundles, consoles, phones and electronics.",
                    "Advanced filters to remove low-value listings.",
                    "More capacity and analysis with Premium.",
                ],
                cta: "See Premium plan",
            },
            fr: {
                title: "Vallax pour les revendeurs qui ont besoin de vitesse",
                description:
                    "Utilisez Vallax pour trouver du stock interessant avant les autres revendeurs.",
                intro:
                    "En revente, le timing compte. Vallax aide a reperer les annonces utiles et a reagir avant que la marge disparaisse.",
                bullets: [
                    "Pratique pour lots, consoles, telephones et electronique.",
                    "Filtres avances pour retirer les annonces peu utiles.",
                    "Plus de capacite et d'analyse avec Premium.",
                ],
                cta: "Voir Premium",
            },
            it: {
                title: "Vallax per rivenditori che hanno bisogno di velocita",
                description:
                    "Usa Vallax per trovare stock interessante prima degli altri rivenditori.",
                intro:
                    "Nella rivendita il tempo conta. Vallax aiuta a individuare annunci utili e reagire prima che il margine sparisca.",
                bullets: [
                    "Ottimo per lotti, console, telefoni ed elettronica.",
                    "Filtri avanzati per rimuovere annunci poco utili.",
                    "Piu capacita e analisi con Premium.",
                ],
                cta: "Vedi Premium",
            },
            pl: {
                title: "Vallax dla resellerow, ktorzy potrzebuja szybkosci",
                description:
                    "Uzyj Vallax, aby szybciej znajdowac towar niz inni resellerzy i tracic mniej czasu na reczne sprawdzanie.",
                intro:
                    "W odsprzedazy liczy sie czas. Vallax pomaga szybciej wychwycic przydatne ogloszenia i reagowac zanim marza zniknie.",
                bullets: [
                    "Dobre dla zestawow, konsol, telefonow i elektroniki.",
                    "Zaawansowane filtry usuwaja malo wartosciowe wyniki.",
                    "Wieksza pojemnosc i analiza w Premium.",
                ],
                cta: "Zobacz Premium",
            },
        },
    },
    {
        slug: "for-collectors",
        locale: {
            es: {
                title: "Vallax para coleccionistas que no quieren llegar tarde",
                description:
                    "Recibe alertas rapidas para piezas de coleccion, articulos raros o lotes dificiles de repetir en plataformas de segunda mano.",
                intro:
                    "Cuando buscas algo dificil de encontrar, perder una buena oportunidad duele. Vallax te permite vigilar mas plataformas con menos esfuerzo.",
                bullets: [
                    "Especialmente util para consolas retro, cartas y articulos raros.",
                    "Recibe alertas antes de que desaparezcan las mejores piezas.",
                    "Usa filtros para reducir ruido en nichos muy concretos.",
                ],
                cta: "Crear primera alerta",
            },
            en: {
                title: "Vallax for collectors who do not want to miss out",
                description:
                    "Get fast alerts for collectibles, rare items and hard-to-repeat bundles across second-hand marketplaces.",
                intro:
                    "When you are looking for something difficult to find, missing a good opportunity hurts. Vallax helps you watch more marketplaces with less effort.",
                bullets: [
                    "Useful for retro consoles, cards and rare items.",
                    "Receive alerts before the best pieces disappear.",
                    "Use filters to reduce noise in narrow niches.",
                ],
                cta: "Create first alert",
            },
            fr: {
                title: "Vallax pour les collectionneurs qui ne veulent pas rater une piece",
                description:
                    "Recevez des alertes rapides pour objets rares, collections et lots difficiles a retrouver.",
                intro:
                    "Quand vous cherchez un objet rare, rater une bonne opportunite coute cher. Vallax vous aide a surveiller plus de plateformes.",
                bullets: [
                    "Utile pour consoles retro, cartes et objets rares.",
                    "Recevez les alertes avant que les meilleures pieces disparaissent.",
                    "Filtres pour reduire le bruit sur des niches precises.",
                ],
                cta: "Creer une premiere alerte",
            },
            it: {
                title: "Vallax per collezionisti che non vogliono arrivare tardi",
                description:
                    "Ricevi alert rapidi per oggetti da collezione, articoli rari e lotti difficili da trovare di nuovo.",
                intro:
                    "Quando cerchi qualcosa di raro, perdere una buona occasione pesa. Vallax ti aiuta a seguire piu piattaforme con meno sforzo.",
                bullets: [
                    "Utile per console retro, carte e articoli rari.",
                    "Ricevi alert prima che spariscano i pezzi migliori.",
                    "Usa i filtri per ridurre il rumore nelle nicchie strette.",
                ],
                cta: "Crea il primo alert",
            },
            pl: {
                title: "Vallax dla kolekcjonerow, ktorzy nie chca spoznic sie na okazje",
                description:
                    "Otrzymuj szybkie alerty o przedmiotach kolekcjonerskich, rzadkich sztukach i trudnych do powtorzenia zestawach.",
                intro:
                    "Gdy szukasz czegos rzadkiego, przegapienie dobrej okazji boli. Vallax pomaga sledzic wiecej platform przy mniejszym wysilku.",
                bullets: [
                    "Przydatne dla retro konsol, kart i rzadkich przedmiotow.",
                    "Alerty pojawiaja sie, zanim najlepsze sztuki znikna.",
                    "Filtry ograniczaja szum w waskich niszach.",
                ],
                cta: "Utworz pierwszy alert",
            },
        },
    },
    {
        slug: "for-bargain-hunters",
        locale: {
            es: {
                title: "Vallax para cazadores de chollos en segunda mano",
                description:
                    "Descubre como Vallax te ayuda a detectar anuncios interesantes antes que otros compradores y sin refrescar paginas manualmente.",
                intro:
                    "Si lo tuyo es encontrar buenas oportunidades, Vallax centraliza varias plataformas y te avisa cuando merece la pena mirar rapido.",
                bullets: [
                    "Sigue varias plataformas desde un mismo punto.",
                    "Recibe avisos rapidos cuando aparece un anuncio interesante.",
                    "Perfecto para compras personales con buen precio.",
                ],
                cta: "Empezar gratis",
            },
            en: {
                title: "Vallax for second-hand bargain hunters",
                description:
                    "See how Vallax helps you detect attractive listings before other buyers without manually refreshing pages.",
                intro:
                    "If your goal is finding strong deals, Vallax centralizes several marketplaces and alerts you when it is worth checking immediately.",
                bullets: [
                    "Track multiple marketplaces from one place.",
                    "Receive fast alerts when something interesting appears.",
                    "Perfect for personal purchases at a better price.",
                ],
                cta: "Start free",
            },
            fr: {
                title: "Vallax pour les chasseurs de bonnes affaires",
                description:
                    "Decouvrez comment Vallax vous aide a reperer les bonnes annonces avant les autres acheteurs.",
                intro:
                    "Si votre objectif est de trouver de bonnes affaires, Vallax centralise plusieurs plateformes et vous alerte rapidement.",
                bullets: [
                    "Suivez plusieurs plateformes depuis un meme endroit.",
                    "Recevez vite les alertes sur les annonces interessantes.",
                    "Parfait pour les achats personnels a bon prix.",
                ],
                cta: "Commencer gratuitement",
            },
            it: {
                title: "Vallax per chi cerca occasioni nell'usato",
                description:
                    "Scopri come Vallax ti aiuta a trovare annunci interessanti prima degli altri acquirenti.",
                intro:
                    "Se il tuo obiettivo e trovare buone occasioni, Vallax centralizza piu piattaforme e ti avvisa quando vale la pena controllare subito.",
                bullets: [
                    "Segui piu marketplace da un solo punto.",
                    "Ricevi alert rapidi quando appare qualcosa di interessante.",
                    "Perfetto per acquisti personali a prezzo migliore.",
                ],
                cta: "Inizia gratis",
            },
            pl: {
                title: "Vallax dla lowcow okazji z drugiej reki",
                description:
                    "Zobacz, jak Vallax pomaga wychwytywac ciekawe ogloszenia przed innymi kupujacymi.",
                intro:
                    "Jesli Twoim celem sa okazje, Vallax zbiera kilka platform w jednym miejscu i szybko informuje, kiedy warto reagowac.",
                bullets: [
                    "Sledz wiele platform z jednego miejsca.",
                    "Dostawaj szybkie alerty o ciekawych ogloszeniach.",
                    "Idealne do prywatnych zakupow w lepszej cenie.",
                ],
                cta: "Zacznij za darmo",
            },
        },
    },
];
