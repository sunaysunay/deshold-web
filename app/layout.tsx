import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "DESHold — Building Businesses Through Technology",
  description: "DESHold is a European business group operating in vehicle trading, e-commerce and IT consultancy. Powered by our proprietary DES Business Operating Platform.",
  keywords: "DESHold, DES Group, DES Campers, DES Cars, DES IT, DES Shop, business group, Netherlands, Europe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deshold.com",
    siteName: "DESHold",
    title: "DESHold — Building Businesses Through Technology",
    description: "European business group operating in vehicle trading, e-commerce and IT consultancy.",
    images: [{ url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
