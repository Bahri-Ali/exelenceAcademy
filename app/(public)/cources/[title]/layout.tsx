
import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"


// whene I satart work whith the API and get the id of cource user selected then chnage the title and Description
export const metadata: Metadata = {
  title: "دورة إتقان القرآن الكريم",
  description: "تعلم تلاوة القرآن الكريم بالتجويد الصحيح",
}

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
