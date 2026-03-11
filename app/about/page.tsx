"use client"

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cinzel_Decorative } from "next/font/google";

const mehkaoFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
});

export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden font-serif">

      {/* Golden Glow Background Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[180px] opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[180px] opacity-20" />

      <div className="relative max-w-5xl mx-auto px-6 py-24">

        {/* Animated Heading */}
     <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className={`${mehkaoFont.className} text-4xl md:text-5xl text-center mb-16 tracking-[0.22em] uppercase bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,60,0.35)]`}
>
  ABOUT MEHKAO
</motion.h1>

        {/* Animated Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="rounded-3xl bg-white/5 backdrop-blur-xl border border-yellow-500/20 shadow-[0_0_60px_rgba(255,200,0,0.2)] ">
            <CardContent className="p-12 space-y-8 text-lg leading-relaxed text-zinc-200">

              <p>
                <span className="text-yellow-400 font-semibold">Mehkao</span> was founded
                with the vision of bringing divine spiritual fragrance into every
                home. We believe that fragrance is not just a scent — it is an
                experience of peace, devotion, and positivity.
              </p>

              <p>
                Our dhoop and agarbatti are crafted using traditional
                methods, premium natural ingredients, and refined fragrance
                oils that create a long-lasting and calming aroma.
              </p>

              <p>
                At Mehkao, we stand for purity, devotion, and uncompromising
                quality. Every stick we produce reflects our commitment to
                excellence and customer satisfaction.
              </p>

              <div className="pt-6 border-t border-yellow-500/20">
                <p className="text-yellow-400 font-semibold text-xl">
                  “Crafted with devotion. Delivered with trust.”
                </p>
              </div>

            </CardContent>
          </Card>
        </motion.div>

      </div>
    </main>
  )
}