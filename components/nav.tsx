"use client"
import { ClickTracker } from "@/components/click-tracker"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/src/i18n/routing"

const LOCALES = [
  { code: "en", name: "English",    flag: null },
  { code: "nl", name: "Nederlands", flag: "nl" },
  { code: "de", name: "Deutsch",    flag: "de" },
  { code: "fr", name: "Français",   flag: "fr" },
  { code: "tr", name: "Türkçe",     flag: "tr" },
  { code: "ro", name: "Română",     flag: "ro" },
  { code: "bg", name: "Български",  flag: "bg" },
  { code: "el", name: "Ελληνικά",   flag: "gr" },
  { code: "es", name: "Español",    flag: "es" },
  { code: "it", name: "Italiano",   flag: "it" },
]

function FlagImg({ cc }: { cc: string }) {
  return (
    <img
      src={"https://flagcdn.com/w20/" + cc + ".png"}
      srcSet={"https://flagcdn.com/w40/" + cc + ".png 2x"}
      width={20}
      height={14}
      alt={cc}
      className="rounded-[2px] object-cover"
      style={{ display: "block", flexShrink: 0 }}
    />
  )
}

function LangSwitcher({ mobile = false }: { mobile?: boolean }) {
  const locale   = useLocale()
  const pathname = usePathname()
  const router   = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  function switchLocale(code: string) {
    document.cookie = "NEXT_LOCALE=" + code + "; path=/; max-age=" + (60 * 60 * 24 * 365)
    setOpen(false)
    router.replace(pathname as string, { locale: code })
  }

  function resetToGeo() {
    document.cookie = "NEXT_LOCALE=; path=/; max-age=0"
    setOpen(false)
    window.location.href = "/"
  }

  const current = LOCALES.find(l => l.code === locale) || LOCALES[0]

  if (mobile) {
    return (
      <div className="py-4 border-t w-full" style={{ borderColor: "rgba(255,255,255,0.10)", marginTop: "8px" }}>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,0.52)" }}>
          Language
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCALES.map(({ code, name, flag }) => {
            const active = locale === code
            return (
              <button
                key={code}
                type="button"
                onClick={() => switchLocale(code)}
                title={name}
                className={"flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[12px] transition-colors"}
                style={{
                  borderColor: active ? "#3b82f6" : "rgba(255,255,255,0.16)",
                  backgroundColor: active ? "rgba(37,99,235,0.15)" : "transparent",
                  color: active ? "#3b82f6" : "rgba(255,255,255,0.8)",
                  fontWeight: active ? 600 : 500
                }}
              >
                {flag ? <FlagImg cc={flag} /> : <Globe size={16} strokeWidth={1.6} />}
                <span className="text-[11px] uppercase tracking-[0.06em]">{code}</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative z-50">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-[13px] font-medium transition-colors"
        style={{ color: "rgba(255,255,255,0.8)" }}
        onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
      >
        <Globe size={16} strokeWidth={1.8} />
        {current.code.toUpperCase()}
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={"transition-transform " + (open ? "rotate-180" : "")}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 z-[300] mt-2">
          <div className="min-w-[180px] overflow-hidden rounded-xl border shadow-xl" style={{ background: "rgba(14,22,38,0.95)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.15)" }}>
            {LOCALES.map(({ code, name, flag }) => {
              const active = locale === code
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => switchLocale(code)}
                  className="flex w-full items-center gap-3 px-4 py-[10px] text-left transition-colors"
                  style={{
                    backgroundColor: active ? "rgba(37,99,235,0.15)" : "transparent",
                    color: active ? "#3b82f6" : "rgba(255,255,255,0.8)"
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  <span className="w-5 flex-none flex items-center justify-center">
                    {flag ? <FlagImg cc={flag} /> : <Globe size={16} strokeWidth={1.6} />}
                  </span>
                  <span className={"text-[13px] " + (active ? "font-semibold" : "font-normal")}>
                    {name}
                  </span>
                </button>
              )
            })}
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.10)", marginTop: "4px" }}>
              <button
                type="button"
                onClick={resetToGeo}
                className="flex w-full items-center gap-3 px-4 py-[10px] text-left transition-colors"
                style={{ color: "rgba(255,255,255,0.52)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <span className="w-5 flex-none flex items-center justify-center">
                  <Globe size={15} strokeWidth={1.6} style={{ color: "rgba(255,255,255,0.4)" }} />
                </span>
                <span className="text-[12px] italic">Auto-detect</span>
              </button>
            </div>
          </div>
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
  ]

  return (
    <>
    <ClickTracker />
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
          <span className="text-white font-bold text-2xl tracking-wide">DES Group</span>
          <span className="text-[10px] text-slate-400 tracking-[0.15em] uppercase">Building Businesses</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              data-track={"nav_" + l.href.replace("/","").replace("-","_") || "nav_home"}
              data-track-type="nav"
              className="text-[13px] text-slate-300 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Lang + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <LangSwitcher />
          <Link
            href="/contact"
            data-track="cta_contact" data-track-type="cta"
            className="flex items-center gap-2 border border-white/30 text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile top-bar controls */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-[12px] font-medium text-slate-200 hover:text-white px-1"
          >
            {t("about")}
          </Link>
          <button className="p-1.5 text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10 px-6 pb-5">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              data-track={"nav_" + l.href.replace("/","").replace("-","_")}
              data-track-type="nav"
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-300 border-b border-white/5 last:border-0 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col mt-2">
            <LangSwitcher mobile={true} />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-white text-slate-900 text-sm font-semibold px-4 py-3 rounded-lg text-center w-full block"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  )
}
