"use client";

import Link from "next/link";
import { Gavel, ShieldCheck, AlertTriangle, FileText, Scale, Clock, Globe, ChevronRight } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="shell">
            <main className="panel content-page glass">
                <div className="content-header">
                    <p className="chip">TERMS OF SERVICE</p>
                    <h1 className="result-title">이용약관</h1>
                    <p className="lead">덕후테스트 서비스 이용에 관한 권리와 의무를 안내해 드립니다.</p>
                    <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--secondary-text-color)', lineHeight: 1.7 }}>
                        본 이용약관은 덕후테스트(이하 &ldquo;서비스&rdquo; 또는 &ldquo;회사&rdquo;)가 제공하는 모든 온라인 퀴즈 및 테스트 서비스의 이용 조건에 관한 사항을 규정합니다. 서비스에 접속하거나 이용하는 모든 방문자는 본 약관의 적용을 받습니다. 본 약관을 주의 깊게 읽고 이해하신 후 서비스를 이용해 주십시오.
                    </p>
                </div>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제1조 (목적)</h2>
                    <p>
                        본 약관은 덕후테스트(&ldquo;회사&rdquo; 또는 &ldquo;서비스&rdquo;)가 제공하는 인터넷 관련 퀴즈 및 테스트 제반 서비스의 이용과 관련하여 회사와 사용자 간의 권리, 의무, 책임사항 및 기본적인 이용 조건을 규정함을 목적으로 합니다. 서비스에 접속하여 콘텐츠를 이용하는 모든 자는 본 약관에 동의한 것으로 간주합니다.
                    </p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제2조 (용어의 정의)</h2>
                    <p style={{ marginBottom: '12px', color: 'var(--secondary-text-color)' }}>본 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.</p>
                    <ul>
                        <li><strong>서비스:</strong> 접속 가능한 유무선 단말기(PC, 스마트폰, 태블릿 등)의 종류와 상관없이 이용자가 이용할 수 있는 덕후테스트와 관련된 퀴즈, 결과 화면, 인증서, 오답 노트 등 제반 서비스를 의미합니다.</li>
                        <li><strong>이용자:</strong> 회사의 서비스에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠(퀴즈, 결과 화면 등)를 열람하고 이용하는 사람을 지칭합니다. 별도의 회원가입 절차 없이 서비스를 이용하는 불특정 다수를 포함합니다.</li>
                        <li><strong>테스트 테마:</strong> 특정 애니메이션, 영화, 게임 등의 주제를 기반으로 회사가 구성하여 제공하는 질문 집합을 의미합니다.</li>
                        <li><strong>인증서:</strong> 테스트 완료 후 이용자의 점수, 닉네임, 등급을 포함하여 자동 생성되는 이미지 파일을 의미합니다.</li>
                        <li><strong>콘텐츠:</strong> 서비스 내에서 회사가 제공하는 텍스트, 이미지, 퀴즈 문항, 정답 해설, 인증서 디자인 및 이와 관련된 모든 데이터를 의미합니다.</li>
                        <li><strong>로컬 스토리지:</strong> 사용자의 기기(브라우저)에 데이터를 저장하는 웹 기술로서, 서버와 통신 없이 클라이언트 측에서만 데이터가 보관되는 방식을 의미합니다.</li>
                    </ul>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제3조 (약관의 효력 및 변경)</h2>
                    <p>이 서비스는 별도의 회원가입 절차 없이 제공되며, 이용자가 사이트에 접속하여 서비스를 이용하는 시점에 본 약관에 동의한 것으로 간주됩니다. 회사는 관련 법령을 위배하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 사이트 내에 공지함으로써 효력이 발생합니다.</p>
                    <div className="info-box" style={{ marginTop: '16px' }}>
                        <Clock size={24} className="info-icon" />
                        <div>
                            <p>중요한 약관 변경의 경우, 시행 7일 전에 서비스 내 공지를 통해 사전 안내합니다. 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하시면 됩니다. 변경 후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제4조 (서비스의 제공 및 변경)</h2>
                    <div>
                        회사는 다음과 같은 서비스를 제공합니다.
                        <ul style={{ marginTop: '12px', lineHeight: 2 }}>
                            <li>다양한 작품 세계관에 기반한 엔터테인먼트 목적의 지식 검증 서비스</li>
                            <li>테스트 결과에 따른 점수 산정 및 등급(칭호) 부여</li>
                            <li>결과 이미지(인증서) 생성 및 다운로드 기능</li>
                            <li>소셜 미디어(카카오톡, 인스타그램, X 등) 공유 기능</li>
                            <li>틀린 문제에 대한 오답 노트 제공</li>
                            <li>신규 테스트 테마 제안 및 문의 기능</li>
                        </ul>
                    </div>
                    <p style={{ marginTop: '16px' }}>회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경하거나 중단할 수 있으며, 이와 관련하여 관련법에 특별한 규정이 없는 한 이용자에게 별도의 보상을 하지 않습니다.</p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제5조 (서비스 이용 시간)</h2>
                    <div className="info-box">
                        <Globe size={24} className="info-icon" />
                        <div>
                            <p>서비스는 원칙적으로 연중무휴 24시간 제공됩니다. 단, 정기 점검, 긴급 서버 유지보수, 기술적 장애 등의 사유로 일시적으로 서비스 제공이 중단될 수 있습니다. 이 경우 회사는 사전 또는 사후에 서비스 내 공지를 통해 이용자에게 안내합니다.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제6조 (게시물의 저작권 및 귀속)</h2>
                    <p>
                        덕후테스트 플랫폼 내 제공되는 퀴즈 질문, 레이아웃, 디자인 로직, 인증서 템플릿 등 전반적 서비스 에셋의 저작권은 회사에 귀속됩니다.
                        다만, 퀴즈의 소재로 사용되는 원저작물(영화, 애니메이션 명칭, 캐릭터 이름 등)의 지식재산권은 원작자에게 귀속되며, 본 서비스는 오로지 리뷰와 비상업적 팬 콘텐츠 공유의 일환으로서 공정 이용의 범위에서 사용됩니다.
                    </p>
                    <div className="info-box" style={{ marginTop: '16px' }}>
                        <Gavel size={24} className="info-icon" />
                        <div>
                            <p>이용자는 서비스 내에서 생성된 결과 이미지(인증서)를 비상업적인 목적으로 개인 소셜 미디어, 커뮤니티 등에 자유롭게 공유할 수 있습니다. 단, 시스템 구조를 무단으로 스크래핑하거나 회사 동의 없이 템플릿 디자인을 상업적으로 활용하는 것은 엄격히 금지됩니다.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제7조 (이용자의 의무 및 금지행위)</h2>
                    <p style={{ marginBottom: '12px', color: 'var(--secondary-text-color)' }}>이용자는 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                    <div className="info-box" style={{ marginBottom: '16px' }}>
                        <AlertTriangle size={24} className="info-icon" style={{ color: '#ef4444' }} />
                        <div>
                            <ul>
                                <li>서비스의 정상적인 운영을 방해하는 행위(DDoS 공격, 과도한 API 호출, 자동화 스크립트 이용 등)</li>
                                <li>서비스의 콘텐츠(문제, 정답, 디자인 등)를 무단으로 크롤링, 스크래핑, 복제, 배포하는 행위</li>
                                <li>타인의 권리를 침해하거나 명예를 훼손하는 방식으로 인증서를 변조하여 유포하는 행위</li>
                                <li>서비스를 상업적 목적으로 무단 이용하거나 제3자에게 수익을 목적으로 재판매하는 행위</li>
                                <li>관련 법령을 위반하는 행위</li>
                                <li>회사의 사전 서면 동의 없이 서비스 브랜드, 로고, 명칭을 무단으로 사용하는 행위</li>
                            </ul>
                        </div>
                    </div>
                    <p>위반 사항 발견 시 회사는 서비스 이용을 제한하고 관련 법적 조치를 취할 수 있습니다.</p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제8조 (광고의 게재)</h2>
                    <p>
                        회사는 서비스 제공 및 유지를 위해 서비스 화면에 Google AdSense 등 제3자 광고 네트워크를 통한 타겟팅 광고 및 일반 배너 광고를 게재할 수 있습니다. 이용자는 서비스 이용 시 노출되는 광고 게재에 동의합니다.
                    </p>
                    <p style={{ marginTop: '12px' }}>
                        광고 내용 및 광고주의 서비스에 대한 책임은 해당 광고를 게재한 광고주에게 있으며, 회사는 광고를 통한 이용자와 광고주 간의 거래에 대해 법적 책임을 지지 않습니다. 이용자는 브라우저 설정 또는 Google 광고 설정 페이지를 통해 맞춤형 광고를 거부할 수 있습니다.
                    </p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제9조 (개인정보 보호)</h2>
                    <div className="info-box">
                        <ShieldCheck size={24} className="info-icon" />
                        <div>
                            <p>회사는 관련 법령에 따라 이용자의 개인정보를 보호합니다. 개인정보의 수집, 이용, 제공, 관리 등에 관한 자세한 사항은 별도로 공개하는 <Link href="/privacy" className="text-link">개인정보 처리방침</Link>에서 확인하실 수 있습니다. 덕후테스트는 회원가입 없이 운영되며, 이용자의 닉네임 및 결과 데이터는 사용자 기기의 로컬 스토리지에만 저장되고 서버로 전송되지 않습니다.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제10조 (서비스 중단 및 변경)</h2>
                    <p>회사는 다음과 같은 경우 서비스 제공을 일시적으로 중단하거나 종료할 수 있습니다.</p>
                    <ul style={{ marginTop: '12px', lineHeight: 2 }}>
                        <li>컴퓨터 등 정보통신설비의 보수점검, 교체, 고장 또는 통신 두절</li>
                        <li>서비스를 위한 설비의 유지 보수나 공사로 인한 경우</li>
                        <li>천재지변, 국가 비상사태, 전쟁 등 불가항력적 사유가 발생한 경우</li>
                        <li>사업상의 이유로 운영을 종료하는 경우</li>
                    </ul>
                    <p style={{ marginTop: '12px' }}>서비스 종료 시에는 서비스 내 공지를 통해 30일 이전에 공지할 것을 원칙으로 합니다.</p>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제11조 (면책 조항)</h2>
                    <p>
                        회사는 무료로 제공되는 본 서비스를 통해 제공된 테스트의 정답 여부나 정보의 완벽한 정확성, 신뢰성 등에 대해서 어떠한 법적 보증도 하지 않으며, 엔터테인먼트 목적 외의 수단으로 결과가 사용되어 발생하는 손해에 대해서는 책임을 지지 않습니다.
                    </p>
                    <ul style={{ marginTop: '12px', lineHeight: 2 }}>
                        <li>이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 회사는 책임지지 않습니다.</li>
                        <li>이용자가 게재한 정보, 자료, 사실의 신뢰도, 정확성에 관하여 회사는 책임을 지지 않습니다.</li>
                        <li>이용자 간 또는 이용자와 제3자 간에 서비스를 매개로 발생한 분쟁에 대해 회사는 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임도 없습니다.</li>
                        <li>서비스 내 광고를 통해 연결된 제3자 웹사이트에서의 활동 및 손해에 대해 회사는 책임지지 않습니다.</li>
                    </ul>
                </section>

                <section className="content-section card-base-styles flex-col-gap">
                    <h2>제12조 (분쟁 해결 및 준거법)</h2>
                    <div className="info-box">
                        <Scale size={24} className="info-icon" />
                        <div>
                            <p>본 약관과 관련된 분쟁에 대해서는 대한민국 법률을 준거법으로 합니다. 서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 원만한 해결을 위해 성실히 협의합니다. 협의가 이루어지지 않을 경우, 관련 법령에 따른 관할 법원에 소를 제기할 수 있습니다.</p>
                            <p style={{ marginTop: '12px' }}>서비스 이용과 관련한 문의사항 및 의견은 <Link href="/contact" className="text-link">문의하기</Link>를 통해 연락해 주시기 바랍니다.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-text-color)', fontSize: '14px' }}>
                            <ChevronRight size={14} />
                            <span>전자상거래 소비자 분쟁: 공정거래위원회 전자상거래소비자보호법 적용</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-text-color)', fontSize: '14px' }}>
                            <ChevronRight size={14} />
                            <span>소비자 분쟁 조정: 한국소비자원 (<a href="https://www.kca.go.kr" target="_blank" rel="noopener noreferrer">www.kca.go.kr</a>)</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                        <div className="info-box" style={{ flex: 1, minWidth: '200px' }}>
                            <FileText size={20} className="info-icon" />
                            <div>
                                <strong style={{ fontSize: '14px' }}>시행일자</strong>
                                <p className="update-date" style={{ marginTop: '4px' }}>2026년 3월 7일</p>
                            </div>
                        </div>
                        <div className="info-box" style={{ flex: 1, minWidth: '200px' }}>
                            <Clock size={20} className="info-icon" />
                            <div>
                                <strong style={{ fontSize: '14px' }}>최종 수정일</strong>
                                <p className="update-date" style={{ marginTop: '4px' }}>2026년 3월 7일</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="action-row" style={{ marginTop: '40px' }}>
                    <Link href="/" className="startButton action-btn">메인 화면으로</Link>
                    <Link href="/privacy" className="ghostButton action-btn">개인정보 처리방침 보기</Link>
                </div>
            </main>
        </div>
    );
}
