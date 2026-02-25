"use client"

import FeaturedProducts from "@/components/FeaturedProducts"
import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Global Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />

      <Hero />
      <FeaturedProducts />

      {/* Premium CTA Section */}
      <section className="relative text-center py-32 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold 
                     bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
                     bg-clip-text text-transparent"
        >
          Mistic Dhoop Agarbatti
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-lg text-zinc-400 leading-relaxed"
        >
          Experience divine fragrance crafted with devotion and purity.
          Elevate your spiritual rituals with timeless aroma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 
                       hover:opacity-90 text-black font-semibold shadow-lg"
          >
            <Link href="/products">
              View Products
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
          >
            <Link href="/about">
              Our Story
            </Link>
          </Button>
        </motion.div>
      </section>

    </main>
  )
}