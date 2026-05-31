"use client"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Nav() {
  const t = useTranslations("Nav")
  const navLinks = [
    { href: "/about",     label: t("about") },
    { href: "/businesses",label: t("businesses") },
    { href: "/platform",  label: t("platform") },
    { href: "/news",      label: t("news") },
    { href: "/careers",   label: t("careers") },
    { href: "/contact",   label: t("contact") },
  ]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg" : "bg-black/30 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-bold text-2xl tracking-wide">DESHOLD</span>
          <span className="text-[10px] text-slate-400 tracking-[0.15em] uppercase">Building Businesses</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[13px] text-slate-300 hover:text-white transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Lang */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1 text-[12px] text-slate-400 hover:text-white transition-colors">
            EN <ChevronDown className="w-3 h-3" />
          </button>
          <Link href="/contact"
            className="flex items-center gap-2 border border-white/30 text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200">
            t("cta")
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-1.5 text-white" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10 px-6 pb-5">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-300 border-b border-white/5 last:border-0 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-white text-slate-900 text-sm font-semibold px-4 py-2.5 rounded-lg">
            t("cta")
          </Link>
        </div>
      )}
    </header>
  )
}
