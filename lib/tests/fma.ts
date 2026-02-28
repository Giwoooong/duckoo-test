import questionBank from "./fma-questions.json";
import type { Theme } from "./types";

export const fmaTheme: Theme = {
    id: "fma",
    name: "강철의 연금술사 덕후 테스트",
    subtitle: "등가교환의 법칙, 당신의 연금술 지식은?",
    badge: "Fullmetal Alchemist",
    accent: "#b91c1c",
    questionCount: 20,
    questions: questionBank as any
};
