import Link from "next/link";
import { Gavel } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="shell">
            <main className="panel content-page glass">
                <div className="content-header">
                    <p className="chip">TERMS OF SERVICE</p>
                    <h1 className="result-title">이용약관</h1>
                    <p className="lead">덕후테스트 서비스 이용에 관한 권리와 의무를 안내해 드립니다.</p>
                </div>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제1조 (목적)</h2>
                    <p>
                        본 약관은 덕후테스트("회사" 또는 "서비스")가 제공하는 인터넷 관련 퀴즈 및 테스트 제반 서비스의 이용과 관련하여 회사와 사용자 간의 권리, 의무, 책임사항 및 기본적인 이용 조건을 규정함을 목적으로 합니다.
                    </p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제2조 (용어의 정의)</h2>
                    <ul>
                        <li><strong>서비스:</strong> 접속 가능한 유무선 단말기의 종류와 상관없이 이용자가 이용할 수 있는 덕후테스트와 관련된 제반 서비스를 의미합니다.</li>
                        <li><strong>이용자:</strong> 회사의 서비스에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠(퀴즈, 결과 화면 등)를 열람하고 이용하는 사람을 지칭합니다.</li>
                        <li><strong>테스트 테마:</strong> 특정 애니메이션, 영화, 게임 등의 주제를 기반으로 회사가 구성하여 제공하는 질문 집합을 의미합니다.</li>
                    </ul>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제3조 (약관의 효력 및 변경)</h2>
                    <p>이 서비스는 별도의 회원가입 절차 없이 제공되며, 이용자가 사이트에 접속하여 서비스를 이용하는 시점에 본 약관에 동의한 것으로 간주됩니다. 회사는 관련 법령을 위배하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 사이트 내에 공지함으로써 효력이 발생합니다.</p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제4조 (서비스의 제공 및 변경)</h2>
                    <div>
                        회사는 다음과 같은 서비스를 제공합니다.
                        <ul>
                            <li>다양한 작품 세계관에 기반한 엔터테인먼트 목적의 지식 검증 서비스</li>
                            <li>테스트 결과에 따른 점수 산정 및 이미지(인증서) 생성, 소셜 미디어 공유 기능</li>
                        </ul>
                    </div>
                    <p>회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경하거나 중단할 수 있으며, 이와 관련하여 관련법에 특별한 규정이 없는 한 이용자에게 별도의 보상을 하지 않습니다.</p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제5조 (게시물의 저작권 및 귀속)</h2>
                    <p>
                        덕후테스트 플랫폼 내 제공되는 퀴즈 질문, 레이아웃, 디자인 로직, 인증서 템플릿 등 전반적 서비스 에셋의 저작권은 회사에 귀속됩니다.
                        다만, 퀴즈의 소재로 사용되는 원저작물(영화, 애니메이션 명칭, 캐릭터 이름 등)의 지식재산권은 원작자에게 귀속되며, 본 서비스는 오로지 리뷰와 비상업적 팬 콘텐츠 공유의 일환으로서 공정 이용의 범위에서 사용됩니다.
                    </p>
                    <div className="info-box">
                        <Gavel size={24} className="info-icon" />
                        <div>
                            <p>이용자는 서비스 내에서 생성된 결과 이미지(인증서)를 비상업적인 목적으로 개인 소셜 미디어, 커뮤니티 등에 자유롭게 공유할 수 있습니다. 단, 시스템 구조를 무단으로 스크래핑하거나 회사 동의 없이 템플릿 디자인을 상업적으로 활용하는 것은 엄격히 금지됩니다.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제6조 (광고의 게재)</h2>
                    <p>
                        회사는 서비스 제공 및 유지를 위해 서비스 화면에 Google AdSense 등 제3자 광고 네트워크를 통한 타겟팅 광고 및 일반 배너 광고를 게재할 수 있습니다. 이용자는 서비스 이용 시 노출되는 광고 게재에 동의합니다.
                    </p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제7조 (면책 조항)</h2>
                    <p>
                        회사는 무료로 제공되는 본 서비스를 통해 제공된 테스트의 정답 여부나 정보의 완벽한 정확성, 신뢰성 등에 대해서 어떠한 법적 보증도 하지 않으며, 엔터테인먼트 목적 외의 수단으로 결과가 사용되어 발생하는 손해에 대해서는 책임을 지지 않습니다.
                    </p>
                    <p className="update-date" style={{ marginTop: '16px' }}>시행일자: 2026년 2월 24일</p>
                </section>

                <div className="action-row" style={{ marginTop: '40px' }}>
                    <Link href="/" className="startButton action-btn">메인 화면으로</Link>
                </div>
            </main>
        </div>
    );
}
