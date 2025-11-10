import type React from 'react';
import { Suspense } from 'react';
import { coursecMeta } from '@/lib/metadata/cources';
export const metadata = coursecMeta;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
