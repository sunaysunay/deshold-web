"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { MapPin, Mail, MessageCircle, Globe, Clock, ArrowRight, CheckCircle, Car, Cpu, ShoppingBag } from "lucide-react"

export default function ContactPage() {
  const t = useTranslations("Contact")
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const routes = [
    { dot: "bg-[#1D9E75]", label: t("route1_label"), sub: t("route1_sub"), href: "https://descampers.com", Icon: Car },
    { dot: "bg-[#7F77DD]", label: t("route2_label"), sub: t("route2_sub"), href: "https://dessystems.io",  Icon: Cpu },
    { dot: "bg-[#EF9F27]", label: t("route3_label"), sub: t("route3_sub"), href: "https://desshop.nl",     Icon: ShoppingBag },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      })
      if (!res.ok) throw new Error(t("err_failed"))
      setSent(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t("err_generic"))
    }
    setSending(false)
  }

  return (
    <div className="max-w-6xl mx-auto px-5 pt-32 pb-16">
      <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-2">{t("eyebrow")}</p>
      <h1 className="text-[22px] font-medium text-slate-900 mb-1">{t("title")}</h1>
      <p className="text-[12px] text-slate-500 mb-8 max-w-lg leading-relaxed">
        {t("form_subtitle")}
      </p>

      <div className="grid md:grid-cols-[1fr_280px] gap-0 border border-slate-200 rounded-xl overflow-hidden">
        {/* Form side */}
        <div className="p-6 border-r border-slate-200">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
              <CheckCircle className="w-12 h-12 text-[#1D9E75]" />
              <div className="text-[17px] font-medium text-slate-900">{t("sent_title")}</div>
              <div className="text-[13px] text-slate-500 max-w-xs">
                {t("sent_desc")}
              </div>
              <button onClick={() => { setSent(false); setForm({ firstName:"", lastName:"", email:"", phone:"", message:"" }) }}
                className="text-[12px] text-[#1D9E75] hover:underline mt-2">{t("send_another")}</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label={t("firstname")}>
                  <input required value={form.firstName} onChange={e => setForm(p=>({...p,firstName:e.target.value}))}
                    className={INPUT} />
                </Field>
                <Field label={t("lastname")}>
                  <input required value={form.lastName} onChange={e => setForm(p=>({...p,lastName:e.target.value}))}
                    className={INPUT} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label={t("email")}>
                  <input required type="email" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))}
                    className={INPUT} />
                </Field>
                <Field label={t("phone")}>
                  <input type="tel" value={form.phone} onChange={e => setForm(p=>({...p,phone:e.target.value}))}
                    className={INPUT} />
                </Field>
              </div>
              <Field label={t("message")} className="mb-4">
                <textarea required value={form.message} onChange={e => setForm(p=>({...p,message:e.target.value}))}
                  placeholder={t("message_placeholder")}
                  rows={4} className={INPUT + " resize-none"} />
              </Field>

              {error && <p className="text-[12px] text-red-600 mb-3">{error}</p>}

              <button type="submit" disabled={sending}
                className="w-full bg-slate-900 text-white text-[13px] font-medium py-2.5 rounded-lg hover:bg-slate-700 disabled:opacity-50 transition-colors">
                {sending ? t("sending") : t("submit")}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 leading-relaxed">
                {t("privacy_note")} <span className="underline">{t("privacy_link")}</span>.
              </p>
            </form>
          )}
        </div>

        {/* Info sidebar */}
        <div className="bg-slate-50/80 p-5 flex flex-col gap-5">
          {/* Contact details */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">{t("contact_info")}</div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-2.5">
              {[
                { Icon: MapPin,        text: t("address") },
                { Icon: Mail,          text: "info@dessystems.io" },
                { Icon: MessageCircle, text: t("whatsapp") },
                { Icon: Globe,         text: "deshold.com" },
              ].map(r => (
                <div key={r.text} className="flex items-start gap-2.5">
                  <r.Icon className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span className="text-[12px] text-slate-600 whitespace-pre-line leading-relaxed">{r.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Division routing */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">{t("routing_title")}</div>
            <div className="bg-white border border-slate-200 rounded-lg p-2">
              {routes.map(r => (
                <a key={r.label} href={r.href}
                  className="flex items-center gap-3 px-2.5 py-2 rounded-md hover:bg-slate-50 transition-colors group">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${r.dot}`} />
                  <div className="flex-1">
                    <div className="text-[12px] font-medium text-slate-900">{r.label}</div>
                    <div className="text-[11px] text-slate-400">{r.sub}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Response time */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">{t("response_time")}</div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1D9E75] shrink-0" />
              <div>
                <div className="text-[12px] font-semibold text-slate-900">{t("response_val")}</div>
                <div className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  {t("response_sub")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const INPUT = "w-full border border-slate-200 rounded-lg px-3 py-2 text-[13px] text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/30 focus:border-[#1D9E75] placeholder:text-slate-300"

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-[0.04em] mb-1.5">{label}</label>
      {children}
    </div>
  )
}
