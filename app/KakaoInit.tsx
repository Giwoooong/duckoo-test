"use client";

import Script from "next/script";

declare global {
    interface Window {
        Kakao: any;
    }
}

export default function KakaoInit() {
    const handleLoad = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init("70df2653305d2ee08ca2393855f97e05");
        }
    };

    return (
        <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
            onLoad={handleLoad}
        />
    );
}
