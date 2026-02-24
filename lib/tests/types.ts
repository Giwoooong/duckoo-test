export type Difficulty = "하" | "중" | "상";

export interface Question {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  difficulty: Difficulty;
  points: number;
}

export interface Theme {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  accent: string;
  questionCount: number;
  questions: Question[];
}
