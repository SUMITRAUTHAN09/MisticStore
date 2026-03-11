"use client"

import { products } from "@/lib/products"
import Link from "next/link"
import { useState } from "react"

const flavours = ["All", "Kesar Chandan", "Guggle", "Black Bela"] as const
const types = ["All", "cone", "stick"] as const

export default function Products() {
  const [activeType, setActiveType] = useState<"All" | "cone" | "stick">("All")
  const [activeFlavour, setActiveFlavour] = useState<string>("All")

  const filtered = products.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType
    const flavourMatch = activeFlavour === "All" || p.flavour === activeFlavour
    return typeMatch && flavourMatch
  })

  return (
    <main className="relative bg-[#080600] text-white min-h-screen py-28 overflow-hidden font-serif">

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-[0.08] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-[0.08] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
            <span className="text-amber-500/60 text-[10px] tracking-[0.45em] uppercase font-sans">Mehkao</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-3">
            Our Products
          </h1>
          <p className="text-zinc-500 text-sm font-sans">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} — Cones &amp; Sticks in 3 sacred flavours
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">

          {/* Type filter */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-600 text-[10px] font-sans tracking-widest uppercase">Type:</span>
            <div className="flex gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`text-[11px] font-sans font-semibold tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeType === t
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                      : "border border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-400"
                  }`}
                >
                  {t === "All" ? "All" : t === "cone" ? "🔺 Cones" : "🪵 Sticks"}
                </button>
              ))}
            </div>
          </div>

          {/* Flavour filter */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-600 text-[10px] font-sans tracking-widest uppercase">Flavour:</span>
            <div className="flex gap-2 flex-wrap">
              {flavours.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFlavour(f)}
                  className={`text-[11px] font-sans font-semibold tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeFlavour === f
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                      : "border border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600 font-sans">No products found.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-zinc-950 border border-amber-500/15 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-[0_20px_60px_rgba(255,180,0,0.1)] transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: "brightness(0.82) saturate(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                  {/* Tag */}
                  {product.tag && (
                    <span className={`absolute top-3 left-3 text-[10px] font-black font-sans tracking-widest px-2.5 py-1 rounded-full uppercase ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  )}

                  {/* Type badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold font-sans bg-black/60 backdrop-blur-sm text-amber-400 border border-amber-500/30 px-2 py-1 rounded-full">
                    {product.type === "cone" ? "🔺 Cone" : "🪵 Stick"}
                  </span>

                  {/* Size ribbon */}
                  <div className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black font-sans tracking-widest ${
                    product.size === "150g"
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                  }`}>
                    {product.size}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-sans tracking-widest uppercase text-zinc-600 border border-zinc-700 px-2 py-0.5 rounded-full">
                      {product.flavour}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide leading-tight">{product.name}</h3>
                  <p className="text-zinc-500 text-xs font-sans leading-relaxed line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.burnTime && (
                      <span className="text-[10px] font-sans text-zinc-600 tracking-widest uppercase">{product.burnTime}</span>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="h-px w-full bg-amber-500/10 mb-3" />
                  <span className="text-xs font-sans text-amber-400/60 group-hover:text-amber-400 transition-colors duration-300 tracking-wide">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}