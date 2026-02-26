"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const featured = [
  {
    id: "mogra-teal",
    name: "Mogra Premium - Teal",
    price: "Rs. 120",
    top: "0%",
    left: "0%",
    description: "Cool floral mogra in a stunning teal jar. Long-lasting and divine.",
    tag: "Bestseller",
    tagColor: "bg-yellow-500 text-black",
  },
  {
    id: "mogra-rose",
    name: "Mogra Premium - Rose",
    price: "Rs. 120",
    top: "0%",
    left: "-100%",
    description: "Warm rose-tinted jar with a rich, long-lasting floral fragrance.",
    tag: "Popular",
    tagColor: "bg-orange-500 text-black",
  },
  {
    id: "mogra-green",
    name: "Mogra Premium - Green",
    price: "Rs. 120",
    top: "-100%",
    left: "0%",
    description: "Fresh earthy green jar with a grounding sacred mogra scent.",
    tag: "New",
    tagColor: "bg-emerald-500 text-black",
  },
  {
    id: "mogra-saffron",
    name: "Mogra Premium - Saffron",
    price: "Rs. 120",
    top: "-100%",
    left: "-100%",
    description: "Deep saffron jar with a warm, sacred and long-burning aroma.",
    tag: "Limited",
    tagColor: "bg-red-500 text-white",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden font-serif">

      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-500 blur-[160px] opacity-[0.08] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange-500 blur-[160px] opacity-[0.08] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500/50" />
            <span className="text-yellow-500/60 text-[10px] tracking-[0.45em] uppercase font-sans">
              Our Collection
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-zinc-500 text-sm font-sans max-w-md mx-auto">
            Mogra Premium Incense Cones - 4 handcrafted variants, each with a distinct sacred essence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="group relative bg-zinc-950 border border-yellow-500/15 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500/40 hover:shadow-[0_20px_60px_rgba(255,200,0,0.12)] transition-all duration-300">

                  <div className="relative h-52 overflow-hidden bg-zinc-900">
                    <img
                      src="/products-hero.jpeg"
                      alt={product.name}
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                        maxWidth: "none",
                        top: product.top,
                        left: product.left,
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 text-[10px] font-black font-sans tracking-widest px-2.5 py-1 rounded-full uppercase ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm font-bold text-white tracking-wide leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-zinc-500 text-xs font-sans leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-[10px] font-sans text-zinc-600 tracking-widest uppercase">
                        45-60 min
                      </span>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="h-px w-full bg-yellow-500/10 mb-3" />
                    <span className="text-xs font-sans text-yellow-400/60 group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                      View Details
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-bold shadow-[0_8px_32px_rgba(212,130,26,0.3)] font-sans tracking-wider px-10"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}