import HeroPanels from "@/components/hero-panels"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { ArrowRight, Car, Terminal, ShoppingCart, Tent, Bot, Globe, BarChart2, Zap, ShieldCheck, Users } from "lucide-react"



export default async function HomePage() {
  const t = await getTranslations()

  // ── Businesses ──────────────────────────────────────────────────────────────
  const businesses = [
    { Icon: Terminal,     name: "TECH",       href: "/businesses#it",         color: "#8B5CF6",
      img: "/images/tech-card.jpg" },
    { Icon: Car,          name: "Mobil",      href: "https://desmobil.com",   color: "#3B82F6",
      img: "/images/mobil-card.jpg" },
    { Icon: Tent,         name: "Campers",    href: "https://descampers.com", color: "#1D9E75",
      img: "/images/campers-card.jpg" },
    { Icon: ShoppingCart, name: "Shop",       href: "https://desshop.nl",     color: "#F59E0B",
      img: "/images/shop-card.jpg" },
  ]

  // ── Platform features ─────────────────────────────────────────────────────────
  const features = [
    { Icon: Users,       title: t("Platform.crm"),        desc: t("Platform.crm_desc") },
    { Icon: Globe,       title: t("Platform.websites"),   desc: t("Platform.websites_desc") },
    { Icon: BarChart2,   title: t("Platform.analytics"),  desc: t("Platform.analytics_desc") },
    { Icon: Bot,         title: t("Platform.automation"), desc: t("Platform.automation_desc") },
    { Icon: Users,       title: "AI | ERP | MES | CRM | DevOps | E-Commerce | Marketing", desc: t("Platform.enterprise") },
    { Icon: ShieldCheck, title: t("Platform.secure"),     desc: t("Platform.secure_desc") },
  ]

  // ── News ──────────────────────────────────────────────────────────────────────
  const news = [
    { cat: t("News.hq_cat"),       date: "May 10, 2025", title: t("News.hq_title"),       desc: t("News.hq_desc"),
      img: "/images/hq-news.jpg" },
    { cat: t("News.platform_cat"), date: "May 2, 2025",  title: t("News.platform_title"), desc: t("News.platform_desc"),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { cat: t("News.cars_cat"),     date: "Apr 25, 2025", title: t("News.cars_title"),     desc: t("News.cars_desc"),
      img: "/images/campers-news.jpg" },
  ]

  // ── Stats ─────────────────────────────────────────────────────────────────────
  const stats = [
    { val: "4+",         label: t("Stats.units") },
    { val: "15+",        label: t("Stats.experience") },
    { val: "100+",       label: t("Stats.team") },
    { val: "1 Platform", label: t("Stats.platform") },
    { val: "Europe",     label: t("Stats.focus") },
  ]

  return (
    <>
      {/* Hero — full screen expanding panels */}
      <HeroPanels />

      {/* Platform section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">{t("Platform.eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              {t("Platform.title")}
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-md">
              {t("Platform.desc")}
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
            <a href="https://dessystems.io/platform" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              {t("Platform.cta")} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:pl-8">
            <img src="/images/platform-dashboard.jpg" alt="DES Platform Dashboard" className="w-full rounded-xl shadow-2xl border border-slate-200" />
            <p className="text-center text-[11px] text-slate-400 mt-3">{t("Platform.view_features")} →</p>
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-2 text-center">{t("Businesses.eyebrow")}</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">{t("Businesses.title")}</h2>
          <p className="text-slate-500 text-center mb-12 text-[14px]">{t("Businesses.subtitle")}</p>
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
                    {t("Businesses.visit")} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/businesses"
              className="inline-flex items-center gap-1.5 text-[13px] text-blue-600 font-semibold hover:gap-3 transition-all">
              {t("Businesses.view_all")} <ArrowRight className="w-4 h-4" />
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
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-2">{t("News.eyebrow")}</p>
              <h2 className="text-3xl font-bold text-slate-900">{t("News.title")}</h2>
            </div>
            <Link href="/news" className="text-[13px] text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              {t("News.view_all")} <ArrowRight className="w-4 h-4" />
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
              <span className="text-white/60 text-[12px]">{t("CTA.label")}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("CTA.title")}</h2>
            <p className="text-slate-400 text-[13px]">{t("CTA.subtitle")}</p>
          </div>
          <Link href="/contact"
            className="shrink-0 flex items-center gap-2 bg-white text-slate-900 text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
            {t("CTA.button")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
