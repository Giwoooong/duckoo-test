"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gamepad2, Play, BookOpen, Clapperboard } from 'lucide-react';

const STORAGE = { name: "duckoo-player-name" };
const DEFAULT_PLAYER_NAME = "익명 덕후";

export default function HomeClient() {
  const [name, setName] = useState("");
  const [activeTheme, setActiveTheme] = useState<string | null>("onepiece");
  const [activeTab, setActiveTab] = useState("추천");
  const tabs = ["추천", "만화/애니", "웹툰/애니", "게임", "영화"];
  const isTabVisible = (genre: string, themeId: string) => {
    if (activeTab === "추천") return ["onepiece", "lol", "orv", "lotr"].includes(themeId);
    return activeTab === genre;
  };
  const router = useRouter();

  const startTest = (themeId: string) => {
    const trimmed = name.trim();
    localStorage.setItem(STORAGE.name, trimmed || DEFAULT_PLAYER_NAME);
    router.push(`/test/${themeId}`);
  };

  const cardData = [
    { id: "onepiece", genre: "만화/애니", label: "원피스 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "루피와 함께 위대한 항로를 개척할 준비가 되셨나요? 세계관, 인물, 스토리를 심층 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 밀짚모자)", style: {} },
    { id: "lol", genre: "게임", label: "리그 오브 레전드 덕후 테스트", badgeIcon: <Gamepad2 size={12} className="icon-left" />, badgeLabel: "게임", desc: "소환사의 협곡에서 펼쳐지는 당신의 지식! 챔피언, 세계관, 게임 메커니즘을 마스터했나요?", placeholder: "인증서 닉네임 입력 (예: Hide on bush #KR1)", style: { "--primary-color": "#c8aa6e" } as React.CSSProperties },
    { id: "fma", genre: "만화/애니", label: "강철의 연금술사 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "등가교환의 법칙을 넘어선 진정한 연금술 마니아인가요? 캐릭터, 스토리, 세계관을 완벽히 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 강철의 연금술사)", style: { "--primary-color": "#b91c1c" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #b91c1c, #991b1b)' } },
    { id: "pokemon", genre: "게임", label: "포켓몬스터 1-2세대 덕후 테스트", badgeIcon: <Gamepad2 size={12} className="icon-left" />, badgeLabel: "게임", desc: "관동·성도 지방의 진정한 포켓몬 마스터를 가려냅니다! 1~2세대 스타터, 전설 포켓몬, 체육관까지 완벽히 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 포켓몬마스터)", style: { "--primary-color": "#16a34a" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #22c55e, #16a34a)' } },
    { id: "diablo2", genre: "게임", label: "디아블로 2 덕후 테스트", badgeIcon: <Gamepad2 size={12} className="icon-left" />, badgeLabel: "게임", desc: "성역의 수호자여! D2 + LoD + 악마술사의 군림 DLC까지 포함! 룬워드, 클래스, 보스 지식을 완벽히 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 네팔렘)", style: { "--primary-color": "#9f1414" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #dc2626, #7f1d1d)' } },
    { id: "sololeveling", genre: "웹툰/애니", label: "나 혼자만 레벨업 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "웹툰/애니", desc: "성진우와 그림자 군단의 이야기! 등장인물, 헌터 랭킹, 세계관의 심층 지식을 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 성진우, 이그리트)", style: { "--primary-color": "#4c1d95" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #6d28d9, #312e81)' } },
    { id: "orv", genre: "웹툰/애니", label: "전지적 독자 시점 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "웹툰/애니", desc: "멸살법의 진정한 독자가 될 준비가 되셨나요? 성좌와 시나리오, 김독자 컴퍼니와 세계관의 깊은 지식을 테스트합니다.", placeholder: "인증서 닉네임 (예: 구원의 마왕)", style: { "--primary-color": "#1e3a8a" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' }, btnStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' } },
    { id: "bleach", genre: "만화/애니", label: "블리치 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "만해(卍解)..! 사신, 아란칼, 퀸시가 격돌하는 세계관 지식을 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 이치고)", style: { "--primary-color": "#ea580c" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #f97316, #9a3412)' } },
    { id: "lotr", genre: "영화", label: "반지의 제왕 덕후 테스트", badgeIcon: <Clapperboard size={12} className="icon-left" />, badgeLabel: "영화", desc: "호빗부터 요정, 인간과 마이아까지. 광활한 중간계 세계관과 종족, 반지원정대의 여정을 가장 완벽하게 꿰뚫는 자를 찾습니다.", placeholder: "인증서 닉네임 입력 (예: 프로도)", style: { "--primary-color": "#ca8a04" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #eab308, #854d0e)' } },
    { id: "mcu", genre: "영화", label: "MCU 덕후 테스트", badgeIcon: <Clapperboard size={12} className="icon-left" />, badgeLabel: "영화", desc: "아이언맨부터 어벤져스, 인피니티 사가, 멀티버스까지. 히어로, 빌런, 스톤, 명장면을 모두 꿰고 있는지 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 어셈블마스터)", style: { "--primary-color": "#d32f2f" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #ef4444, #b91c1c)' } },
    { id: "aot", genre: "만화/애니", label: "진격의 거인 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "시가시나부터 마레, 길과 땅울림까지. 복선, 세계관, 계승 구조를 얼마나 정확히 이해하고 있는지 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 조사병단)", style: { "--primary-color": "#6b7280" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #4b5563, #111827)' } },
    { id: "slamdunk", genre: "만화/애니", label: "슬램덩크 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "북산 5인방, 능남과 해남, 전국대회 산왕전까지. 명경기와 성장 서사를 얼마나 정확히 기억하는지 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 북산의 천재)", style: { "--primary-color": "#dc2626" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #ef4444, #b91c1c)' } },
    { id: "hxh", genre: "만화/애니", label: "헌터x헌터 덕후 테스트", badgeIcon: <BookOpen size={12} className="icon-left" />, badgeLabel: "만화/애니", desc: "헌터 시험, 요크신, 그리드 아일랜드, 키메라 앤트, 넨 계통까지. 설정과 심리전을 얼마나 깊게 이해하는지 검증합니다.", placeholder: "인증서 닉네임 입력 (예: 프로헌터)", style: { "--primary-color": "#16a34a" } as React.CSSProperties, badgeStyle: { background: 'linear-gradient(135deg, #22c55e, #15803d)' } },
  ];

  return (
    <>
      <div className="tab-menu" style={{ display: 'flex', justifyContent: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '8px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setActiveTheme(null); }}
            style={{
              padding: '8px 16px', borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: activeTab === tab ? 'var(--primary-color, #3b82f6)' : 'rgba(255,255,255,0.05)',
              color: activeTab === tab ? '#fff' : '#a1a1aa',
              fontWeight: activeTab === tab ? '600' : '400',
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s ease',
            }}
          >{tab}</button>
        ))}
      </div>

      <section className="themeGrid" style={{ flexWrap: 'wrap', gap: '32px' }}>
        {cardData.map(card => (
          isTabVisible(card.genre, card.id) && (
            <article
              key={card.id}
              className={`themeCard highlighted-card accordion-card ${card.id}-card ${activeTheme === card.id ? 'expanded' : ''}`}
              onClick={() => setActiveTheme(activeTheme === card.id ? null : card.id)}
              style={card.style}
            >
              {activeTheme !== card.id ? (
                <><Play size={18} className="icon-left" />{card.label}</>
              ) : (
                <>
                  <div className="card-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="chip" style={{ margin: 0, padding: '4px 8px', ...(card.badgeStyle || {}) }}>{card.badgeIcon}{card.badgeLabel}</span>
                    <h2 className="accordion-title">{card.label}</h2>
                  </div>
                  <div className="card-expanded-content">
                    <p className="accordion-description">{card.desc}</p>
                    <div className="accordion-info-box">
                      <span className="info-icon">💡</span>
                      <span className="info-text">방대한 문제 은행에서 <strong>무작위로 20문제</strong>가 출제되며, 난이도(상/중/하)에 따라 배점이 다릅니다.</span>
                    </div>
                    <div className="input-group" onClick={(e) => e.stopPropagation()}>
                      <input className="nicknameInput" placeholder={card.placeholder} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button className="startButton" type="button" style={card.btnStyle || {}} onClick={(e) => { e.stopPropagation(); startTest(card.id); }}>
                      <Play size={18} className="icon-left" />테스트 바로 시작
                    </button>
                  </div>
                </>
              )}
            </article>
          )
        ))}
      </section>
    </>
  );
}
