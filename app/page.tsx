"use client"

import FeaturedProducts from "@/components/FeaturedProducts"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Global Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />
      {/*hero section */}
      <Hero />
      {/*featured products section */}
      <FeaturedProducts />

    </main>
  )
}