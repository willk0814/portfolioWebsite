
import { Noto_Sans_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Footer from './components/layoutComponents/homeLayout/Footer';
import SecondFooter from './components/layoutComponents/secondaryLayout/SecondaryFooter';

const noto = Noto_Sans_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Will Koenig",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
