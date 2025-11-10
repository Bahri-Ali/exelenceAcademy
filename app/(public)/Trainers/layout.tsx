import type React from "react"
import type { Metadata } from "next"






export const metadata: Metadata = {
  title: "فقم الآن لتصبح مديراً معتمداً | برنامج التطوير المهني",
  description: "انضم إلى برنامج التطوير المهني المعتمد. سجل الآن لتصبح مديراً معتمداً من خلال دورات تدريبية متخصصة.",
  keywords: "برنامج تدريب, مدير معتمد, تطوير مهني, دورات تدريبية",

 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="" />
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
