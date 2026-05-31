import Link from "next/link"
import { ArrowRight, Mail, Car, Terminal, ShoppingCart, Bot, Globe, RefreshCw, CheckCircle } from "lucide-react"

const divisions = [
  {
    name: "DES Cars",
    tagline: "Campers & bestelwagens · NL/BE",
    desc: "Import en verkoop van kampeerauto's en bestelwagens in Nederland en België. Voertuigen worden geselecteerd via AI-gestuurde marktplaatsanalyse en voldoen aan RDW kampeerauto classificatie.",
    href: "/divisies#cars",
    siteLabel: "Bekijk aanbod",
    siteHref: "https://descampers.com",
    iconBg: "bg-[#E1F5EE]",
    iconColor: "text-[#0F6E56]",
    borderColor: "border-[#0F6E56]/20 hover:border-[#0F6E56]/50",
    Icon: Car,
  },
  {
    name: "DES IT",
    tagline: "AI automatisering · platforms · infra",
    desc: "IT-consultancy gericht op MKB. Van AI-gestuurde procesautomatisering tot maatwerk webplatformen en VPS-infrastructuur. Wij bouwen de systemen die bedrijven laten groeien.",
    href: "/divisies#it",
    siteLabel: "Meer over DES IT",
    siteHref: "/divisies#it",
    iconBg: "bg-[#EEEDFE]",
    iconColor: "text-[#534AB7]",
    borderColor: "border-[#534AB7]/20 hover:border-[#534AB7]/50",
    Icon: Terminal,
  },
  {
    name: "DES Shop",
    tagline: "Camper & outdoor producten · EU",
    desc: "Online shop voor camper accessoires, keukenunits en outdoorproducten. Producten worden direct gesourced vanuit de EU en Turkije voor scherpe prijzen en snelle levering in Europa.",
    href: "/divisies#shop",
    siteLabel: "Naar de shop",
    siteHref: "https://desshop.nl",
    iconBg: "bg-[#FAEEDA]",
    iconColor: "text-[#854F0B]",
    borderColor: "border-[#854F0B]/20 hover:border-[#854F0B]/50",
    Icon: ShoppingCart,
  },
]

const approach = [
  {
    Icon: Bot,
    title: "Eigen AI-platform",
    desc: "DES BOP — ons Business Operating Platform — verbindt alle divisies. Lead scoring, voertuiganalyse en klantbeheer draaien op één systeem, gebouwd en beheerd door DES IT.",
  },
  {
    Icon: Globe,
    title: "Europees netwerk",
    desc: "Actief in meer dan 15 Europese markten voor inkoop en verkoop. Directe contacten in Duitsland, Nederland, België en Turkije voor concurrerende inkoopprijzen.",
  },
  {
    Icon: RefreshCw,
    title: "Geïntegreerde operatie",
    desc: "Elke divisie deelt dezelfde klantendatabase, leads pipeline en rapportagestructuur. Efficiëntie die groeit naarmate de groep groeit — zonder extra overhead.",
  },
]

const statusRows = [
  { label: "DES Cars — voertuigenhandel", status: "Actief", dot: "bg-[#1D9E75]" },
  { label: "DES IT — consultancy", status: "Actief", dot: "bg-[#7F77DD]" },
  { label: "DES Shop — e-commerce", status: "Actief", dot: "bg-[#EF9F27]" },
  { label: "DES BOP — intern platform", status: "In ontwikkeling", dot: "bg-slate-400" },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-4">
            Nederland · Europa · Digitaal
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight max-w-2xl mb-5">
            Meerdere businesses.<br />Één groep.<br />
            <span className="text-slate-400">Aangedreven door technologie.</span>
          </h1>
          <p className="text-[13px] text-slate-500 leading-relaxed max-w-xl mb-8">
            DES Group is een Nederlandse ondernemersgroep actief in voertuigenhandel, e-commerce en
            IT-consultancy. Wij combineren sectorbrede ervaring met eigen AI-tooling en digitale infrastructuur.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/divisies"
              className="flex items-center gap-2 bg-slate-900 text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors">
              Bekijk onze divisies <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact"
              className="flex items-center gap-2 border border-slate-300 text-slate-700 text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
              <Mail className="w-3.5 h-3.5" /> Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200/80">
            {[
              { num: "3", label: "Actieve divisies" },
              { num: "15+", label: "Europese markten" },
              { num: "NL · BE · TR", label: "Operationele bases" },
              { num: "AI-first", label: "Eigen tooling & platform" },
            ].map(s => (
              <div key={s.label} className="px-6 py-5">
                <div className="text-[22px] font-medium text-slate-900 mb-0.5">{s.num}</div>
                <div className="text-[11px] text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divisions ── */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-slate-400 mb-2">Onze divisies</p>
          <h2 className="text-[18px] font-medium text-slate-900 mb-8">Drie bedrijfslijnen, één infrastructuur</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {divisions.map(d => (
              <div key={d.name}
                className={`border rounded-xl p-5 flex flex-col gap-3 transition-colors ${d.borderColor}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${d.iconBg}`}>
                  <d.Icon className={`w-5 h-5 ${d.iconColor}`} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-slate-900">{d.name}</div>
                  <div className="text-[11px] text-slate-400 italic mt-0.5">{d.tagline}</div>
                </div>
                <p className="text-[12px] text-slate-500 leading-relaxed flex-1">{d.desc}</p>
                <a href={d.siteHref} className="flex items-center gap-1.5 text-[11px] text-[#1D9E75] font-medium mt-1 hover:underline">
                  <ArrowRight className="w-3 h-3" /> {d.siteLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="border-b border-slate-200/80 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-slate-400 mb-2">Onze aanpak</p>
          <h2 className="text-[18px] font-medium text-slate-900 mb-6">Technologie als concurrentievoordeel</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {approach.map(a => (
              <div key={a.title} className="bg-white border border-slate-200/80 rounded-xl p-5">
                <a.Icon className="w-5 h-5 text-slate-400 mb-3" />
                <div className="text-[13px] font-semibold text-slate-900 mb-2">{a.title}</div>
                <p className="text-[12px] text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-slate-400 mb-3">Over DES Group</p>
            <h2 className="text-[17px] font-medium text-slate-900 mb-4 leading-snug">Ondernemen met een IT-voorsprong</h2>
            <p className="text-[12px] text-slate-500 leading-relaxed mb-5">
              DES Group is opgericht vanuit een IT-achtergrond met een duidelijke visie: traditionele sectoren zoals
              voertuigenhandel en retail slimmer laten draaien door technologie. Onze eigen systemen geven ons een
              informatievoordeel dat concurrenten niet hebben.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Gevestigd in Nederland", "KvK geregistreerd", "EU-breed actief", "Eigen VPS infrastructuur"].map(p => (
                <span key={p} className="text-[11px] px-3 py-1 rounded-full border border-slate-200 text-slate-500">{p}</span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 divide-y divide-slate-100">
            {statusRows.map(r => (
              <div key={r.label} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span className={`w-2 h-2 rounded-full shrink-0 ${r.dot}`} />
                <span className="text-[12px] text-slate-500 flex-1">{r.label}</span>
                <span className="text-[12px] font-medium text-slate-700">{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[17px] font-medium text-slate-900 mb-1">Samenwerken met DES Group?</div>
            <div className="text-[12px] text-slate-500">Of u nu een voertuig zoekt, IT-hulp nodig heeft, of gewoon wil kennismaken.</div>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-slate-900 text-white text-[13px] font-medium px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  )
}
