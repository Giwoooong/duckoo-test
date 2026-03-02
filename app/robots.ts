import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/result/', // 결과 페이지는 검색에서 제외 (개인 정보 보호 및 중복 콘텐츠 방지)
        },
        sitemap: 'https://duckoo.test/sitemap.xml', // 실제 도메인으로 변경해주세요
    };
}
