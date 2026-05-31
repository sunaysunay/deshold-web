import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
          <span className="text-[13px] font-semibold text-slate-700">DES Group</span>
          <span className="text-[11px] text-slate-400 ml-2">© 2026 · deshold.com · KvK geregistreerd</span>
        </div>
        <div className="flex items-center gap-5">
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/voorwaarden", label: "Algemene voorwaarden" },
            { href: "https://linkedin.com", label: "LinkedIn", external: true },
          ].map(l => (
            l.external
              ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors">{l.label}</a>
              : <Link key={l.label} href={l.href}
                  className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
