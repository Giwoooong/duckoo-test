"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <p className="footer-text">&copy; {new Date().getFullYear()} 덕후테스트(DUCKOO TEST). All rights reserved.</p>
        <nav className="footer-nav">
          <Link href="/about">서비스 소개</Link>
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/contact">제휴 및 문의하기</Link>
        </nav>
      </div>
    </footer>
  );
}
