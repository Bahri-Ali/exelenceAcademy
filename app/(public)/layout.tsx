import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from './home/nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'devsForFun opensource frontend template',
  description: 'devsForFun opensource frontend template',
  icons: {
    icon: '/favicon.ico',
  },
};
import i18n from '../in18/i18n';
import Footer from './home/foter';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="bg-(--mainBackground)"
      lang={i18n.language}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
