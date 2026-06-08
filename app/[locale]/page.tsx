import HeroPanels from "@/components/hero-panels"
import Link from "next/link"
import { ArrowRight, Car, Terminal, ShoppingCart, Tent, Bot, Globe, BarChart2, Zap, ShieldCheck, Users } from "lucide-react"

// ── Platform dashboard mockup ─────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl text-xs">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-slate-400 text-[11px]">DES Platform — Dashboard</span>
      </div>
      <div className="flex h-64">
        {/* Sidebar */}
        <div className="w-36 bg-slate-950 border-r border-slate-700/50 p-3 flex flex-col gap-1">
          <div className="text-[10px] font-bold text-slate-400 px-2 mb-2">DES PLATFORM</div>
          {["Dashboard","Leads","Customers","Vehicles","Websites","Listings","Analytics","Settings"].map((item, i) => (
            <div key={item} className={`px-2 py-1.5 rounded text-[10px] ${i === 0 ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-300"}`}>
              {item}
            </div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-4">
          <div className="text-slate-300 text-[11px] mb-3 font-medium">Good Morning, Sunay</div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Total Leads",    val: "1,250", up: "+18.5%" },
              { label: "Active Customers",val: "320",  up: "+8.2%" },
              { label: "Active Deals",   val: "98",    up: "+16.7%" },
              { label: "Revenue (YTD)", val: "€2.4M",  up: "+18.3%" },
            ].map(s => (
              <div key={s.label} className="bg-slate-800/60 rounded-lg p-2.5">
                <div className="text-slate-400 text-[9px] mb-1">{s.label}</div>
                <div className="text-white font-bold text-[13px]">{s.val}</div>
                <div className="text-emerald-400 text-[9px] mt-0.5">{s.up}</div>
              </div>
            ))}
          </div>
          {/* Mini chart bars */}
          <div className="flex items-end gap-1 h-10 mb-2">
            {[4,6,5,8,7,9,10,8,11,9,12,10].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{ height: `${h * 8}%`, background: i === 11 ? "#3B82F6" : "#1e3a5f" }} />
            ))}
          </div>
          <div className="text-slate-500 text-[9px] flex gap-4">
            <span className="text-emerald-400">● New lead from website — 2 min ago</span>
            <span>● Vehicle added: BMW X5 2021 — 15 min ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Businesses ────────────────────────────────────────────────────────────────
const businesses = [
  {
    Icon: Tent, name: "Campers",
    desc: "Campers, Caravans, Outdoor",
    href: "https://descampers.com", label: "Visit Site",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    color: "#1D9E75",
  },
  {
    Icon: Car, name: "Vehicles",
    desc: "Vehicle sourcing, trading and sales across Europe.",
    href: "/businesses#cars", label: "Visit Site",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    color: "#3B82F6",
  },
  {
    Icon: Terminal, name: "IT",
    desc: "IT consultancy, digital solutions and business automation.",
    href: "/businesses#it", label: "Visit Site",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    color: "#8B5CF6",
  },
  {
    Icon: ShoppingCart, name: "Shop",
    desc: "Retail and e-commerce solutions for everyday needs.",
    href: "https://desshop.nl", label: "Visit Site",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
    color: "#F59E0B",
  },
]

// ── Platform features ─────────────────────────────────────────────────────────
const features = [
  { Icon: Users,      title: "Leads & Incident Management",  desc: "Manage leads and customers in one place." },
  { Icon: Globe,      title: "Websites & Listings", desc: "Manage multiple websites and listings seamlessly." },
  { Icon: BarChart2,  title: "Analytics & Reporting",desc: "Real-time insights for better decisions." },
  { Icon: Bot,        title: "Automation",          desc: "Automate workflows and save valuable time." },
  { Icon: Users,      title: "AI | ERP | MES | CRM | DevOps | E-Commerce | Marketing",  desc: "Enterprise Solutions" },
  { Icon: ShieldCheck,title: "Secure & Scalable",   desc: "Enterprise-grade security and scalable infrastructure." },
]

// ── News ──────────────────────────────────────────────────────────────────────
const news = [
  {
    cat: "Company", date: "May 10, 2024",
    title: "DESHold Opens New Headquarters",
    desc: "A new chapter in our growth with a state-of-the-art headquarters in Europe.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    cat: "Platform", date: "May 2, 2024",
    title: "DES Platform — New Analytics Module",
    desc: "Advanced reporting and real-time insights for better business decisions.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    cat: "Business", date: "Apr 25, 2024",
    title: "DES Cars Expands in European Market",
    desc: "Strengthening our presence with new partnerships across key countries.",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
  },
]

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { val: "4+",        label: "Business Units" },
  { val: "15+",       label: "Years Experience" },
  { val: "100+",      label: "Team Members" },
  { val: "1 Platform",label: "Endless Opportunities" },
  { val: "Europe",    label: "Our Focus" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero — full screen expanding panels */}
      <HeroPanels />

      {/* Platform section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">DES Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Our Proprietary<br />Business Operating Platform
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-md">
              DES Platform connects customers, websites, data and operations in one intelligent ecosystem.
              Built to drive growth, efficiency and long-term value across all our businesses.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map(f => (
                <div key={f.title} className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <f.Icon className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-slate-800">{f.title}</div>
                    <div className="text-[11px] text-slate-500 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/platform"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Explore DES Platform <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:pl-8">
            <DashboardMockup />
            <p className="text-center text-[11px] text-slate-400 mt-3">View Platform Features →</p>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-2 text-center">Our Businesses</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">Different Businesses. One Vision.</h2>
          <p className="text-slate-500 text-center mb-12 text-[14px]">We build, operate and grow businesses across multiple industries.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businesses.map(b => (
              <div key={b.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img src={b.img} alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: b.color + "33", border: `1px solid ${b.color}55` }}>
                    <b.Icon className="w-4 h-4" style={{ color: b.color }} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1">{b.name}</h3>

                  <a href={b.href}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold hover:gap-2 transition-all"
                    style={{ color: b.color }}>
                    {b.label} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/businesses"
              className="inline-flex items-center gap-1.5 text-[13px] text-blue-600 font-semibold hover:gap-3 transition-all">
              View All Businesses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-700/50">
            {stats.map(s => (
              <div key={s.label} className="px-6 py-4 text-center">
                <div className="text-[22px] font-bold text-white mb-1">{s.val}</div>
                <div className="text-[11px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-2">News & Insights</p>
              <h2 className="text-3xl font-bold text-slate-900">Latest News & Insights</h2>
            </div>
            <Link href="/news" className="text-[13px] text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map(n => (
              <div key={n.title} className="group cursor-pointer">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img src={n.img} alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {n.cat}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-1">{n.date}</p>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{n.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white/60 text-[12px]">Partner with DES Group</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Build the Future Together</h2>
            <p className="text-slate-400 text-[13px]">We are always open to new partnerships, opportunities and ideas.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 flex items-center gap-2 bg-white text-slate-900 text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
