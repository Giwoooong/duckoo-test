import questionBank from "./onepiece-questions.json";
import type { Theme, Question } from "./types";

export const onepieceTheme: Theme = {
  id: "onepiece",
  name: "원피스 덕후 테스트",
  subtitle: "위대한 항로부터 신세계까지, 당신의 덕후력은?",
  badge: "One Piece",
  accent: "#b7792f",
  questionCount: 20,
  questions: questionBank as unknown as Question[]
};
