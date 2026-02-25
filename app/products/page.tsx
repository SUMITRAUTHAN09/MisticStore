"use client"

import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/products"
import { motion } from "framer-motion"

export default function Products() {
  return (
    <main className="relative bg-black text-white min-h-screen py-24 overflow-hidden">

      {/* Golden Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
                     bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 
                     bg-clip-text text-transparent"
        >
          Our Products
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}