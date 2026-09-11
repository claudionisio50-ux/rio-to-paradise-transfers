import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { LanguageProvider, useLang, WHATSAPP_URL, type Lang } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";
import buziosImg from "@/assets/buzios.jpg";
import arraialImg from "@/assets/arraial.jpg";
import caboFrioImg from "@/assets/cabofrio.jpg";
import angraImg from "@/assets/angra.jpg";
import paratyImg from "@/assets/paraty.jpg";
import aeroportosImg from "@/assets/aeroportos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Transfer Rio-Arraial e Búzios | Translados Premium no Rio" },
      {
        name: "description",
        content:
          "Translados privativos do Rio de Janeiro para Búzios, Arraial do Cabo, Cabo Frio, Angra dos Reis e Paraty. Carros premium, vans e +40 motoristas profissionais.",
      },
      { property: "og:title", content: "Transfer Rio-Arraial e Búzios | Translados Premium" },
      {
        property: "og:description",
        content:
          "Do Rio de Janeiro para o paraíso com conforto, segurança e pontualidade. Simule seu transfer em segundos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <SitePage />
    </LanguageProvider>
  ),
});

type DestKey = "buzios" | "arraial" | "cabofrio" | "angra" | "paraty";

const PRICES: Record<DestKey, { car: number; van6: number; van10: number }> = {
  buzios: { car: 350, van6: 450, van10: 600 },
  arraial: { car: 380, van6: 480, van10: 650 },
  cabofrio: { car: 320, van6: 420, van10: 580 },
  angra: { car: 400, van6: 520, van10: 700 },
  paraty: { car: 500, van6: 650, van10: 850 },
};

const DEST_NAMES: Record<DestKey, string> = {
  buzios: "Búzios",
  arraial: "Arraial do Cabo",
  cabofrio: "Cabo Frio",
  angra: "Angra dos Reis",
  paraty: "Paraty",
};

const GALLERY = [heroImg, buziosImg, arraialImg, caboFrioImg, angraImg, paratyImg];

function waLink(text?: string) {
  return text ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}` : WHATSAPP_URL;
}

function SitePage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Destinos />
        <Simulador />
        <Why />
        <Testimonials />
        <Instagramavel />
        <FinalCta />
      </main>
      <Footer />
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.waFloat}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      >
        <WhatsIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  const opts: { key: Lang; label: string }[] = [
    { key: "pt", label: "🇧🇷 PT" },
    { key: "es", label: "🇦🇷 ES" },
  ];
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/40 bg-white/15 p-1 backdrop-blur-md">
      {opts.map((o) => (
        <button
          key={o.key}
          onClick={() => setLang(o.key)}
          aria-pressed={lang === o.key}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors sm:text-sm ${
            lang === o.key
              ? "bg-primary text-primary-foreground"
              : "text-ink-foreground hover:bg-white/20"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useLang();
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-primary-foreground">
            TR
          </span>
          <span className="font-display text-sm font-semibold leading-tight text-ink-foreground sm:text-base">
            Transfer Rio
            <span className="block text-[10px] font-normal tracking-widest text-ink-foreground/80 sm:text-xs">
              ARRAIAL &amp; BÚZIOS
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-foreground/90 md:flex">
          <a href="#destinos" className="hover:text-primary">
            {t.navDestinos}
          </a>
          <a href="#cotacao" className="hover:text-primary">
            {t.navCotacao}
          </a>
          <a href="#depoimentos" className="hover:text-primary">
            {t.navDepoimentos}
          </a>
        </nav>
        <LangSwitch />
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Praia de águas cristalinas na Região dos Lagos, Rio de Janeiro"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-28 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="fade-up text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p
            className="fade-up mt-4 text-xl font-semibold text-primary sm:text-3xl"
            style={{ animationDelay: "120ms" }}
          >
            {t.heroSubtitle}
          </p>
          <p
            className="fade-up mt-5 text-sm font-light tracking-wide text-ink-foreground/90 sm:text-base"
            style={{ animationDelay: "220ms" }}
          >
            {t.heroLine}
          </p>
          <div
            className="fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <WhatsIcon className="h-5 w-5" />
              {t.heroCta1}
            </a>
            <a
              href="#destinos"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-4 text-base font-semibold text-ink-foreground transition-colors hover:bg-white/15"
            >
              {t.heroCta2}
            </a>
          </div>
          <div
            className="fade-up mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/12 px-4 py-2 text-xs font-medium text-ink-foreground backdrop-blur-md sm:text-sm"
            style={{ animationDelay: "420ms" }}
          >
            <span className="text-primary">✓</span>
            {t.heroBadge}
          </div>
        </div>
      </div>
    </section>
  );
}

function Destinos() {
  const { t } = useLang();
  const cards: { name: string; img: string }[] = [
    { name: DEST_NAMES.buzios, img: buziosImg },
    { name: DEST_NAMES.arraial, img: arraialImg },
    { name: DEST_NAMES.cabofrio, img: caboFrioImg },
    { name: DEST_NAMES.angra, img: angraImg },
    { name: DEST_NAMES.paraty, img: paratyImg },
    { name: t.aeroportos, img: aeroportosImg },
  ];

  return (
    <section id="destinos" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-5xl">{t.destinosTitle}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t.destinosSub}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.name}
              className="group relative isolate flex h-72 flex-col justify-end overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-ink-foreground">{c.name}</h3>
                <a
                  href={waLink(`${t.msgIntro} ${t.msgDest}: ${c.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  {t.requestTransfer}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/40 bg-white/95 px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/40";
const labelClass = "block text-sm font-semibold text-ink-foreground";

function Simulador() {
  const { t } = useLang();
  const [origin, setOrigin] = useState<keyof typeof t.origins>("gig");
  const [dest, setDest] = useState<DestKey>("buzios");
  const [vehicle, setVehicle] = useState<"car" | "van6" | "van10">("car");
  const [pax, setPax] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const total = useMemo(() => PRICES[dest][vehicle], [dest, vehicle]);

  const message = [
    t.msgIntro,
    `${t.msgOrigin}: ${t.origins[origin]}`,
    `${t.msgDest}: ${DEST_NAMES[dest]}`,
    `${t.msgVehicle}: ${t.vehicles[vehicle]}`,
    `${t.msgPax}: ${pax}`,
    `${t.msgDate}: ${date || "-"}`,
    `${t.msgTime}: ${time || "-"}`,
    `${t.msgTotal}: R$ ${total}`,
  ].join("\n");

  return (
    <section id="cotacao" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-ink-foreground sm:text-5xl">{t.simTitle}</h2>
        <p className="mt-3 text-ink-foreground/85">{t.simSub}</p>

        <div className="mt-10 grid gap-5 rounded-3xl bg-white/15 p-5 backdrop-blur-md sm:p-8 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="origem">
              {t.origin}
            </label>
            <select
              id="origem"
              className={fieldClass}
              value={origin}
              onChange={(e) => setOrigin(e.target.value as keyof typeof t.origins)}
            >
              {(Object.keys(t.origins) as (keyof typeof t.origins)[]).map((k) => (
                <option key={k} value={k}>
                  {t.origins[k]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="destino">
              {t.destination}
            </label>
            <select
              id="destino"
              className={fieldClass}
              value={dest}
              onChange={(e) => setDest(e.target.value as DestKey)}
            >
              {(Object.keys(DEST_NAMES) as DestKey[]).map((k) => (
                <option key={k} value={k}>
                  {DEST_NAMES[k]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="veiculo">
              {t.vehicle}
            </label>
            <select
              id="veiculo"
              className={fieldClass}
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value as "car" | "van6" | "van10")}
            >
              <option value="car">{t.vehicles.car}</option>
              <option value="van6">{t.vehicles.van6}</option>
              <option value="van10">{t.vehicles.van10}</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="pax">
              {t.passengers}
            </label>
            <input
              id="pax"
              type="number"
              min={1}
              max={10}
              className={fieldClass}
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="data">
              {t.date}
            </label>
            <input
              id="data"
              type="date"
              className={fieldClass}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="hora">
              {t.time}
            </label>
            <input
              id="hora"
              type="time"
              className={fieldClass}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="md:col-span-2 flex flex-col items-center justify-between gap-5 rounded-2xl bg-ink/25 p-5 sm:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-foreground/80">
                {t.estimated}
              </p>
              <p className="font-display text-4xl font-bold text-ink-foreground">R$ {total}</p>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <WhatsIcon className="h-5 w-5" />
              {t.confirmWhats}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLang();
  const icons = [UsersIcon, CarIcon, ChatIcon, ClockIcon];
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-5xl">{t.whyTitle}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.map((item, i) => {
            const Icon = icons[i] ?? UsersIcon;

            return (
              <div key={item.t} className="rounded-3xl border border-border p-6 transition-shadow hover:shadow-[var(--shadow-soft)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLang();
  return (
    <section id="depoimentos" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-5xl">{t.testimonialsTitle}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.testimonials.map((d) => (
            <figure key={d.n} className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="text-primary" aria-label="5/5">
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{d.q}”
              </blockquote>
              <figcaption className="mt-5">
                <span className="block font-semibold">{d.n}</span>
                <span className="block text-xs text-muted-foreground">{d.c}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagramavel() {
  const { t } = useLang();
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-5xl">{t.instaTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.instaSub}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Paisagem da Região dos Lagos e Costa Verde"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          ))}
        </div>
        <a
          href="https://instagram.com/transferrioarraialebuzios"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:text-base"
        >
          {t.instaBtn}
        </a>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useLang();
  return (
    <section className="bg-brand-gradient py-20 text-center sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-ink-foreground sm:text-5xl">{t.ctaTitle}</h2>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
        >
          <WhatsIcon className="h-5 w-5" />
          {t.ctaBtn}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { t, setLang } = useLang();
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient font-bold text-primary-foreground">
              TR
            </span>
            <span className="font-display text-base font-semibold">
              Transfer Rio-Arraial e Búzios
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/70">{t.footerAbout}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footerDestinos}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
            {(Object.keys(DEST_NAMES) as DestKey[]).map((k) => (
              <li key={k}>{DEST_NAMES[k]}</li>
            ))}
            <li>{t.aeroportos}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footerLangs}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <button onClick={() => setLang("pt")} className="hover:text-primary">
                🇧🇷 {t.langsList[0]}
              </button>
            </li>
            <li>
              <button onClick={() => setLang("es")} className="hover:text-primary">
                🇦🇷 {t.langsList[1]}
              </button>
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footerSocial}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com/transferrioarraialebuzios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 text-xs text-ink-foreground/50 sm:px-6">
        © {new Date().getFullYear()} Transfer Rio-Arraial e Búzios. {t.rights}
      </div>
    </footer>
  );
}

/* Ícones */
function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.54 3.75 1.48 5.3L2 22l4.98-1.62a9.84 9.84 0 0 0 5.06 1.4c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm5.75 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.42-.72-2.9-1.16-4.72-4.17-4.86-4.36-.14-.2-1.15-1.55-1.15-2.96 0-1.4.73-2.09 1-2.38.26-.29.58-.36.77-.36.2 0 .39 0 .56.01.19.01.44-.07.68.53.24.6.82 2.05.9 2.2.07.15.12.32.02.51-.1.2-.34.5-.55.72-.1.11-.25.22-.11.44.14.24.62 1.03 1.34 1.67.92.82 1.7 1.08 1.94 1.2.24.13.38.11.53-.06.14-.17.6-.72.76-.97.16-.24.33-.2.55-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.05.1.05.6-.19 1.28Z" />
    </svg>
  );
}
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M22 19v-1a4 4 0 0 0-3-3.87M16.5 4.2a3.2 3.2 0 0 1 0 6.2" />
    </svg>
  );
}
function CarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 13.5 4.8 8A2 2 0 0 1 6.7 6.5h10.6A2 2 0 0 1 19.2 8L21 13.5v4.5h-3M3 18v-4.5M6 18h12" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-4.5A8 8 0 0 1 13 4a8 8 0 0 1 8 8Z" />
      <path d="M9 11h8M9 15h5" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}
