"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { quizQuestions, clusterResults } from "../data/quiz-data";

type Scores = Record<string, number>;

function calculateScores(answers: (number | null)[]): Scores {
  const scores: Scores = {};
  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const option = quizQuestions[qIndex].options[answerIndex];
    for (const [cluster, points] of Object.entries(option.scores)) {
      scores[cluster] = (scores[cluster] || 0) + (points as number);
    }
  });
  return scores;
}

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const [done, setDone] = useState(false);

  const question = quizQuestions[currentQ];
  const isLast = currentQ === quizQuestions.length - 1;

  function handleSelect(i: number) {
    setSelected(i);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    setDirection(1);

    if (!isLast) {
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
      setSelected(newAnswers[nextQ]);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (currentQ === 0) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    setDirection(-1);
    const prevQ = currentQ - 1;
    setCurrentQ(prevQ);
    setSelected(newAnswers[prevQ]);
  }

  function handleRestart() {
    setCurrentQ(0);
    setAnswers(Array(quizQuestions.length).fill(null));
    setSelected(null);
    setDirection(1);
    setDone(false);
  }

  if (done) {
    const scores = calculateScores(answers);
    const ranked = Object.entries(clusterResults).sort(
      (a, b) => (scores[b[0]] || 0) - (scores[a[0]] || 0)
    );
    const top = ranked[0][1];
    const second = ranked[1][1];
    const third = ranked[2][1];

    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            className="text-xs uppercase tracking-widest mb-3 font-medium"
            style={{ color: "#555" }}
          >
            Your Result
          </div>
          <h1 className="text-4xl font-bold mb-3 leading-tight">
            You&apos;re a{" "}
            <span style={{ color: top.accentColor }}>{top.clusterName}</span>{" "}
            type.
          </h1>
          <p className="text-sm mb-12 max-w-lg" style={{ color: "#666" }}>
            {top.description}
          </p>

          {/* Top event recommendations */}
          <div className="mb-10">
            <div
              className="text-xs uppercase tracking-widest mb-4 font-medium"
              style={{ color: "#555" }}
            >
              Recommended Events
            </div>
            <div className="flex flex-col gap-3">
              {top.events.map((event, i) => (
                <motion.div
                  key={event.code}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                  className="p-5"
                  style={{
                    border: `1px solid ${top.accentColor}40`,
                    background: top.color,
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm">{event.name}</span>
                    <span
                      className="text-xs px-2 py-0.5"
                      style={{ background: "#111", color: "#555", border: "1px solid #222" }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "#666" }}>
                    {event.why}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary clusters */}
          <div className="mb-10">
            <div
              className="text-xs uppercase tracking-widest mb-4 font-medium"
              style={{ color: "#555" }}
            >
              Also Consider
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[second, third].map((c, i) => (
                <motion.div
                  key={c.clusterId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                  className="p-4"
                  style={{ border: "1px solid #1e1e1e", background: "#0d0d0d" }}
                >
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ color: c.accentColor }}
                  >
                    {c.clusterName}
                  </div>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {c.description.split(".")[0]}.
                  </p>
                  <Link
                    href={`/exams?cluster=${c.clusterId}`}
                    className="inline-block mt-2 text-xs"
                    style={{ color: "#444" }}
                  >
                    Browse events →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <Link
              href={`/exams?cluster=${top.clusterId}`}
              className="px-5 py-2.5 text-sm font-semibold"
              style={{ background: top.accentColor, color: "#000" }}
            >
              Explore {top.clusterName} Exams →
            </Link>
            <Link
              href="/roleplay"
              className="px-5 py-2.5 text-sm font-semibold"
              style={{ border: "1px solid #333", color: "#999" }}
            >
              Try a Roleplay
            </Link>
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 text-sm font-semibold cursor-pointer"
              style={{ border: "1px solid #2a2a2a", color: "#555" }}
            >
              Retake Quiz
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <div
          className="text-xs uppercase tracking-widest mb-2 font-medium"
          style={{ color: "#f97316" }}
        >
          DECA Event Finder
        </div>
        <h1 className="text-3xl font-bold">Find Your Event</h1>
        <p className="text-sm mt-2" style={{ color: "#555" }}>
          15 questions. Answer honestly and we&apos;ll match you to the DECA
          events that fit you best.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-10">
        <div
          className="flex justify-between text-xs mb-2"
          style={{ color: "#444" }}
        >
          <span>
            Question {currentQ + 1} of {quizQuestions.length}
          </span>
          <span>
            {Math.round(((currentQ + 1) / quizQuestions.length) * 100)}%
          </span>
        </div>
        <div style={{ height: 2, background: "#1a1a1a" }}>
          <motion.div
            style={{ height: "100%", background: "#f97316" }}
            animate={{
              width: `${((currentQ + 1) / quizQuestions.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question with slide transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <h2 className="text-xl font-bold mb-6">{question.question}</h2>
          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="text-left p-4 text-sm transition-all cursor-pointer"
                style={{
                  border:
                    selected === i
                      ? "1px solid #f97316"
                      : "1px solid #1e1e1e",
                  background:
                    selected === i
                      ? "rgba(249,115,22,0.07)"
                      : "#0d0d0d",
                  color: selected === i ? "#fff" : "#888",
                }}
              >
                <span
                  className="inline-block mr-3 text-xs font-bold"
                  style={{ color: selected === i ? "#f97316" : "#333" }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {option.text}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentQ === 0}
          className="px-4 py-2 text-sm cursor-pointer transition-colors"
          style={{
            border: "1px solid #1e1e1e",
            color: currentQ === 0 ? "#2a2a2a" : "#555",
            cursor: currentQ === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer"
          style={{
            background: selected !== null ? "#f97316" : "#111",
            color: selected !== null ? "#000" : "#2a2a2a",
            border: selected !== null ? "none" : "1px solid #1e1e1e",
            cursor: selected === null ? "not-allowed" : "pointer",
          }}
        >
          {isLast ? "See My Results →" : "Next →"}
        </button>
      </div>
    </div>
  );
}
