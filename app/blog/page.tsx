import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "덕후 지식 블로그 | 덕후테스트",
  description:
    "원피스, 리그 오브 레전드, 나 혼자만 레벨업, 강철의 연금술사, 진격의 거인 등 인기 작품의 세계관, 설정, 등장인물을 깊이 파헤치는 덕후 지식 블로그입니다.",
  openGraph: {
    title: "덕후 지식 블로그 | 덕후테스트",
    description:
      "좋아하는 작품의 세계관을 더 깊이 이해하고 싶다면? 덕후테스트 블로그에서 심층 분석 아티클을 읽어보세요.",
    images: ["/og.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="shell">
      <main className="panel content-page glass">
        <div className="content-header">
          <p className="chip">DUCKOO BLOG</p>
          <h1 className="result-title">덕후 지식 블로그</h1>
          <p className="lead">
            좋아하는 작품을 더 깊이 파고드는 덕후들을 위한 세계관 분석 콘텐츠.
            테스트 전 예습하거나, 읽는 것만으로도 덕력이 올라갑니다.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card glass">
              <div className="blog-card-top">
                <span
                  className="blog-category-badge"
                  style={{ background: post.categoryColor + "22", color: post.categoryColor, border: `1px solid ${post.categoryColor}44` }}
                >
                  {post.emoji} {post.category}
                </span>
                <span className="blog-reading-time">📖 {post.readingTime}분 읽기</span>
              </div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-desc">{post.description}</p>
              <div className="blog-card-footer">
                <time className="blog-date" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="blog-read-more">자세히 읽기 →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="blog-cta-section">
          <h2 className="blog-cta-title">읽었다면 이제 테스트로 확인해보세요</h2>
          <p className="blog-cta-desc">
            이론은 충분히 쌓았습니다. 이제 진짜 덕후인지 테스트로 증명할 시간입니다.
          </p>
          <Link href="/" className="startButton" style={{ display: "inline-flex", width: "auto", padding: "16px 40px" }}>
            덕후테스트 시작하기
          </Link>
        </div>
      </main>
    </div>
  );
}
