"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-black text-zinc-300 border-t border-yellow-500/20 overflow-hidden font-serif">

      {/* Golden Glow Effects */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-yellow-500 blur-[140px] opacity-10 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-orange-500 blur-[140px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        ><div className="flex items-center gap-2">
           <img
                    src="/Logo.jpeg"
                    alt="Comapny Logo"
                    className="object-cover h-[50px] w-[50px] "
                  />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Mistic
          </h2>
        </div>
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
       {/* Contact */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h3 className="font-semibold mb-4 text-yellow-400">
    Contact
  </h3>

  <div className="flex items-center gap-3 text-sm">
    {/* Phone Icon */}
    <svg
      className="w-4 h-4 text-yellow-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.11a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.59.59A2 2 0 0 1 22 16.92z" />
    </svg>

    <a href="tel:+919208137401" className="hover:text-yellow-400 transition">
      +91 9208137401
    </a>
  </div>

  <div className="flex items-center gap-3 text-sm mt-3">
    {/* Email Icon */}
    <svg
      className="w-4 h-4 text-yellow-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>

    <a
      href="mailto:agarwalnimish428@gmail.com"
      className="hover:text-yellow-400 transition"
    >
      agarwalnimish428@gmail.com
    </a>
  </div>
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