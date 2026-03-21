import questionBank from "./bleach-questions.json";
import type { Theme, Question } from "./types";

export const bleachTheme: Theme = {
  id: "bleach",
  name: "블리치 덕후 테스트",
  subtitle: "만해(卍解)...! 당신의 진짜 영력을 증명하라.",
  badge: "Bleach",
  accent: "#ea580c",
  questionCount: 20,
  questions: questionBank as unknown as Question[],
  seo: {
    title: "블리치 덕후 테스트 - 나는 호정 13대 대장급인가?",
    description:
      "블리치 만화 및 천년혈전 애니메이션 세계관 덕력 고사! 참백도, 에스파다, 호정 13대, 퀸시 지식을 테스트합니다.",
  },
};
