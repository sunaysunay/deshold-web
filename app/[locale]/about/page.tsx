import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About DESHold — Building Businesses Through Technology",
  description: "DESHold is a European business group based in Dordrecht, operating across mobility, technology, e-commerce and property.",
}

const arms = [
  {
    name: "Mobility",
    desc: "Vehicle trading and camper/caravan dealership across NL, BE, DE. Brands: DES Campers, DES Mobil.",
    tag: "Mobility",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Tech",
    desc: "SAP/ERP consultancy and proprietary platform development. Brand: DES Systems.",
    tag: "Technology",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Ventures",
    desc: "E-commerce and digital retail. Brand: DES Shop (desshop.nl).",
    tag: "E-Commerce",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Property",
    desc: "Commercial real estate operations from our Dordrecht base.",
    tag: "Property",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    name: "Capital",
    desc: "Strategic investments and holding activities.",
    tag: "Capital",
    color: "bg-slate-100 text-slate-700 border-slate-200",
  },
]

const stats = [
  { val: "4+",  label: "Business Units" },
  { val: "23+", label: "Years Experience" },
  { val: "5",   label: "European Markets" },
  { val: "1",   label: "Unified Platform" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3">About DESHold</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl">
            One Holding.<br />Five Businesses.<br />One Platform.
          </h1>
          <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">
            DESHold is a Dordrecht-based business group that builds and operates companies at the intersection
            of physical trade and technology. We don't just invest — we build, run, and grow.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500">
            {stats.map(s => (
              <div key={s.label} className="px-6 py-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{s.val}</div>
                <div className="text-[12px] text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How DESHold Started</h2>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
              DESHold grew from a single idea: that operational businesses become more defensible when technology
              is built into them from the start — not bolted on later.
            </p>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
              Founded by Sunay Duman, DESHold began as a vehicle trading operation and evolved into a
              multi-entity group spanning mobility, IT consultancy, e-commerce, and property. Every business
              in the group shares the same proprietary platform: <strong className="text-slate-900">DES BOP</strong> (Business
              Operating Platform) — built in-house to connect leads, listings, invoicing, analytics, and AI
              automation in one system.
            </p>
            <p className="text-[14px] text-slate-600 leading-relaxed">
              We are headquartered in Roosendaal, Netherlands, and operate across the Netherlands, Belgium,
              Germany, France, and Turkey.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">Key Facts</div>
            {[
              { label: "Founded", value: "2025" },
              { label: "Headquarters",   value: "Roosendaal, Netherlands" },
              { label: "Active markets", value: "NL · BE · DE · FR · TR" },
              { label: "Tech stack",     value: "Next.js · Supabase · AI" },
              { label: "Infrastructure", value: "Own VPS · DES BOP platform" },
            ].map(r => (
              <div key={r.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                <span className="text-[13px] text-slate-500">{r.label}</span>
                <span className="text-[13px] font-medium text-slate-900">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arms */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3 text-center">Our Structure</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Five Business Arms</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {arms.map(a => (
              <div key={a.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full border mb-4 ${a.color}`}>
                  {a.tag}
                </span>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{a.name}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to partner or collaborate?</h2>
            <p className="text-slate-400 text-[14px]">We're always open to new opportunities and conversations.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-white text-slate-900 text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
