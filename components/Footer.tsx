"use client"

import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-black text-zinc-300 border-t border-yellow-500/20 overflow-hidden font-serif">

      <div className="absolute -top-32 -right-32 w-72 h-72 bg-yellow-500 blur-[140px] opacity-10 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-orange-500 blur-[140px] opacity-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />
              <img
                src="/logo.png"
                alt="MISTIC Logo"
                className="relative h-[48px] w-[48px] object-contain rounded-full border border-yellow-500/30"
              />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-[0.12em] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent uppercase">
                MEHKAO
              </h2>
              <p className="text-[9px] tracking-[0.4em] text-yellow-500/50 uppercase font-sans">
                Dhoop & Agarbatti
              </p>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed font-sans">
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
          <h3 className="font-semibold mb-5 text-yellow-400 tracking-widest text-sm uppercase font-sans">
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
          <h3 className="font-semibold mb-5 text-yellow-400 tracking-widest text-sm uppercase font-sans">
            Contact
          </h3>
          <div className="flex flex-col gap-4">
            <a href="tel:+919208137401" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-yellow-400 transition duration-300 font-sans group">
              <span className="w-8 h-8 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover:border-yellow-500/50 transition duration-300">
                <svg className="w-3.5 h-3.5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.11a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.59.59A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              +91 9208137401
            </a>
             <a href="tel:+918864854298" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-yellow-400 transition duration-300 font-sans group">
              <span className="w-8 h-8 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover:border-yellow-500/50 transition duration-300">
                <svg className="w-3.5 h-3.5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.11a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.59.59A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              +91 8864854298
            </a>
            <a href="mailto:agarwalnimish428@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-yellow-400 transition duration-300 font-sans group">
              <span className="w-8 h-8 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover:border-yellow-500/50 transition duration-300">
                <svg className="w-3.5 h-3.5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-10 7L2 7"/>
                </svg>
              </span>
              agarwalnimish428@gmail.com
            </a>
          </div>
        </motion.div>

      </div>

      <Separator className="bg-yellow-500/20" />

      <div className="text-center py-6 text-xs text-zinc-600 font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()} MEHKAO. All rights reserved.
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-sans text-zinc-400 hover:text-yellow-400 transition duration-300 tracking-wide">
      {children}
    </Link>
  )
}