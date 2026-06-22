import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import { ThemeProvider } from "@/components/theme-provider"
import '../globals.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='min-h-screen bg-white text-slate-900 antialiased'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange><NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider></ThemeProvider>
      </body>
    </html>
  )
}
