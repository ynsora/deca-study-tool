"use client";
import { useEffect, useState } from "react";

interface TimerProps {
  durationSeconds: number;
  onExpire: () => void;
  running: boolean;
}

export default function Timer({ durationSeconds, onExpire, running }: TimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);

  useEffect(() => {
    setRemaining(durationSeconds);
  }, [durationSeconds]);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const tick = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) { clearInterval(tick); onExpire(); return 0; }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [running, durationSeconds]); // eslint-disable-line react-hooks/exhaustive-deps

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const warning = remaining < 120 && remaining > 0;

  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: "0.05em",
        color: warning ? "#ef4444" : "#f97316",
        transition: "color 0.5s",
      }}
    >
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}
