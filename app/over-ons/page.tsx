import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Over Ons — DES Group",
  description: "DES Group is een Nederlandse ondernemersgroep opgericht vanuit een IT-achtergrond met de visie traditionele sectoren slimmer te laten draaien door technologie.",
}

const values = [
  { title: "Integriteit",    desc: "Wij doen zaken met eerlijkheid en transparantie als basis." },
  { title: "Excellentie",    desc: "Wij streven naar de hoogste standaard in alles wat we doen." },
  { title: "Innovatie",      desc: "Wij omarmen verandering en investeren in toekomstige oplossingen." },
  { title: "Samenwerking",   desc: "Wij groeien samen met onze klanten en partners." },
]

export default function OverOnsPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 space-y-16">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 items-center border-b border-slate-200 pb-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-3">Over DES Group</p>
          <h1 className="text-[26px] font-medium text-slate-900 mb-5 leading-snug">Ondernemen met een IT-voorsprong</h1>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            DES Group is opgericht vanuit een IT-achtergrond met een duidelijke visie: traditionele sectoren zoals
            voertuigenhandel en retail slimmer laten draaien door technologie.
          </p>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            Onze eigen systemen geven ons een informatievoordeel dat concurrenten niet hebben. Van AI-gestuurde
            voertuigselectie tot een volledig geïntegreerd CRM en e-commerce platform — alles gebouwd en beheerd in-house.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="text-[11px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-4">Kernfeiten</div>
          {[
            { label: "Opgericht",        value: "2024" },
            { label: "Vestiging",        value: "Nederland" },
            { label: "Actieve markten",  value: "15+ Europese landen" },
            { label: "Technologiestack", value: "Next.js · Supabase · AI-tooling" },
            { label: "Infrastructuur",   value: "Eigen VPS · DES BOP platform" },
            { label: "KvK",              value: "Geregistreerd" },
          ].map(r => (
            <div key={r.label} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
              <span className="text-[12px] text-slate-500">{r.label}</span>
              <span className="text-[12px] font-medium text-slate-900">{r.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div>
        <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-slate-400 mb-3">Onze waarden</p>
        <h2 className="text-[20px] font-medium text-slate-900 mb-8">Wat ons drijft</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map(v => (
            <div key={v.title} className="border border-slate-200 rounded-xl p-5">
              <CheckCircle className="w-5 h-5 text-[#1D9E75] mb-3" />
              <div className="text-[14px] font-semibold text-slate-900 mb-2">{v.title}</div>
              <p className="text-[12px] text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 rounded-2xl p-8 text-center">
        <h2 className="text-[20px] font-medium text-white mb-3">Wilt u meer weten over DES Group?</h2>
        <p className="text-[13px] text-slate-400 mb-6">Neem contact op en wij beantwoorden graag uw vragen.</p>
        <Link href="/contact" className="inline-flex bg-white text-slate-900 text-[13px] font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
          Contact opnemen
        </Link>
      </div>
    </div>
  )
}
