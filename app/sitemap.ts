import { MetadataRoute } from 'next';
import { getThemes } from '@/lib/tests/registry';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://duckoo.test'; // 실제 도메인으로 변경해주세요

    // 정적 페이지들
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/contact-suggestions',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 동적 테스트 페이지들 (One Piece, LoL 등)
    const themePages = getThemes().map((theme) => ({
        url: `${baseUrl}/test/${theme.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...staticPages, ...themePages];
}
