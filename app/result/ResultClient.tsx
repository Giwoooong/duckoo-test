"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import { Download, MessageCircle, Instagram, Twitter, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ReviewItem {
  question: string;
  options: string[];
  answerIndex: number;
  selectedIndex: number | null;
}

interface SavedResult {
  themeId: string;
  themeName: string;
  player: string;
  score: number;
  correct: number;
  rawPoints: number;
  totalPoints: number;
  totalCount: number;
  review: ReviewItem[];
}

const STORAGE_KEY = "duckoo-last-result";

function getRank(score: number, themeId: string): string {
  if (themeId === "lol") {
    if (score <= 15) return "아이언";
    if (score <= 30) return "브론즈";
    if (score <= 45) return "실버";
    if (score <= 60) return "골드";
    if (score <= 75) return "플래티넘";
    if (score <= 85) return "다이아몬드";
    if (score <= 95) return "마스터";
    return "챌린저";
  }

  // Default (One Piece)
  if (score <= 30) return "입문 항해사";
  if (score <= 60) return "위대한 항로 루키";
  if (score <= 85) return "신세계 정예";
  return "해적왕급 마스터";
}

export default function ResultClient() {
  const [result, setResult] = useState<SavedResult | null>(null);
  const [loaded, setLoaded] = useState(false);
  const searchParams = useSearchParams();
  const themeId = searchParams.get("theme") ?? "onepiece";
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setLoaded(true);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as SavedResult;
      if (parsed.themeId === themeId) {
        setResult(parsed);
      }
    } catch {
      setResult(null);
    }

    setLoaded(true);
  }, [themeId]);

  const wrongAnswers = useMemo(() => {
    if (!result) return [];
    return result.review.filter((item) => item.selectedIndex !== item.answerIndex);
  }, [result]);

  const shareText = result ? `[${result.themeName}] ${result.player} 님은 ${result.score}점 (${getRank(result.score, result.themeId)}) 달성!\n\n내 덕력 확인하기: ${window.location.href}` : "";
  const shareTitle = "덕후테스트 결과";

  const handleDownloadImage = async () => {
    if (!certificateRef.current) return;

    try {
      // Temporarily add a class for specific download styling if needed
      certificateRef.current.classList.add('downloading');

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        backgroundColor: '#ffffff', // Ensure background is solid for download
      });

      certificateRef.current.classList.remove('downloading');

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `duckoo_certificate_${result?.player || 'result'}.png`;
      link.click();
    } catch (error) {
      console.error("인증서 저장 실패:", error);
      alert("이미지 저장 중 오류가 발생했습니다.");
    }
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href,
        });
        console.log("공유 성공!");
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      navigator.clipboard.writeText(`${shareText}`);
      window.alert("링크와 텍스트가 클립보드에 복사되었습니다.");
    }
  };

  const handleKakaoShare = () => {
    window.alert("카카오톡 공유 API 통합이 필요합니다 (현재는 링크를 복사하여 공유해주세요).");
  };

  const handleInstagramShare = () => {
    // IG doesn't have a direct share link. Usually, users download the image and upload.
    window.alert("인스타그램 공유를 위해서는 '인증서 저장' 버튼을 눌러 이미지를 저장한 후 업로드 해주세요.");
  };

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  if (!loaded) return null;

  if (!result) {
    return (
      <div className="shell">
        <main className="panel card-base-styles">
          <div className="quiz-content-wrapper">
            <h1>결과 정보가 없습니다</h1>
            <p className="lead">홈에서 테스트를 다시 시작해주세요.</p>
            <Link href="/" className="startButton">
              홈으로 이동
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="shell result-shell">
      <main className="panel glass result-panel">
        <div className="quiz-content-wrapper result-wrapper">
          <p className="chip">{result.themeName} RESULT</p>
          <h1 className="result-title">덕력 검증 결과</h1>

          <div className="certificate-container">

            <section className="certificate premium-cert" ref={certificateRef}>
              <div className="cert-inner">
                <div className="cert-header">
                  <p className="certLabel">OFFICIAL CERTIFICATE</p>
                  <h2>덕후 인증서</h2>
                </div>

                <div className="cert-body">
                  <div className="cert-info">
                    <span className="info-label">수여자</span>
                    <strong className="info-value">{result.player}</strong>
                  </div>

                  <div className="cert-score-area">
                    <p className="certScore">{result.score}<span>점</span></p>
                    <p className="certRank">{getRank(result.score, result.themeId)}</p>
                  </div>

                  <div className="cert-details">
                    <p>{result.totalCount}문제 중 <strong>{result.correct}</strong>개 정답</p>
                    <p className="detail-points">({result.rawPoints}/{result.totalPoints}점)</p>
                  </div>
                </div>

                <div className="cert-footer" style={{ justifyContent: 'center' }}>
                  <div className="cert-stamp">DUCKOO TEST</div>
                </div>
              </div>
            </section>

            <button type="button" className="downloadButton" onClick={handleDownloadImage}>
              <Download size={20} className="icon-left" />
              인증서 저장하기
            </button>
          </div>

          <div className="share-section">
            <p className="share-prompt">내 덕력 자랑하기</p>
            <div className="share-buttons">
              <button type="button" className="social-btn kakao-btn" onClick={handleKakaoShare} aria-label="카카오톡으로 공유">
                <MessageCircle size={24} />
              </button>
              <button type="button" className="social-btn ig-btn" onClick={handleInstagramShare} aria-label="인스타그램으로 공유">
                <Instagram size={24} />
              </button>
              <button type="button" className="social-btn x-btn" onClick={handleTwitterShare} aria-label="X로 공유">
                <Twitter size={24} />
              </button>
              <button type="button" className="social-btn link-btn" onClick={handleWebShare} aria-label="기타 공유">
                <Share2 size={24} />
              </button>
            </div>
          </div>

          <div className="action-row">
            <Link href={`/test/${themeId}`} className="ghostButton action-btn">
              다시 도전
            </Link>
            <Link href="/" className="startButton action-btn">
              다른 테스트 하기
            </Link>
          </div>

          <section className="reviewSection">
            <h3>오답 노트</h3>
            {wrongAnswers.length === 0 ? (
              <div className="perfect-score card-base-styles">
                <p className="lead">틀린 문제가 없습니다! 완벽한 마스터입니다. 🎉</p>
              </div>
            ) : (
              <ul className="wrong-list">
                {wrongAnswers.map((item, idx) => {
                  const selected = item.selectedIndex === null ? "미응답" : item.options[item.selectedIndex];
                  return (
                    <li key={`${item.question}-${idx}`} className="wrong-item glass">
                      <strong className="wrong-q">Q. {item.question}</strong>
                      <div className="wrong-answers">
                        <div className="your-answer">
                          <span className="label">내가 선택한 답</span>
                          <p className="value incorrect">{selected}</p>
                        </div>
                        <div className="correct-answer">
                          <span className="label">정답</span>
                          <p className="value correct">{item.options[item.answerIndex]}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
