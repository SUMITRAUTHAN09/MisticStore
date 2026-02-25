"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

interface Props {
  id: string
  name: string
  price: string
  image: string
  description: string
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
}: Props) {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-black border border-yellow-500/20 rounded-3xl overflow-hidden 
                         shadow-lg hover:shadow-[0_20px_60px_rgba(255,215,0,0.15)] 
                         transition duration-300 cursor-pointer">

          <CardHeader className="p-0 relative">
            <img
              src={image}
              alt={name}
              className="h-60 w-full object-cover"
            />

            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </CardHeader>

          <CardContent className="p-6 space-y-3 text-white">
            <h2 className="text-xl font-semibold tracking-wide">
              {name}
            </h2>

            <p className="text-sm text-zinc-400 line-clamp-2">
              {description}
            </p>

            <p className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {price}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}