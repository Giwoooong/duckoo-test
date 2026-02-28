import type { Metadata } from "next";
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
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
