import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { Cursor, Magnetic, Reveal } from "@/components/portfolio/Motion";
import { Work } from "@/components/portfolio/Work";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lina Moreau — Graphic Designer" },
      { name: "description", content: "Portfolio of Lina Moreau, a graphic designer crafting branding, packaging, social media and illustration." },
      { property: "og:title", content: "Lina Moreau — Graphic Designer" },
      { property: "og:description", content: "Branding, packaging, social media and illustration with quiet luxury." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Work", "About", "Services", "Contact"];
const SERVICES = [
  ["Brand Identity", "Logos, visual systems and guidelines that give a brand its voice."],
  ["Packaging", "Structural and graphic packaging that feels as good as it looks."],
  ["Social Media", "Art direction, campaign assets and cohesive grid systems."],
  ["Illustration", "Bespoke editorial and product illustration in ink, gold and digital."],
];
const CONTACTS = [
  ["WhatsApp", "https://wa.me/201000000000", "+20 100 000 0000"],
  ["Email", "mailto:hello@linamoreau.com", "hello@linamoreau.com"],
  ["Instagram", "https://instagram.com/linamoreau", "@linamoreau"],
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const ty = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative flex h-svh items-end overflow-hidden px-6 pb-20 md:px-12">
      <motion.img src={hero} alt="" width={1600} height={1008} style={{ y }} className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <motion.div style={{ y: ty, opacity: op }} className="relative">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="eyebrow">Graphic Designer — Cairo</motion.p>
        <h1 className="mt-6 font-display text-[18vw] leading-[0.85] md:text-[12vw]">
          {["Lina", "Moreau"].map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span className={`block ${i ? "italic text-primary" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
          <p className="max-w-md text-lg text-muted-foreground">Crafting identities with quiet confidence — where restraint meets detail.</p>
          <Magnetic><a href="#work" className="btn-gold">View work →</a></Magnetic>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const text = "Branding ✦ Packaging ✦ Social Media ✦ Illustration ✦ Art Direction ✦ ";
  return (
    <div className="overflow-hidden border-y border-border py-6">
      <div className="marquee flex w-max whitespace-nowrap font-display text-4xl italic md:text-6xl">
        <span className="pr-4">{text.repeat(3)}</span><span className="pr-4">{text.repeat(3)}</span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-clip">
      <Cursor />
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 mix-blend-difference md:px-12">
        <a href="#" className="font-display text-2xl">L<span className="text-primary">.</span>M</a>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n) => <Magnetic key={n}><a href={`#${n.toLowerCase()}`} className="link-line text-xs uppercase tracking-[0.2em]">{n}</a></Magnetic>)}
        </nav>
        <a href="#contact" className="text-xs uppercase tracking-[0.2em] md:hidden">Contact</a>
      </header>

      <Hero />
      <Marquee />
      <Work />

      <section id="about" className="grid gap-16 px-6 py-32 md:grid-cols-2 md:px-12 md:py-44">
        <Reveal><div className="aspect-[4/5] overflow-hidden"><img src={portrait} alt="Lina Moreau portrait" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105" /></div></Reveal>
        <div className="flex flex-col justify-center">
          <Reveal><p className="eyebrow">02 — About</p></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Design is the art of <em className="text-primary">leaving things out.</em></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">I'm Lina, an independent designer helping hospitality, beauty and lifestyle brands find a visual language that feels inevitable. Ten years, four continents, one obsession: details.</p></Reveal>
          <Reveal delay={0.3} className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[["10+", "Years"], ["120", "Projects"], ["14", "Awards"]].map(([n, l]) => (
              <div key={l}><p className="font-display text-4xl text-primary md:text-5xl">{n}</p><p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-6 py-32 md:px-12 md:py-44">
        <Reveal><p className="eyebrow">03 — Services</p><h2 className="mt-4 font-display text-5xl md:text-7xl">Services</h2></Reveal>
        <div className="mt-16 border-t border-border">
          {SERVICES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div data-cursor className="group grid gap-4 border-b border-border py-10 transition-colors md:grid-cols-[80px_1fr_1fr] md:items-baseline">
                <span className="text-sm text-primary">0{i + 1}</span>
                <h3 className="font-display text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{t}</h3>
                <p className="text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-32 text-center md:px-12 md:py-44">
        <Reveal><p className="eyebrow">04 — Contact</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 font-display text-6xl leading-none md:text-[9vw]">Let's work <em className="text-primary">together.</em></h2></Reveal>
        <Reveal delay={0.2} className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          {CONTACTS.map(([l, h, v]) => (
            <Magnetic key={l}>
              <a href={h} target="_blank" rel="noreferrer" className="btn-outline-gold"><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</span><span>{v}</span></a>
            </Magnetic>
          ))}
        </Reveal>
      </section>

      <footer className="flex flex-col justify-between gap-4 border-t border-border px-6 py-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:px-12">
        <span>© 2026 Lina Moreau</span><span>Designed with restraint</span>
      </footer>
    </main>
  );
}
