import type { Question } from "@/lib/tests/types";

export interface QuizResult {
  score: number;
  correct: number;
  rawPoints: number;
  totalPoints: number;
}

export function shuffle<T>(arr: T[]): T[] {
  const copied = [...arr];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

export function shuffleQuestionOptions(question: Question): Question {
  const optionsWithIndex = question.options.map((text, idx) => ({ text, idx }));
  const shuffled = shuffle(optionsWithIndex);
  return {
    ...question,
    options: shuffled.map((entry) => entry.text),
    answerIndex: shuffled.findIndex((entry) => entry.idx === question.answerIndex)
  };
}

export function buildQuiz(questions: Question[], count: number): Question[] {
  // To reach exactly 100 points with 20 questions, and favoring easier questions:
  // 8 Easy (4 points) = 32
  // 8 Medium (5 points) = 40
  // 4 Hard (7 points) = 28
  // Total = 100 points.

  const easyCount = count === 20 ? 8 : Math.floor(count * 0.4);
  const midCount = count === 20 ? 8 : Math.floor(count * 0.4);
  const hardCount = count - easyCount - midCount;

  const easy = shuffle(questions.filter((q) => q.difficulty === "하")).slice(0, easyCount);
  const mid = shuffle(questions.filter((q) => q.difficulty === "중")).slice(0, midCount);
  const hard = shuffle(questions.filter((q) => q.difficulty === "상")).slice(0, hardCount);

  const picked = [...easy, ...mid, ...hard];

  if (picked.length < count) {
    const rest = shuffle(questions.filter((q) => !picked.includes(q)));
    picked.push(...rest.slice(0, count - picked.length));
  }

  return shuffle(picked.slice(0, count)).map(shuffleQuestionOptions);
}

export function calculateResult(quiz: Question[], answers: Array<number | null>): QuizResult {
  const totalPoints = quiz.reduce((sum, question) => sum + question.points, 0);
  const rawPoints = quiz.reduce((sum, question, i) => {
    return sum + (answers[i] === question.answerIndex ? question.points : 0);
  }, 0);
  const correct = quiz.reduce((sum, question, i) => sum + (answers[i] === question.answerIndex ? 1 : 0), 0);

  return {
    score: totalPoints === 0 ? 0 : Math.round((rawPoints / totalPoints) * 100),
    correct,
    rawPoints,
    totalPoints
  };
}
