import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, projects, type Project } from "@/data/projects";
import { Reveal } from "./Motion";

function Card({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.button
      ref={ref}
      layout
      data-cursor
      onClick={onOpen}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block text-left"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-card">
        <motion.img
          src={p.cover} alt={p.title} loading="lazy" width={1024} height={1280}
          style={{ y }}
          className="absolute inset-0 h-[116%] w-full -top-[8%] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.category}</span>
      </div>
    </motion.button>
  );
}

export function Work() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [open]);

  return (
    <section id="work" className="px-6 py-32 md:px-12 md:py-44">
      <Reveal className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">01 — Selected work</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Work</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`relative rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${filter === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {filter === c && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => <Card key={p.id} p={p} i={i} onOpen={() => setOpen(p)} />)}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <motion.div onClick={(e) => e.stopPropagation()}
              initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-5xl px-6 py-20 md:py-28">
              <button onClick={() => setOpen(null)} className="fixed right-6 top-6 z-10 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary">Close ✕</button>
              <p className="eyebrow">{open.category} · {open.year}</p>
              <h3 className="mt-4 font-display text-5xl md:text-7xl">{open.title}</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-[1fr_2fr]">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Client<br /><span className="text-foreground">{open.client}</span></p>
                <p className="text-lg leading-relaxed text-muted-foreground">{open.description}</p>
              </div>
              <div className="mt-14 space-y-6">
                {open.images.map((src, i) => <img key={i} src={src} alt={`${open.title} ${i + 1}`} loading="lazy" className="w-full" />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
