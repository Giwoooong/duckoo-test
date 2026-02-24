import Link from "next/link";
import { ShieldCheck, Database, Cookie, Globe2 } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="shell">
      <main className="panel content-page glass">
        <div className="content-header">
          <p className="chip">PRIVACY POLICY</p>
          <h1>개인정보 처리방침</h1>
          <p className="lead">덕후테스트는 사용자의 개인정보를 소중하게 생각하며, 안전하고 투명하게 관리하기 위해 최선을 다하고 있습니다.</p>
        </div>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>1. 개인정보 수집 항목 및 방법</h2>
          <div className="info-box">
            <Database size={24} className="info-icon" />
            <div>
              <h3>브라우저 내 로컬 데이터 (Local Storage)</h3>
              <p>덕후테스트는 회원가입이나 로그인 절차 없이 모든 서비스를 익명으로 제공합니다. 따라서 사용자를 식별할 수 있는 민감한 개인정보(이름, 이메일, 전화번호 등)를 서버에 전송하거나 특별히 수집하지 않습니다.</p>
              <p>사용자가 입력하는 <strong>닉네임</strong> 및 <strong>테스트 결과(점수, 선택지)</strong>는 오로지 사용자의 기기 브라우저 내부(Local Storage)에 임시로 저장되며, 이는 결과 화면을 재구현하고 공유할 때만 사용됩니다.</p>
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>2. 쿠키(Cookies) 및 트래킹 기술 사용</h2>
          <div className="info-box">
            <Cookie size={24} className="info-icon" />
            <div>
              <h3>광고 맞춤 설정 및 사이트 분석</h3>
              <p>본 사이트는 Google AdSense(구글 애드센스)를 포함한 제3자 광고 파트너의 광고를 게재할 수 있습니다. <strong>제3자 광고업체인 Google은 쿠키를 사용하여 사용자가 본 사이트 또는 다른 웹사이트를 방문한 기록을 바탕으로 관련성 높은 광고를 제공합니다.</strong></p>
              <ul>
                <li>Google 등 제3자 제공업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.</li>
                <li>Google의 광고 쿠키 사용으로 Google 및 그 파트너는 사용자가 본 사이트 및/또는 인터넷의 다른 사이트에 방문한 정보를 바탕으로 사용자에게 광고를 게재할 수 있습니다.</li>
                <li>사용자는 <strong>Google 광고 설정(<a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com</a>)</strong> 페이지에 접속하여 맞춤 광고에 대한 쿠키 사용을 중지할 수 있습니다.</li>
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
            </div>
          </div>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>4. 제3자 제공 및 위탁</h2>
          <p>덕후테스트는 사용자의 개인정보를 외부 서버에 수집 및 보관하지 않으므로, 원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다. 단, 통계 분석이나 개인화된 광고 게재를 목적으로 브라우저 쿠키를 기반으로 한 식별 불가 정보가 제3자(ex. Google Analytics, Google AdSense)에 의해 수집될 수 있으며, 해당 업체의 개인정보 처리방침을 따릅니다.</p>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>5. 정보의 보유 및 파기</h2>
          <p>브라우저 로컬 스토리지에 저장된 테스트 결과 데이터(닉네임 포함)는 사용자가 브라우저 설정에서 임시 인터넷 파일 및 캐시 데이터를 비우거나 직접 스토리지를 초기화하면 즉시 기기에서 영구적으로 삭제됩니다. 서버에서 별도로 해당 데이터를 통제하거나 삭제 처리할 권한이 없습니다.</p>
        </section>

        <section className="content-section card-base-styles flex-col-gap">
          <h2>6. 개인정보 보호 담당자 및 문의처</h2>
          <p>본 사이트는 개인 운영 사이트로, 개인정보 보호와 관련된 문의, 불만 처리 등은 웹사이트 하단의 <Link href="/contact" className="text-link">문의하기</Link>를 통해 제출해주시면 신속하게 답변 드리겠습니다.</p>
          <p className="update-date">마지막 수정일: 2026년 2월 24일</p>
        </section>

        <div className="action-row" style={{ marginTop: '40px' }}>
          <Link href="/" className="startButton action-btn">메인 화면으로</Link>
        </div>
      </main>
    </div>
  );
}
