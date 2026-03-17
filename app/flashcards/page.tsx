"use client";
import { useState } from "react";
import { allFlashcards } from "../data/flashcards-data";

const clusters = ["All", ...Array.from(new Set(allFlashcards.map((f) => f.cluster))).sort()];

export default function FlashcardsPage() {
  const [selectedCluster, setSelectedCluster] = useState("All");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());

  const filtered =
    selectedCluster === "All" ? allFlashcards : allFlashcards.filter((f) => f.cluster === selectedCluster);

  const card = filtered[index];
  const progress = filtered.length > 0 ? (known.size / filtered.length) * 100 : 0;

  function next() { setIndex((i) => (i + 1) % filtered.length); setFlipped(false); }
  function prev() { setIndex((i) => (i - 1 + filtered.length) % filtered.length); setFlipped(false); }
  function markKnown() { setKnown((k) => new Set([...k, index])); next(); }
  function changeCluster(c: string) { setSelectedCluster(c); setIndex(0); setFlipped(false); }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-1">Business Flashcards</h1>
      <p className="text-sm mb-2" style={{ color: "#666" }}>
        Click a card to flip it. Mark terms you know to track your progress.
      </p>
      <p className="text-xs mb-8" style={{ color: "#444" }}>{allFlashcards.length} total terms across all clusters</p>

      {/* Cluster filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {clusters.map((c) => (
          <button
            key={c}
            onClick={() => changeCluster(c)}
            className="text-xs px-3 py-1 uppercase tracking-widest font-medium transition-colors cursor-pointer"
            style={selectedCluster === c ? { background: "#f97316", color: "#000" } : { border: "1px solid #222", color: "#555" }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs mb-2" style={{ color: "#555" }}>
        <span>Card {index + 1} of {filtered.length}</span>
        <span>{known.size} known</span>
      </div>
      <div className="w-full h-px mb-8" style={{ background: "#1a1a1a" }}>
        <div className="h-px transition-all" style={{ background: "#f97316", width: `${progress}%` }} />
      </div>

      {/* Card */}
      {card && (
        <div
          onClick={() => setFlipped((f) => !f)}
          className="cursor-pointer p-10 text-center flex flex-col items-center justify-center transition-all select-none"
          style={{ background: "#0e0e0e", border: `1px solid ${flipped ? "#f97316" : "#222"}`, minHeight: 220 }}
        >
          <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: flipped ? "#f97316" : "#555" }}>
            {flipped ? "Definition" : "Term — click to flip"}
          </div>
          <div className="text-xl font-semibold leading-relaxed">{flipped ? card.definition : card.term}</div>
          <div className="text-xs mt-4" style={{ color: "#444" }}>{card.cluster}</div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-between items-center mt-4">
        <button onClick={prev} className="px-4 py-2 text-sm transition-colors cursor-pointer" style={{ color: "#555" }}>← Prev</button>
        <button onClick={markKnown} className="px-5 py-2 text-sm font-semibold transition-colors cursor-pointer" style={{ background: "#f97316", color: "#000" }}>Got it</button>
        <button onClick={next} className="px-4 py-2 text-sm transition-colors cursor-pointer" style={{ color: "#555" }}>Next →</button>
      </div>
    </div>
  );
}
