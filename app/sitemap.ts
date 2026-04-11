import { MetadataRoute } from 'next';
import { getThemes } from '@/lib/tests/registry';
import { getAllPosts } from '@/lib/blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://duckootest.pages.dev';

    // 정적 페이지들
    const staticPages = [
        '',
        '/about',
        '/blog',
        '/contact',
        '/contact-suggestions',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
    }));

    // 동적 테스트 페이지들
    const themePages = getThemes().map((theme) => ({
        url: `${baseUrl}/test/${theme.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // 블로그 아티클 페이지들
    const blogPages = getAllPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    return [...staticPages, ...themePages, ...blogPages];
}
