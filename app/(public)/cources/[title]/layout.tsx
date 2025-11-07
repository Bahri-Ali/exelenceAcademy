import type React from 'react';
import type { Metadata } from 'next';

import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'دورة إتقان القرآن الكريم',
  description: 'تعلم تلاوة القرآن الكريم بالتجويد الصحيح',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
