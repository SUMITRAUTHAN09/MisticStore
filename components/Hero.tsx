"use client";

import { Button } from "@/components/ui/button";
import { Cinzel_Decorative } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const mehkaoFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
});

const slides = [
  {
    image: "/dhoop-light.png",
    label: "The Sacred Ritual",
    headline: "Light the Divine",
    sub: "Every flame carries a prayer. Let MEHKAO dhoop carry yours.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    image: "/dhoop-cones-bowl.png",
    label: "Dhoop Cone Collection",
    headline: "Cones of Devotion",
    sub: "Kesar Chandan, Guggle & Black Bela — 3 sacred flavours, 2 sizes.",
    accent: "from-yellow-300 to-amber-500",
  },
  {
    image: "/chandan-stick.png",
    label: "Dhoop Stick Collection",
    headline: "Ancient Sandalwood",
    sub: "Coreless, charcoal-free dhoop sticks. Pure tradition in every burn.",
    accent: "from-orange-300 to-red-400",
  },
];

const galleryImages = [
  { src: "/image1.png", label: "Kesar Chandan Cone" },
  { src: "/image2.png", label: "Guggle Cone" },
  { src: "/image3.png", label: "Black Bela Cone" },
  { src: "/image4.png", label: "Dhoop Sticks" },
];

const badges = ["100% Natural", "Hand-Rolled", "No Charcoal", "Temple Grade"];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % slides.length);
        setFading(false);
      }, 450);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 450);
  };

  const slide = slides[active];

  return (
    <section className="relative bg-[#080600] text-white min-h-screen font-serif overflow-hidden">
      {/* ── Background poster (right bleed) ── */}
      <div
        className={`absolute inset-y-0 right-0 w-[42%] transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={slide.image}
          alt={slide.label}
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.48) saturate(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080600] via-[#080600]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080600] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080600] to-transparent" />
      </div>

      {/* ── Ambient glow ── */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-amber-600 blur-[220px] opacity-[0.08] rounded-full pointer-events-none" />

      {/* ── Main wrapper ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex flex-col md:flex-row gap-6 lg:gap-10 items-center pt-14 pb-20">
        {/*
            LEFT PANEL — brand & content
       */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Slide label */}
          <div
            key={`label-${active}`}
            className="flex items-center gap-3"
            style={{ animation: "mistic-fadein 0.5s ease forwards" }}
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-amber-400/70 text-[10px] tracking-[0.45em] uppercase font-sans">
              {slide.label}
            </span>
          </div>

          {/* Logo + brand name */}
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl" />
              <img
                src="/logo.png"
                alt="MEHKAO"
                className="relative h-[52px] w-[52px] object-contain drop-shadow-[0_0_8px_rgba(212,160,26,0.5)]"
              />
            </div>
            <div>
              <h1
                className={`${mehkaoFont.className} text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.12em] bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent uppercase leading-none`}
              >
                MEHKAO
              </h1>
              <p className="text-[10px] tracking-[0.5em] text-amber-500/50 uppercase font-sans mt-1">
                Dhoop &amp; Agarbatti
              </p>
            </div>
          </div>

          {/* Headline + sub */}
          <div>
            <h2
              key={`headline-${active}`}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3"
              style={{ animation: "mistic-fadein 0.55s ease forwards" }}
            >
              <span
                className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}
              >
                {slide.headline}
              </span>
            </h2>
            <p
              key={`sub-${active}`}
              className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans"
              style={{ animation: "mistic-fadein 0.6s ease forwards" }}
            >
              {slide.sub}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[10px] font-sans font-semibold tracking-wider border border-amber-500/25 text-amber-400/70 px-3 py-1 rounded-full bg-amber-500/5"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-bold shadow-[0_8px_32px_rgba(212,130,26,0.4)] font-sans tracking-wider text-sm"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 font-sans tracking-wide text-sm hover:text-black"
            >
              <a
                href="https://wa.me/9208137401"
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-[5px] bg-gradient-to-r from-amber-400 to-orange-400" : "w-[5px] h-[5px] bg-zinc-600 hover:bg-amber-500/50"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
            <span className="text-zinc-600 text-[10px] font-sans ml-2 tracking-widest">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/*
            RIGHT PANEL — 2×2 image grid
        */}
        <div className="w-full md:w-[280px] lg:w-[550px] shrink-0 self-center">
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden border border-amber-500/15 group hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "brightness(0.72) saturate(1.1)" }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-3 py-2.5">
                  <p className="text-white text-[10px] font-sans tracking-widest uppercase truncate">
                    {img.label}
                  </p>
                </div>
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/6 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pricing strip ── */}
      <div className="relative z-10 border-t border-amber-500/10 md:ml-[25%]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex flex-wrap items-center gap-6">
          <span className="text-zinc-600 text-[10px] tracking-[0.35em] uppercase font-sans">
            Starting from
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
            <span className="text-amber-400 font-bold font-sans text-sm">
              ₹40
            </span>
            <span className="text-zinc-600 text-[10px] font-sans">
              60g pack
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
            <span className="text-orange-400 font-bold font-sans text-sm">
              ₹80
            </span>
            <span className="text-zinc-600 text-[10px] font-sans">
              150g pack
            </span>
          </div>
          <span className="text-zinc-600 text-[10px] font-sans hidden md:block">
            3 Flavours: Kesar Chandan · Guggle · Black Bela
          </span>
        </div>
      </div>

      <style>{`@keyframes mistic-fadein { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
