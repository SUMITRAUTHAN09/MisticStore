"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-black text-zinc-300 border-t border-yellow-500/20 overflow-hidden">

      {/* Golden Glow Effects */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-yellow-500 blur-[140px] opacity-10 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-orange-500 blur-[140px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Mistic
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Premium Dhoop & Agarbatti crafted with devotion,
            purity and timeless tradition.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/about">About</FooterLink>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-semibold mb-4 text-yellow-400">
            Contact
          </h3>

          <p className="text-sm">WhatsApp: +91 9999999999</p>
          <p className="text-sm mt-2">Email: yourgmail@gmail.com</p>
        </motion.div>

      </div>

      <Separator className="bg-yellow-500/20" />

      <div className="text-center py-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Mistic. All rights reserved.
      </div>
    </footer>
  )
}

/* Footer Link Component */
function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="hover:text-yellow-400 transition duration-300"
    >
      {children}
    </Link>
  )
}