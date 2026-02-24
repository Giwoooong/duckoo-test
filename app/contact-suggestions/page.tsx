"use client";

import Link from "next/link";
import { Wrench } from 'lucide-react';

export default function ContactSuggestionsPage() {
    return (
        <div className="shell">
            <main className="panel content-page glass" style={{ textAlign: 'center', padding: '64px 24px' }}>
                <Wrench size={48} color="var(--primary-color)" style={{ margin: '0 auto 24px' }} />
                <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>구현 준비중입니다</h1>
                <p className="lead" style={{ marginBottom: '40px' }}>
                    새로운 테스트 제안 기능은 현재 치열하게 개발 중입니다.<br />
                    조금만 기다려 주시면 멋진 기능으로 찾아오겠습니다!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/" className="startButton action-btn" style={{ maxWidth: '240px' }}>
                        메인 화면으로
                    </Link>
                </div>
            </main>
        </div>
    );
}
