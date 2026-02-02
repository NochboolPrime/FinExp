import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ФинЭксперт — Финансовые решения для бизнеса",
  description:
    "Профессиональные услуги финансирования для крупных компаний. Кредитование, инвестиционный консалтинг, финансовая экспертиза.",
  generator: "v0.app",
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
