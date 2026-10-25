import type { Locale } from "../i18n";

// Address of the Vallax MCP server that AI chats (ChatGPT, Claude...) connect to.
export const aiAssistantUrl = "https://backend.vallax.es/mcp";

export const aiAssistantGuideSlug = "docs/guides/ai-assistant";

export const aiAssistantUi: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        description: string;
        prompts: string[];
        reply: string;
        moreExamples: string;
        steps: { title: string; description: string }[];
        urlLabel: string;
        copy: string;
        copied: string;
        guide: string;
        note: string;
    }
> = {
    es: {
        eyebrow: "Nuevo",
        title: "Crea alertas hablando con ChatGPT o Claude",
        description:
            "Conecta tu cuenta de Vallax a tu asistente de IA y pídele lo que buscas con tus propias palabras. Él crea la alerta por ti y te llega a la app como siempre.",
        prompts: [
            "Avísame cuando salga una Nintendo Switch Lite por menos de 90 € en Wallapop",
            "¿A cuánto se vende de segunda mano un iPhone 13 de 128 GB?",
            "Pausa mis alertas de zapatillas",
        ],
        reply:
            "Hecho. He creado la alerta «Switch Lite» en Wallapop hasta 90 €. Te avisaré en la app de Vallax en cuanto salga una.",
        moreExamples: "También puedes pedirle",
        steps: [
            {
                title: "Copia la dirección de Vallax",
                description: "Es la misma para todo el mundo.",
            },
            {
                title: "Añádela en tu asistente",
                description:
                    "En ChatGPT o Claude, entra en ajustes, busca «Conectores» o «Aplicaciones» y añade uno nuevo con esa dirección.",
            },
            {
                title: "Inicia sesión con tu cuenta de Vallax",
                description:
                    "Usa el mismo Google, Apple o email que en la app. Listo: ya puedes pedirle alertas.",
            },
        ],
        urlLabel: "Dirección para conectar",
        copy: "Copiar",
        copied: "Copiado",
        guide: "Ver la guía paso a paso",
        note: "Funciona con cualquier plan de Vallax. Puedes desconectarlo cuando quieras desde los ajustes de tu asistente.",
    },
    en: {
        eyebrow: "New",
        title: "Create alerts by talking to ChatGPT or Claude",
        description:
            "Connect your Vallax account to your AI assistant and ask for what you're looking for in your own words. It creates the alert for you and you get it in the app as usual.",
        prompts: [
            "Let me know when a Nintendo Switch Lite under €90 shows up on Wallapop",
            "How much does a used iPhone 13 128 GB sell for?",
            "Pause my sneaker alerts",
        ],
        reply:
            "Done. I created the \"Switch Lite\" alert on Wallapop up to €90. You'll get a notification in the Vallax app as soon as one shows up.",
        moreExamples: "You can also ask",
        steps: [
            {
                title: "Copy the Vallax address",
                description: "It's the same for everyone.",
            },
            {
                title: "Add it to your assistant",
                description:
                    "In ChatGPT or Claude, open settings, look for \"Connectors\" or \"Apps\" and add a new one with that address.",
            },
            {
                title: "Sign in with your Vallax account",
                description:
                    "Use the same Google, Apple or email as in the app. Done: you can now ask it for alerts.",
            },
        ],
        urlLabel: "Address to connect",
        copy: "Copy",
        copied: "Copied",
        guide: "See the step-by-step guide",
        note: "Works with any Vallax plan. You can disconnect it any time from your assistant's settings.",
    },
    fr: {
        eyebrow: "Nouveau",
        title: "Créez des alertes en parlant à ChatGPT ou Claude",
        description:
            "Connectez votre compte Vallax à votre assistant IA et demandez-lui ce que vous cherchez avec vos propres mots. Il crée l'alerte pour vous et vous la recevez dans l'app comme d'habitude.",
        prompts: [
            "Préviens-moi quand une Nintendo Switch Lite à moins de 90 € apparaît sur Vinted",
            "À combien se vend un iPhone 13 128 Go d'occasion ?",
            "Mets en pause mes alertes de baskets",
        ],
        reply:
            "C'est fait. J'ai créé l'alerte « Switch Lite » sur Vinted jusqu'à 90 €. Vous serez prévenu dans l'app Vallax dès qu'une apparaît.",
        moreExamples: "Vous pouvez aussi demander",
        steps: [
            {
                title: "Copiez l'adresse de Vallax",
                description: "Elle est la même pour tout le monde.",
            },
            {
                title: "Ajoutez-la à votre assistant",
                description:
                    "Dans ChatGPT ou Claude, ouvrez les paramètres, cherchez « Connecteurs » ou « Applications » et ajoutez-en un avec cette adresse.",
            },
            {
                title: "Connectez-vous avec votre compte Vallax",
                description:
                    "Utilisez le même Google, Apple ou e-mail que dans l'app. C'est prêt : vous pouvez lui demander des alertes.",
            },
        ],
        urlLabel: "Adresse à connecter",
        copy: "Copier",
        copied: "Copié",
        guide: "Voir le guide pas à pas",
        note: "Fonctionne avec tous les forfaits Vallax. Vous pouvez le déconnecter à tout moment dans les paramètres de votre assistant.",
    },
    it: {
        eyebrow: "Novità",
        title: "Crea alert parlando con ChatGPT o Claude",
        description:
            "Collega il tuo account Vallax al tuo assistente IA e chiedigli cosa cerchi con parole tue. Crea l'alert al posto tuo e lo ricevi nell'app come sempre.",
        prompts: [
            "Avvisami quando esce una Nintendo Switch Lite sotto i 90 € su Vinted",
            "Quanto si vende un iPhone 13 da 128 GB usato?",
            "Metti in pausa i miei alert di sneaker",
        ],
        reply:
            "Fatto. Ho creato l'alert «Switch Lite» su Vinted fino a 90 €. Riceverai un avviso nell'app Vallax appena ne esce una.",
        moreExamples: "Puoi anche chiedere",
        steps: [
            {
                title: "Copia l'indirizzo di Vallax",
                description: "È lo stesso per tutti.",
            },
            {
                title: "Aggiungilo al tuo assistente",
                description:
                    "In ChatGPT o Claude, apri le impostazioni, cerca «Connettori» o «App» e aggiungine uno nuovo con quell'indirizzo.",
            },
            {
                title: "Accedi con il tuo account Vallax",
                description:
                    "Usa lo stesso Google, Apple o email dell'app. Fatto: ora puoi chiedergli degli alert.",
            },
        ],
        urlLabel: "Indirizzo da collegare",
        copy: "Copia",
        copied: "Copiato",
        guide: "Vedi la guida passo passo",
        note: "Funziona con qualsiasi piano Vallax. Puoi scollegarlo quando vuoi dalle impostazioni del tuo assistente.",
    },
    pl: {
        eyebrow: "Nowość",
        title: "Twórz alerty, rozmawiając z ChatGPT lub Claude",
        description:
            "Połącz konto Vallax ze swoim asystentem AI i powiedz mu własnymi słowami, czego szukasz. Utworzy alert za Ciebie, a powiadomienia dostaniesz w aplikacji jak zwykle.",
        prompts: [
            "Daj mi znać, gdy na Vinted pojawi się Nintendo Switch Lite poniżej 90 €",
            "Za ile sprzedaje się używany iPhone 13 128 GB?",
            "Wstrzymaj moje alerty na sneakersy",
        ],
        reply:
            "Gotowe. Utworzyłem alert „Switch Lite” na Vinted do 90 €. Dostaniesz powiadomienie w aplikacji Vallax, gdy tylko się pojawi.",
        moreExamples: "Możesz też zapytać",
        steps: [
            {
                title: "Skopiuj adres Vallax",
                description: "Jest taki sam dla wszystkich.",
            },
            {
                title: "Dodaj go w swoim asystencie",
                description:
                    "W ChatGPT lub Claude otwórz ustawienia, znajdź „Konektory” lub „Aplikacje” i dodaj nowy z tym adresem.",
            },
            {
                title: "Zaloguj się kontem Vallax",
                description:
                    "Użyj tego samego Google, Apple lub e-maila co w aplikacji. Gotowe: możesz prosić o alerty.",
            },
        ],
        urlLabel: "Adres do połączenia",
        copy: "Kopiuj",
        copied: "Skopiowano",
        guide: "Zobacz instrukcję krok po kroku",
        note: "Działa w każdym planie Vallax. Możesz go odłączyć w dowolnej chwili w ustawieniach asystenta.",
    },
};
