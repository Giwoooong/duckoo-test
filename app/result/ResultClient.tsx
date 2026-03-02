"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import { Download, MessageCircle, Instagram, Twitter, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { useToast } from '../Toast';

const SITE_URL = "https://duckootest.pages.dev";

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

  if (themeId === "fma") {
    if (score <= 30) return "연금술 입문생";
    if (score <= 60) return "은시계의 연금술사";
    if (score <= 85) return "국가 연금술사";
    return "진리를 본 자";
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
  const { showToast } = useToast();

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

  const shareUrl = `${SITE_URL}/result?theme=${themeId}`;
  const shareText = result ? `[${result.themeName}] ${result.player} 님은 ${result.score}점 (${getRank(result.score, result.themeId)}) 달성!` : "";
  const shareTitle = "덕후테스트 결과";
  const shareDescription = result ? `${result.totalCount}문제 중 ${result.correct}개 정답! 나도 도전하기 →` : "";

  const generateCertificateImage = async (isShare = false): Promise<{ dataUrl: string, blob: Blob } | null> => {
    if (!certificateRef.current) return null;
    try {
      certificateRef.current.classList.add('downloading');
      const scale = isShare ? 2 : 4; // Kakao upload max is 5MB, 2 is safer for JPEG
      const canvas = await html2canvas(certificateRef.current, {
        scale,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      certificateRef.current.classList.remove('downloading');

      const type = isShare ? 'image/jpeg' : 'image/png';
      const quality = isShare ? 0.8 : 1.0;
      const dataUrl = canvas.toDataURL(type, quality);

      const res = await fetch(dataUrl);
      const blob = await res.blob();

      return { dataUrl, blob };
    } catch (error) {
      console.error("이미지 생성 실패:", error);
      return null;
    }
  };

  const handleDownloadImage = async () => {
    const imageData = await generateCertificateImage(false);
    if (!imageData) {
      alert("이미지 저장 중 오류가 발생했습니다.");
      return;
    }

    const link = document.createElement("a");
    link.href = imageData.dataUrl;
    link.download = `duckoo_certificate_${result?.player || 'result'}.png`;
    link.click();
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        showToast("✅ 결과가 클립보드에 복사되었습니다!");
      } catch {
        showToast("복사에 실패했습니다.");
      }
    }
  };

  const handleKakaoShare = async () => {
    if (typeof window !== 'undefined' && window.Kakao && window.Kakao.isInitialized() && result) {
      const btn = document.querySelector('.kakao-btn');
      if (btn) btn.classList.add('loading');

      try {
        let imageUrl = `${SITE_URL}/logo.png`; // Fallback image

        try {
          // Generate the high-res image optimized for Kakao
          const imageData = await generateCertificateImage(true);

          if (imageData) {
            const file = new File([imageData.blob], 'certificate.jpg', { type: 'image/jpeg' });

            // Upload image to Kakao to get a temporary URL
            const uploadRes = await window.Kakao.Share.uploadImage({
              file: [file]
            });

            // Kakao SDK returns different formats depending on version
            if (uploadRes && uploadRes.infos && uploadRes.infos.original && uploadRes.infos.original.url) {
              imageUrl = uploadRes.infos.original.url;
            } else if (uploadRes && uploadRes.imageUrl) {
              imageUrl = uploadRes.imageUrl;
            }
            console.log('Kakao uploadImage response:', JSON.stringify(uploadRes));
          }
        } catch (uploadError) {
          console.warn("Kakao image upload failed, falling back to default image", uploadError);
        }

        window.Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: `${shareTitle} - ${getRank(result.score, result.themeId)}`,
            description: `${result.player} 님의 ${result.themeName} ${result.score}점! ${shareDescription}`,
            imageUrl: imageUrl,
            link: {
              mobileWebUrl: `${SITE_URL}`,
              webUrl: `${SITE_URL}`,
            },
          },
          buttons: [
            {
              title: '나도 덕력 테스트 하기',
              link: {
                mobileWebUrl: `${SITE_URL}`,
                webUrl: `${SITE_URL}`,
              },
            },
          ],
        });
      } catch (error) {
        console.error("카카오톡 공유 실패:", error);
        showToast("카카오톡 공유 중 오류가 발생했습니다.");
      } finally {
        if (btn) btn.classList.remove('loading');
      }
    } else {
      showToast("카카오톡 SDK를 로딩 중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handleInstagramShare = () => {
    showToast("📸 인증서를 저장한 후 인스타그램에 업로드해주세요!");
  };

  const handleTwitterShare = () => {
    const text = `${shareText}\n나도 도전하기 →`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(`${SITE_URL}`)}`,
      '_blank',
      'noopener,noreferrer'
    );
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
                    <span className="info-value">{result.player}</span>
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
