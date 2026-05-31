import Link from "next/link"
import { Car, Terminal, ShoppingCart, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onze Divisies — DES Group",
  description: "DES Cars, DES IT en DES Shop: drie bedrijfslijnen, één geïntegreerde infrastructuur.",
}

const divisions = [
  {
    id: "cars",
    Icon: Car,
    name: "DES Cars",
    tagline: "Campers & bestelwagens · NL/BE",
    color: "#0F6E56", bg: "#E1F5EE",
    desc: [
      "Import en verkoop van kampeerauto's en bestelwagens in Nederland en België.",
      "Voertuigen worden geselecteerd via AI-gestuurde marktplaatsanalyse en voldoen aan RDW kampeerauto classificatie.",
      "Directe inkoop via Europese veilingen en particuliere aanbieders. Klanten profiteren van concurrerende prijzen door efficiënte logistiek en minimale tussenhandel.",
    ],
    site: "descampers.com",
    siteHref: "https://descampers.com",
    siteLabel: "Bekijk aanbod op descampers.com",
  },
  {
    id: "it",
    Icon: Terminal,
    name: "DES IT",
    tagline: "AI automatisering · platforms · infra",
    color: "#534AB7", bg: "#EEEDFE",
    desc: [
      "IT-consultancy gericht op MKB. Van AI-gestuurde procesautomatisering tot maatwerk webplatformen en VPS-infrastructuur.",
      "Wij bouwen de systemen die bedrijven laten groeien — inclusief het eigen DES BOP platform dat alle divisies van DES Group aandrijft.",
      "Diensten: webontwikkeling, automatisering, VPS-beheer, AI-integratie en digitale transformatie.",
    ],
    site: "des-it.eu",
    siteHref: "/contact?divisie=it",
    siteLabel: "Offerte aanvragen",
  },
  {
    id: "shop",
    Icon: ShoppingCart,
    name: "DES Shop",
    tagline: "Camper & outdoor producten · EU",
    color: "#854F0B", bg: "#FAEEDA",
    desc: [
      "Online shop voor camper accessoires, keukenunits en outdoorproducten.",
      "Producten worden direct gesourced vanuit de EU en Turkije voor scherpe prijzen en snelle levering in Europa.",
      "Assortiment: inbouwkeukens, slaapoplossingen, vloerbedekking, elektrische systemen en campingaccessoires.",
    ],
    site: "desshop.nl",
    siteHref: "https://desshop.nl",
    siteLabel: "Bekijk producten op desshop.nl",
  },
]

export default function DivisiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-2">Onze divisies</p>
      <h1 className="text-[26px] font-medium text-slate-900 mb-2">Drie bedrijfslijnen, één infrastructuur</h1>
      <p className="text-[13px] text-slate-500 mb-12 max-w-xl leading-relaxed">
        DES Group opereert drie actieve divisies die elk hun eigen markt bedienen maar dezelfde technologie, leadpipeline en operationele infrastructuur delen.
      </p>

      <div className="space-y-6">
        {divisions.map(d => (
          <div key={d.id} id={d.id}
            className="border border-slate-200 rounded-xl overflow-hidden grid md:grid-cols-[72px_1fr] group hover:border-slate-300 transition-colors">
            <div className="flex items-start justify-center pt-6 px-4 md:px-0 md:pt-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: d.bg }}>
                <d.Icon className="w-5 h-5" style={{ color: d.color }} />
              </div>
            </div>
            <div className="p-6 md:pl-2">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-[17px] font-semibold text-slate-900">{d.name}</h2>
                <span className="text-[11px] text-slate-400 italic">{d.tagline}</span>
              </div>
              <div className="space-y-2 mb-5">
                {d.desc.map((p, i) => (
                  <p key={i} className="text-[13px] text-slate-500 leading-relaxed">{p}</p>
                ))}
              </div>
              <a href={d.siteHref}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium hover:underline"
                style={{ color: d.color }}>
                <ArrowRight className="w-3.5 h-3.5" /> {d.siteLabel}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-[15px] font-medium text-slate-900 mb-1">Vraag of samenwerking?</div>
          <div className="text-[12px] text-slate-500">Stuur ons een bericht via het contactformulier.</div>
        </div>
        <Link href="/contact" className="shrink-0 bg-slate-900 text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors">
          Contact opnemen
        </Link>
      </div>
    </div>
  )
}
