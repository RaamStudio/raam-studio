// ===================================================
// Raam Studio - site script
// i18n, mobile menu, scroll reveal, contact form
// ===================================================

const translations = {
  nl: {
    "nav.about": "Over ons",
    "nav.diensten": "Diensten",
    "nav.websites": "Websites",
    "nav.socialmedia": "Social Media",
    "nav.work": "Werk",
    "nav.contact": "Contact",

    "hero.eyebrow": "Gevestigd in Leiden!",
    "hero.title": "Websites en content die lokale bedrijven laten groeien",
    "hero.sub": "Moderne, snelle en betaalbare websites - plus content die opvalt op TikTok en Instagram - voor salons, restaurants en winkels in Leiden en omgeving.",
    "hero.cta": "Vraag geheel gratis een proefwebsite aan",
    "hero.ctaSub": "Geeft u een idee hoe uw website eruit kan zien",
    "hero.cta2": "Bekijk het werk",

    "trust.direct": "Direct & persoonlijk contact",
    "trust.pricing": "Eerlijke, transparante prijzen",
    "trust.local": "Lokaal in Leiden",

    "about.label": "Over ons",
    "about.title": "Hallo, ik ben Rami",
    "about.p1": "Ik studeer ICT en ben via die weg verliefd geworden op webdevelopment - en inmiddels ook op contentcreatie. Raam Studio is waar dat is uitgegroeid tot iets echts: een klein, persoonlijk studio voor lokale ondernemers die een website willen, of gewoon wat meer zichtbaarheid op TikTok en Instagram, zonder het prijskaartje - of de eindeloze e-mailwisselingen - van een groot bureau.",
    "about.p2": "Werk je met mij samen, dan werk je rechtstreeks met de persoon die je site bouwt of je content maakt. Geen accountmanagers, geen overdrachtsmomenten - gewoon heldere communicatie van het eerste idee tot het eindresultaat.",
    "about.p3": "Sinds kort doe ik dit niet meer helemaal alleen.",
    "about.founded": "Raam Studio - elke klant krijgt mijn volle aandacht.",

    "matthijs.label": "Samen met",
    "matthijs.name": "Matthijs",
    "matthijs.p1": "Matthijs is geboren en getogen in Leiden en heeft een achtergrond in marketing. Hij wil de stad die hem heeft gevormd graag helpen meebewegen met een wereld die steeds digitaler wordt.",
    "matthijs.p2": "Binnen Raam Studio denkt hij mee over hoe lokale ondernemers zich zo goed mogelijk online laten zien - ik blijf de drijvende kracht achter Raam Studio, maar met Matthijs erbij kan ik klanten nog beter helpen.",

    "diensten.label": "Diensten",
    "diensten.title": "Twee manieren om samen te werken",
    "diensten.sub": "Raam Studio bouwt websites voor lokale ondernemers, en maakt social media content voor bedrijven die zichtbaar willen zijn op TikTok en Instagram.",
    "diensten.web.title": "Websites",
    "diensten.web.body": "Snelle, betaalbare websites voor lokale ondernemers - van eerste ontwerp tot livegang, inclusief hosting en onderhoud.",
    "diensten.web.cta": "Bekijk websites",
    "diensten.content.title": "Social media content",
    "diensten.content.body": "TikTok- en Instagram-video's voor bedrijven - van opname tot een kant-en-klaar contentpakket.",
    "diensten.content.cta": "Bekijk social media",

    "websitespage.label": "Websites",
    "websitespage.title": "Een website die voor je werkt",
    "websitespage.sub": "Snel, betaalbaar en persoonlijk - geen account managers, geen verrassingen achteraf. Hieronder vind je wat wij voor je kunnen bouwen en wat het kost.",
    "websitespage.cta": "Vraag geheel gratis een proefwebsite aan",
    "websitespage.imgAlt": "Laptop met code op een houten bureau",

    "socialpage.label": "Social Media Content",
    "socialpage.title": "Content die opvalt op TikTok & Instagram",
    "socialpage.sub": "Regelmatig, professioneel gefilmde content voor je bedrijf - zonder dat jij zelf achter de camera hoeft te staan.",
    "socialpage.imgAlt": "Smartphone op een statief met licht, klaar om te filmen",

    "social.s1.title": "Op locatie filmen",
    "social.s1.body": "Ik kom gemiddeld één keer per week bij je langs om ter plekke content te filmen - geen studio-afstand, geen gedoe.",
    "social.s2.title": "Editing inbegrepen",
    "social.s2.body": "Ruwe beelden worden omgezet naar kant-en-klare video's, gemiddeld twee per week, klaar om te posten.",
    "social.s3.title": "TikTok & Instagram",
    "social.s3.body": "Content afgestemd op wat werkt op beide platforms - van korte reels tot behind-the-scenes.",

    "social.package.label": "Tarief",
    "social.package.title": "Eén helder pakket",
    "social.package.badge": "Nieuw",
    "social.package.name": "Wekelijks contentpakket",
    "social.package.rate": "per uur",
    "social.package.f1": "Gemiddeld 1x per week op locatie filmen",
    "social.package.f2": "Gemiddeld 2 video's per week opgeleverd",
    "social.package.f3": "Geschikt voor TikTok & Instagram",
    "social.package.f4": "Direct contact - geen tussenpersonen",
    "social.package.cta": "Neem contact op",
    "social.package.note": "Aantal video's per week is bespreekbaar - dit is een gemiddelde, geen vast aantal.",

    "services.label": "Diensten",
    "services.title": "Wat wij voor je kunnen bouwen",
    "services.s1.title": "Websiteontwerp",
    "services.s1.body": "Een responsive website die er op elk scherm professioneel uitziet - afgestemd op jouw bedrijf en doelgroep.",
    "services.s2.title": "Hosting & onderhoud",
    "services.s2.body": "Wij regelen hosting, domein, updates en backups, zodat jij je met je bedrijf kunt bezighouden - niet met techniek.",
    "services.s3.title": "SEO & vindbaarheid",
    "services.s3.body": "Zodat klanten in Leiden en omgeving je ook écht vinden via Google.",

    "pricing.label": "Prijzen",
    "pricing.title": "Duidelijke prijzen, geen verrassingen",
    "pricing.oneoff": "eenmalig",
    "pricing.setup": "eenmalig",
    "pricing.month": "/ maand",
    "pricing.popular": "Populair",
    "pricing.cta": "Kies dit pakket",
    "pricing.basic.name": "Basic",
    "pricing.basic.f1": "Responsive website",
    "pricing.basic.f2": "1 revisieronde",
    "pricing.basic.f3": "Vindbaar op Google Maps",
    "pricing.basic.f4": "Goed vindbaar in Google",
    "pricing.plus.name": "Plus",
    "pricing.plus.f1": "Alles uit Basic",
    "pricing.plus.f2": "Hosting & domein",
    "pricing.plus.f3": "Beveiliging & backups",
    "pricing.plus.f4": "Aanpasbaar, precies zoals jij het wilt",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Alles uit Plus",
    "pricing.premium.f2": "Voorrang bij support",
    "pricing.premium.f3": "Onbeperkte aanpassingen, ook nieuwe pagina's",
    "pricing.premium.f4": "We blijven je vindbaarheid in Google verbeteren",

    "faq.label": "Veelgestelde vragen",
    "faq.title": "Nog even dit",
    "faq.q2.q": "Waarom is de bouwprijs zo laag?",
    "faq.q2.a": "Wij werken efficiënt met moderne tools, waardoor we de bouwkosten laag kunnen houden. Het maandabonnement zorgt ervoor dat hosting, beveiliging en onderhoud daarna goed geregeld blijven.",
    "faq.q3.q": "Blijf ik eigenaar van mijn website en domeinnaam?",
    "faq.q3.a": "Ja. De website en het domein zijn en blijven van jou.",

    "work.label": "Werk",
    "work.title": "Een kijkje door het raam",
    "work.sub": "Een kijkje bij een aantal recente projecten - klik op een project om de website te bekijken.",
    "work.visit": "Bekijk de website",
    "work.p1.name": "Groenland Juwelier",
    "work.p1.tag": "Live project - sieraden & juwelier",
    "work.p1.alt": "Hoofdpagina van de website van Groenland Juwelier",
    "work.p1.body": "Website voor een juwelier aan de Haarlemmerstraat in Leiden, met collectie, ringpagina's en winkelmandje.",
    "work.p2.name": "Haarscherp",
    "work.p2.tag": "Concept - unisex hairstudio",
    "work.p2.alt": "Hoofdpagina van de website van Haarscherp",
    "work.p2.body": "Ontwerpconcept voor een moderne hairstudio in Leiden, met animaties, een menukaart op tabs en een live open/gesloten-status.",
    "work.p3.name": "De Leidse Boon",
    "work.p3.tag": "Concept - koffiebranderij & coffee bar",
    "work.p3.alt": "Hoofdpagina van de website van De Leidse Boon",
    "work.p3.body": "Ontwerpconcept voor een koffiebranderij in Leiden, met een chalkboard-menukaart, testimonial-carrousel en een eigen visuele stijl.",

    "showcase.label": "Voorbeelden",
    "showcase.title": "Wat we al hebben gemaakt",
    "showcase.sub": "Blader door een aantal websites die we hebben gebouwd en klik door naar de live versie.",
    "showcase.aria": "Voorbeelden van gemaakte websites",
    "showcase.prev": "Vorig voorbeeld",
    "showcase.next": "Volgend voorbeeld",

    "why.label": "Waarom Raam Studio",
    "why.title": "Geen account manager. Gewoon wij.",
    "why.body": "Grote bureaus werken met lagen: verkoop, projectmanagement, developers. Bij Raam Studio praat je rechtstreeks met ons - de mensen die je website bouwen of je content maken - sneller, persoonlijker en zonder overheadkosten die jij uiteindelijk betaalt.",
    "why.c1.title": "Direct & persoonlijk",
    "why.c1.body": "Eén aanspreekpunt, van eerste gesprek tot livegang.",
    "why.c2.title": "Eerlijke prijzen",
    "why.c2.body": "Transparante pakketten, geen verrassingen achteraf.",
    "why.c3.title": "Lokale kennis",
    "why.c3.body": "Wij kennen de Leidse markt en denken mee met lokale ondernemers.",

    "contact.label": "Contact",
    "contact.title": "Laten we kennismaken",
    "contact.body": "Vertel ons kort over je bedrijf en wat je zoekt. Wij reageren binnen een dag.",
    "contact.form.name": "Naam",
    "contact.form.namePh": "Je naam",
    "contact.form.email": "E-mail",
    "contact.form.emailPh": "naam@bedrijf.nl",
    "contact.form.type": "Waar ben je in geïnteresseerd?",
    "contact.form.type.websites": "Websites",
    "contact.form.type.social": "Social media content",
    "contact.form.type.other": "Anders",
    "contact.form.budget": "Gewenst pakket",
    "contact.form.unsure": "Weet ik nog niet",
    "contact.form.message": "Bericht",
    "contact.form.messagePh": "Vertel iets over je bedrijf en je wensen...",
    "contact.form.submit": "Verstuur bericht",
    "contact.form.note": "Wij reageren meestal binnen één dag.",
    "contact.form.sending": "Bezig met versturen...",
    "contact.form.sent": "Bedankt voor je bericht! Wij nemen zo snel mogelijk contact met je op.",
    "contact.form.error": "Er ging iets mis bij het versturen. Probeer het opnieuw of mail rechtstreeks naar raamstudio@hotmail.com.",

    "contact.info.location": "Leiden, Nederland",
    "contact.form.trialPrefill": "Ik wil graag een gratis proefwebsite aanvragen. Mijn bedrijf: ",

    "meta.title.home": "Raam Studio - Websites en content voor lokale bedrijven in Leiden",
    "meta.title.websites": "Websites voor lokale bedrijven - Raam Studio",
    "meta.title.social": "Social media content - Raam Studio",
    "meta.title.contact": "Contact - Raam Studio",
    "meta.title.privacy": "Privacyverklaring - Raam Studio",
    "meta.title.terms": "Algemene voorwaarden - Raam Studio",

    "legal.updated": "Laatst bijgewerkt: september 2026",

    "priv.label": "Privacyverklaring",
    "priv.title": "Hoe we omgaan met je gegevens",
    "priv.sub": "Duidelijk en simpel - geen kleine lettertjes waar je doorheen moet spitten.",
    "priv.h1": "1. Wie is verantwoordelijk",
    "priv.p1": "Raam Studio (eenmanszaak van Rami Sharaby), KVK-nummer 42139474, gevestigd in Leiden. Het volledige vestigingsadres is op aanvraag beschikbaar. Je kunt ons bereiken via <a href=\"mailto:raamstudio@hotmail.com\">raamstudio@hotmail.com</a> of <a href=\"tel:+31615671804\">+31 6 15 67 18 04</a>.",
    "priv.h2": "2. Welke gegevens we verzamelen",
    "priv.p2": "Via het contactformulier op deze website verzamelen we: je naam, e-mailadres, het type dienst waarin je geïnteresseerd bent, je gewenste pakket (indien van toepassing), en je bericht.",
    "priv.h3": "3. Waarvoor we deze gegevens gebruiken",
    "priv.p3": "Uitsluitend om te reageren op je contactaanvraag en, als je dat wilt, een offerte of vervolgtraject met je te bespreken. We gebruiken je gegevens niet voor marketing of om ze aan derden te verkopen.",
    "priv.h4": "4. Hoe lang we je gegevens bewaren",
    "priv.p4": "Inzendingen via het contactformulier bewaren we maximaal <strong>6 maanden</strong>. Komt er een daadwerkelijke samenwerking uit voort, dan gelden vanaf dat moment de bewaartermijnen die horen bij onze wettelijke administratieplicht als ondernemer.",
    "priv.h5": "5. Wie er toegang heeft tot je gegevens",
    "priv.p5": "Het contactformulier wordt technisch verwerkt via <strong>Formspree</strong>, een externe formulierdienst die de invoer ontvangt en aan ons doorstuurt. Wij delen je gegevens verder met niemand.",
    "priv.h6": "6. Cookies",
    "priv.p6": "Deze website gebruikt geen tracking- of advertentiecookies. We gebruiken alleen <code>localStorage</code> in je browser om je taalvoorkeur (NL/EN) te onthouden - dit is functioneel, plaatst geen cookie, en vereist daarom geen toestemming.",
    "priv.h7": "7. Jouw rechten",
    "priv.p7": "Onder de AVG heb je het recht op inzage, correctie, verwijdering en bezwaar tegen de verwerking van je gegevens. Wil je hier gebruik van maken, mail dan naar <a href=\"mailto:raamstudio@hotmail.com\">raamstudio@hotmail.com</a>.",
    "priv.h8": "8. Klachten",
    "priv.p8": "Ben je het niet eens met hoe we met je gegevens omgaan? Je kunt een klacht indienen bij de <a href=\"https://autoriteitpersoonsgegevens.nl\" target=\"_blank\" rel=\"noopener\">Autoriteit Persoonsgegevens</a>.",
    "priv.h9": "9. Wijzigingen",
    "priv.p9": "We kunnen deze privacyverklaring van tijd tot tijd aanpassen, bijvoorbeeld als er iets verandert aan de website of onze werkwijze. De datum hieronder geeft de laatste update aan.",

    "terms.label": "Algemene voorwaarden",
    "terms.title": "Duidelijke afspraken",
    "terms.sub": "Van toepassing op alle offertes, opdrachten en overeenkomsten met Raam Studio.",
    "terms.h1": "1. Toepasselijkheid",
    "terms.p1": "Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en werkzaamheden van Raam Studio (KVK 42139474), tenzij schriftelijk anders overeengekomen.",
    "terms.h2": "2. Offertes en totstandkoming",
    "terms.p2": "Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een overeenkomst komt tot stand zodra je schriftelijk (ook per e-mail) akkoord geeft.",
    "terms.h3": "3. Uitvoering",
    "terms.p3": "Raam Studio voert de opdracht naar beste inzicht en vermogen uit. Als opdrachtgever lever je tijdig alle benodigde informatie en materialen aan - vertraging hierdoor komt niet voor rekening van Raam Studio.",
    "terms.h4": "4. Prijzen en betaling",
    "terms.p4a": "Facturen dienen binnen de overeengekomen termijn te worden voldaan.",
    "terms.p4b": "Bij overschrijding ben je van rechtswege in verzuim en wettelijke rente verschuldigd.",
    "terms.p4c": "Buitengerechtelijke incassokosten komen voor jouw rekening bij aanhoudende niet-betaling.",
    "terms.p4d": "Raam Studio werkt onder de kleineondernemersregeling (KOR) - er wordt geen btw in rekening gebracht.",
    "terms.h5": "5. Herroepingsrecht",
    "terms.p5a": "Op grond van artikel 6:230p, onderdeel f, sub 1 van het Burgerlijk Wetboek is het herroepingsrecht (de standaard bedenktijd van 14 dagen) niet van toepassing op de levering van diensten en producten die volgens specificaties van de opdrachtgever worden vervaardigd, niet geprefabriceerd zijn, en die worden gemaakt op basis van een individuele keuze of beslissing van de opdrachtgever, of die duidelijk voor die specifieke opdrachtgever bestemd zijn.",
    "terms.p5b": "Websites en content die Raam Studio op maat bouwt - afgestemd op de specifieke wensen, huisstijl en inhoud van de opdrachtgever - vallen onder deze uitzondering. Zodra je akkoord gaat met de offerte en wij starten met de werkzaamheden, geldt er dus geen wettelijke bedenktijd van 14 dagen.",
    "terms.h6": "6. Aansprakelijkheid",
    "terms.p6": "De aansprakelijkheid van Raam Studio voor schade voortvloeiend uit de uitvoering van de opdracht is beperkt tot het factuurbedrag van de betreffende opdracht. Deze beperking geldt niet bij opzet of grove schuld.",
    "terms.h7": "7. Intellectueel eigendom",
    "terms.p7": "Alle rechten op het geleverde werk (zoals broncode en ontwerp) gaan pas over op de opdrachtgever na volledige betaling van de overeengekomen prijs. Tot dat moment berusten alle rechten bij Raam Studio.",
    "terms.h8": "8. Hosting, domeinnaam en onderhoud",
    "terms.p8": "Tenzij anders overeengekomen, is de opdrachtgever na oplevering zelf verantwoordelijk voor hosting- en domeinkosten. Onderhoud na oplevering wordt alleen verricht op basis van een aparte afspraak.",
    "terms.h9": "9. Opzegging",
    "terms.p9": "Beide partijen kunnen de overeenkomst schriftelijk opzeggen. Reeds verrichte werkzaamheden worden naar rato in rekening gebracht.",
    "terms.h10": "10. Geheimhouding",
    "terms.p10": "Beide partijen behandelen vertrouwelijke informatie die zij van elkaar ontvangen vertrouwelijk en delen deze niet met derden zonder toestemming.",
    "terms.h11": "11. Toepasselijk recht",
    "terms.p11": "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Raam Studio gevestigd is.",

    "footer.tag": "Websites & social media content voor lokale bedrijven in Leiden.",
    "footer.privacy": "Privacyverklaring",
    "footer.terms": "Algemene voorwaarden",
    "footer.rights": "Alle rechten voorbehouden."
  },

  en: {
    "nav.about": "About",
    "nav.diensten": "Services",
    "nav.websites": "Websites",
    "nav.socialmedia": "Social Media",
    "nav.work": "Work",
    "nav.contact": "Contact",

    "hero.eyebrow": "Based in Leiden",
    "hero.title": "Websites and content that help local businesses grow",
    "hero.sub": "Modern, fast and affordable websites - plus content that stands out on TikTok and Instagram - for salons, restaurants and shops in Leiden and beyond.",
    "hero.cta": "Request a completely free trial website",
    "hero.ctaSub": "Gives you an idea of how a website could look for you",
    "hero.cta2": "See the work",

    "trust.direct": "Direct & personal contact",
    "trust.pricing": "Fair, transparent pricing",
    "trust.local": "Local to Leiden",

    "about.label": "About us",
    "about.title": "Hi, I'm Rami",
    "about.p1": "I'm an ICT student who fell in love with web development along the way - and these days with content creation too. Raam Studio is where that turned into something real: a small, personal studio for local business owners who want a website, or just a bit more visibility on TikTok and Instagram, without the price tag - or the endless email chains - of a big agency.",
    "about.p2": "When you work with me, you work directly with the person building your site or making your content. No account managers, no hand-offs - just clear communication from the first idea to the end result.",
    "about.p3": "These days, I don't quite do this alone anymore.",
    "about.founded": "Raam Studio - every client gets my full attention.",

    "matthijs.label": "Together with",
    "matthijs.name": "Matthijs",
    "matthijs.p1": "Matthijs was born and raised in Leiden and has a background in marketing. He wants to help the city that shaped him keep up with an increasingly digital world.",
    "matthijs.p2": "Within Raam Studio he thinks along on how local businesses can show up online as well as possible - I remain the driving force behind Raam Studio, but with Matthijs on board I can help clients even better.",

    "diensten.label": "Services",
    "diensten.title": "Two ways to work together",
    "diensten.sub": "Raam Studio builds websites for local businesses, and creates social media content for businesses that want to show up on TikTok and Instagram.",
    "diensten.web.title": "Websites",
    "diensten.web.body": "Fast, affordable websites for local businesses - from first design to launch, including hosting and maintenance.",
    "diensten.web.cta": "See websites",
    "diensten.content.title": "Social media content",
    "diensten.content.body": "TikTok and Instagram videos for businesses - from filming to a ready-to-post content package.",
    "diensten.content.cta": "See social media",

    "websitespage.label": "Websites",
    "websitespage.title": "A website that works for you",
    "websitespage.sub": "Fast, affordable and personal - no account managers, no surprises later. Below is what we can build for you and what it costs.",
    "websitespage.cta": "Request a completely free trial website",
    "websitespage.imgAlt": "Laptop showing code on a wooden desk",

    "socialpage.label": "Social Media Content",
    "socialpage.title": "Content that stands out on TikTok & Instagram",
    "socialpage.sub": "Regularly, professionally filmed content for your business - without you having to stand behind the camera yourself.",
    "socialpage.imgAlt": "Smartphone on a tripod with a light, ready to film",

    "social.s1.title": "On-location filming",
    "social.s1.body": "I typically come by once a week to film content right where your business is - no studio distance, no hassle.",
    "social.s2.title": "Editing included",
    "social.s2.body": "Raw footage gets turned into ready-to-post videos, around two per week, ready to publish.",
    "social.s3.title": "TikTok & Instagram",
    "social.s3.body": "Content tailored to what works on both platforms - from short reels to behind-the-scenes.",

    "social.package.label": "Rate",
    "social.package.title": "One clear package",
    "social.package.badge": "New",
    "social.package.name": "Weekly content package",
    "social.package.rate": "per hour",
    "social.package.f1": "On-location filming, roughly once a week",
    "social.package.f2": "Around two videos delivered per week",
    "social.package.f3": "Suited for TikTok & Instagram",
    "social.package.f4": "Direct contact - no middlemen",
    "social.package.cta": "Get in touch",
    "social.package.note": "Number of videos per week is negotiable - this is an average, not a fixed amount.",

    "services.label": "Services",
    "services.title": "What we can build for you",
    "services.s1.title": "Website design",
    "services.s1.body": "A responsive website that looks professional on every screen - built around your business and your audience.",
    "services.s2.title": "Hosting & maintenance",
    "services.s2.body": "We handle hosting, domain, updates and backups, so you can focus on your business - not the tech.",
    "services.s3.title": "SEO & visibility",
    "services.s3.body": "So customers in Leiden and beyond can actually find you on Google.",

    "pricing.label": "Pricing",
    "pricing.title": "Clear pricing, no surprises",
    "pricing.oneoff": "one-time",
    "pricing.setup": "one-time",
    "pricing.month": "/ month",
    "pricing.popular": "Most popular",
    "pricing.cta": "Choose this plan",
    "pricing.basic.name": "Basic",
    "pricing.basic.f1": "Responsive website",
    "pricing.basic.f2": "1 round of revisions",
    "pricing.basic.f3": "Findable on Google Maps",
    "pricing.basic.f4": "Set up to be found on Google",
    "pricing.plus.name": "Plus",
    "pricing.plus.f1": "Everything in Basic",
    "pricing.plus.f2": "Hosting & domain",
    "pricing.plus.f3": "Security & backups",
    "pricing.plus.f4": "Customizable, exactly the way you want it",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Everything in Plus",
    "pricing.premium.f2": "Priority support",
    "pricing.premium.f3": "Unlimited changes, including new pages",
    "pricing.premium.f4": "We keep improving how easily people find you on Google",

    "faq.label": "FAQ",
    "faq.title": "A few more things",
    "faq.q2.q": "Why is the build price so low?",
    "faq.q2.a": "We work efficiently with modern tools, which keeps the build cost down. The monthly plan is what keeps hosting, security and maintenance properly taken care of afterwards.",
    "faq.q3.q": "Do I stay the owner of my website and domain name?",
    "faq.q3.a": "Yes. The website and domain are and remain yours.",

    "work.label": "Work",
    "work.title": "A look through the window",
    "work.sub": "A look at a few recent projects - click a project to visit the website.",
    "work.visit": "Visit the website",
    "work.p1.name": "Groenland Juwelier",
    "work.p1.tag": "Live project - jewelry store",
    "work.p1.alt": "Homepage of the Groenland Juwelier website",
    "work.p1.body": "Website for a jeweller on the Haarlemmerstraat in Leiden, with a collection, ring pages and a shopping basket.",
    "work.p2.name": "Haarscherp",
    "work.p2.tag": "Concept - unisex hair studio",
    "work.p2.alt": "Homepage of the Haarscherp website",
    "work.p2.body": "Design concept for a modern hair studio in Leiden, with animations, a tabbed menu and a live open/closed status.",
    "work.p3.name": "De Leidse Boon",
    "work.p3.tag": "Concept - coffee roastery & coffee bar",
    "work.p3.alt": "Homepage of the De Leidse Boon website",
    "work.p3.body": "Design concept for a coffee roastery in Leiden, with a chalkboard-style menu, testimonial carousel and its own visual style.",

    "showcase.label": "Examples",
    "showcase.title": "What we've already built",
    "showcase.sub": "Browse a few websites we've built and click through to the live version.",
    "showcase.aria": "Examples of websites we've built",
    "showcase.prev": "Previous example",
    "showcase.next": "Next example",

    "why.label": "Why Raam Studio",
    "why.title": "No account manager. Just us.",
    "why.body": "Big agencies work in layers: sales, project management, developers. At Raam Studio you speak directly with us - the people building your website or making your content - faster, more personal, and without the overhead costs you'd otherwise pay for.",
    "why.c1.title": "Direct & personal",
    "why.c1.body": "One point of contact, from first chat to launch.",
    "why.c2.title": "Fair pricing",
    "why.c2.body": "Transparent packages, no surprise costs later.",
    "why.c3.title": "Local knowledge",
    "why.c3.body": "We know the Leiden market and think along with local business owners.",

    "contact.label": "Contact",
    "contact.title": "Let's talk",
    "contact.body": "Tell us a bit about your business and what you're looking for. We'll reply within a day.",
    "contact.form.name": "Name",
    "contact.form.namePh": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPh": "name@business.com",
    "contact.form.type": "What are you interested in?",
    "contact.form.type.websites": "Websites",
    "contact.form.type.social": "Social media content",
    "contact.form.type.other": "Other",
    "contact.form.budget": "Preferred package",
    "contact.form.unsure": "Not sure yet",
    "contact.form.message": "Message",
    "contact.form.messagePh": "Tell us about your business and what you need...",
    "contact.form.submit": "Send message",
    "contact.form.note": "We usually reply within a day.",
    "contact.form.sending": "Sending...",
    "contact.form.sent": "Thanks for your message! We'll get back to you as soon as possible.",
    "contact.form.error": "Something went wrong sending this. Please try again or email raamstudio@hotmail.com directly.",

    "contact.info.location": "Leiden, Netherlands",
    "contact.form.trialPrefill": "I'd like to request a free trial website. My business: ",

    "meta.title.home": "Raam Studio - Websites and content for local businesses in Leiden",
    "meta.title.websites": "Websites for local businesses - Raam Studio",
    "meta.title.social": "Social media content - Raam Studio",
    "meta.title.contact": "Contact - Raam Studio",
    "meta.title.privacy": "Privacy policy - Raam Studio",
    "meta.title.terms": "Terms and conditions - Raam Studio",

    "legal.updated": "Last updated: September 2026",

    "priv.label": "Privacy policy",
    "priv.title": "How we handle your data",
    "priv.sub": "Clear and simple - no fine print you have to dig through.",
    "priv.h1": "1. Who is responsible",
    "priv.p1": "Raam Studio (sole proprietorship of Rami Sharaby), Chamber of Commerce (KVK) number 42139474, based in Leiden. The full business address is available on request. You can reach us at <a href=\"mailto:raamstudio@hotmail.com\">raamstudio@hotmail.com</a> or <a href=\"tel:+31615671804\">+31 6 15 67 18 04</a>.",
    "priv.h2": "2. What data we collect",
    "priv.p2": "Through the contact form on this website we collect: your name, email address, the type of service you're interested in, your preferred package (if applicable), and your message.",
    "priv.h3": "3. What we use this data for",
    "priv.p3": "Solely to respond to your enquiry and, if you wish, to discuss a quote or next steps with you. We do not use your data for marketing or sell it to third parties.",
    "priv.h4": "4. How long we keep your data",
    "priv.p4": "We keep contact form submissions for a maximum of <strong>6 months</strong>. If this leads to an actual collaboration, the retention periods that come with our statutory record-keeping obligations as a business apply from that moment on.",
    "priv.h5": "5. Who has access to your data",
    "priv.p5": "The contact form is processed technically via <strong>Formspree</strong>, an external form service that receives your input and forwards it to us. We do not share your data with anyone else.",
    "priv.h6": "6. Cookies",
    "priv.p6": "This website does not use tracking or advertising cookies. We only use <code>localStorage</code> in your browser to remember your language preference (NL/EN) - this is functional, does not place a cookie, and therefore requires no consent.",
    "priv.h7": "7. Your rights",
    "priv.p7": "Under the GDPR you have the right to access, correct, delete and object to the processing of your data. If you want to exercise these rights, email <a href=\"mailto:raamstudio@hotmail.com\">raamstudio@hotmail.com</a>.",
    "priv.h8": "8. Complaints",
    "priv.p8": "Don't agree with how we handle your data? You can file a complaint with the <a href=\"https://autoriteitpersoonsgegevens.nl\" target=\"_blank\" rel=\"noopener\">Dutch Data Protection Authority (Autoriteit Persoonsgegevens)</a>.",
    "priv.h9": "9. Changes",
    "priv.p9": "We may update this privacy policy from time to time, for example if something changes about the website or our way of working. The date below shows the latest update.",

    "terms.label": "Terms and conditions",
    "terms.title": "Clear agreements",
    "terms.sub": "Applies to all quotes, assignments and agreements with Raam Studio.",
    "terms.h1": "1. Applicability",
    "terms.p1": "These terms apply to all quotes, agreements and work of Raam Studio (KVK 42139474), unless agreed otherwise in writing.",
    "terms.h2": "2. Quotes and formation of the agreement",
    "terms.p2": "Quotes are non-binding and valid for 30 days, unless stated otherwise. An agreement is formed as soon as you confirm in writing (including by email).",
    "terms.h3": "3. Performance",
    "terms.p3": "Raam Studio carries out the assignment to the best of its knowledge and ability. As the client, you provide all necessary information and materials in good time - delays caused by this are not for Raam Studio's account.",
    "terms.h4": "4. Prices and payment",
    "terms.p4a": "Invoices must be paid within the agreed term.",
    "terms.p4b": "If the term is exceeded, you are automatically in default and owe statutory interest.",
    "terms.p4c": "Extrajudicial collection costs are for your account in case of persistent non-payment.",
    "terms.p4d": "Raam Studio operates under the small business scheme (KOR) - no VAT is charged.",
    "terms.h5": "5. Right of withdrawal",
    "terms.p5a": "Under Article 6:230p, part f, sub 1 of the Dutch Civil Code, the right of withdrawal (the standard 14-day cooling-off period) does not apply to the supply of services and products that are made to the client's specifications, are not prefabricated, and are made on the basis of an individual choice or decision of the client, or that are clearly intended for that specific client.",
    "terms.p5b": "Websites and content that Raam Studio builds to order - tailored to the specific wishes, branding and content of the client - fall under this exception. As soon as you agree to the quote and we start the work, no statutory 14-day cooling-off period applies.",
    "terms.h6": "6. Liability",
    "terms.p6": "Raam Studio's liability for damage arising from the performance of the assignment is limited to the invoice amount of that assignment. This limitation does not apply in case of intent or gross negligence.",
    "terms.h7": "7. Intellectual property",
    "terms.p7": "All rights to the delivered work (such as source code and design) only transfer to the client after full payment of the agreed price. Until then, all rights remain with Raam Studio.",
    "terms.h8": "8. Hosting, domain name and maintenance",
    "terms.p8": "Unless agreed otherwise, after delivery the client is responsible for hosting and domain costs. Maintenance after delivery is only carried out on the basis of a separate agreement.",
    "terms.h9": "9. Termination",
    "terms.p9": "Both parties can terminate the agreement in writing. Work already carried out will be charged pro rata.",
    "terms.h10": "10. Confidentiality",
    "terms.p10": "Both parties treat confidential information they receive from each other as confidential and do not share it with third parties without permission.",
    "terms.h11": "11. Governing law",
    "terms.p11": "These terms are governed by Dutch law. Disputes will be submitted to the competent court in the district where Raam Studio is based.",

    "footer.tag": "Websites & social media content for local businesses in Leiden.",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms and conditions",
    "footer.rights": "All rights reserved."
  }
};

let currentLang = "nl";
let trialPrefillOn = false;

function applyTranslations(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) el.textContent = value;
  });
  // values that contain markup (links, bold) - authored in this file only
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const value = translations[lang][key];
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations[lang][key];
    if (value) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const value = translations[lang][key];
    if (value) el.setAttribute("alt", value);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    const value = translations[lang][key];
    if (value) el.setAttribute("aria-label", value);
  });
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);

  // "free trial website" links pre-fill the contact message in the active language
  const messageField = document.getElementById("message");
  if (messageField && trialPrefillOn){
    const known = [translations.nl["contact.form.trialPrefill"], translations.en["contact.form.trialPrefill"]];
    if (messageField.value === "" || known.includes(messageField.value)){
      messageField.value = translations[lang]["contact.form.trialPrefill"];
    }
  }
}

function setLanguage(lang){
  currentLang = lang;
  applyTranslations(lang);
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });
  try{ localStorage.setItem("raam-lang", lang); }catch(e){ /* storage unavailable */ }
}

document.addEventListener("DOMContentLoaded", () => {

  trialPrefillOn = window.location.hash === "#proefwebsite";

  // ---- language toggle ----
  let storedLang = null;
  try{ storedLang = localStorage.getItem("raam-lang"); }catch(e){ /* storage unavailable */ }
  setLanguage(storedLang === "en" || storedLang === "nl" ? storedLang : "nl");

  document.getElementById("langToggle").addEventListener("click", () => {
    setLanguage(currentLang === "nl" ? "en" : "nl");
  });

  // ---- nav dropdown ----
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const parent = toggle.closest(".dropdown");
      const wasOpen = parent.classList.contains("open");
      document.querySelectorAll(".dropdown.open").forEach(d => d.classList.remove("open"));
      if (!wasOpen) parent.classList.add("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach(d => d.classList.remove("open"));
  });

  // ---- mobile menu ----
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- scroll reveal ----
  const revealTargets = document.querySelectorAll(".section, .trust-strip");
  revealTargets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));

  // ---- contact form (submits to Formspree) ----
  const form = document.getElementById("contactForm");
  if (form){
    const note = document.getElementById("formNote");
    const submitBtn = form.querySelector("button[type='submit']");

    // show the package field only when "Websites" is the selected interest
    const serviceType = document.getElementById("serviceType");
    const packageField = document.getElementById("packageField");
    if (serviceType && packageField){
      const syncPackageField = () => {
        packageField.style.display = serviceType.value === "websites" ? "" : "none";
      };
      serviceType.addEventListener("change", syncPackageField);
      syncPackageField();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      note.textContent = translations[currentLang]["contact.form.sending"];
      note.style.color = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      })
        .then(response => {
          if (response.ok){
            note.textContent = translations[currentLang]["contact.form.sent"];
            note.style.color = "var(--accent)";
            form.reset();
          } else {
            note.textContent = translations[currentLang]["contact.form.error"];
            note.style.color = "var(--text-danger, #A32D2D)";
          }
        })
        .catch(() => {
          note.textContent = translations[currentLang]["contact.form.error"];
          note.style.color = "var(--text-danger, #A32D2D)";
        })
        .finally(() => {
          submitBtn.disabled = false;
        });
    });
  }

  // ---- footer year ----
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- showcase carousel (websites page) ----
  document.querySelectorAll("[data-carousel]").forEach(root => {
    const track = root.querySelector(".showcase-track");
    const caps = root.querySelector(".showcase-caps");
    const slides = Array.from(track.children);
    const capItems = Array.from(caps.children);
    const dots = Array.from(root.querySelectorAll(".showcase-dot"));
    const count = slides.length;
    let index = 0;

    const render = () => {
      track.style.transform = "translateX(" + (-index * 100) + "%)";
      caps.style.transform = "translateX(" + (-index * 100) + "%)";
      slides.forEach((slide, i) => {
        slide.tabIndex = i === index ? 0 : -1;
        slide.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
      capItems.forEach((cap, i) => {
        cap.setAttribute("aria-hidden", i === index ? "false" : "true");
        cap.querySelectorAll("a").forEach(a => { a.tabIndex = i === index ? 0 : -1; });
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
        dot.setAttribute("aria-current", i === index ? "true" : "false");
      });
    };

    const go = (i) => {
      index = (i + count) % count;
      render();
    };

    root.querySelector(".showcase-prev").addEventListener("click", () => go(index - 1));
    root.querySelector(".showcase-next").addEventListener("click", () => go(index + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => go(i)));

    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    });

    // swipe on touch screens
    let touchX = null;
    let touchY = null;
    root.addEventListener("touchstart", (e) => {
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    }, { passive: true });
    root.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - touchY;
      touchX = touchY = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? index + 1 : index - 1);
    }, { passive: true });

    render();
  });
});
