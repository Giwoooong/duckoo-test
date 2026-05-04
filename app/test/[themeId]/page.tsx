import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TestClient from "./TestClient";
import { getTheme } from "@/lib/tests/registry";
import { themeIntros } from "@/lib/tests/theme-intros";
import { getPost } from "@/lib/blog/posts";

type Props = { params: Promise<{ themeId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { themeId } = await params;
  const theme = getTheme(themeId);

  if (!theme) {
    return { title: "테스트를 찾을 수 없습니다" };
  }

  return {
    title: theme.seo.title,
    description: theme.seo.description,
    openGraph: {
      title: theme.seo.title,
      description: theme.seo.description,
      images: ["/og.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: theme.seo.title,
      description: theme.seo.description,
      images: ["/og.png"],
    },
  };
}

export default async function TestPage({ params }: Props) {
  const { themeId } = await params;
  const theme = getTheme(themeId);
  if (!theme) notFound();

  const intro = themeIntros[themeId];
  const relatedPost = intro?.relatedBlog ? getPost(intro.relatedBlog) : null;

  // 구글 봇에게 퀴즈 문제들을 그대로 읽게 해주는 JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": theme.name,
    "description": theme.seo.description,
    "hasPart": theme.questions.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.options[q.answerIndex]
      },
      "suggestedAnswer": q.options.map((opt) => ({
        "@type": "Answer",
        "text": opt
      }))
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── SSR 소개 섹션: 구글봇이 JS 없이 읽을 수 있는 텍스트 ── */}
      {intro && (
        <div className="shell">
          <section className="test-intro-section">
            <div className="test-intro-header">
              <p className="chip">{theme.badge}</p>
              <h1 className="test-intro-title">{theme.name}</h1>
              <p className="test-intro-subtitle">{theme.subtitle}</p>
            </div>

            <div className="test-intro-description">
              <p>{intro.description}</p>
            </div>

            <div className="test-intro-grid">
              <div className="test-intro-card glass">
                <h2 className="test-intro-card-title">📋 출제 범위</h2>
                <ul className="test-intro-list">
                  {intro.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="test-intro-card glass">
                <h2 className="test-intro-card-title">❓ 예시 문제</h2>
                <ol className="test-intro-list test-intro-list-numbered">
                  {intro.sampleQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
                <p className="test-intro-note">
                  * 실제 테스트는 {theme.questions.length}개 이상의 문제 은행에서 매번 {theme.questionCount}문제가 무작위 출제됩니다.
                </p>
              </div>

              <div className="test-intro-card glass">
                <h2 className="test-intro-card-title">🏆 등급 체계</h2>
                <div className="test-intro-grades">
                  {intro.grades.map((g, i) => (
                    <div key={i} className="test-intro-grade-row">
                      <span className="test-intro-grade-name">{g.name}</span>
                      <span className="test-intro-grade-range">{g.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {relatedPost && (
              <div className="test-intro-blog-link">
                <p>📖 테스트 전 예습하기:</p>
                <Link href={`/blog/${relatedPost.slug}`} className="test-intro-blog-anchor">
                  {relatedPost.emoji} {relatedPost.title} →
                </Link>
              </div>
            )}

            <div className="test-intro-how">
              <h2>테스트 진행 방법</h2>
              <div className="test-intro-steps">
                <div className="test-intro-step">
                  <span className="test-intro-step-num">1</span>
                  <div>
                    <h3>닉네임 입력</h3>
                    <p>아래 테스트 영역에서 닉네임을 입력하고 시작 버튼을 누르세요. 회원가입은 필요 없습니다.</p>
                  </div>
                </div>
                <div className="test-intro-step">
                  <span className="test-intro-step-num">2</span>
                  <div>
                    <h3>{theme.questionCount}문제 풀기</h3>
                    <p>난이도(상·중·하)별로 배점이 다르며, 어려운 문제일수록 높은 점수를 획득합니다.</p>
                  </div>
                </div>
                <div className="test-intro-step">
                  <span className="test-intro-step-num">3</span>
                  <div>
                    <h3>인증서 발급</h3>
                    <p>최종 점수와 등급이 새겨진 공식 인증서를 다운로드하고 SNS에 공유하세요.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ── 인터랙티브 테스트 영역 (Client Component) ── */}
      <TestClient theme={theme} />
    </>
  );
}
