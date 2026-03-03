"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function ProductDetail() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(product?.images[0])

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#080600] text-white font-serif">
      Product not found
    </div>
  )

  return (
    <main className="relative bg-[#080600] text-white min-h-screen py-28 overflow-hidden font-serif">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500 blur-[180px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500 blur-[180px] opacity-10 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        <button onClick={() => router.back()} className="flex items-center gap-2 text-amber-400 hover:text-white transition duration-300 mb-16 group">
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Images */}
          <div>
            <div className="rounded-3xl p-5 bg-white/5 backdrop-blur-xl border border-amber-500/20 shadow-[0_20px_80px_rgba(255,215,0,0.08)]">
              <img src={selectedImage} alt={product.name} className="w-full h-[420px] object-cover rounded-2xl transition duration-700 hover:scale-105" />
            </div>
            <div className="flex gap-3 mt-5 flex-wrap">
              {product.images.map((img, i) => (
                <div key={i} onClick={() => setSelectedImage(img)} className={`overflow-hidden rounded-xl cursor-pointer border-2 transition duration-300 ${selectedImage === img ? "border-amber-500 shadow-lg shadow-amber-500/30" : "border-transparent hover:border-amber-500/50"}`}>
                  <img src={img} className="w-20 h-20 object-cover transition duration-500 hover:scale-110" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              {/* Type + size badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {product.type === "cone" ? "Dhoop Cone" : "Dhoop Stick"}
                </span>
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {product.size} pack
                </span>
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {product.flavour}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">{product.name}</h1>
              <p className="text-zinc-400 leading-relaxed text-base">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <p className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {product.price}
              </p>
              <span className="text-zinc-600 text-sm font-sans mb-2">MRP (incl. all taxes)</span>
            </div>

            {/* Burn time */}
            {product.burnTime && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-amber-400 text-xs font-sans font-semibold tracking-wider uppercase">Burn Time</p>
                  <p className="text-white text-sm font-sans">{product.burnTime} per piece</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="px-8 py-6 text-base bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-semibold shadow-xl font-sans">
                <a href={`https://wa.me/9208137401?text=I want to order: ${product.name} (${product.size})`} target="_blank" rel="noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-base border-amber-500 text-amber-400 hover:bg-amber-500/10 hover:text-white transition duration-300 font-sans">
                <a href="mailto:agarwalnimish428@gmail.com">Email Us</a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}