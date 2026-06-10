import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — DESHold",
  description: "Terms of service for deshold.com and DESHold group websites.",
}

const sections = [
  {
    title: "About DESHold",
    body: `DESHold B.V. ("DESHold", "we", "us") operates deshold.com and other group websites. These terms apply to your use of our websites and any services described on them.

By visiting or using our websites, you agree to these terms. If you do not agree, please do not use our websites.`,
  },
  {
    title: "Use of Our Websites",
    body: `You may use our websites for lawful purposes only. You agree not to:

• Use our websites in any way that violates applicable Dutch or EU law
• Attempt to gain unauthorised access to any part of our systems
• Transmit spam, malicious code, or automated queries without permission
• Reproduce or redistribute our content without written permission
• Misrepresent yourself or your organisation when contacting us

We reserve the right to restrict or terminate access at any time if we believe you are in breach of these terms.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on DESHold websites — including text, images, logos, platform screenshots, and design — is the property of DESHold B.V. or its affiliates, protected by Dutch and EU intellectual property law.

The DESHold name, DES Platform, DES BOP, and associated brand marks are proprietary to DESHold B.V.`,
  },
  {
    title: "Information Accuracy",
    body: `We aim to keep information accurate and up to date. However, we make no warranties regarding the completeness, accuracy, or reliability of any content.

Prices, availability, and business details are subject to change without notice. Always confirm details directly with the relevant DESHold business before making a decision.`,
  },
  {
    title: "Third-Party Links",
    body: `Our websites contain links to third-party websites (e.g. descampers.com, dessystems.io, desshop.nl, desmobil.com). These are operated independently and have their own terms and privacy policies. DESHold is not responsible for third-party content or practices.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the extent permitted by Dutch law, DESHold B.V. is not liable for:

• Any indirect, incidental, or consequential damages arising from use of our websites
• Loss of data, revenue, or business arising from technical errors or unavailability
• Actions taken based on content found on our websites

Our total liability for any direct damages shall not exceed €100.`,
  },
  {
    title: "Privacy",
    body: `Your use of our websites is also governed by our Privacy Policy. By using our websites, you consent to the data practices described there.`,
  },
  {
    title: "Applicable Law and Disputes",
    body: `These terms are governed by Dutch law (Nederlands recht). Any disputes shall be submitted to the competent court in Rotterdam, Netherlands, unless otherwise required by mandatory consumer protection law.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these terms at any time. The updated version will be published at deshold.com/terms with a revised "last updated" date. Continued use constitutes acceptance of the revised terms.`,
  },
  {
    title: "Contact",
    body: `DESHold B.V.\nDordrecht, Netherlands\nEmail: info@deshold.com`,
  },
]

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-[13px] text-slate-400 mb-10">Last updated: June 2026 · Governing law: Nederlands recht</p>

        <div className="space-y-10 text-[14px] leading-relaxed">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber-600 mb-3">
                {i + 1}. {s.title}
              </h2>
              <div className="text-slate-700 whitespace-pre-line">{s.body}</div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-[13px] text-blue-600 hover:underline">Privacy Policy</Link>
          <Link href="/cookies" className="text-[13px] text-blue-600 hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
