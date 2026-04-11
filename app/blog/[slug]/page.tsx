import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/blog/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "아티클을 찾을 수 없습니다" };

  const baseUrl = "https://duckootest.pages.dev";
  return {
    title: `${post.title} | 덕후테스트 블로그`,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: ["/og.png"],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  // JSON-LD for Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "덕후테스트" },
    publisher: {
      "@type": "Organization",
      name: "덕후테스트",
      url: "https://duckootest.pages.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="shell">
        <main className="blog-post-wrapper">
          {/* 뒤로가기 */}
          <Link href="/blog" className="blog-back-link">
            ← 블로그 목록으로
          </Link>

          {/* 아티클 헤더 */}
          <article className="blog-post glass">
            <header className="blog-post-header">
              <div className="blog-post-meta-row">
                <span
                  className="blog-category-badge"
                  style={{
                    background: post.categoryColor + "22",
                    color: post.categoryColor,
                    border: `1px solid ${post.categoryColor}44`,
                  }}
                >
                  {post.emoji} {post.category}
                </span>
                <span className="blog-reading-time">📖 {post.readingTime}분 읽기</span>
                <time className="blog-date" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h1 className="blog-post-title">{post.title}</h1>
              <p className="blog-post-description">{post.description}</p>
            </header>

            {/* 본문 */}
            <div className="blog-post-body">
              {post.content.map((section, i) => (
                <section key={i} className="blog-post-section">
                  <h2 className="blog-section-heading">{section.heading}</h2>
                  <p className="blog-section-body">{section.body}</p>
                  {section.list && (
                    <ul className="blog-section-list">
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* 테스트 CTA */}
            <div className="blog-post-cta">
              <p className="blog-post-cta-text">
                이 지식이 실제인지 확인해보세요!
              </p>
              <Link
                href={`/test/${post.themeId}`}
                className="startButton"
                style={{ display: "inline-flex", width: "auto", padding: "16px 36px" }}
              >
                {post.emoji} 지금 바로 덕후테스트 도전하기
              </Link>
            </div>
          </article>

          {/* 다른 아티클 추천 */}
          {allPosts.length > 0 && (
            <section className="blog-related-section">
              <h2 className="blog-related-title">다른 덕후 지식도 읽어볼까요?</h2>
              <div className="blog-related-grid">
                {allPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-related-card glass">
                    <span
                      className="blog-category-badge"
                      style={{
                        background: p.categoryColor + "22",
                        color: p.categoryColor,
                        border: `1px solid ${p.categoryColor}44`,
                        marginBottom: "10px",
                        display: "inline-block",
                      }}
                    >
                      {p.emoji} {p.category}
                    </span>
                    <h3 className="blog-related-card-title">{p.title}</h3>
                    <p className="blog-related-card-desc">{p.description.slice(0, 80)}...</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
