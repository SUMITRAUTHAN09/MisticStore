"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Transition } from "framer-motion"
import Link from "next/link"
import DhoopAnimation from "@/components/DhoopAnimation"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE } as Transition,
})

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen font-serif overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(160,90,0,0.18),transparent_70%)]" />
        <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-yellow-600 blur-[180px] opacity-10 rounded-full" />
        <div className="absolute -right-40 bottom-1/4 w-[400px] h-[400px] bg-orange-700 blur-[160px] opacity-10 rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* Main grid: left text | right cone+image */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid md:grid-cols-2 gap-8 items-center pt-24 pb-12">

        {/* ── LEFT: all text content ── */}
        <div className="space-y-8">

          {/* Sanskrit line */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-500/50" />
            <span className="text-yellow-500/60 text-[10px] tracking-[0.4em] uppercase font-sans">
              Sacred Fragrance
            </span>
          </motion.div>

          {/* Logo + brand name */}
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl" />
              <img
                src="/logo.jpeg"
                alt="MISTIC"
                className="relative h-[70px] w-[70px] object-contain rounded-full border border-yellow-500/40"
              />
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-[0.1em] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent uppercase leading-none">
                MISTIC
              </h1>
              <p className="text-[10px] tracking-[0.55em] text-yellow-500/50 uppercase font-sans mt-1.5">
                Dhoop &amp; Agarbatti
              </p>
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.div {...fadeUp(0.32)}>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Where Fragrance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Meets the Divine.
              </span>
            </h2>
            <p className="text-yellow-500/40 text-xs tracking-[0.45em] font-sans uppercase mt-2">
              Crafted for Sacred Moments
            </p>
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.42)} className="text-zinc-400 text-base leading-relaxed max-w-md font-sans">
            Handcrafted with pure, natural ingredients. Each MISTIC dhoop carries
            centuries of tradition to your puja. Slow-burning, long-lasting, divine.
          </motion.p>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.50)} className="flex flex-wrap gap-2">
            {["100% Natural", "Hand-Rolled", "No Charcoal", "Temple Grade", "Long Burn"].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-sans font-semibold tracking-wider border border-yellow-500/25 text-yellow-400/70 px-3 py-1 rounded-full bg-yellow-500/5"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.58)} className="flex flex-wrap gap-4">
            <Button
              asChild size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-bold shadow-[0_8px_32px_rgba(212,130,26,0.4)] font-sans tracking-wider text-sm"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button
              asChild size="lg" variant="outline"
              className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 font-sans tracking-wide text-sm"
            >
              <a href="https://wa.me/9208137401" target="_blank">Order on WhatsApp</a>
            </Button>
          </motion.div>
        </div>

        {/* ── RIGHT: Dhoop cone on top, product image below ── */}
        <div className="flex flex-col items-center gap-0">

          {/* Cone animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative z-10 -mb-6"
          >
            {/* Glow halo */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(212,130,26,0.5) 0%, transparent 70%)", filter: "blur(12px)" }}
              animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.9, 1.2, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <DhoopAnimation />
          </motion.div>

          {/* Product image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="relative w-full"
          >
            {/* Glow border */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-yellow-500/30 via-orange-500/10 to-transparent blur-sm" />

            <div className="relative rounded-3xl overflow-hidden border border-yellow-500/20">
              <img
                src="/products-hero.jpeg"
                alt="MISTIC Mogra Premium Incense Cones"
                className="object-cover w-full h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-white font-bold text-base font-serif">Mogra Premium Incense Cones</p>
                <p className="text-yellow-400/70 text-[11px] font-sans tracking-widest uppercase mt-0.5">
                  4 Variants: Teal, Rose, Green, Saffron
                </p>
              </div>
            </div>

            {/* Floating badge: natural */}
            <motion.div
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-black/95 border border-yellow-500/40 rounded-xl px-4 py-3 backdrop-blur-md shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                <p className="text-yellow-400 font-semibold text-xs font-sans">100% Natural</p>
              </div>
              <p className="text-zinc-600 text-[10px] mt-0.5 font-sans">No additives</p>
            </motion.div>

            {/* Floating badge: burn */}
            <motion.div
              initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl px-3 py-2 shadow-lg font-sans"
            >
              <p className="text-black text-[10px] font-black tracking-wide">LONG BURN</p>
              <p className="text-black/70 text-[10px]">45-60 min</p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-zinc-600"
      >
        <span className="text-[9px] tracking-[0.35em] font-sans uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="1" y="1" width="12" height="18" rx="6" />
            <circle cx="7" cy="6" r="1.5" fill="currentColor" stroke="none">
              <animate attributeName="cy" values="6;12;6" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}