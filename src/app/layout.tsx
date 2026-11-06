import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Head from "next/head"; // Importar o componente Head
import Script from "next/script"; // Importar o componente Script
import "./globals.css";
import "@/styles/nprogress.css"; // Import the spinner CSS

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PopupWidget from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtSystem",
  description: "ArtSystem - Soluções em tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17079257379"
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div id="spinner-overlay" className="spinner-overlay">
            <div className="spinner"></div>
          </div>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>

        {/* Script de inicialização do Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17079257379');
          `}
        </Script>

        {/* Script para ocultar o spinner */}
        <Script id="spinner" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              document.getElementById('spinner-overlay').style.display = 'none';
            });
          `}
        </Script>
      </body>
    </html>
  );
}