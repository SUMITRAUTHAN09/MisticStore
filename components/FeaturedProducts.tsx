"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/lib/products"

const flavours = ["Kesar Chandan", "Guggle", "Black Bela"] as const
const types = ["cone", "stick"] as const

export default function FeaturedProducts() {
  return (
    <section className="relative py-28 bg-[#080600] text-white overflow-hidden font-serif">

      <div className="absolute -top-32 -left-32 w-100 h-100 bg-yellow-500 blur-[160px] opacity-[0.07] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-orange-500 blur-[160px] opacity-[0.07] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-amber-500/60 text-[10px] tracking-[0.45em] uppercase font-sans">Our Collection</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-zinc-500 text-sm font-sans max-w-md mx-auto">
            Kesar Chandan · Guggle · Black Bela — available in Cones &amp; Sticks, two convenient sizes.
          </p>
        </div>

        {/* One section per type */}
        {types.map((type) => (
          <div key={type} className="mb-16">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg font-bold text-white capitalize font-serif">
                {type === "cone" ? "🔺 Dhoop Cones" : "🪵 Dhoop Sticks"}
              </span>
              <div className="flex-1 h-px bg-amber-500/15" />
            </div>

            {/* 3 flavour columns */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {flavours.map((flavour) => {
                const large = products.find(p => p.type === type && p.flavour === flavour && p.size === "150g")
                const small = products.find(p => p.type === type && p.flavour === flavour && p.size === "60g")
                if (!large) return null

                return (
                  <div key={flavour} className="bg-zinc-950 border border-amber-500/15 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300">

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-zinc-900">
                      <img
                        src={large.images[0]}
                        alt={large.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        style={{ filter: "brightness(0.82) saturate(1.1)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                      {large.tag && (
                        <span className={`absolute top-3 left-3 text-[10px] font-black font-sans tracking-widest px-2.5 py-1 rounded-full uppercase ${large.tagColor}`}>
                          {large.tag}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 text-[10px] font-bold font-sans bg-black/60 backdrop-blur-sm text-amber-400 border border-amber-500/30 px-2 py-1 rounded-full">
                        {type === "cone" ? "🔺 Cone" : "🪵 Stick"}
                      </span>
                    </div>

                    {/* Flavour + description */}
                    <div className="p-5 pb-3">
                      <p className="text-[10px] font-sans tracking-widest uppercase text-amber-400/70 mb-1">{flavour}</p>
                      <h3 className="text-sm font-bold text-white leading-tight mb-2">
                        {type === "cone" ? "Dhoop Cone" : "Dhoop Stick"} — {flavour}
                      </h3>
                      <p className="text-zinc-500 text-xs font-sans leading-relaxed line-clamp-2">{large.description}</p>
                    </div>

                    {/* Two size options side by side */}
                    <div className="px-5 pb-5 grid grid-cols-2 gap-3 mt-3">

                      {/* 150g */}
                      <Link href={`/products/${large.id}`} className="group flex flex-col gap-1 p-3 rounded-xl bg-zinc-900 border border-amber-500/15 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200">
                        <span className="text-[9px] font-sans tracking-widest uppercase text-zinc-600">150g Pack</span>
                        <span className="text-base font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">₹80</span>
                        <span className="text-[9px] font-sans text-amber-400/60 group-hover:text-amber-400 transition-colors">View →</span>
                      </Link>

                      {/* 60g */}
                      {small && (
                        <Link href={`/products/${small.id}`} className="group flex flex-col gap-1 p-3 rounded-xl bg-zinc-900 border border-zinc-700/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200">
                          <span className="text-[9px] font-sans tracking-widest uppercase text-zinc-600">60g Pack</span>
                          <span className="text-base font-bold text-zinc-300">₹40</span>
                          <span className="text-[9px] font-sans text-zinc-600 group-hover:text-amber-400 transition-colors">View →</span>
                        </Link>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-bold shadow-[0_8px_32px_rgba(212,130,26,0.3)] font-sans tracking-wider px-10">
            <Link href="/products">View All 12 Products</Link>
          </Button>
        </div>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </section>
  )
}