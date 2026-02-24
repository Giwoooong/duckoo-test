import questionBank from "./lol-questions.json";
import type { Theme } from "./types";

export const lolTheme: Theme = {
    id: "lol",
    name: "리그 오브 레전드 덕후 테스트",
    subtitle: "소환사의 협곡에서 당신의 티어는?",
    badge: "League of Legends",
    accent: "#c8aa6e",
    questionCount: 20,
    questions: questionBank as any
};
