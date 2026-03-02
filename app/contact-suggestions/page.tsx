"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, Lightbulb, User, Sparkles, FileText } from 'lucide-react';

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSuggestionsPage() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append("type", "테스트 제안");

        try {
            const res = await fetch("https://formspree.io/f/mvzbylda", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                const json = await res.json();
                setErrorMessage(json?.errors?.map((err: any) => err.message).join(", ") || "전송에 실패했습니다.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
            setStatus("error");
        }
    };

    return (
        <div className="shell">
            <main className="content-page glass">
                <div className="content-header">
                    <p className="eyebrow">Suggest a Test</p>
                    <h1>새로운 테스트 제안</h1>
                    <p className="lead">
                        원하는 애니, 영화, 게임, K-POP 등 어떤 주제든 자유롭게 제안해주세요!<br />
                        채택된 제안은 실제 테스트로 제작됩니다.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="contact-success">
                        <CheckCircle size={56} color="#22c55e" style={{ marginBottom: '24px' }} />
                        <h2 style={{ color: '#22c55e', marginBottom: '16px' }}>제안 완료!</h2>
                        <p className="lead" style={{ marginBottom: '40px' }}>
                            소중한 제안 감사합니다! 🎉<br />검토 후 테스트 제작에 반영하겠습니다.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                className="startButton"
                                style={{ maxWidth: '240px' }}
                                onClick={() => setStatus("idle")}
                            >
                                추가 제안하기
                            </button>
                            <Link href="/" className="ghostButton" style={{ padding: '18px 28px' }}>
                                메인으로 돌아가기
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="suggest-name" className="contact-label">
                                <User size={16} />
                                닉네임 <span style={{ color: 'var(--secondary-text-color)', fontWeight: 400 }}>(선택)</span>
                            </label>
                            <input
                                id="suggest-name"
                                name="name"
                                type="text"
                                className="contact-input"
                                placeholder="닉네임을 입력하세요"
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="suggest-title" className="contact-label">
                                <Sparkles size={16} />
                                제안할 테스트 주제
                            </label>
                            <input
                                id="suggest-title"
                                name="suggestion_title"
                                type="text"
                                required
                                className="contact-input"
                                placeholder="예: 슬램덩크, 주술회전, 스파이더맨 시리즈..."
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="suggest-category" className="contact-label">
                                <Lightbulb size={16} />
                                분야
                            </label>
                            <select
                                id="suggest-category"
                                name="category"
                                required
                                className="contact-input contact-select"
                                defaultValue=""
                            >
                                <option value="" disabled>분야를 선택해주세요</option>
                                <option value="애니메이션">애니메이션 / 만화</option>
                                <option value="영화">영화 / 드라마</option>
                                <option value="게임">게임</option>
                                <option value="K-POP">K-POP / 아이돌</option>
                                <option value="소설/웹툰">소설 / 웹툰</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="suggest-detail" className="contact-label">
                                <FileText size={16} />
                                상세 설명 <span style={{ color: 'var(--secondary-text-color)', fontWeight: 400 }}>(선택)</span>
                            </label>
                            <textarea
                                id="suggest-detail"
                                name="message"
                                className="contact-input contact-textarea"
                                placeholder="어떤 문제를 출제하면 좋을지, 어떤 난이도를 원하는지 등 자유롭게 작성해주세요"
                                rows={5}
                            />
                        </div>

                        {status === "error" && (
                            <div className="contact-error">
                                <AlertCircle size={18} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="startButton contact-submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <span className="contact-spinner">전송 중...</span>
                            ) : (
                                <>
                                    <Send size={18} className="icon-left" />
                                    제안 보내기
                                </>
                            )}
                        </button>
                    </form>
                )}
            </main>
        </div>
    );
}
