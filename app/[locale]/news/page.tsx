import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "News & Insights — DESHold",
  description: "Updates, announcements, and insights from the DESHold group — across mobility, technology, e-commerce, and more.",
}

const POSTS = [
  {
    slug: "deshold-dordrecht-base",
    category: "Company",
    date: "May 10, 2025",
    title: "DESHold Opens New Roosendaal Base",
    excerpt: "Our Roosendaal commercial property is now fully operational — with an indoor floor, outdoor lot, and office. This is the physical foundation from which our Campers, Mobil, and platform team operate.",
    img: "/images/hq-news.jpg",
    catColor: "bg-blue-50 text-blue-700",
  },
  {
    slug: "des-platform-analytics-module",
    category: "Platform",
    date: "May 2, 2025",
    title: "Platform — New Analytics Module Live",
    excerpt: "The latest BOP release ships a real-time P&L dashboard and BTW aangifte module. Every DESHold business now has instant visibility into margin, revenue, and VAT position — without opening a spreadsheet.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    catColor: "bg-purple-50 text-purple-700",
  },
  {
    slug: "descampers-european-expansion",
    category: "Mobility",
    date: "April 25, 2025",
    title: "Campers Expands into German and Belgian Markets",
    excerpt: "Following a year of trading in the Netherlands, our Campers division is now sourcing and selling across Germany and Belgium. Multi-currency listings, multilingual invoicing, and cross-border logistics are all handled through BOP.",
    img: "/images/campers-news.jpg",
    catColor: "bg-emerald-50 text-emerald-700",
  },
  {
    slug: "mollie-payment-integration",
    category: "Platform",
    date: "March 14, 2025",
    title: "Mollie Payment Integration — Automated from Link to Invoice",
    excerpt: "BOP now generates Mollie payment links, tracks webhook events, and automatically updates invoice status — no manual follow-up required.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    catColor: "bg-purple-50 text-purple-700",
  },
  {
    slug: "why-we-built-des-bop",
    category: "Technology",
    date: "February 20, 2025",
    title: "Why We Built Our Own Business Platform Instead of Buying One",
    excerpt: "SaaS tools are someone else's advantage. We explain why DESHold invests in proprietary infrastructure and what it means for the businesses we run.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    catColor: "bg-blue-50 text-blue-700",
  },
  {
    slug: "desshop-launch",
    category: "E-Commerce",
    date: "January 8, 2025",
    title: "Shop Launches Outdoor & Camper Accessories",
    excerpt: "desshop.nl is live — our e-commerce brand for outdoor enthusiasts and camper owners. Shipping to NL, BE, DE, and FR with inventory fully managed through BOP.",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    catColor: "bg-amber-50 text-amber-700",
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3">News & Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            What's Happening at DESHold
          </h1>
          <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">
            Updates from across the group — new businesses, platform releases, market moves, and our thinking
            on European trade and technology.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map(p => (
              <div key={p.slug} className="group cursor-pointer flex flex-col">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${p.catColor}`}>
                    {p.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">{p.date}</p>
                <h2 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h2>
                <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3 flex-1">{p.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
