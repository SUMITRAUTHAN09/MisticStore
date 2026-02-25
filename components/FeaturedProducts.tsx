"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FeaturedProducts() {
  const featured = [
    {
      name: "Rose Dhoop",
      image: "/rose1.jpg",
      description: "Long lasting rose fragrance.",
    },
    {
      name: "Chandan Agarbatti",
      image: "/chandan1.jpg",
      description: "Premium sandalwood aroma.",
    },
  ]

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* Golden Glow Background */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
                     bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
                     bg-clip-text text-transparent"
        >
          Featured Products
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {featured.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black border border-yellow-500/20 rounded-3xl 
                               overflow-hidden shadow-lg 
                               hover:shadow-[0_20px_60px_rgba(255,215,0,0.15)] 
                               transition duration-300">

                <CardHeader className="p-0 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-zinc-400">
                    {product.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 
                               hover:opacity-90 text-black font-semibold shadow-lg"
                  >
                    <Link href="/products">
                      View All Products
                    </Link>
                  </Button>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}