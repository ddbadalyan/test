"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { copy, languageMeta, type Locale } from "@/lib/i18n";
import {
  CasesSection, ContactSection, DeveloperContactSection, FaqSection, FeaturesSection, FinalCtaSection,
  GallerySection, HeroSection, InteractiveSection, MotionSection, TestimonialsSection
} from "./sections";
import { MagneticButton } from "./ui";

function Header({ locale, setLocale, theme, setTheme, onBook, t }: {
  locale: Locale; setLocale: (locale: Locale) => void; theme: "dark" | "light"; setTheme: (theme: "dark" | "light") => void; onBook: () => void; t: (typeof copy)[Locale]
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["capabilities", t.nav.capabilities], ["experience", t.nav.experience], ["work", t.nav.work], ["contact", t.nav.contact]
  ] as const;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="site-logo" aria-label="MAY home"><span>M</span><em>may</em></a>
        <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="header-tools">
          <div className="language-switcher" aria-label="Language selector">{(Object.keys(languageMeta) as Locale[]).map((item) => <button type="button" key={item} onClick={() => setLocale(item)} className={locale === item ? "active" : ""} aria-pressed={locale === item}>{languageMeta[item].short}</button>)}</div>
          <button type="button" className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? t.ui.light : t.ui.dark}>{theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label={t.ui.menu}><Menu size={21}/></button>
          <MagneticButton className="header-book" onClick={onBook}>{t.nav.book}</MagneticButton>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }}><div className="container"><div className="mobile-menu-head"><span>{languageMeta[locale].label}</span><button type="button" onClick={closeMenu} aria-label={t.ui.close}><X size={23}/></button></div><nav>{nav.map(([id, label], index) => <motion.a key={id} href={`#${id}`} onClick={closeMenu} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .05 + index * .04 }}>{label}</motion.a>)}</nav><MagneticButton onClick={() => { closeMenu(); onBook(); }} arrow>{t.nav.book}</MagneticButton></div></motion.div>}</AnimatePresence>
    </header>
  );
}

function IntroLoader({ t }: { t: (typeof copy)[Locale] }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className="intro-loader" initial={{ opacity: 1 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -20, transition: { duration: reduceMotion ? .01 : .5, ease: [0.7, 0, .84, 0] } }}><div className="loader-mark"><span>M</span><i/></div><p>{t.system.loader}</p></motion.div>;
}

function CursorLayer() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    if (!query.matches) return;
    const move = (event: PointerEvent) => { setPoint({ x: event.clientX, y: event.clientY }); setActive(true); };
    const leave = () => setActive(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("pointermove", move); document.documentElement.removeEventListener("mouseleave", leave); };
  }, []);
  return <><div className={`cursor-dot ${active ? "active" : ""}`} style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }} aria-hidden="true"/><div className={`cursor-glow ${active ? "active" : ""}`} style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }} aria-hidden="true"/></>;
}

function BookingModal({ t, close }: { t: (typeof copy)[Locale]; close: () => void }) {
  const selectSlot = () => { close(); window.setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100); };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);
  return <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}><motion.div className="booking-modal glass-panel" role="dialog" aria-modal="true" aria-label={t.modal.title} initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ type: "spring", stiffness: 340, damping: 28 }} onMouseDown={(event) => event.stopPropagation()}><button type="button" onClick={close} className="modal-close" aria-label={t.ui.close}><X size={19}/></button><p className="eyebrow">{t.modal.eyebrow}</p><h2>{t.modal.title}</h2><p className="modal-copy">{t.modal.text}</p><div className="slots"><button type="button" onClick={selectSlot}>{t.modal.slotA}</button><button type="button" onClick={selectSlot}>{t.modal.slotB}</button><button type="button" onClick={selectSlot}>{t.modal.slotC}</button></div><MagneticButton onClick={selectSlot} arrow className="mt-7 w-full">{t.modal.continue}</MagneticButton></motion.div></motion.div>;
}

export function SiteShell() {
  const [locale, setLocale] = useState<Locale>("hy");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale;
    try { localStorage.setItem("may-theme", theme); } catch { /* storage can be unavailable */ }
  }, [locale, theme]);
  useEffect(() => {
    try { const saved = localStorage.getItem("may-theme"); if (saved === "light" || saved === "dark") setTheme(saved); } catch { /* ignored */ }
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return <>
    <AnimatePresence>{loading && <IntroLoader t={t} />}</AnimatePresence>
    <CursorLayer />
    <Header locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} onBook={() => setBookingOpen(true)} t={t} />
    <main id="main-content">
      <HeroSection t={t} onBook={() => setBookingOpen(true)} />
      <FeaturesSection t={t} onBook={() => setBookingOpen(true)} />
      <MotionSection t={t} onBook={() => setBookingOpen(true)} />
      <InteractiveSection t={t} onBook={() => setBookingOpen(true)} />
      <GallerySection t={t} onBook={() => setBookingOpen(true)} />
      <CasesSection t={t} onBook={() => setBookingOpen(true)} />
      <TestimonialsSection t={t} onBook={() => setBookingOpen(true)} />
      <FaqSection t={t} onBook={() => setBookingOpen(true)} />
      <ContactSection t={t} onBook={() => setBookingOpen(true)} />
      <DeveloperContactSection t={t} onBook={() => setBookingOpen(true)} />
      <FinalCtaSection t={t} onBook={() => setBookingOpen(true)} />
    </main>
    <footer className="site-footer"><div className="container"><a href="#home" className="site-logo"><span>M</span><em>may</em></a><p>© {new Date().getFullYear()} MAY / {t.system.footer}.</p><a href="#home">{t.system.backTop} ↑</a></div></footer>
    <AnimatePresence>{bookingOpen && <BookingModal t={t} close={() => setBookingOpen(false)} />}</AnimatePresence>
  </>;
}
