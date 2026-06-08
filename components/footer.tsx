import Link from "next/link"

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about" },
      { label: "Careers",        href: "/careers" },
      { label: "News & Insights",href: "/news" },
      { label: "Contact",        href: "/contact" },
    ],
  },
  {
    title: "Businesses",
    links: [
      { label: "Automotive",    href: "https://desmobil.com" },
      { label: "DES Campers", href: "https://descampers.com" },
      { label: "TECH",      href: "https://dessystems.io" },
      { label: "DES Shop",    href: "https://desshop.nl" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "DES Platform", href: "/platform" },
      { label: "Features",     href: "/platform#features" },
      { label: "Integrations", href: "/platform#integrations" },
      { label: "Security",     href: "/platform#security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",    href: "/privacy" },
      { label: "Terms of Service",  href: "/terms" },
      { label: "Cookie Policy",     href: "/cookies" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-bold text-xl tracking-wide">DESHOLD</span>
              <span className="text-[10px] text-slate-500 tracking-[0.15em] uppercase mt-0.5">Building Businesses</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed mb-5 max-w-xs">
              DESHold is a European business group building and operating companies through technology and innovation.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "in",  href: "https://linkedin.com", title: "LinkedIn" },
                { label: "f",   href: "https://facebook.com", title: "Facebook" },
                { label: "ig",  href: "https://instagram.com",title: "Instagram" },
                { label: "yt",  href: "https://youtube.com",  title: "YouTube" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:border-slate-500 hover:text-white transition-colors text-[11px] font-bold">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[12px] text-slate-400 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500">© 2026 DESHold B.V. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Made with ♥ in Europe · <a href="https://deshold.com" className="hover:text-slate-400">deshold.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
