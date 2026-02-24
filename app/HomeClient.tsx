"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Swords, Wand2, Gamepad2, Play, Flame, Search, Award, Share2, Asterisk, Clapperboard } from 'lucide-react';

const STORAGE = {
  name: "duckoo-player-name"
};

export default function HomeClient() {
  const [name, setName] = useState("");
  const [activeTheme, setActiveTheme] = useState<string | null>("onepiece");
  const router = useRouter();

  const startTest = (themeId: string) => {
    const trimmed = name.trim();
    if (!trimmed) {
      window.alert("닉네임을 입력해주세요.");
      return;
    }
    localStorage.setItem(STORAGE.name, trimmed);
    router.push(`/test/${themeId}`);
  };

  return (
    <div className="shell">
      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">otaku archive</p>
          <h1>테스트 둘러보기</h1>
          <p className="lead">애니, 영화, 게임 등 다양한 분야의 진정한 덕후를 가려냅니다. 당신의 덕력을 뽐내보세요.</p>
        </div>

        <section className="themeGrid" style={{ flexWrap: 'wrap', gap: '32px' }}>
          {/* One Piece Test Card */}
          <article
            className={`themeCard highlighted-card accordion-card onepiece-card ${activeTheme === 'onepiece' ? 'expanded' : ''}`}
            onClick={() => setActiveTheme(activeTheme === 'onepiece' ? null : 'onepiece')}
          >
            {activeTheme !== 'onepiece' ? (
              <>
                <Play size={18} className="icon-left" />
                원피스 만렙 테스트
              </>
            ) : (
              <>
                <div className="card-header onepiece-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="chip" style={{ margin: 0, padding: '4px 8px' }}><Flame size={12} className="icon-left" />인기</span>
                  <h2 className="accordion-title">원피스 만렙 테스트</h2>
                </div>

                <div className="card-expanded-content">
                  <p className="accordion-description">
                    루피와 함께 위대한 항로를 개척할 준비가 되셨나요? 세계관, 인물, 스토리를 심층 검증합니다.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px 16px', background: 'rgba(241, 245, 249, 0.7)', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)' }}>
                    <span style={{ fontSize: '16px', marginTop: '2px' }}>💡</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-color)', lineHeight: '1.6' }}>
                      방대한 문제 은행에서 <strong>무작위로 20문제</strong>가 출제되며, 난이도(상/중/하)에 따라 배점이 다릅니다.
                    </span>
                  </div>
                  <div className="input-group" onClick={(e) => e.stopPropagation()}>
                    <input
                      id="nickname"
                      className="nicknameInput"
                      placeholder="인증서 닉네임 입력 (예: 밀짚모자)"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <button className="startButton" type="button" onClick={(e) => { e.stopPropagation(); startTest("onepiece"); }}>
                    <Play size={18} className="icon-left" />
                    테스트 시작하기
                  </button>
                </div>
              </>
            )}
          </article>

          {/* League of Legends Test Card */}
          <article
            className={`themeCard highlighted-card accordion-card lol-card ${activeTheme === 'lol' ? 'expanded' : ''}`}
            onClick={() => setActiveTheme(activeTheme === 'lol' ? null : 'lol')}
            style={{ "--primary-color": "#c8aa6e" } as React.CSSProperties}
          >
            {activeTheme !== 'lol' ? (
              <>
                <Play size={18} className="icon-left" />
                리그 오브 레전드 테스트
              </>
            ) : (
              <>
                <div className="card-header lol-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="chip" style={{ margin: 0, padding: '4px 8px' }}><Gamepad2 size={12} className="icon-left" />NEW</span>
                  <h2 className="accordion-title">리그 오브 레전드 테스트</h2>
                </div>

                <div className="card-expanded-content">
                  <p className="accordion-description">
                    소환사의 협곡에서 펼쳐지는 당신의 지식! 챔피언, 세계관, 게임 메커니즘을 마스터했나요?
                  </p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px 16px', background: 'rgba(241, 245, 249, 0.7)', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)' }}>
                    <span style={{ fontSize: '16px', marginTop: '2px' }}>💡</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-color)', lineHeight: '1.6' }}>
                      방대한 문제 은행에서 <strong>무작위로 20문제</strong>가 출제되며, 난이도(상/중/하)에 따라 배점이 다릅니다.
                    </span>
                  </div>
                  <div className="input-group" onClick={(e) => e.stopPropagation()}>
                    <input
                      id="nickname-lol"
                      className="nicknameInput"
                      placeholder="인증서 닉네임 입력 (예: Hide on bush #KR1)"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <button className="startButton lol-btn" type="button" onClick={(e) => { e.stopPropagation(); startTest("lol"); }}>
                    <Play size={18} className="icon-left" />
                    테스트 바로 시작
                  </button>
                </div>
              </>
            )}
          </article>
        </section>

        {/* SEO & Informational Content Section for AdSense */}
        <section className="seo-info-section">
          <h2 className="seo-info-title">덕후테스트란 무엇인가요?</h2>
          <p className="seo-info-desc">
            덕후테스트(DUCKOO TEST)는 자신이 열광하는 애니메이션, 영화, K-POP, 게임 등 다양한 서브컬처 작품에 대한 지식과 애정을 수치화하여 확인할 수 있는 <strong>프리미엄 팬덤 퀴즈 플랫폼</strong>입니다. 단순한 심심풀이 테스트를 넘어, 마니아층의 니즈를 충족시키는 고난도의 심층적인 문항들을 제공합니다.
          </p>

          <div className="seo-grid">
            <div className="seo-grid-item">
              <Search size={28} color="var(--primary-color)" className="seo-grid-item-icon" />
              <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 700 }}>정교한 문항 설계</h3>
              <p style={{ fontSize: '15px', color: 'var(--secondary-text-color)', lineHeight: 1.6 }}>작품의 세계관, 숨겨진 설정(이스터에그), 캐릭터의 대사 등 찐팬들만 알 수 있는 디테일한 문제로 구성됩니다.</p>
              <p style={{ fontSize: '14px', color: 'var(--primary-color)', marginTop: '8px', fontWeight: 600 }}>* 매번 20문제가 랜덤 출제되며 난이도별 차등 배점 적용</p>
            </div>
            <div className="seo-grid-item">
              <Award size={28} color="#8b5cf6" className="seo-grid-item-icon" />
              <h3>나만의 공식 인증서</h3>
              <p>모든 관문을 통과하면 최종 점수와 등급이 각인된 세련된 디자인의 공식 마스터 인증서를 발급해 드립니다.</p>
            </div>
            <div className="seo-grid-item">
              <Share2 size={28} color="#0ea5e9" className="seo-grid-item-icon" />
              <h3>쉬운 캡처 및 공유</h3>
              <p>결과 이미지를 카카오톡, 인스타그램, X(트위터) 등 소셜 미디어와 팬 커뮤니티에 간편하게 공유하고 덕력을 인증하세요.</p>
            </div>
          </div>
        </section>

        {/* AdSense friendly content section */}
        <section className="upcoming-section">
          <div className="section-header">
            <h2>오픈 예정 테스트</h2>
            <p className="lead">곧 공개될 새로운 영역의 테스트들을 미리 확인하세요.</p>
          </div>
          <div className="infoList">
            <article className="upcoming-card">
              <div className="upcoming-icon naruto-icon"><Asterisk size={28} /></div>
              <div className="upcoming-content">
                <h3>나루토 덕후 테스트</h3>
                <p>닌자 세계의 모든 것을 꿰뚫는 당신! 당신은 진정한 닌자 마스터?</p>
              </div>
            </article>
            <article className="upcoming-card">
              <div className="upcoming-icon hp-icon"><Wand2 size={28} /></div>
              <div className="upcoming-content">
                <h3>해리포터 마법사 테스트</h3>
                <p>호그와트 마법 학교의 비밀을 얼마나 알고 있나요? 마법사 레벨을 측정하세요!</p>
              </div>
            </article>
            <article className="upcoming-card">
              <div className="upcoming-icon" style={{ background: 'linear-gradient(135deg, #e53935, #b71c1c)', color: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clapperboard size={28} /></div>
              <div className="upcoming-content">
                <h3>마블 시네마틱 유니버스 테스트</h3>
                <p>어벤져스 어셈블! MCU의 디테일한 세계관을 완벽하게 파악하고 계신가요?</p>
              </div>
            </article>
          </div>
          <div className="suggestion-action">
            <Link href="/contact-suggestions" className="ghostButton">새로운 테스트 제안하기</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
