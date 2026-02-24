"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { MessageCircle, Twitter, Link as LinkIcon, Sparkles } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const shareTitle = "덕후테스트";
  // For global share, the URL might need to be the homepage or the current page
  // Let's make it the current page for now, as it's more dynamic.
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://duckootest.com'; // Fallback URL

  const handleKakaoShare = () => {
    alert("카카오톡 공유 기능은 구현 예정입니다.");
    // TODO: Implement Kakao Share API
    // Example: Kakao.Share.sendDefault({ objectType: 'feed', content: { title: shareTitle, imageUrl: '...', link: { mobileWebUrl: shareUrl, webUrl: shareUrl } } });
  };

  const handleTwitterShare = () => {
    alert("트위터 공유 기능은 구현 예정입니다.");
    // TODO: Implement Twitter Share API
    // Example: window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("링크가 클립보드에 복사되었습니다.");
  };

  return (
    <header className="topbar glass-header">
      <Link href="/" className="brand">
        <Sparkles className="brand-icon" size={24} />
        <span className="brand-text">덕후테스트</span>
      </Link>
      <nav className="navLinks">
        <button className="iconButton kakao" onClick={handleKakaoShare} aria-label="카카오톡 공유">
           <MessageCircle size={20} />
        </button>
        <button className="iconButton x" onClick={handleTwitterShare} aria-label="X 공유">
           <Twitter size={20} />
        </button>
        <button className="iconButton copy-link" onClick={handleCopyLink} aria-label="링크 복사">
           <LinkIcon size={20} />
        </button>
      </nav>
    </header>
  );
}
