import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { scenario, mode, response, judgeAnswers } = await req.json();
    if (!scenario || !response) return NextResponse.json({ error: "Missing data." }, { status: 400 });

    const pis: string[] = mode === "TDM" ? scenario.tdmPIs : scenario.individualPIs;
    const piCount = pis.length;
    const maxPITotal = piCount * 14;
    const maxSkillTotal = 5 * 6;
    const maxTotal = maxPITotal + maxSkillTotal;

    const prompt = `You are an official DECA competition judge grading a student's roleplay performance. Be rigorous, fair, and specific — treat this exactly like a real DECA competition.

EVENT: ${scenario.event} (${scenario.eventCode})
CLUSTER: ${scenario.cluster}
MODE: ${mode} (${piCount} Performance Indicators)

SCENARIO:
${scenario.situation}

STUDENT'S MAIN RESPONSE:
${response}

JUDGE FOLLOW-UP QUESTIONS AND STUDENT ANSWERS:
${scenario.judgementQuestions.map((q: string, i: number) => `Q${i + 1}: ${q}\nA${i + 1}: ${judgeAnswers?.[i] ?? "(no answer)"}`).join("\n\n")}

PERFORMANCE INDICATORS TO GRADE (score each 1–14):
${pis.map((pi: string, i: number) => `${i + 1}. ${pi}`).join("\n")}

DECA PI SCALE: 1–4 = Little/No Value | 5–8 = Below Expectations | 9–12 = Meets Expectations | 13–14 = Exceeds Expectations
DECA 21ST CENTURY SKILLS SCALE: 0–1 = Little/No Value | 2–3 = Below Expectations | 4 = Meets Expectations | 5–6 = Exceeds Expectations

Grade the student on all ${piCount} PIs AND all 5 twenty-first century skills. Then calculate totalScore as a percentage: (sum of all scores) / ${maxTotal} * 100, rounded to nearest integer.

Respond ONLY with valid JSON in exactly this structure, no markdown:
{
  "totalScore": <0-100>,
  "piScores": [
    { "pi": "<pi name>", "score": <1-14>, "level": "<level name>", "explanation": "<1-2 sentences why>" }
  ],
  "centurySkillsScores": [
    { "skill": "<skill name>", "score": <0-6>, "level": "<level name>", "explanation": "<1-2 sentences why>" }
  ],
  "overallFeedback": "<3-5 sentence overall assessment with specific strengths and areas to improve>"
}

The piScores array must have exactly ${piCount} entries. The centurySkillsScores array must have exactly 5 entries in this order:
1. Reason effectively and use systems thinking
2. Make judgements, decisions, and solve problems
3. Communicate clearly
4. Show evidence of creativity
5. Overall impression and responses to judge's questions`;

    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";

    // Strip markdown code fences if present
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const result = JSON.parse(cleaned);
    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error("Grade API error:", error);
    return NextResponse.json({ error: "Failed to grade response." }, { status: 500 });
  }
}
