export const tagColors = {
    phrase: "#3be2ff",      
    question: "#2ECC71",    
    verb: "#fdab31",        
    formal: "#9B59B6",       
    informal: "#fd8ce1",     
    "grammar-ok": "#66bb6a", 
    "grammar-wrong": "#ef5350",    
    greeting: "#f1145e"      
};

export const sentences = [
    {
        de: "Na?",
        en: "So?",
        tag: "phrase"
    },
    {
        de: "Ist alles in Ordnung?",
        en: "Is everything alright?",
        tag: "question"

    },
    {
        de: "Ich gehe morgen nach Frankfurt.",
        tag: "verb"
    },
    {
        de: "Wie schön?", 
        en: "How nice?",
        tag: "phrase"
    },
    {
        de: "Freut mich Sie kennenzulernen?", 
        note: "Formal",
        tag: "formal"
    },
    {
        de: "Freut mich dich kennenzulernen?", 
        note: "InFormal",
        tag: "informal"
    },
    {
        de: "Du lernst Deutsch mit Theo.", 
        note: "✓",
        tag: "grammar-ok"
    },
    {
        de: "Du studierst Deutsch mit Theo.",
        note: "X",
        tag: "grammar-wrong"
    },
    {
        de: "Sie wohnen in der Stadionstraße in Hamburg.",
        tag: "verb"
    },
    {
        de: "Sie liest gern und geht oft spazieren.",
        en: "She likes reading and often goes forwalks.",
        tag: "verb",
    },
    {
        de: "Sie liest nicht gern.",
        tag: "verb"
    },
    {
        de: "Was bist du von Beruf?",
        note: "Ich bin Buchhalterin., Ich bin Buchhalterin von Beruf., Ich arbeite als Buchhalterin.",
        tag: "question"
    },
    {
        de: "Seit wann wohnt ihr in Deutschland?",
        tag: "question"
    },
    {
        de: "Wir arbeiten beide in Frankfurt.", 
        en: "Both of us works in Frankfurt",
        tag: "verb"
    },
    {
        de: "Arbeitet ihr heute nicht?",
        tag: "question"
    },
    {
        de: "Was machst du gern in deiner Freizeit?",
        tag: "question"
    },
    {
        de: "Sarahs Wohnung ist sehr klein, aber sehr schön. Sie (for the wohnung) hat ein Wohnzimmer, eine Küche und ein Schlafzimmer.",
        tag: "phrase"
    },
    {
        de: "Vater hat jetzt leider keine Zeit, aber er kommt vielleicht nächsten Monat.",
        tag: "phrase"
    },
    {
        de: "Sie bleibt eine Woche in Hamburg.", 
        en: "She's staying in Hamburg for a week.",
        tag: "verb"
    },
    {
        de: "Habt ihr heute Zeit?",
        tag: "question"
    },
    {
        de: "Sie kommt aus Wien und (sie 'not mandatory') ist Architektin von Beruf.",
        tag: "phrase"
    },
    {
        de: "Es geht mir auch gut === Auch gut", 
        note: "Es geht so.",
        tag: "phrase"
    },
    {
        de: "Das sind Stühle. Sie sind sehr schön.", 
        note: "✓",
        tag: "grammar-ok"
    },
    {
        de: "Die sind Stühle. Sie sind sehr schön.",
        note: "X",
        tag: "grammar-wrong"
    },
    {
        de: "Sarah hat aktuell keine Arbeit.", 
        en: "Sarah currently has no work.",
        tag: "phrase"
    },
    {
        de: "Ich habe jetzt leider keine Zeit. === Leider habe ich jetzt keine Zeit. == Jetzt habe ich leider keine Zeit. == Ich habe leider jetzt keine Zeit.",
        tag: "phrase"
    },
    {
        de: "Stefan besucht Theo.", 
        en: "Stefan is visting Theo.",
        tag: "verb"
    },
    {
        de: "Gut, und dir? Schön, dich zu sehen!",
        tag: "phrase"
    },
    {
        de: "Wer ist das?", 
        en: "Who is this?",
        tag: "question"
    },
    {
        de: "Er ist müde und schläft jetzt.", 
        en: "He's tierd and sleeping now",
        tag: "phrase"
    },
    {
        de: "Achso! Er ist wirklich sehr klein und auch sehr lieb.", 
        en: "Oh well! He is really too small and also very sweet.",
        tag: "phrase"
    },
    {
        de: "Oh! Theo ist verliebt!",
        en: "Oh! Theo is is love.",
        tag: "phrase"
    },
    {
        de: "Am Donnerstag kommt der Tisch. == Der Tisch kommt am Donnerstag.",
        tag: "phrase"
    },
    {
        de: "Freitag ist mein Lieblingstag",
        tag: "phrase"
    },
    {
        de: "Übermorgen ist Dienstag",
        tag: "phrase"
    },
    {
        de: "Wo == Where, Wer == Who, Was == What",
        tag: "question"
    },
    {
        de: "Wie viel Uhr ist es? == Wie spät ist es?",
        note: "Es ist fünfzehn Uhr dreißig  (formal), Es ist halb fünf (informal)",
        tag: "question"
    },
    {
        de: "Wann hast du am Abend Zeit?", 
        note: "Leider habe ich am Abend keine Zeit.",
        tag: "question"
    },
    {
        de: "Was machen wir heute? Hast du eine Idee?", 
        note: "Wir können den park besuchen, denn (because) das Wetter ist schön.",
        tag: "question"
    },
    {
        de: "Um 20 Uhr können wir einen Film im Kino anschauen, Hast du Lust?", 
        en: "At 8pm we can watch a movie at the cinema. Are you up for it",
        tag: "phrase"
    },
    {
        de: "Die Stadt hat leider keinen Park",
        tag: "phrase"
    },
    {
        de: "Sie kann jetzt nicht telefonieren.",
        tag: "verb"
    },
    {
        de: "Wir können heute ins Kino oder in den Park gehen.",
        tag: "verb"
    },
    {
        de: "Sie hat keinen Tisch und kein Bett, denn (Because) sie ist neu in Hamburg.",
        tag: "phrase"
    },
    {
        de: "Können wir einen Spaziergang machen?",
        tag: "question"
    },
    {
        de: "Stefanie arbeitet viel (≠wenig). aber sie mag ihre neue Arbeitsstelle.",
        tag: "phrase"
    },
    {
        de: "Das ist ein typischer Tag in Sarahs Leben: Sie steht um halb neun auf. Dann duscht sie und putzt ihre Zähne.",
        tag: "phrase"
    },
    {
        de: "Um halb acht fährt sie zur Arbeit, denn um acht Uhr muss sie dort sein.",
        tag: "phrase"
    },
    {
        de: "Sie isst zum Beispiel ein Ei mit Brot oder Müsli mit Milch.",
        tag: "phrase"
    },
    {
        de: "Gegen halb eins", 
        en: "Around 12:30",
        tag: "phrase"
    },
    {
        de: "Sarah steht gerne früh auf",
        tag: "verb"
    },
    {
        de: "Müsst ihr auch etwas einkaufen?",
        tag: "question"
    },
    {
        de: "Sie kaufen dort nicht gerne ein.",
        tag: "verb"
    },
    {
        de: "Wir essen auch sehr oft Steak!",
        tag: "phrase"
    },
    {
        de: "Herr Müller liebt moderne Technologie, aber Frau Müller kauft selten neue Geräte für ihn.",
        tag: "phrase"
    },
    {
        de: "Abends (=Fast jeden Abend) sehen sie oft zusammen fern.",
        tag: "phrase"
    },
    {
        de: "Hier spielen sie mittwochs oft Karten mit Sarah. Sarah ist eine sehr sympathische und lustige Nachbarin",
        tag: "phrase"
    },
    {
        de: "Kannst du mich heute Abend bitte anrufen?",
        tag: "question"
    },
    {
        de: "Wo ist die Katze?", 
        en: "Ich sehe sie nicht.",
        tag: "verb"
    },
    {
        de: "Stefan ruft uns selten an.",
        tag: "verb"
    },
    {
        de: "In der Wohnung gibt es viele Stühle.",
        tag: "phrase"
    },
    {
        de: "Wo sind die schönen Häuser?",
        tag: "question"
    },
    {
        de: "Ich kenne sie nicht und ich kenne ihn auch nicht.",
        tag: "verb"
    },
    {
        de: "Hallo, Schatz! Wie war dein Tag heute?",
        en: "Hello, darling! How was your day today?",
        tag: "greeting"
    },
    {
        de: "Sehr gerne. Die Lasagne dort schmeckt wirkliich super und die Pizzen auch. Ich rufe an und reserviere einen Tisch für uns.",
        tag: "phrase"
    },
    {
        de: "Ich möchte einen Tisch für heute Aben um Viertel vor acht reservieren.",
        tag: "phrase"
    },
    {
        de: "Er möchte heute nicht ausgehen.",
        tag: "verb"
    },
    {
        de: "Moment, eine Sekunde bitte!",
        tag: "phrase"
    },
    {
        de: "Ein Jahr hat 12 Monate. Ein Jahr hat 365 Tage, aber manchmal hat ein Jahr 366 Tage.",
        tag: "phrase"
    },
    {
        de: "(Wann - Um wie viel Uhr - Wie spät) gehen wir ins Restaurant?",
        note: "Um Viertel vor acht gehen wir ins Restaurant. OR Wir gehen um Viertel vor acht ins Restaurant.",
        tag: "question"
    },
]