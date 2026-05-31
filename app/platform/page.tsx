import type { Metadata } from "next"
import Link from "next/link"
import { BarChart2, Zap, Globe, Users, ShieldCheck, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: "DES Platform — DES Group",
  description: "DES BOP: ons Business Operating Platform dat alle divisies van DES Group verbindt.",
}

const features = [
  { Icon: Users,      title: "CRM & Sales",       desc: "Lead management, klantprofielen en dealopvolging in één overzicht." },
  { Icon: Globe,      title: "Website Hub",        desc: "Alle divisiewebsites verbonden aan één centrale contentlaag." },
  { Icon: BarChart2,  title: "Analytics",          desc: "Real-time inzicht in verkeer, leads, conversie en omzet per divisie." },
  { Icon: Zap,        title: "Automatisering",     desc: "Workflows die handmatige taken elimineren en processen versnellen." },
  { Icon: Bot,        title: "Multi-tenant",       desc: "DES Cars, DES IT en DES Shop draaien elk in een eigen omgeving." },
  { Icon: ShieldCheck,title: "Veilig & schaalbaar",desc: "Eigen VPS infrastructuur. Geen afhankelijkheid van derden." },
]

export default function PlatformPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <div className="bg-slate-900 rounded-2xl p-10 mb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-3">DES Platform</p>
          <h1 className="text-[28px] font-medium text-white mb-4 leading-snug">
            Één platform.<br />Eindeloze mogelijkheden.
          </h1>
          <p className="text-[13px] text-slate-400 leading-relaxed mb-6">
            DES BOP — ons Business Operating Platform — verbindt websites, leads, klanten, analytics,
            automatisering en operaties van alle DES Group divisies.
          </p>
          <Link href="/contact"
            className="inline-flex bg-white text-slate-900 text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors">
            Meer informatie aanvragen
          </Link>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 grid grid-cols-2 gap-2">
          {[
            ["1.250", "Leads beheerd"],
            ["320",   "Actieve listings"],
            ["98%",   "Uptime"],
            ["€2.4M", "Verwerkt volume"],
          ].map(([n, l]) => (
            <div key={l} className="bg-slate-900/60 rounded-lg p-4">
              <div className="text-[22px] font-medium text-white">{n}</div>
              <div className="text-[11px] text-slate-400 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {features.map(f => (
          <div key={f.title} className="border border-slate-200 rounded-xl p-5">
            <f.Icon className="w-5 h-5 text-slate-400 mb-3" />
            <div className="text-[14px] font-semibold text-slate-900 mb-2">{f.title}</div>
            <p className="text-[12px] text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
