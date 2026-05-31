"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/divisies", label: "Onze divisies" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/platform", label: "DES Platform" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75] shrink-0" />
          <span className="text-[15px] font-semibold text-slate-900 tracking-tight">DES Group</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact"
            className="text-[13px] font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
            Neem contact op
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-1.5" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pb-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-slate-700 border-b border-slate-100 last:border-0">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="block mt-3 text-center text-sm font-medium bg-slate-900 text-white px-4 py-2.5 rounded-lg">
            Neem contact op
          </Link>
        </div>
      )}
    </header>
  )
}
