import { marketingQuestions } from "./marketing";
import { financeQuestions } from "./finance";
import { financeExtraQuestions } from "./finance-extra";
import { hospitalityPart1Questions } from "./hospitality-part1";
import { hospitalityPart2Questions } from "./hospitality-part2";
import { businessManagementPart1Questions } from "./business-management-part1";
import { businessManagementPart2Questions } from "./business-management-part2";
import { entrepreneurshipQuestions } from "./entrepreneurship";
import { entrepreneurshipExtraQuestions } from "./entrepreneurship-extra";
import { personalFinanceQuestions } from "./personal-finance";
import type { Question } from "../types";

export const questionsByCluster: Record<string, Question[]> = {
  "marketing": marketingQuestions,
  "finance": [...financeQuestions, ...financeExtraQuestions],
  "hospitality": [...hospitalityPart1Questions, ...hospitalityPart2Questions],
  "business-management": [...businessManagementPart1Questions, ...businessManagementPart2Questions],
  "entrepreneurship": [...entrepreneurshipQuestions, ...entrepreneurshipExtraQuestions],
  "personal-finance": personalFinanceQuestions,
};

export function getRandomQuestions(clusterId: string, count: number): Question[] {
  const pool = questionsByCluster[clusterId] ?? [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}
