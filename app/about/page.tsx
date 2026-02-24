"use client";

import Link from "next/link";
import { Sparkles, Compass, History, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="shell">
      <main className="panel content-page glass">
        <div className="content-header">
          <p className="chip">ABOUT US</p>
          <h1 className="result-title">어덕행덕, 더 즐거운 덕질 라이프</h1>
          <p className="lead">우리는 영화, 애니메이션, 게임부터 K-POP에 이르기까지 무한한 팬덤 유니버스를 탐구하는 플랫폼, <strong>덕후테스트(DUCKOO TEST)</strong> 입니다.</p>
        </div>

        <section className="intro-hero">
          <h2>"당신의 덕력은 어느 정도인가요?"</h2>
          <p>덕후테스트는 누구나 손쉽게 자신의 '덕력'을 증명하고 서로 공유하며 즐길 수 있는 신개념 팬덤 검증 서비스입니다. 단순한 퀴즈를 넘어, 작품의 세계관과 스토리에 대한 심층적인 질문을 통해 진정한 마스터를 찾아냅니다.</p>
        </section>

        <section className="content-section card-base-styles">
          <h2>🔥 덕후테스트가 제공하는 가치</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <Compass size={32} color="var(--primary-color)" className="feature-icon" />
              <h3>세밀한 세계관 검증</h3>
              <p>스토리 라인 겉핥기를 넘어서, 캐릭터의 설정 한 줄, 에피소드의 디테일까지 다루는 전문적이고 심층적인 문항들로 구성되어 본인의 팬심을 객관적으로 측정합니다.</p>
            </div>

            <div className="feature-card">
              <Sparkles size={32} color="#8b5cf6" className="feature-icon" />
              <h3>고품격 온라인 인증서</h3>
              <p>테스트 종료 후 제공되는 멋진 디자인의 공식 '마스터 인증서'를 다운로드 하세요. 칭호와 점수가 부여된 이미지를 소셜 미디어에 공유하고 내 덕력을 뽐낼 수 있습니다.</p>
            </div>

            <div className="feature-card">
              <History size={32} color="#0ea5e9" className="feature-icon" />
              <h3>친절한 오답 노트 시스템</h3>
              <p>점수만 알려주고 끝나는 테스트는 그만. 어디에서 내 팬심이 빗나갔는지 문항별로 피드백을 확인하고, 오답노트를 통해 내가 놓친 원작 설정의 매력을 다시금 탐구할 수 있습니다.</p>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles mt-8">
          <h2>💡 100% 무료, 로그인 없는 즉시 플레이</h2>
          <p className="description-text">복잡한 회원가입이나 로그인 절차에 지치셨나요? 덕후테스트는 사용자의 최소한의 입력(결과창에 인쇄될 닉네임)만으로 모든 문항을 <strong>직관적이고 매끄럽게</strong> 풀 수 있습니다. 브라우저 로컬 저장소를 활용하여 개인정보 유출 걱정 없이 안전하게 즐길 수 있습니다.</p>

          <div className="highlight-box">
            <p className="highlight-title">🌟 함께 만들어가는 플랫폼</p>
            <p className="highlight-desc">팬 투표를 기반으로 꾸준히 새로운 작품(애니, 드라마, 게임) 테마가 추가됩니다. 여러분의 제안이 덕후테스트의 기출 문제가 됩니다.</p>
          </div>
        </section>

        <div className="action-row action-row-center">
          <Link href="/" className="startButton action-btn">
            <CheckCircle2 size={20} className="icon-left" /> 지금 바로 덕력 검증하기
          </Link>
        </div>
      </main>
    </div>
  );
}
