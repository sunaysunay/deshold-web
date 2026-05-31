"use client"
import { useState } from "react"
import { Car, Terminal, ShoppingCart, MapPin, Mail, MessageCircle, Globe, Clock, ArrowRight, CheckCircle } from "lucide-react"

type Division = "cars" | "it" | "shop"

const topics: { id: Division; Icon: React.ElementType; label: string; sub: string; iconBg: string; iconFg: string }[] = [
  { id: "cars",  Icon: Car,           label: "DES Cars",  sub: "Voertuig kopen / verkopen", iconBg: "bg-[#E1F5EE]", iconFg: "text-[#0F6E56]" },
  { id: "it",    Icon: Terminal,      label: "DES IT",    sub: "IT / automatisering",        iconBg: "bg-[#EEEDFE]", iconFg: "text-[#534AB7]" },
  { id: "shop",  Icon: ShoppingCart,  label: "DES Shop",  sub: "Bestelling / product",       iconBg: "bg-[#FAEEDA]", iconFg: "text-[#854F0B]" },
]

const routes = [
  { dot: "bg-[#1D9E75]",  label: "DES Cars",  sub: "descampers.com · aanbod bekijken",   href: "https://descampers.com" },
  { dot: "bg-[#7F77DD]",  label: "DES IT",    sub: "des-it.eu · offerte aanvragen",       href: "/divisies#it" },
  { dot: "bg-[#EF9F27]",  label: "DES Shop",  sub: "desshop.nl · producten bekijken",    href: "https://desshop.nl" },
]

export default function ContactPage() {
  const [division, setDivision] = useState<Division>("cars")
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, division }),
      })
      if (!res.ok) throw new Error("Versturen mislukt")
      setSent(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Er ging iets fout")
    }
    setSending(false)
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <p className="text-[11px] font-semibold tracking-[0.07em] uppercase text-[#1D9E75] mb-2">Contact</p>
      <h1 className="text-[22px] font-medium text-slate-900 mb-1">Hoe kunnen wij u helpen?</h1>
      <p className="text-[12px] text-slate-500 mb-8 max-w-lg leading-relaxed">
        Kies het onderwerp dat bij uw vraag past. Zo kunnen wij uw bericht direct doorsturen naar de juiste divisie.
      </p>

      <div className="grid md:grid-cols-[1fr_280px] gap-0 border border-slate-200 rounded-xl overflow-hidden">
        {/* Form side */}
        <div className="p-6 border-r border-slate-200">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
              <CheckCircle className="w-12 h-12 text-[#1D9E75]" />
              <div className="text-[17px] font-medium text-slate-900">Bericht verzonden!</div>
              <div className="text-[13px] text-slate-500 max-w-xs">
                Wij hebben uw bericht ontvangen en reageren doorgaans binnen één werkdag.
              </div>
              <button onClick={() => { setSent(false); setForm({ firstName:"", lastName:"", email:"", phone:"", message:"" }) }}
                className="text-[12px] text-[#1D9E75] hover:underline mt-2">Nog een vraag sturen</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Topic selector */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {topics.map(t => (
                  <button key={t.id} type="button" onClick={() => setDivision(t.id)}
                    className={`border rounded-lg p-3 text-left transition-all ${
                      division === t.id
                        ? "border-[#1D9E75] border-[1.5px] bg-[#E1F5EE]/40"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}>
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center mb-2 ${t.iconBg}`}>
                      <t.Icon className={`w-4 h-4 ${division === t.id ? t.iconFg : "text-slate-400"}`} />
                    </div>
                    <div className="text-[11px] font-semibold text-slate-900">{t.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{t.sub}</div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label="Voornaam">
                  <input required value={form.firstName} onChange={e => setForm(p=>({...p,firstName:e.target.value}))}
                    placeholder="Jan" className={INPUT} />
                </Field>
                <Field label="Achternaam">
                  <input required value={form.lastName} onChange={e => setForm(p=>({...p,lastName:e.target.value}))}
                    placeholder="de Vries" className={INPUT} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label="E-mailadres">
                  <input required type="email" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))}
                    placeholder="jan@bedrijf.nl" className={INPUT} />
                </Field>
                <Field label="Telefoon (optioneel)">
                  <input type="tel" value={form.phone} onChange={e => setForm(p=>({...p,phone:e.target.value}))}
                    placeholder="+31 6 ··· ···" className={INPUT} />
                </Field>
              </div>
              <Field label="Uw vraag of bericht" className="mb-4">
                <textarea required value={form.message} onChange={e => setForm(p=>({...p,message:e.target.value}))}
                  placeholder="Beschrijf zo concreet mogelijk wat u zoekt of nodig heeft..."
                  rows={4} className={INPUT + " resize-none"} />
              </Field>

              {error && <p className="text-[12px] text-red-600 mb-3">{error}</p>}

              <button type="submit" disabled={sending}
                className="w-full bg-slate-900 text-white text-[13px] font-medium py-2.5 rounded-lg hover:bg-slate-700 disabled:opacity-50 transition-colors">
                {sending ? "Bezig met verzenden…" : "Verstuur bericht"}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 leading-relaxed">
                Uw gegevens worden alleen gebruikt om uw vraag te beantwoorden. Zie onze <span className="underline">privacyverklaring</span>.
              </p>
            </form>
          )}
        </div>

        {/* Info sidebar */}
        <div className="bg-slate-50/80 p-5 flex flex-col gap-5">
          {/* Contact details */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">Contactgegevens</div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-2.5">
              {[
                { Icon: MapPin,          text: "Nederland" },
                { Icon: Mail,            text: "info@desgroup.eu" },
                { Icon: MessageCircle,   text: "WhatsApp beschikbaar\nma–vr 09:00–18:00" },
                { Icon: Globe,           text: "deshold.com" },
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
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">Direct naar de juiste divisie</div>
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
            <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-slate-400 mb-3">Reactietijd</div>
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1D9E75] shrink-0" />
              <div>
                <div className="text-[12px] font-semibold text-slate-900">Binnen 1 werkdag</div>
                <div className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  Wij reageren zo snel mogelijk, doorgaans binnen 24 uur op werkdagen.
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
