import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — DESHold",
  description: "Privacy policy for deshold.com in accordance with Dutch AVG / EU GDPR.",
}

const dataTable = [
  ["Contact data", "Name, email, phone, company name", "Responding to inquiries"],
  ["Usage data", "IP, browser type, pages visited", "Analytics, security"],
  ["Transaction data", "Invoice details, payment status, VAT", "Financial administration"],
  ["Communication data", "Contact form messages", "Handling your request"],
  ["Cookie data", "See Cookie Policy", "Analytics, functional operation"],
]

const retentionTable = [
  ["Contact form messages", "2 years from last contact"],
  ["Invoice and financial records", "7 years (Dutch tax law)"],
  ["Analytics/usage data", "13 months (anonymised after)"],
  ["Email correspondence", "2 years from last contact"],
]

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-[13px] text-slate-400 mb-10">Last updated: June 2026 · Dutch AVG / EU GDPR</p>

        <div className="space-y-10 text-[14px] leading-relaxed">

          <Section num="1" title="Who We Are">
            <p className="text-slate-700">
              <strong>Controller:</strong> DESHold B.V., Dordrecht, Netherlands,{" "}
              <a href="mailto:info@deshold.com" className="text-blue-600 hover:underline">info@deshold.com</a>.
            </p>
          </Section>

          <Section num="2" title="What Data We Collect">
            <DataTable headers={["Category", "Data", "Purpose"]} rows={dataTable} />
            <p className="text-slate-500 text-[13px] mt-3">
              We do <strong>not</strong> collect sensitive personal data unless you explicitly provide it.
            </p>
          </Section>

          <Section num="3" title="How We Use Your Data">
            <p className="text-slate-700 mb-3">Legal grounds (AVG Article 6):</p>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              <li><strong>Performance of a contract</strong> (Art. 6(1)(b)): orders, invoices, service agreements.</li>
              <li><strong>Legitimate interests</strong> (Art. 6(1)(f)): improving our website, preventing fraud.</li>
              <li><strong>Legal obligation</strong> (Art. 6(1)(c)): VAT administration — required for 7 years.</li>
              <li><strong>Consent</strong> (Art. 6(1)(a)): marketing emails, analytics cookies.</li>
            </ul>
          </Section>

          <Section num="4" title="How Long We Keep Your Data">
            <DataTable headers={["Data type", "Retention period"]} rows={retentionTable} />
          </Section>

          <Section num="5" title="Who We Share Data With">
            <p className="text-slate-700 mb-3">
              We do not sell your data. Processors include: Hetzner (hosting), Supabase (database),
              Resend (email), Mollie (payments). All bound by data processing agreements.
              We share data with tax authorities when required by Dutch or EU law. No data is shared
              for advertising or profiling.
            </p>
          </Section>

          <Section num="6" title="Cookies">
            <p className="text-slate-700">
              See our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </p>
          </Section>

          <Section num="7" title="Your Rights (AVG Article 15-22)">
            <p className="text-slate-700 mb-3">
              You have the right to access, rectify, erase, restrict, port, and object to our processing,
              and to withdraw consent at any time.
            </p>
            <p className="text-slate-700">
              Contact us at <a href="mailto:info@deshold.com" className="text-blue-600 hover:underline">info@deshold.com</a> —
              we respond within 30 days. You may also complain to the <strong>Autoriteit Persoonsgegevens</strong>.
            </p>
          </Section>

          <Section num="8" title="Security">
            <p className="text-slate-700">
              Our platform is hosted on a secured VPS with environment separation, access control,
              and encrypted data transmission (HTTPS).
            </p>
          </Section>

          <Section num="9" title="Changes to This Policy">
            <p className="text-slate-700">
              We may update this policy. The date at the top reflects the most recent version.
            </p>
          </Section>

          <Section num="10" title="Contact">
            <p className="text-slate-700">
              <strong>DESHold B.V.</strong><br />
              Dordrecht, Netherlands<br />
              <a href="mailto:info@deshold.com" className="text-blue-600 hover:underline">info@deshold.com</a>
            </p>
          </Section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
          <Link href="/terms" className="text-[13px] text-blue-600 hover:underline">Terms of Service</Link>
          <Link href="/cookies" className="text-[13px] text-blue-600 hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">
        {num}. {title}
      </h2>
      {children}
    </section>
  )
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px] border-collapse">
        <thead>
          <tr className="bg-slate-50">
            {headers.map(h => (
              <th key={h} className="text-left px-4 py-2.5 font-semibold text-slate-700 border border-slate-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 border border-slate-200 ${j === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
