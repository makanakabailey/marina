import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marina Convention Center - Harare | Premier Event Venue',
  description: 'Harare\'s premier convention center at Locheng Plaza. World-class event spaces, exceptional dining, and entertainment for conferences, weddings, and corporate events.',
  icons: {
    icon: '/marina-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
