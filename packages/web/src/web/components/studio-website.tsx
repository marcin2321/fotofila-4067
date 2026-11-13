import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Menu,
  MapPin,
  Phone,
  Camera,
  Check,
} from "lucide-react";
import { homeMeta, localBusiness, photos, services, studio } from "../lib/studio";

export function SEO({
  title = homeMeta.title,
  description = homeMeta.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}) {
  useEffect(() => {
    document.title = title;
    const set = (attr: string, key: string, value: string) => {
      let node = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attr, key);
        document.head.appendChild(node);
      }
      node.content = value;
    };
    set("name", "description", description);
    set("property", "og:title", title);
    set("property", "og:description", description);
    const domain = import.meta.env.VITE_PUBLIC_SITE_URL;
    if (domain) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = `${domain.replace(/\/$/, "")}${path}`;
    }
  }, [title, description, path]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
    />
  );
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="FOTO FILA — strona główna">
      <span>
        FOTO FILA<span className="brand-dot">.</span>
      </span>
      <small>STUDIO FOTOGRAFICZNE</small>
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Brand />
      <nav className={open ? "navigation open" : "navigation"} aria-label="Menu główne">
        <a onClick={() => setOpen(false)} href="/#studio">
          O studiu
        </a>
        <a onClick={() => setOpen(false)} href="/#portfolio">
          Portfolio
        </a>
        <a onClick={() => setOpen(false)} href="/#oferta">
          Oferta
        </a>
        <a className="nav-contact" onClick={() => setOpen(false)} href="/#kontakt">
          Porozmawiajmy <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`eyebrow ${dark ? "on-dark" : ""}`}>
      <span />
      {children}
    </p>
  );
}
function RoundArrow({ small = false }: { small?: boolean }) {
  return (
    <span className={`round-arrow ${small ? "small" : ""}`}>
      <ArrowUpRight size={small ? 19 : 25} strokeWidth={1.7} />
    </span>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" aria-label="Fotografia FOTO FILA">
        <img
          className="hero-image"
          src="/images/couple-original.png"
          alt="Sesja we dwoje — para przy kolumnach na tle zieleni, oryginalna fotografia FOTO FILA"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <Eyebrow dark>ZIELONA GÓRA · OD 1991 ROKU</Eyebrow>
          <h1>
            Chwile mijają.
            <br />
            Zdjęcia zostają.
          </h1>
          <p>
            Blisko ludzi. Blisko emocji.
            <br />
            Fotografia, do której chce się wracać.
          </p>
          <a className="light-button" href="#portfolio">
            Zobacz nasze zdjęcia <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-foot">
          <span>Wasze historie. Nasze spojrzenie.</span>
          <a href="#studio">
            POZNAJ STUDIO <ArrowRight size={15} />
          </a>
        </div>
      </section>
      <div className="brand-line">
        <div className="brand-description">
          <p>
            Fotografujemy to,
            <br />
            co naprawdę ważne.
          </p>
          <span>
            Zdjęcia do dokumentów, rodzinne historie
            <br />i wyjątkowe dni. W jednym miejscu.
          </span>
        </div>
        <div className="giant-brand" aria-hidden="true">
          FOTO FILA<span>·</span>
        </div>
      </div>
    </>
  );
}

function Studio() {
  return (
    <section className="studio dark-panel" id="studio">
      <div className="studio-copy">
        <Eyebrow dark>01 / NASZE STUDIO</Eyebrow>
        <h2>
          Nie tylko zdjęcia.
          <br />
          Cząstka Waszej
          <br />
          <span>historii.</span>
        </h2>
        <p>
          FOTO FILA to studio fotograficzne w Zielonej Górze. Od 1991 roku towarzyszymy Wam w
          codziennych sprawach i najważniejszych chwilach.
        </p>
        <p>
          Od zdjęcia do dokumentu po rodzinny portret — w każdym kadrze najważniejszy jest człowiek.
        </p>
        <a className="text-link" href="#kontakt">
          Poznajmy się <ArrowUpRight size={19} />
        </a>
        <div className="studio-location">
          <MapPin size={17} />
          <span>
            Św. Cyryla i Metodego 3<br />
            <b>Zielona Góra</b>
          </span>
        </div>
      </div>
      <div className="studio-collage">
        <a className="studio-tile portrait-tile" href="/sesje-rodzinne">
          <img
            src="/images/portrait.jpg"
            alt="Portret dziecięcy w zimowej scenografii FOTO FILA"
            loading="lazy"
          />
          <div>
            <span>
              W małych chwilach
              <br />
              jest wielka magia.
            </span>
            <RoundArrow small />
          </div>
        </a>
        <a className="studio-tile seasonal-tile" href="/sesje-rodzinne">
          <img
            src="/images/current-1.jpg"
            alt="Świąteczna scenografia fotograficzna w studiu FOTO FILA"
            loading="lazy"
          />
          <div>
            <span>
              Miejsce na
              <br />
              Wasze wspomnienia.
            </span>
            <RoundArrow small />
          </div>
        </a>
        <span className="collage-note">PRAWDZIWE EMOCJE. WASZE ZDJĘCIA.</span>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("Wszystkie");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryOpen = active !== null;
  const previousFocus = useRef<HTMLElement | null>(null);
  const visible = photos
    .map((photo, index) => ({ ...photo, index }))
    .filter((p) => filter === "Wszystkie" || p.type === filter);
  useEffect(() => {
    if (!galleryOpen) return;
    dialogRef.current?.showModal();
    previousFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight")
        setActive((n) => (n === null ? null : (n + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setActive((n) => (n === null ? null : (n + photos.length - 1) % photos.length));
      if (event.key === "Tab") {
        const buttons = Array.from(
          document.querySelectorAll<HTMLButtonElement>(".lightbox button"),
        );
        const current = buttons.indexOf(document.activeElement as HTMLButtonElement);
        event.preventDefault();
        buttons[(current + (event.shiftKey ? buttons.length - 1 : 1)) % buttons.length]?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", handler);
      previousFocus.current?.focus();
    };
  }, [galleryOpen]);
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-top">
        <div>
          <Eyebrow>02 / WYBRANE KADRY</Eyebrow>
          <h2>Życie. W kadrze.</h2>
        </div>
        <p>
          Nie ma dwóch takich samych historii.
          <br />
          Oto kilka, które mieliśmy przyjemność zapisać.
        </p>
      </div>
      <fieldset className="filter-bar" aria-label="Kategorie portfolio">
        {["Wszystkie", "Rodzina", "Pary", "Studio"].map((item) => (
          <button
            className={filter === item ? "selected" : ""}
            aria-pressed={filter === item}
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
            <span>
              {String(
                item === "Wszystkie"
                  ? photos.length
                  : photos.filter((photo) => photo.type === item).length,
              ).padStart(2, "0")}
            </span>
          </button>
        ))}
      </fieldset>
      <div className={`photo-grid ${filter !== "Wszystkie" ? "filtered" : ""}`}>
        <div className="portfolio-watermark" aria-hidden="true">
          Wspomnienia
        </div>
        {visible.map((photo, order) => (
          <button
            key={photo.src}
            className={`photo-card photo-position-${order} ${photo.src === "/images/couple-original.png" ? "original-couple" : photo.type === "Studio" ? "original-studio" : ""}`}
            onClick={() => setActive(photo.index)}
            aria-label={`Otwórz zdjęcie: ${photo.title}`}
          >
            <div className="photo-wrap">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <RoundArrow />
            </div>
            <div className="photo-caption">
              <div>
                <h3>{photo.title}</h3>
                <span>{photo.label}</span>
              </div>
              <span className="photo-number">0{photo.index + 1}</span>
            </div>
          </button>
        ))}
      </div>
      <a className="portfolio-facebook" href={studio.facebook} target="_blank" rel="noreferrer">
        Więcej naszych zdjęć na Facebooku <ArrowUpRight size={18} />
      </a>
      {active !== null && (
        <dialog
          ref={dialogRef}
          className="lightbox"
          aria-modal="true"
          aria-label={photos[active].title}
          onCancel={() => setActive(null)}
        >
          <button
            ref={closeRef}
            className="lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Zamknij zdjęcie"
          >
            <X />
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + photos.length - 1) % photos.length);
            }}
            aria-label="Poprzednie zdjęcie"
          >
            <ArrowLeft />
          </button>
          <figure>
            <img src={photos[active].src} alt={photos[active].alt} />
            <figcaption>
              {photos[active].title}
              <span>
                {active + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % photos.length);
            }}
            aria-label="Następne zdjęcie"
          >
            <ArrowRight />
          </button>
        </dialog>
      )}
    </section>
  );
}

function Offer() {
  const [selected, setSelected] = useState(0);
  const service = services[selected];
  return (
    <section className="offer dark-panel" id="oferta">
      <Eyebrow dark>03 / JAK MOŻEMY POMÓC</Eyebrow>
      <div className="offer-grid">
        <div>
          <h2>
            Każda chwila
            <br />
            ma swoje <span>zdjęcie.</span>
          </h2>
          <div className="offer-list">
            {services.map((s, i) => (
              <button
                key={s.slug}
                aria-expanded={selected === i}
                aria-controls="service-preview"
                className={selected === i ? "active" : ""}
                onClick={() => setSelected(i)}
              >
                <span>
                  <small>0{i + 1}</small>
                  {s.title}
                </span>
                {selected === i ? <RoundArrow small /> : <Plus size={19} />}
              </button>
            ))}
            <a
              className="video-link"
              href={`mailto:${studio.email}?subject=Zapytanie%20o%20videofilmowanie`}
            >
              Interesuje Cię videofilmowanie? Porozmawiajmy. <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="service-preview" id="service-preview" key={service.slug}>
          <div className={`service-image ${selected === 0 ? "document-image" : ""}`}>
            {selected === 0 ? (
              <>
                <div className="document-mark">
                  <Camera size={33} strokeWidth={1} />
                  <span>
                    Dobry kadr.
                    <br />
                    Ważna sprawa.
                  </span>
                  <small>ZDJĘCIA DO DOKUMENTÓW</small>
                  <div className="document-lines">
                    <span>DOWÓD</span>
                    <span>PASZPORT</span>
                    <span>INNE DOKUMENTY</span>
                  </div>
                </div>
              </>
            ) : (
              <img
                src={service.image}
                alt={
                  selected === 1
                    ? "Portret dziecięcy wykonany przez FOTO FILA"
                    : "Fotografia pary wykonana przez FOTO FILA"
                }
                loading="lazy"
              />
            )}
          </div>
          <p>{service.description}</p>
          <a className="text-link" href={`/${service.slug}`}>
            Poznaj ofertę <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  [
    "Jak umówić sesję zdjęciową?",
    "Zadzwoń pod numer +48 604 081 621 lub napisz na fotofilastudio@wp.pl. Ustalimy rodzaj sesji, termin i wszystkie szczegóły.",
  ],
  [
    "Gdzie znajduje się studio FOTO FILA?",
    "Znajdziesz nas przy ul. Św. Cyryla i Metodego 3, 65-533 Zielona Góra. W sekcji kontakt możesz otworzyć wskazówki dojazdu w Google Maps.",
  ],
  [
    "Czy wykonujecie zdjęcia do dokumentów?",
    "Tak. Przygotowujemy zdjęcia do dokumentów. Przed wizytą powiedz nam, do jakiego dokumentu potrzebujesz fotografii, i potwierdź aktualne godziny przyjęć.",
  ],
  [
    "Ile kosztuje sesja lub zdjęcie?",
    "Cenę ustalamy w zależności od rodzaju zdjęć i zakresu sesji. Skontaktuj się ze studiem, aby otrzymać aktualną wycenę — bez zgadywania i niespodzianek.",
  ],
  [
    "Jak przygotować się do sesji rodzinnej?",
    "Postaw na wygodne ubrania w pasujących do siebie kolorach. Opowiedz nam o uczestnikach i swoich pomysłach. Szczegóły przygotowania omówimy przed sesją.",
  ],
  [
    "Czy organizujecie sesje tematyczne?",
    "W portfolio znajdziesz przykłady sesji tematycznych i świątecznych. Zapytaj nas o aktualne scenografie i dostępne terminy.",
  ],
];
function FAQ() {
  return (
    <section className="faq">
      <div className="faq-heading">
        <Eyebrow>04 / DOBRZE WIEDZIEĆ</Eyebrow>
        <h2>
          Zanim spotkamy
          <br />
          się w studiu.
        </h2>
      </div>
      <div className="faq-grid">
        {faqs.map(([question, answer], i) => (
          <details key={question}>
            <summary>
              <span>
                <small>0{i + 1}</small>
                {question}
              </span>
              <Plus className="plus" size={17} />
              <Minus className="minus" size={17} />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [prepared, setPrepared] = useState(false);
  function compose(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = `Dzień dobry!\n\n${form.get("message")}\n\nRodzaj zdjęć: ${form.get("service")}\nImię: ${form.get("name")}\nE-mail do odpowiedzi: ${form.get("email")}`;
    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(`Zapytanie FOTO FILA — ${form.get("service")}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <section className="contact" id="kontakt">
      <Eyebrow>05 / ZACZNIJMY OD ROZMOWY</Eyebrow>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>
            Wasz pomysł.
            <br />
            Nasz obiektyw.
          </h2>
          <p>
            Opowiedz nam, co chcesz zatrzymać w kadrze.
            <br />
            Resztę ustalimy razem.
          </p>
          <a className="contact-phone" href={`tel:${studio.tel}`}>
            {studio.phone} <ArrowUpRight size={25} />
          </a>
          <a className="contact-email" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
          <div className="address-row">
            <MapPin size={19} />
            <div>
              ul. Św. Cyryla i Metodego 3<br />
              65-533 Zielona Góra
              <br />
              <a href={studio.maps} target="_blank" rel="noreferrer">
                Sprawdź dojazd <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <p className="hours-note">Przed wizytą zadzwoń, aby potwierdzić godziny otwarcia.</p>
        </div>
        <form className="contact-form" onSubmit={compose}>
          <label>
            Jak masz na imię?
            <input
              aria-label="Twoje imię"
              name="name"
              autoComplete="name"
              required
              placeholder="Twoje imię"
            />
          </label>
          <div className="form-row">
            <label>
              Twój e-mail
              <input
                aria-label="Twój e-mail"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="adres@email.pl"
              />
            </label>
            <label>
              Co fotografujemy?
              <select name="service" defaultValue="Sesja rodzinna">
                <option>Sesja rodzinna</option>
                <option>Portret</option>
                <option>Zdjęcia do dokumentów</option>
                <option>Fotografia ślubna</option>
                <option>Videofilmowanie</option>
                <option>Inny pomysł</option>
              </select>
            </label>
          </div>
          <label>
            Kilka słów o Twoim pomyśle
            <textarea
              aria-label="Twój pomysł"
              name="message"
              required
              rows={3}
              placeholder="Napisz, jaki rodzaj zdjęć Cię interesuje i kiedy…"
            />
          </label>
          <p className="form-note">
            Formularz otworzy Twoją aplikację pocztową. Wiadomość wyślesz w niej samodzielnie.{" "}
            <a href="/polityka-prywatnosci">Prywatność</a>
          </p>
          <button type="submit" className="dark-button">
            Przygotuj wiadomość <ArrowUpRight size={18} />
          </button>
          {prepared && (
            <output className="form-status">
              <Check size={16} />
              Wiadomość przygotowana. Jeśli aplikacja pocztowa się nie otworzyła, napisz
              bezpośrednio na {studio.email}.
            </output>
          )}
        </form>
      </div>
      <div className="contact-giant">
        <img src="/images/foto-1.jpg" alt="Kwiaty w fotografii studia FOTO FILA" loading="lazy" />
        <span>
          Porozmawiajmy<span className="orange-dot">.</span>
        </span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer dark-panel">
      <div className="footer-top">
        <Brand />
        <p>
          Dobre zdjęcia zaczynają się
          <br />
          od dobrego spotkania.
        </p>
        <a className="footer-facebook" href={studio.facebook} target="_blank" rel="noreferrer">
          Facebook <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FOTO FILA · Zielona Góra</span>
        <div>
          <a href="/zdjecia-do-dokumentow">Zdjęcia do dokumentów</a>
          <a href="/sesje-rodzinne">Sesje rodzinne</a>
          <a href="/polityka-prywatnosci">Prywatność</a>
          <a href="#top">Do góry ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function StudioWebsite() {
  return (
    <>
      <SEO />
      <div className="site-shell" id="top">
        <Header />
        <main id="main">
          <Hero />
          <Studio />
          <Gallery />
          <Offer />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export function ServicePage({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return (
    <>
      <SEO title={service.seoTitle} description={service.seoDescription} path={`/${slug}`} />
      <div className="site-shell" id="top">
        <Header />
        <main id="main">
          <section className="service-landing">
            <a className="back-link" href="/">
              <ArrowLeft size={16} /> Strona główna
            </a>
            <Eyebrow>FOTO FILA / ZIELONA GÓRA</Eyebrow>
            <h1>
              {service.title}
              <span className="orange-dot">.</span>
            </h1>
            <div className="landing-grid">
              <div>
                <p className="landing-lead">{service.description}</p>
                {service.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <a className="dark-button" href={`tel:${studio.tel}`}>
                  Zapytaj o szczegóły <Phone size={17} />
                </a>
                <div className="preparation">
                  <h2>Przed wizytą</h2>
                  {service.preparation.map((p) => (
                    <p key={p}>
                      <Check size={17} />
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="landing-picture">
                {slug === "zdjecia-do-dokumentow" ? (
                  <div className="document-mark">
                    <Camera size={44} strokeWidth={1} />
                    <span>
                      Dobry kadr.
                      <br />
                      Ważna sprawa.
                    </span>
                    <small>FOTO FILA · ZIELONA GÓRA</small>
                  </div>
                ) : (
                  <img src={service.image} alt={service.title + " — fotografia FOTO FILA"} />
                )}
              </div>
            </div>
            <div className="related-services">
              <h2>Sprawdź też</h2>
              {services
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <a key={s.slug} href={`/${s.slug}`}>
                    {s.title}
                    <ArrowUpRight size={20} />
                  </a>
                ))}
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Polityka prywatności | FOTO FILA"
        description="Informacje o kontakcie, prywatności i analizie ruchu na stronie FOTO FILA."
        path="/polityka-prywatnosci"
      />
      <div className="site-shell">
        <Header />
        <main id="main" className="privacy">
          <Eyebrow>FOTO FILA / INFORMACJE</Eyebrow>
          <h1>Prywatność.</h1>
          <h2>Kontakt ze studiem</h2>
          <p>
            Formularz kontaktowy na tej stronie przygotowuje wiadomość w Twojej aplikacji pocztowej.
            Nie wysyła ani nie zapisuje jej treści na serwerze strony. Dopiero po wysłaniu e-maila w
            swojej aplikacji przekazujesz swoje dane i treść wiadomości do FOTO FILA.
          </p>
          <h2>Twoje dane w korespondencji</h2>
          <p>
            Dane przekazane w e-mailu służą odpowiedzi na zapytanie i ustaleniu szczegółów usługi.
            Nie podawaj danych wrażliwych, numeru dokumentu ani skanu dokumentu w pierwszym
            zapytaniu. W sprawach dotyczących danych skontaktuj się ze studiem:{" "}
            <a href={`mailto:${studio.email}`}>{studio.email}</a>.
          </p>
          <h2>Technologia i analiza ruchu</h2>
          <p>
            Strona jest obsługiwana przez platformę Runable i korzysta z jej wbudowanej analityki
            ruchu. Strona nie zawiera dodatkowo zainstalowanych tagów reklamowych Google Ads ani
            Meta Pixel. Nie osadza map ani treści Facebooka — odnośniki otwierają te serwisy dopiero
            po kliknięciu.
          </p>
          <h2>Serwisy zewnętrzne</h2>
          <p>
            Po przejściu do Google Maps, Facebooka lub aplikacji pocztowej obowiązują zasady
            prywatności danego dostawcy.
          </p>
          <a className="dark-button" href="/">
            Wróć do strony <ArrowRight size={18} />
          </a>
        </main>
        <Footer />
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main" className="privacy">
        <Eyebrow>404</Eyebrow>
        <h1>
          Ten kadr
          <br />
          nie istnieje.
        </h1>
        <p>Nie znaleziono strony o tym adresie.</p>
        <a className="dark-button" href="/">
          Wróć do strony głównej <ArrowRight size={18} />
        </a>
      </main>
      <Footer />
    </div>
  );
}
