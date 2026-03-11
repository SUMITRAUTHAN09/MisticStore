"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 40)
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 font-serif ${
        scrolled
          ? "backdrop-blur-xl bg-black/80 border-b border-yellow-500/20 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        
        {/* Logo + Brand */}
<Link href="/" className="flex items-center gap-3 group">
  <div className="relative">
    <div className="absolute inset-0 bg-amber-400/10 blur-xl group-hover:bg-amber-400/20 transition-all duration-300 rounded-full" />
    <img
  src="/logo.png"
  alt="MEHKAO Logo"
  className="relative h-[52px] w-[52px] object-contain drop-shadow-[0_0_8px_rgba(212,160,26,0.5)]"
/>
  </div>
  <div className="flex flex-col leading-none">
    <span className="text-xl font-extrabold tracking-[0.15em] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent uppercase">
      MEHKAO
    </span>
    <span className="text-[9px] tracking-[0.4em] text-yellow-500/60 uppercase font-sans font-medium">
      Dhoop &amp; Agarbatti
    </span>
  </div>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-zinc-200">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/about">About</NavLink>

          <Button
            asChild
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:opacity-90 shadow-lg shadow-yellow-500/25 tracking-wide font-sans text-sm px-5"
          >
            <a href="https://wa.me/9208137401" target="_blank">
              Order Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20"
          >
            <div className="flex flex-col px-6 py-6 gap-6 text-zinc-200">
              <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink href="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
              <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold font-sans"
              >
                <a href="https://wa.me/9208137401" target="_blank">
                  Order Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-sm tracking-wide transition duration-300 hover:text-yellow-400"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-full rounded-full" />
    </Link>
  )
}