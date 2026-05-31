import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DESHold — Building Businesses Through Technology',
  description: 'DESHold is a European business group operating in vehicle trading, e-commerce and IT consultancy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
