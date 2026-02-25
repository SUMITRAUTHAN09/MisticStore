"use client"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
export default function ProductDetail() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const router = useRouter()

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
  <main className="relative bg-black text-white min-h-screen py-28 overflow-hidden">

    {/* Luxury Glow Background */}
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-yellow-500 blur-[180px] opacity-10 rounded-full" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500 blur-[180px] opacity-10 rounded-full" />

    <div className="relative max-w-6xl mx-auto px-6">

      {/* Back Button - Fixed Style */}
      <motion.button
        onClick={() => router.back()}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-yellow-400 hover:text-white 
                   transition duration-300 mb-16 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to Products
      </motion.button>

      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT - Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl 
                          border border-yellow-500/20 
                          shadow-[0_20px_80px_rgba(255,215,0,0.08)]">

            <div className="overflow-hidden rounded-2xl">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl 
                           transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`overflow-hidden rounded-xl cursor-pointer 
                  border-2 transition duration-300
                  ${
                    selectedImage === img
                      ? "border-yellow-500 shadow-lg shadow-yellow-500/30"
                      : "border-transparent hover:border-yellow-500/50"
                  }`}
              >
                <img
                  src={img}
                  className="w-24 h-24 object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-zinc-400 mt-6 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Animated Price */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold bg-gradient-to-r 
                       from-yellow-400 via-orange-400 to-yellow-500 
                       bg-clip-text text-transparent"
          >
            {product.price}
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 pt-6">

            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-lg
                         bg-gradient-to-r from-yellow-500 to-orange-500
                         hover:scale-105 transition duration-300
                         text-black font-semibold shadow-xl"
            >
              <a
                href={`https://wa.me/92038137401?text=I want to buy ${product.name}`}
                target="_blank"
              >
                Order on WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg
                         border-yellow-500 text-yellow-400
                         hover:bg-yellow-500/10 hover:text-white
                         transition duration-300"
            >
              <a href="mailto:agarwalnimish428@gmail.com">
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