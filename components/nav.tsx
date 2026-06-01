"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/src/i18n/routing"

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "tr", label: "TR" },
]

function LangSwitcher() {
  const locale   = useLocale()
  const router   = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function switchTo(code: string) {
    setOpen(false)
    // next-intl locale switch: replace current path with new locale
    router.replace(pathname as string, { locale: code })
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 text-[12px] font-semibold text-slate-300 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10"
      >
        {locale.toUpperCase()} <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-slate-900 border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[72px]">
          {LOCALES.map(l => (
            <button
              key={l.code}
              onClick={() => switchTo(l.code)}
              className={
                l.code === locale
                  ? "block w-full text-left px-4 py-2 text-[12px] font-semibold bg-white/10 text-white"
                  : "block w-full text-left px-4 py-2 text-[12px] font-semibold text-slate-400 hover:bg-white/5 hover:text-white"
              }
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const t = useTranslations("Nav")
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const navLinks = [
    { href: "/about",      label: t("about") },
    { href: "/businesses", label: t("businesses") },
    { href: "/platform",   label: t("platform") },
    { href: "/news",       label: t("news") },
    { href: "/careers",    label: t("careers") },
    { href: "/contact",    label: t("contact") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-bold text-2xl tracking-wide">DESHOLD</span>
          <span className="text-[10px] text-slate-400 tracking-[0.15em] uppercase">Building Businesses</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-slate-300 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Lang + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher />
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white/30 text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
          >
            {t("cta")}
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
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-300 border-b border-white/5 last:border-0 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-4">
            <LangSwitcher />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-lg"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
