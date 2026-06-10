import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Businesses — DESHold",
  description: "Explore DESHold's portfolio of businesses across mobility, technology, e-commerce and property in Europe.",
}

const businesses = [
  {
    name: "Campers",
    tagline: "Used campers and caravans, bought and sold across Europe.",
    desc: "DES Campers is an active trader of quality used campers and caravans operating in the Netherlands, Belgium, and Germany. We source, inspect, and sell vehicles through our own listings, classifieds platforms, and rental fleet.",
    markets: ["NL", "BE", "DE"],
    category: "Mobility",
    href: "https://descampers.com",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    catColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Mobil",
    tagline: "Automotive trading across the Netherlands and Europe.",
    desc: "DES Mobil focuses on broader automotive trade, sourcing and selling vehicles with a focus on quality and transparency. Listings managed through DES BOP.",
    markets: ["NL", "EU"],
    category: "Mobility",
    href: "https://desmobil.com",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    catColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    name: "Systems",
    tagline: "SAP consultancy and enterprise technology services.",
    desc: "DES Systems delivers SAP ERP implementations and support (MM, WM, EWM, SD modules) and builds proprietary software solutions. Our flagship product — DES BOP — powers the entire DESHold group.",
    markets: ["NL", "DE", "TR", "Remote"],
    category: "Technology",
    href: "https://dessystems.io",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    catColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    name: "Shop",
    tagline: "Outdoor and camper accessories, shipped across Europe.",
    desc: "desshop.nl is our e-commerce brand selling outdoor gear, camper accessories, and lifestyle products. Fully integrated with DES BOP for inventory, orders, and fulfilment.",
    markets: ["NL", "BE", "DE", "FR"],
    category: "E-Commerce",
    href: "https://desshop.nl",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    catColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
]

export default function BusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-xl">
            Different Businesses.<br />One Vision.
          </h1>
          <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">
            Each DESHold company operates independently but shares the same infrastructure, platform, and
            ambition: to lead its market through technology.
          </p>
        </div>
      </section>

      {/* Business grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {businesses.map(b => (
              <div key={b.name} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <img src={b.img} alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${b.catColor}`}>
                      {b.category}
                    </span>
                    <div className="flex gap-1.5">
                      {b.markets.map(m => (
                        <span key={m} className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-[18px] font-bold text-slate-900 mb-1">{b.name}</h2>
                  <p className="text-[13px] text-blue-600 font-medium mb-3">{b.tagline}</p>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-5">{b.desc}</p>
                  <a href={b.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    Visit Site <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform banner */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Shared Infrastructure</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">All Businesses Run on DES Platform</h2>
          <p className="text-[14px] text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Every company in our group shares one platform — DES BOP — for leads, invoicing, listings, analytics,
            and AI automation. This is our competitive moat: built in-house, owned outright, and improving every week.
          </p>
          <Link href="/platform"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Explore DES Platform →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Interested in a partnership or acquisition?</h2>
            <p className="text-slate-400 text-[14px]">We're open to conversations about new ventures.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-white text-slate-900 text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
            Talk to Us →
          </Link>
        </div>
      </section>
    </>
  )
}
