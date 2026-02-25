"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function ProductDetail() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0]
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Product not found
      </div>
    )
  }

  return (
    <main className="relative bg-black text-white min-h-screen py-24 overflow-hidden">

      {/* Golden Glow Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500 blur-[160px] opacity-10 rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500 blur-[160px] opacity-10 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-yellow-500/20 rounded-3xl p-4 bg-black shadow-[0_20px_80px_rgba(255,215,0,0.08)]">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-2xl"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 mt-6 flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 object-cover rounded-xl cursor-pointer 
                    border-2 transition duration-300
                    ${
                      selectedImage === img
                        ? "border-yellow-500"
                        : "border-transparent hover:border-yellow-500/50"
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tight">
              {product.name}
            </h1>

            <p className="text-zinc-400 leading-relaxed">
              {product.description}
            </p>

            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {product.price}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 
                           hover:opacity-90 text-black font-semibold shadow-lg"
              >
                <a
                  href={`https://wa.me/919999999999?text=I want to buy ${product.name}`}
                  target="_blank"
                >
                  Order on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
              >
                <a href="mailto:yourgmail@gmail.com">
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  )
}