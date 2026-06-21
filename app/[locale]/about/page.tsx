import type { Metadata } from "next"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "About DESHold — Building Businesses Through Technology",
  description: "DESHold is a European business group based in Dordrecht, operating across mobility, technology, e-commerce and property.",
}

export default async function AboutPage() {
  const t = await getTranslations("About")

  const arms = [
    { name: t("arm1_name"), tag: t("arm1_tag"), desc: t("arm1_desc"), color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: t("arm2_name"), tag: t("arm2_tag"), desc: t("arm2_desc"), color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: t("arm3_name"), tag: t("arm3_tag"), desc: t("arm3_desc"), color: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: t("arm4_name"), tag: t("arm4_tag"), desc: t("arm4_desc"), color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: t("arm5_name"), tag: t("arm5_tag"), desc: t("arm5_desc"), color: "bg-slate-100 text-slate-700 border-slate-200" },
  ]

  const stats = [
    { val: "4+",  label: t("stat_units") },
    { val: "23+", label: t("stat_experience") },
    { val: "5",   label: t("stat_markets") },
    { val: "1",   label: t("stat_platform") },
  ]

  const facts = [
    { label: t("fact_founded"), value: "2025" },
    { label: t("fact_hq"),      value: "Dordrecht, Netherlands" },
    { label: t("fact_markets"), value: "NL · BE · DE · FR · TR" },
    { label: t("fact_stack"),   value: "Next.js · Supabase · AI" },
    { label: t("fact_infra"),   value: "Own VPS · DES BOP platform" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3">{t("eyebrow")}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl">
            {t("headline")}
          </h1>
          <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">
            {t("subline")}
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
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">{t("story_eyebrow")}</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t("story_heading")}</h2>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">{t("story_p1")}</p>
            <p className="text-[14px] text-slate-600 leading-relaxed mb-4">{t("story_p2")}</p>
            <p className="text-[14px] text-slate-600 leading-relaxed">{t("story_p3")}</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">{t("facts_heading")}</div>
            {facts.map(r => (
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
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3 text-center">{t("arms_eyebrow")}</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t("arms_heading")}</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("cta_heading")}</h2>
            <p className="text-slate-400 text-[14px]">{t("cta_sub")}</p>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-white text-slate-900 text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
            {t("cta_button")}
          </Link>
        </div>
      </section>
    </>
  )
}
