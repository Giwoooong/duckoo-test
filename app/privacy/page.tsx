"use client";

import Link from "next/link";
import { ShieldCheck, Database, Cookie, Globe2, UserCheck, AlertTriangle, FileText, Lock, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="shell">
      <main className="panel content-page glass">
        <div className="content-header">
          <p className="chip">PRIVACY POLICY</p>
          <h1>개인정보 처리방침</h1>
          <p className="lead">덕후테스트는 사용자의 개인정보를 소중하게 생각하며, 안전하고 투명하게 관리하기 위해 최선을 다하고 있습니다.</p>
          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--secondary-text-color)', lineHeight: 1.7 }}>
            본 개인정보 처리방침은 덕후테스트(이하 &ldquo;서비스&rdquo;)가 수집 또는 처리하는 개인정보의 항목, 수집 방법, 이용 목적, 보유 기간, 이용자의 권리 등을 설명합니다. 본 방침은 관련 법령의 변경 또는 서비스 정책의 변화에 따라 사전 고지 없이 수정될 수 있으므로, 정기적으로 확인하시기 바랍니다.
          </p>
        </div>

        {/* 요약 카드 */}
        <section className="content-section card-base-styles flex-col-gap">
          <h2>📋 개인정보 처리방침 요약</h2>
          <p style={{ color: 'var(--secondary-text-color)', lineHeight: 1.7, marginBottom: '20px' }}>
            덕후테스트는 기술적으로 가능한 최소한의 정보만을 처리하는 것을 원칙으로 합니다. 아래는 이 방침의 핵심 내용을 한눈에 정리한 요약입니다.
          </p>
          <div className="privacy-summary-grid">
            <div className="privacy-summary-item">
              <ShieldCheck size={20} color="#10b981" />
              <div>
                <strong>수집 정보</strong>
                <p>닉네임(로컬 저장), 브라우저 쿠키(광고/분석용), 비식별 접속 로그</p>
              </div>
            </div>
            <div className="privacy-summary-item">
              <Database size={20} color="#3b82f6" />
              <div>
                <strong>저장 위치</strong>
                <p>닉네임·결과는 사용자 기기(Local Storage)에만 저장, 서버 전송 없음</p>
              </div>
            </div>
            <div className="privacy-summary-item">
              <Cookie size={20} color="#f59e0b" />
              <div>
                <strong>제3자 쿠키</strong>
                <p>Google AdSense, Google Analytics 등 광고·분석 목적 쿠키 사용</p>
              </div>
            </div>
            <div className="privacy-summary-item">
              <UserCheck size={20} color="#8b5cf6" />
              <div>
                <strong>사용자 권리</strong>
                <p>브라우저 설정으로 언제든 로컬 데이터 삭제 가능, 쿠키 거부 가능</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>1. 개인정보 수집 항목 및 방법</h2>
          <div className="info-box">
            <Database size={24} className="info-icon" />
            <div>
              <h3>브라우저 내 로컬 데이터 (Local Storage)</h3>
              <p>덕후테스트는 회원가입이나 로그인 절차 없이 모든 서비스를 익명으로 제공합니다. 따라서 사용자를 식별할 수 있는 민감한 개인정보(이름, 이메일, 전화번호 등)를 서버에 전송하거나 특별히 수집하지 않습니다.</p>
              <p style={{ marginTop: '12px' }}>사용자가 입력하는 <strong>닉네임</strong> 및 <strong>테스트 결과(점수, 선택지)</strong>는 오로지 사용자의 기기 브라우저 내부(Local Storage)에 임시로 저장되며, 이는 결과 화면을 재구현하고 공유할 때만 사용됩니다. 해당 데이터는 덕후테스트 서버로 전송되지 않습니다.</p>
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '16px' }}>
            <Globe2 size={24} className="info-icon" />
            <div>
              <h3>자동 수집 정보 (비식별 정보)</h3>
              <p>서비스 이용 과정에서 접속 IP 주소(익명화), 브라우저 환경(User-Agent), 운영체제 정보, 방문 시간 및 경로 등 서비스 이용 접속 기록과 같은 비식별 정보가 서비스 개선 및 장애 대응 목적으로 웹 서버 호스팅 사업자를 통해 자동으로 수집될 수 있습니다.</p>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>2. 쿠키(Cookies) 및 트래킹 기술 사용</h2>
          <div className="info-box">
            <Cookie size={24} className="info-icon" />
            <div>
              <h3>광고 맞춤 설정 및 사이트 분석 (Google AdSense / Analytics)</h3>
              <p>본 사이트는 Google AdSense(구글 애드센스)를 포함한 제3자 광고 파트너의 광고를 게재할 수 있습니다. <strong>제3자 광고업체인 Google은 쿠키를 사용하여 사용자가 본 사이트 또는 다른 웹사이트를 방문한 기록을 바탕으로 관련성 높은 광고를 제공합니다.</strong></p>
              <ul>
                <li>Google 등 제3자 제공업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.</li>
                <li>Google의 광고 쿠키 사용으로 Google 및 그 파트너는 사용자가 본 사이트 및/또는 인터넷의 다른 사이트에 방문한 정보를 바탕으로 사용자에게 광고를 게재할 수 있습니다.</li>
                <li>사용자는 <strong>Google 광고 설정(<a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>)</strong> 페이지에 접속하여 맞춤 광고에 대한 쿠키 사용을 중지할 수 있습니다.</li>
                <li>또한, <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>에서 제3자 광고 쿠키 사용을 직접 관리하거나 중지할 수 있습니다.</li>
              </ul>
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '16px' }}>
            <AlertTriangle size={24} className="info-icon" style={{ color: '#f59e0b' }} />
            <div>
              <h3>쿠키 사용 거부 방법</h3>
              <p>사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다. 단, 쿠키를 거부할 경우 일부 서비스 기능이 제한될 수 있습니다.</p>
              <ul style={{ marginTop: '8px' }}>
                <li><strong>Chrome:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                <li><strong>Safari:</strong> 환경설정 → 개인정보 보호 → 쿠키 및 웹 사이트 데이터</li>
                <li><strong>Firefox:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>3. 로그 데이터 (Log Data)</h2>
          <div className="info-box">
            <Globe2 size={24} className="info-icon" />
            <div>
              <h3>통계 및 서비스 품질 개선</h3>
              <p>본 사이트 이용 과정에서 접속 IP 주소, 브라우저 환경, 방문 시간 및 경로 등 서비스 이용 접속 기록과 같은 비식별 정보가 서비스 개선 및 장애 대응 목적으로 웹 서버 호스팅 사업자를 통해 자동으로 수집될 수 있습니다. 이 정보는 개인을 특정할 수 없는 형태로 관리됩니다.</p>
              <p style={{ marginTop: '12px' }}>수집된 로그 데이터는 서비스의 안정적인 운영, 오류 진단, 방문자 통계 분석 목적으로만 사용되며, 이를 통해 특정 사용자를 식별하거나 추적하지 않습니다.</p>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>4. 제3자 서비스 및 SDK 사용 현황</h2>
          <p style={{ color: 'var(--secondary-text-color)', lineHeight: 1.7, marginBottom: '16px' }}>
            덕후테스트는 서비스 제공을 위해 다음 제3자 서비스를 사용합니다. 각 서비스는 자체 개인정보 처리방침을 보유하고 있으며, 해당 방침에 따라 데이터를 처리합니다.
          </p>
          <div className="third-party-list">
            <div className="third-party-item">
              <ChevronRight size={16} color="var(--primary-color)" />
              <div>
                <strong>Google AdSense</strong> — 광고 게재 및 수익화 목적. 쿠키를 통한 맞춤 광고 제공. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google 개인정보처리방침</a>
              </div>
            </div>
            <div className="third-party-item">
              <ChevronRight size={16} color="var(--primary-color)" />
              <div>
                <strong>Kakao SDK</strong> — 카카오톡 소셜 공유 기능 제공. 공유 시 카카오 서버에 임시 이미지 업로드. <a href="https://www.kakao.com/policy/privacy" target="_blank" rel="noopener noreferrer">Kakao 개인정보처리방침</a>
              </div>
            </div>
            <div className="third-party-item">
              <ChevronRight size={16} color="var(--primary-color)" />
              <div>
                <strong>Cloudflare Pages</strong> — 웹사이트 호스팅 서비스. 비식별 접속 로그 수집 가능. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare 개인정보처리방침</a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>5. 개인정보의 수집 목적 및 이용</h2>
          <p style={{ color: 'var(--secondary-text-color)', lineHeight: 1.7 }}>
            덕후테스트가 처리하는 정보는 오직 다음과 같은 목적으로만 사용됩니다.
          </p>
          <ul style={{ marginTop: '12px', lineHeight: 2 }}>
            <li>사용자가 입력한 닉네임 → 인증서 이미지 생성 및 결과 화면 표시 목적으로만 사용 (기기 내 저장)</li>
            <li>테스트 답변 및 점수 데이터 → 결과 화면 구성, 오답 노트 생성 목적으로만 사용 (기기 내 저장)</li>
            <li>비식별 접속 로그 → 서비스 안정성 유지, 오류 진단, 이용 통계 분석</li>
            <li>광고 관련 쿠키 → 맞춤형 광고 제공(Google AdSense)을 통한 서비스 운영비 충당</li>
          </ul>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>6. 제3자 제공 및 위탁</h2>
          <p>덕후테스트는 사용자의 개인정보를 외부 서버에 수집 및 보관하지 않으므로, 원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다. 단, 통계 분석이나 개인화된 광고 게재를 목적으로 브라우저 쿠키를 기반으로 한 식별 불가 정보가 제3자(ex. Google Analytics, Google AdSense)에 의해 수집될 수 있으며, 해당 업체의 개인정보 처리방침을 따릅니다.</p>
          <p style={{ marginTop: '12px' }}>카카오톡 공유 기능 이용 시, 인증서 이미지가 Kakao 서버에 임시 업로드될 수 있습니다. 이는 공유 기능 제공을 위한 기술적 필요에 의한 것이며, 해당 이미지는 Kakao의 정책에 따라 일정 기간 후 자동 삭제됩니다.</p>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>7. 정보의 보유 및 파기</h2>
          <p>브라우저 로컬 스토리지에 저장된 테스트 결과 데이터(닉네임 포함)는 사용자가 브라우저 설정에서 임시 인터넷 파일 및 캐시 데이터를 비우거나 직접 스토리지를 초기화하면 즉시 기기에서 영구적으로 삭제됩니다. 서버에서 별도로 해당 데이터를 통제하거나 삭제 처리할 권한이 없습니다.</p>
          <p style={{ marginTop: '12px' }}>광고 및 분석을 위해 제3자(Google 등)가 수집한 쿠키 데이터의 보유 기간은 해당 업체의 개인정보 처리방침에 따릅니다.</p>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>8. 아동의 개인정보 보호</h2>
          <div className="info-box">
            <Lock size={24} className="info-icon" />
            <div>
              <p>덕후테스트는 만 14세 미만 아동을 대상으로 의도적으로 개인정보를 수집하지 않습니다. 서비스 특성상 연령 확인 절차를 진행하지 않으나, 만 14세 미만 아동의 경우 부모 또는 법정 대리인의 지도 하에 서비스를 이용하시기 바랍니다. 만약 만 14세 미만 아동의 정보가 수집되었음을 인지하는 경우, 즉시 해당 정보를 삭제하기 위해 최선을 다하겠습니다.</p>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>9. 이용자의 권리</h2>
          <p style={{ color: 'var(--secondary-text-color)', lineHeight: 1.7, marginBottom: '12px' }}>
            사용자는 개인정보와 관련하여 다음과 같은 권리를 행사할 수 있습니다.
          </p>
          <ul style={{ lineHeight: 2 }}>
            <li><strong>로컬 데이터 삭제:</strong> 브라우저의 &ldquo;사이트 데이터 삭제&rdquo; 기능을 통해 언제든지 기기에 저장된 데이터를 삭제할 수 있습니다.</li>
            <li><strong>쿠키 거부:</strong> 브라우저 설정 또는 Google 광고 설정을 통해 광고 맞춤 쿠키 사용을 거부할 수 있습니다.</li>
            <li><strong>문의 및 이의제기:</strong> 본 방침과 관련하여 문의사항이 있는 경우 아래 문의처에 연락하시기 바랍니다.</li>
          </ul>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>10. 개인정보 처리방침의 변경</h2>
          <p>덕후테스트는 법률 변경, 서비스 변경, 정책 변경 등의 이유로 개인정보 처리방침을 수정할 수 있습니다. 방침이 변경될 경우, 변경된 방침은 서비스 내 공지를 통해 안내하며, 변경 전 최소 7일 전에 고지합니다. 중요한 변경 사항의 경우 더 눈에 띄는 방식으로 공지할 수 있습니다.</p>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>11. 개인정보 보호 담당자 및 문의처</h2>
          <div className="info-box">
            <FileText size={24} className="info-icon" />
            <div>
              <p>본 사이트는 개인 운영 사이트로, 개인정보 보호와 관련된 문의, 불만 처리 등은 웹사이트 하단의 <Link href="/contact" className="text-link">문의하기</Link>를 통해 제출해주시면 신속하게 답변 드리겠습니다.</p>
              <p style={{ marginTop: '12px', color: 'var(--secondary-text-color)', fontSize: '14px' }}>
                개인정보 보호와 관련 한국인터넷진흥원(KISA) 개인정보침해상담센터 <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer">privacy.kisa.or.kr</a> (국번없이 118) 에 상담하실 수 있습니다.
              </p>
              <p className="update-date" style={{ marginTop: '16px' }}>마지막 수정일: 2026년 3월 7일</p>
            </div>
          </div>
        </section>

        <div className="action-row" style={{ marginTop: '40px' }}>
          <Link href="/" className="startButton action-btn">메인 화면으로</Link>
          <Link href="/terms" className="ghostButton action-btn">이용약관 보기</Link>
        </div>
      </main>
    </div>
  );
}
