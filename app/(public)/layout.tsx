
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from './home/nav';
import i18n from '../in18/i18n';
import Footer from './home/foter';
import { homeMetadata } from '@/lib/metadata/home';


export const metadata = homeMetadata;
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});




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