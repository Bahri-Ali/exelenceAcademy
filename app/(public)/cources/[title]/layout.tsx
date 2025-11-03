
import type React from "react"

import { Suspense } from "react"


import i18n from "@/app/in18/i18n"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={i18n.language} dir={i18n.language==='ar'?'rtl':'ltr'}>
      <body className={``}>
        <Suspense fallback={null}>{children}</Suspense>

      </body>
    </html>
  )
}
