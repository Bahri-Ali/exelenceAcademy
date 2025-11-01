
import type React from "react"

import { Suspense } from "react"





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={``}>
        <Suspense fallback={null}>{children}</Suspense>

      </body>
    </html>
  )
}
