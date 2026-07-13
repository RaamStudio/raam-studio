// ===================================================
// Raam Studio — site script
// i18n, mobile menu, scroll reveal, contact form
// ===================================================

const translations = {
  nl: {
    "nav.about": "Over mij",
    "nav.services": "Diensten",
    "nav.pricing": "Prijzen",
    "nav.work": "Werk",
    "nav.contact": "Contact",

    "hero.eyebrow": "Gevestigd in Leiden",
    "hero.title": "Websites die lokale bedrijven laten groeien",
    "hero.sub": "Moderne, snelle en betaalbare websites voor salons, restaurants en winkels in Leiden en omgeving.",
    "hero.cta": "Neem contact op",
    "hero.cta2": "Bekijk het werk",

    "trust.direct": "Direct & persoonlijk contact",
    "trust.pricing": "Eerlijke, transparante prijzen",
    "trust.local": "Lokaal in Leiden",

    "about.label": "Over mij",
    "about.title": "Hallo, ik ben Rami",
    "about.p1": "Ik studeer ICT en ben via die weg verliefd geworden op webdevelopment. Raam Studio is waar dat is uitgegroeid tot iets echts: een klein, persoonlijk studio voor lokale ondernemers die een website willen zonder het prijskaartje — of de eindeloze e-mailwisselingen — van een groot bureau.",
    "about.p2": "Werk je met mij samen, dan werk je rechtstreeks met de persoon die je site bouwt. Geen accountmanagers, geen overdrachtsmomenten — gewoon heldere communicatie van de eerste schets tot de livegang.",
    "about.founded": "Raam Studio is net gestart — en dat betekent dat elke klant mijn volle aandacht krijgt.",

    "services.label": "Diensten",
    "services.title": "Wat ik voor je kan bouwen",
    "services.s1.title": "Websiteontwerp",
    "services.s1.body": "Een responsive website die er op elk scherm professioneel uitziet — afgestemd op jouw bedrijf en doelgroep.",
    "services.s2.title": "Hosting & onderhoud",
    "services.s2.body": "Ik regel hosting, domein, updates en backups, zodat jij je met je bedrijf kunt bezighouden — niet met techniek.",
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
    "work.sub": "Raam Studio is nét gestart — hier komen binnenkort echte projecten te staan.",
    "work.p1.name": "Kapsalon project",
    "work.p1.tag": "Binnenkort — hairsalon",
    "work.p2.name": "Restaurant project",
    "work.p2.tag": "Binnenkort — horeca",
    "work.p3.name": "Praktijk project",
    "work.p3.tag": "Binnenkort — dienstverlening",

    "why.label": "Waarom Raam Studio",
    "why.title": "Geen account manager. Gewoon mij.",
    "why.body": "Grote bureaus werken met lagen: verkoop, projectmanagement, developers. Bij Raam Studio praat je rechtstreeks met de persoon die je website bouwt — sneller, persoonlijker en zonder overheadkosten die jij uiteindelijk betaalt.",
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
    "contact.form.budget": "Interesse",
    "contact.form.unsure": "Weet ik nog niet",
    "contact.form.message": "Bericht",
    "contact.form.messagePh": "Vertel iets over je bedrijf en je wensen...",
    "contact.form.submit": "Verstuur bericht",
    "contact.form.note": "Dit formulier is nog niet gekoppeld aan e-mail — dat regelen we bij de lancering.",
    "contact.form.sent": "Bedankt! Je bericht is (nog niet echt) verstuurd — koppel dit formulier bij de lancering aan een echte inbox.",

    "footer.tag": "Websites voor lokale bedrijven in Leiden.",
    "footer.rights": "Alle rechten voorbehouden."
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.work": "Work",
    "nav.contact": "Contact",

    "hero.eyebrow": "Based in Leiden",
    "hero.title": "Websites that help local businesses grow",
    "hero.sub": "Modern, fast and affordable websites for salons, restaurants and shops in Leiden and beyond.",
    "hero.cta": "Get in touch",
    "hero.cta2": "See the work",

    "trust.direct": "Direct & personal contact",
    "trust.pricing": "Fair, transparent pricing",
    "trust.local": "Local to Leiden",

    "about.label": "About me",
    "about.title": "Hi, I'm Rami",
    "about.p1": "I'm an ICT student who fell in love with web development along the way. Raam Studio is where that turned into something real: a small, personal studio for local business owners who want a website without the price tag — or the endless email chains — of a big agency.",
    "about.p2": "When you work with me, you work directly with the person building your site. No account managers, no hand-offs — just clear communication from the first sketch to launch day.",
    "about.founded": "Raam Studio just launched — which means every client gets my full attention.",

    "services.label": "Services",
    "services.title": "What I can build for you",
    "services.s1.title": "Website design",
    "services.s1.body": "A responsive website that looks professional on every screen — built around your business and your audience.",
    "services.s2.title": "Hosting & maintenance",
    "services.s2.body": "I handle hosting, domain, updates and backups, so you can focus on your business — not the tech.",
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
    "work.sub": "Raam Studio just launched — real projects will appear here soon.",
    "work.p1.name": "Hair salon project",
    "work.p1.tag": "Coming soon — hair salon",
    "work.p2.name": "Restaurant project",
    "work.p2.tag": "Coming soon — restaurant",
    "work.p3.name": "Practice project",
    "work.p3.tag": "Coming soon — services",

    "why.label": "Why Raam Studio",
    "why.title": "No account manager. Just me.",
    "why.body": "Big agencies work in layers: sales, project management, developers. At Raam Studio you speak directly with the person building your website — faster, more personal, and without the overhead costs you'd otherwise pay for.",
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
    "contact.form.budget": "Interested in",
    "contact.form.unsure": "Not sure yet",
    "contact.form.message": "Message",
    "contact.form.messagePh": "Tell me about your business and what you need...",
    "contact.form.submit": "Send message",
    "contact.form.note": "This form isn't connected to an inbox yet — we'll wire that up at launch.",
    "contact.form.sent": "Thanks! Your message isn't actually sent yet — connect this form to a real inbox at launch.",

    "footer.tag": "Websites for local businesses in Leiden.",
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

  // ---- contact form (placeholder handling until a backend is connected) ----
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = translations[currentLang]["contact.form.sent"];
    note.style.color = "var(--accent)";
    form.reset();
  });

  // ---- footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();
});
