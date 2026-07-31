// ===================================================
// Raam Studio - site script
// i18n, mobile menu, scroll reveal, contact form
// ===================================================

const translations = {
  nl: {
    "nav.about": "Over mij",
    "nav.diensten": "Diensten",
    "nav.websites": "Websites",
    "nav.socialmedia": "Social Media",
    "nav.work": "Werk",
    "nav.contact": "Contact",

    "hero.eyebrow": "Gevestigd in Leiden!",
    "hero.title": "Websites en content die lokale bedrijven laten groeien",
    "hero.sub": "Moderne, snelle en betaalbare websites - plus content die opvalt op TikTok en Instagram - voor salons, restaurants en winkels in Leiden en omgeving.",
    "hero.cta": "Neem contact op",
    "hero.cta2": "Bekijk het werk",

    "trust.direct": "Direct & persoonlijk contact",
    "trust.pricing": "Eerlijke, transparante prijzen",
    "trust.local": "Lokaal in Leiden",

    "about.label": "Over mij",
    "about.title": "Hallo, ik ben Rami",
    "about.p1": "Ik studeer ICT en ben via die weg verliefd geworden op webdevelopment - en inmiddels ook op contentcreatie. Raam Studio is waar dat is uitgegroeid tot iets echts: een klein, persoonlijk studio voor lokale ondernemers die een website willen, of gewoon wat meer zichtbaarheid op TikTok en Instagram, zonder het prijskaartje - of de eindeloze e-mailwisselingen - van een groot bureau.",
    "about.p2": "Werk je met mij samen, dan werk je rechtstreeks met de persoon die je site bouwt of je content maakt. Geen accountmanagers, geen overdrachtsmomenten - gewoon heldere communicatie van het eerste idee tot het eindresultaat.",
    "about.founded": "Raam Studio - elke klant krijgt mijn volle aandacht.",

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
    "websitespage.sub": "Snel, betaalbaar en persoonlijk - geen account managers, geen verrassingen achteraf. Hieronder vind je wat ik voor je kan bouwen en wat het kost.",
    "websitespage.cta": "Neem contact op",

    "socialpage.label": "Social Media Content",
    "socialpage.title": "Content die opvalt op TikTok & Instagram",
    "socialpage.sub": "Regelmatig, professioneel gefilmde content voor je bedrijf - zonder dat jij zelf achter de camera hoeft te staan.",

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
    "services.title": "Wat ik voor je kan bouwen",
    "services.s1.title": "Websiteontwerp",
    "services.s1.body": "Een responsive website die er op elk scherm professioneel uitziet - afgestemd op jouw bedrijf en doelgroep.",
    "services.s2.title": "Hosting & onderhoud",
    "services.s2.body": "Ik regel hosting, domein, updates en backups, zodat jij je met je bedrijf kunt bezighouden - niet met techniek.",
    "services.s3.title": "SEO & vindbaarheid",
    "services.s3.body": "Zodat klanten in Leiden en omgeving je ook écht vinden via Google.",

    "pricing.label": "Prijzen",
    "pricing.title": "Duidelijke prijzen, geen verrassingen",
    "pricing.oneoff": "eenmalig",
    "pricing.setup": "setup",
    "pricing.month": "/ maand",
    "pricing.popular": "Populair",
    "pricing.cta": "Kies dit pakket",
    "pricing.basic.name": "Basic",
    "pricing.basic.f1": "Responsive website",
    "pricing.basic.f2": "Contactpagina",
    "pricing.basic.f3": "Google Maps",
    "pricing.basic.f4": "Basis SEO",
    "pricing.plus.name": "Plus",
    "pricing.plus.f1": "Alles uit Basic",
    "pricing.plus.f2": "Hosting & domein",
    "pricing.plus.f3": "Beveiliging & backups",
    "pricing.plus.f4": "Kleine contentwijzigingen",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Alles uit Plus",
    "pricing.premium.f2": "Voorrang bij support",
    "pricing.premium.f3": "Onbeperkt kleine aanpassingen",
    "pricing.premium.f4": "SEO-optimalisatie & monitoring",

    "work.label": "Werk",
    "work.title": "Een kijkje door het raam",
    "work.sub": "Een kijkje bij een aantal recente projecten.",
    "work.p1.name": "Interactieve verjaardagssite",
    "work.p1.tag": "Persoonlijk project - animatie & interactie",
    "work.p2.name": "Van Bostelen Smart Bouw",
    "work.p2.tag": "Portfolio - bouw & renovatie",
    "work.p3.name": "Soon!",
    "work.p3.tag": "Binnenkort - nieuwe projecten",

    "why.label": "Waarom Raam Studio",
    "why.title": "Geen account manager. Gewoon ik.",
    "why.body": "Grote bureaus werken met lagen: verkoop, projectmanagement, developers. Bij Raam Studio praat je rechtstreeks met de persoon die je website bouwt of je content maakt - sneller, persoonlijker en zonder overheadkosten die jij uiteindelijk betaalt.",
    "why.c1.title": "Direct & persoonlijk",
    "why.c1.body": "Eén aanspreekpunt, van eerste gesprek tot livegang.",
    "why.c2.title": "Eerlijke prijzen",
    "why.c2.body": "Transparante pakketten, geen verrassingen achteraf.",
    "why.c3.title": "Lokale kennis",
    "why.c3.body": "Ik ken de Leidse markt en denk mee met lokale ondernemers.",

    "contact.label": "Contact",
    "contact.title": "Laten we kennismaken",
    "contact.body": "Vertel me kort over je bedrijf en wat je zoekt. Ik reageer binnen een dag.",
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
    "contact.form.note": "Ik reageer meestal binnen één dag.",
    "contact.form.sending": "Bezig met versturen...",
    "contact.form.sent": "Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.",
    "contact.form.error": "Er ging iets mis bij het versturen. Probeer het opnieuw of mail rechtstreeks naar ramisharp@outlook.com.",

    "footer.tag": "Websites & social media content voor lokale bedrijven in Leiden.",
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
    "hero.cta": "Get in touch",
    "hero.cta2": "See the work",

    "trust.direct": "Direct & personal contact",
    "trust.pricing": "Fair, transparent pricing",
    "trust.local": "Local to Leiden",

    "about.label": "About me",
    "about.title": "Hi, I'm Rami",
    "about.p1": "I'm an ICT student who fell in love with web development along the way - and these days with content creation too. Raam Studio is where that turned into something real: a small, personal studio for local business owners who want a website, or just a bit more visibility on TikTok and Instagram, without the price tag - or the endless email chains - of a big agency.",
    "about.p2": "When you work with me, you work directly with the person building your site or making your content. No account managers, no hand-offs - just clear communication from the first idea to the end result.",
    "about.founded": "Raam Studio - every client gets my full attention.",

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
    "websitespage.sub": "Fast, affordable and personal - no account managers, no surprises later. Below is what I can build for you and what it costs.",
    "websitespage.cta": "Get in touch",

    "socialpage.label": "Social Media Content",
    "socialpage.title": "Content that stands out on TikTok & Instagram",
    "socialpage.sub": "Regularly, professionally filmed content for your business - without you having to stand behind the camera yourself.",

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
    "services.title": "What I can build for you",
    "services.s1.title": "Website design",
    "services.s1.body": "A responsive website that looks professional on every screen - built around your business and your audience.",
    "services.s2.title": "Hosting & maintenance",
    "services.s2.body": "I handle hosting, domain, updates and backups, so you can focus on your business - not the tech.",
    "services.s3.title": "SEO & visibility",
    "services.s3.body": "So customers in Leiden and beyond can actually find you on Google.",

    "pricing.label": "Pricing",
    "pricing.title": "Clear pricing, no surprises",
    "pricing.oneoff": "one-time",
    "pricing.setup": "setup",
    "pricing.month": "/ month",
    "pricing.popular": "Most popular",
    "pricing.cta": "Choose this plan",
    "pricing.basic.name": "Basic",
    "pricing.basic.f1": "Responsive website",
    "pricing.basic.f2": "Contact page",
    "pricing.basic.f3": "Google Maps",
    "pricing.basic.f4": "Basic SEO",
    "pricing.plus.name": "Plus",
    "pricing.plus.f1": "Everything in Basic",
    "pricing.plus.f2": "Hosting & domain",
    "pricing.plus.f3": "Security & backups",
    "pricing.plus.f4": "Small content changes",
    "pricing.premium.name": "Premium",
    "pricing.premium.f1": "Everything in Plus",
    "pricing.premium.f2": "Priority support",
    "pricing.premium.f3": "Unlimited small edits",
    "pricing.premium.f4": "SEO optimization & monitoring",

    "work.label": "Work",
    "work.title": "A look through the window",
    "work.sub": "A look at a few recent projects.",
    "work.p1.name": "Interactive birthday site",
    "work.p1.tag": "Personal project - animation & interaction",
    "work.p2.name": "Van Bostelen Smart Bouw",
    "work.p2.tag": "Portfolio - construction & renovation",
    "work.p3.name": "Soon!",
    "work.p3.tag": "Coming soon - new projects",

    "why.label": "Why Raam Studio",
    "why.title": "No account manager. Just me.",
    "why.body": "Big agencies work in layers: sales, project management, developers. At Raam Studio you speak directly with the person building your website or making your content - faster, more personal, and without the overhead costs you'd otherwise pay for.",
    "why.c1.title": "Direct & personal",
    "why.c1.body": "One point of contact, from first chat to launch.",
    "why.c2.title": "Fair pricing",
    "why.c2.body": "Transparent packages, no surprise costs later.",
    "why.c3.title": "Local knowledge",
    "why.c3.body": "I know the Leiden market and think along with local business owners.",

    "contact.label": "Contact",
    "contact.title": "Let's talk",
    "contact.body": "Tell me a bit about your business and what you're looking for. I'll reply within a day.",
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
    "contact.form.messagePh": "Tell me about your business and what you need...",
    "contact.form.submit": "Send message",
    "contact.form.note": "I usually reply within a day.",
    "contact.form.sending": "Sending...",
    "contact.form.sent": "Thanks for your message! I'll get back to you as soon as possible.",
    "contact.form.error": "Something went wrong sending this. Please try again or email ramisharp@outlook.com directly.",

    "footer.tag": "Websites & social media content for local businesses in Leiden.",
    "footer.rights": "All rights reserved."
  }
};

let currentLang = "nl";

function applyTranslations(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations[lang][key];
    if (value) el.setAttribute("placeholder", value);
  });
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);
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
});
