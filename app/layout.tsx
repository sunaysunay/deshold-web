import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "DES Group — Meerdere businesses. Één groep.",
  description: "DES Group is een Nederlandse ondernemersgroep actief in voertuigenhandel, e-commerce en IT-consultancy. Aangedreven door eigen technologie en AI-tooling.",
  keywords: "DES Group, voertuigenhandel, IT consultancy, e-commerce, campers, DES Cars, DES IT, DES Shop, Nederland",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://deshold.com",
    siteName: "DES Group",
    title: "DES Group — Meerdere businesses. Één groep.",
    description: "Actief in voertuigenhandel, e-commerce en IT-consultancy. Aangedreven door eigen technologie.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
