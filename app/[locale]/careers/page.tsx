import type { Metadata } from "next"
import { MapPin, Briefcase, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers at DESHold — Join Us",
  description: "DESHold is a growing European business group. We're looking for builders, operators, and technologists who want to work at the intersection of trade and technology.",
}

const ROLES = [
  {
    title: "Operations & Listings Assistant",
    type: "Freelance / Part-time",
    location: "Dordrecht, NL (on-site preferred)",
    desc: "Help manage vehicle listings across Marktplaats, AutoScout24, and Kleinanzeigen. Inspect incoming stock, coordinate logistics, and assist with customer communication.",
    note: "Dutch required, German is a plus",
    email: "info@desgroup.eu",
  },
  {
    title: "Frontend Developer (Next.js)",
    type: "Freelance / Contract",
    location: "Remote (EU timezone)",
    desc: "Work on DES BOP — our in-house platform — and the public websites of DESHold group companies. You'll build real features used daily by our own team.",
    note: "Next.js · TypeScript · Supabase · Tailwind CSS",
    email: "info@desgroup.eu",
  },
  {
    title: "SAP Consultant (MM / WM / EWM)",
    type: "Freelance / Project-based",
    location: "Remote or on-site (NL / DE / TR)",
    desc: "Join DES Systems for SAP implementation and support engagements with clients across Europe. Relevant experience in logistics modules required.",
    note: "Logistics module experience required",
    email: "info@desgroup.eu",
  },
]

const VALUES = [
  {
    num: "01",
    title: "Ownership over permission.",
    body: "We trust people to make decisions in their domain without asking twice.",
  },
  {
    num: "02",
    title: "Tech as an edge.",
    body: "We build tools because the tools we need don't exist yet — or cost too much.",
  },
  {
    num: "03",
    title: "Operate in reality.",
    body: "We deal in physical goods, real customers, and actual margins. Execution matters.",
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3">Careers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl">
            Build Real Businesses.<br />Use Real Technology.
          </h1>
          <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">
            DESHold is not a big corporation. We're a small, fast group of people running real businesses
            across Europe — and we use technology we built ourselves to do it. If that sounds interesting,
            we want to hear from you.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">What It's Like to Work Here</p>
          <p className="text-[15px] text-slate-700 leading-relaxed mb-4">
            We're based in Dordrecht, operating across the Netherlands, Belgium, Germany, and beyond.
            Our team is small on purpose: we prefer people who take ownership over people who wait for instructions.
          </p>
          <p className="text-[15px] text-slate-700 leading-relaxed">
            You'll work with custom software (DES BOP), real physical operations (vehicle trading, e-commerce),
            and European markets where the details matter. We don't have a lot of layers. Work here makes a
            direct visible difference.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Open Roles</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Currently Hiring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ROLES.map(r => (
              <div key={r.title} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                    {r.type}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-3 leading-snug">{r.title}</h3>
                <div className="flex items-center gap-1.5 text-[12px] text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {r.location}
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed flex-1 mb-4">{r.desc}</p>
                <p className="text-[11px] text-slate-400 mb-5 italic">{r.note}</p>
                <a href={`mailto:${r.email}?subject=Application: ${r.title}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                  Apply <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application CTA */}
      <section className="bg-white py-16 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Don't See a Match?</h2>
            <p className="text-[14px] text-slate-500 max-w-xl leading-relaxed">
              We regularly grow into new areas. If you're a builder, operator, or problem-solver who shares our
              mindset, send us a message. We review all open applications.
            </p>
          </div>
          <a href="mailto:info@desgroup.eu?subject=Open Application"
            className="shrink-0 flex items-center gap-2 bg-slate-900 text-white text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-700 transition-colors">
            Send an Open Application →
          </a>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-400 mb-3 text-center">Our Values</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map(v => (
              <div key={v.num} className="flex gap-5">
                <span className="text-4xl font-bold text-blue-600/40 leading-none shrink-0">{v.num}</span>
                <div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
