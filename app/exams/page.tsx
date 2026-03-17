"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { decaClusters } from "../data/events";
import { getRandomQuestions } from "../data/questions/index";
import type { Question } from "../data/types";
import Timer from "../components/Timer";

type View = "clusters" | "setup" | "exam" | "results";

function ExamsContent() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<View>("clusters");
  const [clusterId, setClusterId] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState("50");
  const [mockMode, setMockMode] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [expired, setExpired] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = searchParams.get("cluster");
    if (id) { setClusterId(id); setView("setup"); }
  }, [searchParams]);

  const cluster = decaClusters.find((c) => c.id === clusterId);

  function startExam(mock: boolean) {
    const count = mock ? 100 : Math.min(Math.max(1, parseInt(questionCount) || 50), 300);
    const qs = getRandomQuestions(clusterId!, count);
    if (qs.length === 0) { alert("Questions for this cluster are loading — check back shortly."); return; }
    setQuestions(qs);
    setMockMode(mock);
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setExpired(false);
    setTimerRunning(mock);
    setView("exam");
  }

  function handleSelect(i: number) {
    if (revealed) return;
    setSelected(i);
  }

  function handleReveal() {
    if (selected === null) return;
    setRevealed(true);
    if (selected === questions[current].answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= questions.length) { setTimerRunning(false); setView("results"); }
    else { setCurrent((c) => c + 1); setSelected(null); setRevealed(false); }
  }

  function handleExpire() {
    setExpired(true);
    setTimerRunning(false);
    setView("results");
  }

  // --- Cluster grid ---
  if (view === "clusters") {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-1">Past Cluster Exams</h1>
        <p className="text-sm mb-10" style={{ color: "#666" }}>Select a career cluster to begin.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#1a1a1a" }}>
          {decaClusters.map((c) => (
            <button
              key={c.id}
              onClick={() => { setClusterId(c.id); setView("setup"); }}
              className="text-left p-5 flex flex-col gap-2 group cursor-pointer"
              style={{ background: "#080808" }}
            >
              <div className="text-xs uppercase tracking-widest font-medium" style={{ color: "#f97316" }}>{c.events.length} events</div>
              <div className="font-semibold text-sm group-hover:text-white transition-colors">{c.name}</div>
              <div className="text-xs" style={{ color: "#555" }}>{c.description}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- Setup ---
  if (view === "setup" && cluster) {
    const pool = getRandomQuestions(clusterId!, 1);
    const hasQuestions = pool.length > 0;
    return (
      <div className="max-w-xl mx-auto px-6 py-16">
        <button onClick={() => setView("clusters")} className="text-xs uppercase tracking-widest mb-8 cursor-pointer transition-colors" style={{ color: "#555" }}>
          ← All Clusters
        </button>
        <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#f97316" }}>{cluster.name}</div>
        <h2 className="text-2xl font-bold mb-1">Exam Setup</h2>
        <p className="text-sm mb-10" style={{ color: "#555" }}>{cluster.description}</p>

        {!hasQuestions && (
          <div className="px-4 py-3 mb-8 text-sm" style={{ background: "#111", border: "1px solid #2a2a2a", color: "#666" }}>
            Question bank for this cluster is still loading. Check back shortly.
          </div>
        )}

        <div className="mb-6">
          <label className="text-xs uppercase tracking-widest font-medium block mb-2" style={{ color: "#555" }}>
            How many questions? (1 – 300)
          </label>
          <input
            ref={inputRef}
            type="number"
            min={1}
            max={300}
            value={questionCount}
            onChange={(e) => setQuestionCount(e.target.value)}
            className="outline-none text-sm font-semibold"
            style={{ background: "#0e0e0e", border: "1px solid #333", color: "#fff", padding: "10px 14px", width: 140 }}
            onFocus={(e) => (e.target.style.borderColor = "#f97316")}
            onBlur={(e) => (e.target.style.borderColor = "#333")}
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => startExam(false)}
            disabled={!hasQuestions}
            className="px-5 py-2.5 text-sm font-semibold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ background: "#f97316", color: "#000" }}
          >
            Start Practice
          </button>
          <button
            onClick={() => startExam(true)}
            disabled={!hasQuestions}
            className="px-5 py-2.5 text-sm font-semibold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            style={{ border: "1px solid #333", color: "#999" }}
          >
            Mock Exam — 100Q · 90 min
          </button>
        </div>
      </div>
    );
  }

  // --- Results ---
  if (view === "results") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "#f97316" }}>{cluster?.name}</div>
        <div className="text-5xl font-bold mb-1">{score}<span className="text-2xl" style={{ color: "#444" }}>/{questions.length}</span></div>
        <div className="text-lg mb-1" style={{ color: "#777" }}>{pct}%</div>
        {expired && <div className="text-sm mb-6" style={{ color: "#ef4444" }}>Time expired</div>}
        <p className="text-sm mb-8" style={{ color: "#555" }}>
          {pct >= 80 ? "Excellent work. You're competition-ready." : pct >= 60 ? "Good effort. Keep reviewing weak areas." : "Keep studying — you'll get there."}
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => startExam(mockMode)} className="px-5 py-2 text-sm font-semibold cursor-pointer transition-colors" style={{ background: "#f97316", color: "#000" }}>
            Retry
          </button>
          <button onClick={() => setView("setup")} className="px-5 py-2 text-sm font-semibold cursor-pointer transition-colors" style={{ border: "1px solid #333", color: "#999" }}>
            Change Setup
          </button>
        </div>
      </div>
    );
  }

  // --- Exam ---
  if (view === "exam" && questions.length > 0) {
    const q = questions[current];
    const progress = ((current) / questions.length) * 100;
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#f97316" }}>{cluster?.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm" style={{ color: "#555" }}>{current + 1} / {questions.length}</span>
            {mockMode && <Timer durationSeconds={90 * 60} onExpire={handleExpire} running={timerRunning} />}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-px mb-8" style={{ background: "#1a1a1a" }}>
          <div className="h-px transition-all" style={{ background: "#f97316", width: `${progress}%` }} />
        </div>

        <h2 className="text-lg font-semibold mb-6 leading-relaxed">{q.q}</h2>

        <div className="flex flex-col gap-2 mb-6">
          {q.options.map((opt, i) => {
            let bg = "#0e0e0e", border = "#222", color = "#ccc";
            if (revealed) {
              if (i === q.answer) { bg = "#0f1f0a"; border = "#4ade80"; color = "#fff"; }
              else if (i === selected) { bg = "#1f0a0a"; border = "#f87171"; color = "#999"; }
              else { color = "#444"; border = "#111"; }
            } else if (selected === i) { bg = "#1a1200"; border = "#f97316"; color = "#fff"; }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="text-left px-4 py-3 text-sm cursor-pointer transition-all"
                style={{ background: bg, border: `1px solid ${border}`, color }}
              >
                <span className="font-mono text-xs mr-3" style={{ color: "#555" }}>{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="px-4 py-3 mb-6 text-sm" style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", color: "#999" }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>Explanation: </span>{q.explanation}
          </div>
        )}

        {!revealed ? (
          <button onClick={handleReveal} disabled={selected === null} className="px-5 py-2 text-sm font-semibold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed" style={{ background: "#f97316", color: "#000" }}>
            Check Answer
          </button>
        ) : (
          <button onClick={handleNext} className="px-5 py-2 text-sm font-semibold cursor-pointer" style={{ background: "#f97316", color: "#000" }}>
            {current + 1 >= questions.length ? "See Results" : "Next →"}
          </button>
        )}
      </div>
    );
  }

  return null;
}

export default function ExamsPage() {
  return <Suspense><ExamsContent /></Suspense>;
}
