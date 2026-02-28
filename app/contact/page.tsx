"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare, User } from 'lucide-react';

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

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
                    <p className="eyebrow">Contact</p>
                    <h1>문의하기</h1>
                    <p className="lead">
                        제휴 제안, 테스트 건의, 오류 신고 등 무엇이든 편하게 보내주세요.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="contact-success">
                        <CheckCircle size={56} color="#22c55e" style={{ marginBottom: '24px' }} />
                        <h2 style={{ color: '#22c55e', marginBottom: '16px' }}>전송 완료!</h2>
                        <p className="lead" style={{ marginBottom: '40px' }}>
                            소중한 의견 감사합니다.<br />빠른 시일 내에 확인 후 답변드리겠습니다.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                className="startButton"
                                style={{ maxWidth: '240px' }}
                                onClick={() => setStatus("idle")}
                            >
                                추가 문의하기
                            </button>
                            <Link href="/" className="ghostButton" style={{ padding: '18px 28px' }}>
                                메인으로 돌아가기
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-field">
                            <label htmlFor="contact-name" className="contact-label">
                                <User size={16} />
                                이름 / 닉네임
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                className="contact-input"
                                placeholder="이름 또는 닉네임을 입력하세요"
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-email" className="contact-label">
                                <Mail size={16} />
                                이메일
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                required
                                className="contact-input"
                                placeholder="답변받으실 이메일 주소"
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-category" className="contact-label">
                                <MessageSquare size={16} />
                                문의 유형
                            </label>
                            <select
                                id="contact-category"
                                name="category"
                                required
                                className="contact-input contact-select"
                                defaultValue=""
                            >
                                <option value="" disabled>문의 유형을 선택해주세요</option>
                                <option value="제휴 제안">제휴 제안</option>
                                <option value="테스트 건의">새로운 테스트 건의</option>
                                <option value="오류 신고">오류 신고 / 버그 제보</option>
                                <option value="문제 오류">문제 정답 오류 제보</option>
                                <option value="기타 문의">기타 문의</option>
                            </select>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message" className="contact-label">
                                <Send size={16} />
                                내용
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                className="contact-input contact-textarea"
                                placeholder="문의 내용을 자세히 작성해주세요"
                                rows={6}
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
                                    문의 보내기
                                </>
                            )}
                        </button>
                    </form>
                )}
            </main>
        </div>
    );
}
