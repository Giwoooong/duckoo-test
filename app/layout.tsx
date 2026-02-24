import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer"; // Import the Footer component
import Header from "./Header"; // Import the Header component

export const metadata: Metadata = {
  title: "덕후테스트",
  description: "최애 작품 덕력을 증명하세요!" // Updated description for modern theme
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header /> {/* Render the Header component */}
        {children}
        <Footer /> {/* Render the Footer component */}
      </body>
    </html>
  );
}
