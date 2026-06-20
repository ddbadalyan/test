"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity, ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, CircleUserRound,
  Code2, FormInput, Globe2, Layers3, MapPin, MousePointer2, Package, Play, Send,
  ShoppingBag, Sparkles, Store, UserRound, WandSparkles, Zap, type LucideIcon
} from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Copy } from "@/lib/i18n";
import { Counter, DotGrid, MagneticButton, Reveal, SectionHeading, TiltCard } from "./ui";

type SectionProps = { t: Copy; onBook: () => void };

const featureIcons: LucideIcon[] = [WandSparkles, FormInput, CalendarDays, ShoppingBag, Package, UserRound, Code2, MapPin, Activity, Globe2];
const galleryImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85"
];

function ScrollLink({ target, children, className = "" }: { target: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={`#${target}`}>{children}</a>;
}

export function HeroSection({ t, onBook }: SectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="hero-section section-shell">
      <DotGrid />
      <div className="hero-orb hero-orb--violet" aria-hidden="true" />
      <div className="hero-orb hero-orb--aqua" aria-hidden="true" />
      <div className="container relative z-10 grid min-h-[calc(100dvh-80px)] items-center gap-12 py-24 lg:grid-cols-[1fr_.95fr] lg:py-16">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2"><span className="status-dot" /> {t.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="hero-title mt-6"><span>{t.hero.titleA}</span> <span className="gradient-text">{t.hero.titleB}</span></h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="hero-description mt-7 max-w-xl">{t.hero.description}</p>
          </Reveal>
          <Reveal delay={0.21} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton onClick={onBook} arrow>{t.hero.primary}</MagneticButton>
            <ScrollLink target="capabilities" className="secondary-cta"><Play size={16} fill="currentColor" aria-hidden="true" />{t.hero.secondary}</ScrollLink>
          </Reveal>
          <Reveal delay={0.28} className="mt-12 flex items-center gap-4">
            <div className="avatar-stack" aria-hidden="true"><span>Ա</span><span>Մ</span><span>Դ</span></div>
            <div><p className="text-xs font-semibold tracking-[.16em] text-[var(--text)]">{t.hero.proof}</p><p className="mt-1 text-sm text-[var(--muted)]">{t.hero.available}</p></div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="hero-visual-wrap">
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94, y: reduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="visual-header"><div className="brand-mark">M</div><span>{t.hero.live}</span><span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/65">{t.system.live}</span></div>
            <div className="visual-content">
              <div className="visual-topline"><span>{t.hero.phrase}</span><span className="sparkline" aria-hidden="true"><i/><i/><i/><i/><i/><i/></span></div>
              <div className="visual-number"><Counter to={96} suffix="%" /><span>{t.hero.score}</span></div>
              <div className="visual-chart" aria-label="Animated sample chart"><span className="chart-line"/><i style={{ height: "33%" }}/><i style={{ height: "52%" }}/><i style={{ height: "41%" }}/><i style={{ height: "73%" }}/><i style={{ height: "62%" }}/><i style={{ height: "91%" }}/><i style={{ height: "76%" }}/></div>
              <div className="visual-bottom"><div className="mini-chip"><span className="mini-pulse" /> {t.hero.available}</div><div className="mini-avatars"><span/><span/><span/></div></div>
            </div>
            <motion.div className="float-note float-note--one" animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}><Sparkles size={15}/><span>{t.system.delight}</span></motion.div>
            <motion.div className="float-note float-note--two" animate={reduceMotion ? undefined : { y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: .6 }}><Zap size={15}/><span>60 fps</span></motion.div>
          </motion.div>
        </Reveal>
      </div>
      <Reveal className="container relative z-10 pb-9">
        <div className="hero-stats">{t.stats.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
      </Reveal>
    </section>
  );
}

export function FeaturesSection({ t }: SectionProps) {
  return (
    <section id="capabilities" className="section-shell section-space">
      <div className="container">
        <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} text={t.features.text} />
        <div className="feature-showcase mt-14">
          <Reveal className="feature-lead glass-panel overflow-hidden p-7 md:p-9">
            <div className="relative z-10 max-w-sm"><span className="tiny-label">{t.features.badge}</span><h3 className="mt-5 text-3xl font-semibold tracking-[-.05em]">{t.features.miniTitle}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{t.features.miniText}</p></div>
            <div className="capability-map" aria-hidden="true"><span className="map-node node-a"/><span className="map-node node-b"/><span className="map-node node-c"/><span className="map-node node-d"/><i className="map-line line-a"/><i className="map-line line-b"/><i className="map-line line-c"/></div>
          </Reveal>
          <div className="feature-grid">{t.features.items.map((item, index) => {
            const Icon = featureIcons[index];
            return <Reveal key={item} delay={Math.min(index * .035, .28)}><TiltCard intensity={5} className="feature-card"><div className="feature-icon"><Icon size={20} /></div><h3>{item}</h3><ArrowRight className="feature-arrow" size={17} aria-hidden="true" /></TiltCard></Reveal>;
          })}</div>
        </div>
      </div>
    </section>
  );
}

export function MotionSection({ t }: SectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="experience" className="section-shell section-space overflow-hidden">
      <div className="container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading eyebrow={t.motion.eyebrow} title={t.motion.title} text={t.motion.text} />
        <Reveal className="motion-lab glass-panel p-5 sm:p-8">
          <div className="motion-lab-head"><span className="tiny-label">{t.system.motionSystem}</span><span className="motion-live"><i/> {t.system.active}</span></div>
          <div className="motion-canvas">
            <motion.div className="motion-ring ring-one" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ repeat: Infinity, ease: "linear", duration: 14 }}/>
            <motion.div className="motion-ring ring-two" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ repeat: Infinity, ease: "linear", duration: 17 }}/>
            <motion.div className="motion-core" animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [.85, 1, .85] }} transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}><WandSparkles size={25}/></motion.div>
            <motion.div className="motion-card card-one" animate={reduceMotion ? undefined : { y: [0, -13, 0], rotate: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}><span>01</span>{t.motion.cardA}</motion.div>
            <motion.div className="motion-card card-two" animate={reduceMotion ? undefined : { y: [0, 11, 0], rotate: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}><span>02</span>{t.motion.cardB}</motion.div>
            <motion.div className="motion-card card-three" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5.4, ease: "easeInOut" }}><span>03</span>{t.motion.cardC}</motion.div>
          </div>
        </Reveal>
      </div>
      <Reveal className="container mt-12">
        <div className="motion-path">{t.motion.timeline.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
        <div className="motion-phrase"><span>{t.motion.phrase}</span><ArrowRight size={19}/></div>
      </Reveal>
    </section>
  );
}

export function InteractiveSection({ t, onBook }: SectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="section-shell section-space">
      <div className="container">
        <SectionHeading eyebrow={t.interactive.eyebrow} title={t.interactive.title} text={t.interactive.text} align="center" />
        <div className="interactive-grid mt-14">
          <Reveal className="interactive-main-wrap"><TiltCard className="interactive-main"><DotGrid /><div className="relative z-10 flex items-start justify-between"><span className="tiny-label">{t.system.liveReaction}</span><MousePointer2 size={22}/></div><div className="interactive-center"><motion.span className="interactive-ripple" animate={reduceMotion ? undefined : { scale: [1, 2.3], opacity: [.65, 0] }} transition={{ repeat: Infinity, duration: 2.7, ease: "easeOut" }}/><motion.span className="interactive-orb" animate={reduceMotion ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}><MousePointer2 size={23}/></motion.span><p>{t.interactive.pulse}</p></div><div className="interactive-footer"><span>{t.interactive.pointer}</span><span>01 / 04</span></div></TiltCard></Reveal>
          <div className="interactive-minis">
            {[[Layers3, t.interactive.depth], [Sparkles, t.interactive.particles], [MousePointer2, t.interactive.floating]].map(([Icon, label], index) => {
              const IconComponent = Icon as LucideIcon;
              return <Reveal key={label as string} delay={index * .08}><TiltCard intensity={8} className="interactive-mini"><IconComponent size={21}/><span>{label as string}</span><small>0{index + 2}</small></TiltCard></Reveal>;
            })}
            <Reveal delay={.24}><button onClick={onBook} className="interactive-action" type="button"><span>{t.interactive.phrase}</span><ArrowRight size={22}/></button></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection({ t, onBook }: SectionProps) {
  return (
    <section id="work" className="section-shell section-space">
      <div className="container">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} text={t.work.text} />
        <div className="gallery-grid mt-14">{t.work.items.map((item, index) => <Reveal key={item.label} delay={index * .06} className={`gallery-item gallery-item--${index + 1}`}><article className="gallery-card"><img src={galleryImages[index]} alt="" loading="lazy"/><div className="gallery-overlay"/><div className="gallery-content"><span>{item.label}</span><h3>{item.title}</h3><button type="button" onClick={onBook} aria-label={item.title} className="gallery-open"><ArrowRight size={18}/></button></div></article></Reveal>)}</div>
      </div>
    </section>
  );
}

export function CasesSection({ t }: SectionProps) {
  const styles = ["case-card case-card--coral", "case-card case-card--blue", "case-card case-card--lilac"];
  return (
    <section className="section-shell section-space">
      <div className="container"><SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} text={t.cases.text} />
        <div className="case-grid mt-14">{t.cases.items.map((item, index) => <Reveal key={item.type} delay={index * .08}><TiltCard intensity={4} className={styles[index]}><div className="case-top"><span>{item.type}</span><ArrowRight size={18}/></div><h3>{item.title}</h3><div className="case-metric"><strong>{item.metric}</strong><span>{item.metricLabel}</span></div><div className="case-decoration" aria-hidden="true"><i/><i/><i/></div></TiltCard></Reveal>)}</div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ t }: SectionProps) {
  const [active, setActive] = useState(0);
  const item = t.testimonials.items[active];
  const back = () => setActive((active + t.testimonials.items.length - 1) % t.testimonials.items.length);
  const next = () => setActive((active + 1) % t.testimonials.items.length);
  return (
    <section className="section-shell section-space">
      <div className="container"><SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} text="" align="center" />
        <Reveal className="testimonial-stage mt-12"><span className="quote-mark" aria-hidden="true">“</span><AnimatePresence mode="wait"><motion.figure key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .28 }}><blockquote>{item.quote}</blockquote><figcaption><span className="person-avatar">{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></figcaption></motion.figure></AnimatePresence><div className="testimonial-controls"><button type="button" onClick={back} aria-label={t.ui.previous}><ChevronLeft size={20}/></button><div>{t.testimonials.items.map((_, index) => <button type="button" key={index} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`${index + 1}`} />)}</div><button type="button" onClick={next} aria-label={t.ui.next}><ChevronRight size={20}/></button></div></Reveal>
      </div>
    </section>
  );
}

export function FaqSection({ t }: SectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-shell section-space">
      <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} text="" />
        <div className="faq-list">{t.faq.items.map((item, index) => { const expanded = open === index; return <Reveal key={item.q} delay={index * .04}><article className={`faq-item ${expanded ? "is-open" : ""}`}><button type="button" onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded}><span>{item.q}</span><ChevronDown size={20}/></button><AnimatePresence initial={false}>{expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .24 }} className="faq-answer"><p>{item.a}</p></motion.div>}</AnimatePresence></article></Reveal>; })}</div>
      </div>
    </section>
  );
}

export function ContactSection({ t }: SectionProps) {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); event.currentTarget.reset(); window.setTimeout(() => setSent(false), 4500); }
  return (
    <section id="contact" className="section-shell section-space">
      <div className="container contact-shell"><div className="contact-intro"><SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} /><div className="contact-line"><span/><p>{t.contact.helper}</p></div></div>
        <Reveal className="contact-form-wrap"><form className="contact-form glass-panel" onSubmit={handleSubmit}><div className="field-row"><label>{t.contact.name}<input required name="name" autoComplete="name" placeholder={t.contact.placeholderName}/></label><label>{t.contact.email}<input required name="email" autoComplete="email" type="email" placeholder={t.contact.placeholderEmail}/></label></div><label>{t.contact.project}<textarea required name="project" rows={4} placeholder={t.contact.placeholderProject}/></label><div className="form-bottom"><MagneticButton type="submit" arrow><Send size={16} aria-hidden="true"/>{t.contact.send}</MagneticButton><span>{t.contact.helper}</span></div><AnimatePresence>{sent && <motion.p className="form-success" role="status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><span>✓</span>{t.contact.success}</motion.p>}</AnimatePresence></form></Reveal>
      </div>
    </section>
  );
}

export function FinalCtaSection({ t, onBook }: SectionProps) {
  return (
    <section className="section-shell final-section"><DotGrid /><div className="final-orb final-orb--one"/><div className="final-orb final-orb--two"/><div className="container relative z-10 py-28 text-center sm:py-36"><Reveal className="mx-auto max-w-4xl"><p className="eyebrow justify-center">{t.cta.eyebrow}</p><h2 className="final-title mt-6">{t.cta.titleA}<br/><span className="gradient-text">{t.cta.titleB}</span></h2><p className="section-copy mx-auto mt-6 text-center">{t.cta.text}</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><MagneticButton onClick={onBook} arrow>{t.cta.action}</MagneticButton><a href="mailto:hello@example.com" className="secondary-cta secondary-cta--dark">{t.cta.email}<ArrowRight size={17}/></a></div></Reveal></div>
  </section>
  );
}
