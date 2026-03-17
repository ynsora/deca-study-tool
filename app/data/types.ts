export interface Question {
  q: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface Flashcard {
  term: string;
  definition: string;
  cluster: string;
}

export interface RoleplayScenario {
  id: string;
  cluster: string;
  event: string;
  eventCode: string;
  type?: "Individual" | "TDM";
  title?: string;
  situation: string;
  individualPIs: string[];
  tdmPIs: string[];
  judgementQuestions: [string, string, string];
}

export interface PIScore {
  pi: string;
  score: number;
  maxScore: 14;
  level: string;
  explanation: string;
}

export interface SkillScore {
  skill: string;
  score: number;
  maxScore: 6;
  level: string;
  explanation: string;
}

export interface GradingResult {
  totalScore: number;
  piScores: PIScore[];
  centurySkillsScores: SkillScore[];
  overallFeedback: string;
}
