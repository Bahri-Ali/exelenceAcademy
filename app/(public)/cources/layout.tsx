
import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "منصة الدورات التعليمية - Excellencia",
  description: "منصة تعليمية متخصصة في دورات القرآن الكريم والعلوم الإسلامية",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
