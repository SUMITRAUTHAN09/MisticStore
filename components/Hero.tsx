"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-32">

      {/* Golden Glow Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* Premium M Logo */}
          <div className="flex items-center gap-4">
            <div className="text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              M
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Mistic
            </h1>
          </div>

          <h2 className="text-3xl font-semibold text-yellow-400">
            Premium Dhoop & Agarbatti
          </h2>

          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            Experience divine fragrance crafted with devotion and purity.
            Long-lasting aroma for temples, homes and spiritual rituals.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-black font-semibold shadow-lg"
            >
              <Link href="/products">
                Explore Products
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
            >
              <a
                href="https://wa.me/919999999999"
                target="_blank"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="/hero-dhoop.jpg"
            alt="Mistic Dhoop Agarbatti"
            className="rounded-3xl shadow-[0_20px_80px_rgba(255,215,0,0.15)] object-cover h-[480px] w-full border border-yellow-500/20"
          />

          {/* Premium Badge */}
          <div className="absolute -bottom-6 -left-6 bg-black border border-yellow-500/30 shadow-xl rounded-2xl px-6 py-4 backdrop-blur-md">
            <p className="text-yellow-400 font-semibold">
              100% Natural Ingredients
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}