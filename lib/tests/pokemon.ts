import questionBank from "./pokemon-questions.json";
import type { Theme, Question } from "./types";

export const pokemonTheme: Theme = {
    id: "pokemon",
    name: "포켓몬스터 덕후 테스트",
    subtitle: "1~2세대 포켓몬 마스터! 당신의 덕후력은?",
    badge: "Pokémon",
    accent: "#16a34a",
    questionCount: 20,
    questions: questionBank as unknown as Question[],
    seo: {
        title: "포켓몬스터 덕후 테스트 - 당신은 포켓몬 마스터인가요?",
        description:
            "관동·성도 지방 1~2세대 포켓몬 찐팬만 아는 문제 20선! 스타터부터 전설 포켓몬까지 당신의 덕력을 검증합니다.",
    },
};
