import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy — DESHold",
  description: "Cookie policy for deshold.com and DESHold group websites.",
}

const cookieTable = [
  ["Functional", "Session, language preference", "Required for the website to work", "Session / 1 year", "No"],
  ["Analytics", "Page views, session duration, referrer", "Improve our website", "13 months", "Yes"],
  ["Preferences", "Language, cookie consent", "Remember your choices", "1 year", "No"],
]

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
        <p className="text-[13px] text-slate-400 mb-10">Last updated: June 2026</p>

        <div className="space-y-10 text-[14px] leading-relaxed">

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">1. What Are Cookies</h2>
            <p className="text-slate-700">
              Cookies are small text files stored on your device when you visit a website. They allow us to
              recognise your browser and remember certain information about your visit.
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">2. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    {["Type", "Data stored", "Purpose", "Duration", "Consent required"].map(h => (
                      <th key={h} className="text-left px-4 py-2.5 font-semibold text-slate-700 border border-slate-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row, i) => (
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
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">3. Third-Party Cookies</h2>
            <p className="text-slate-700">
              We may use third-party analytics tools. These tools may set their own cookies and are governed
              by their own privacy policies. We do not use third-party cookies for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">4. Your Choices</h2>
            <p className="text-slate-700 mb-3">
              When you first visit our website, you will be shown a cookie banner allowing you to accept or
              decline non-essential cookies. You can change your preferences at any time by clearing your
              browser cookies and revisiting the site.
            </p>
            <p className="text-slate-700">
              You can also control cookies through your browser settings. Note that disabling cookies may
              affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">5. Legal Basis</h2>
            <p className="text-slate-700">
              Functional cookies are placed on the basis of our <strong>legitimate interest</strong> in operating
              our website. Analytics and preference cookies are placed only with your <strong>consent</strong>
              (AVG Art. 6(1)(a)).
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">6. Contact</h2>
            <p className="text-slate-700">
              Questions about our cookie use?{" "}
              <a href="mailto:info@deshold.com" className="text-blue-600 hover:underline">info@deshold.com</a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-[13px] text-blue-600 hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-[13px] text-blue-600 hover:underline">Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}
