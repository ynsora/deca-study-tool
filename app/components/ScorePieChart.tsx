"use client";
import { useEffect, useState } from "react";

export default function ScorePieChart({ score }: { score: number }) {
  const [animated, setAnimated] = useState(0);
  const size = 210;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const t = setTimeout(() => setAnimated(score), 200);
    return () => clearTimeout(t);
  }, [score]);

  const offset = circumference - (animated / 100) * circumference;
  const color = score >= 75 ? "#22c55e" : score >= 50 ? "#f97316" : "#ef4444";
  const label = score >= 75 ? "Exceeds" : score >= 50 ? "Meets" : "Below";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size}>
          {/* Outer decorative ring */}
          <circle cx={size / 2} cy={size / 2} r={radius + 12} fill="none" stroke="#111" strokeWidth={1} />
          {/* Track */}
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#1e1e1e" strokeWidth={14} />
          {/* Progress */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke={color}
            strokeWidth={14}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1), stroke 0.5s ease", filter: `drop-shadow(0 0 8px ${color}60)` }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <span style={{ fontSize: 42, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>{score}</span>
          <span style={{ fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>out of 100</span>
        </div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label} Expectations</div>
    </div>
  );
}
