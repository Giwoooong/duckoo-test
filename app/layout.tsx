import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";
import KakaoInit from "./KakaoInit";
import { ToastProvider } from "./Toast";

export const metadata: Metadata = {
  title: "덕후테스트",
  description: "최애 작품 덕력을 증명하세요!",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "sHd9GFy0lNlMXxdvDJOSMaC_-6tsoCFHSnyAOhwCrPg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8FRKH2L3HB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8FRKH2L3HB');
          `}
        </Script>
        <ToastProvider>
          <KakaoInit />
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
