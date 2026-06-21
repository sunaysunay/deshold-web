import type { Metadata } from "next"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { BarChart2, Zap, Globe, Users, ShieldCheck, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: "DES Platform — DES Group",
  description: "DES BOP: ons Business Operating Platform dat alle divisies van DES Group verbindt.",
}

export default async function PlatformPage() {
  const t = await getTranslations("PlatformPage")

  const features = [
    { Icon: Users,       title: t("f1_t"), desc: t("f1_d") },
    { Icon: Globe,       title: t("f2_t"), desc: t("f2_d") },
    { Icon: BarChart2,   title: t("f3_t"), desc: t("f3_d") },
    { Icon: Zap,         title: t("f4_t"), desc: t("f4_d") },
    { Icon: Bot,         title: t("f5_t"), desc: t("f5_d") },
    { Icon: ShieldCheck, title: t("f6_t"), desc: t("f6_d") },
  ]

  const kpis = [
    ["1.250", t("stat1")],
    ["320",   t("stat2")],
    ["98%",   t("stat3")],
    ["€2.4M", t("stat4")],
  ] as const

  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <div className="bg-slate-900 rounded-2xl p-10 mb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-3">{t("eyebrow")}</p>
          <h1 className="text-[28px] font-medium text-white mb-4 leading-snug">
            {t("s_title")}
          </h1>
          <p className="text-[13px] text-slate-400 leading-relaxed mb-6">
            {t("s_desc")}
          </p>
          <Link href="/contact"
            className="inline-flex bg-white text-slate-900 text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors">
            {t("s_cta")}
          </Link>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 grid grid-cols-2 gap-2">
          {kpis.map(([n, l]) => (
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
