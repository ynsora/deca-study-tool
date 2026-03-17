"use client";
import React, { useState, useRef } from "react";
import { decaClusters } from "../data/events";
import { allScenarios } from "../data/scenarios-data";
import type { RoleplayScenario, GradingResult } from "../data/types";
import Timer from "../components/Timer";
import ScorePieChart from "../components/ScorePieChart";

type Mode = "Individual" | "TDM";
type View = "clusters" | "events" | "setup" | "planning" | "response" | "questions" | "grading";

const CENTURY_SKILLS = [
  "Reason effectively and use systems thinking",
  "Make judgements, decisions, and solve problems",
  "Communicate clearly",
  "Show evidence of creativity",
  "Overall impression and responses to judge's questions",
];

function levelColor(level: string): string {
  if (level === "Exceeds Expectations") return "#22c55e";
  if (level === "Meets Expectations") return "#f97316";
  if (level === "Below Expectations") return "#f59e0b";
  return "#ef4444";
}

export default function RoleplayPage() {
  const [view, setView] = useState<View>("clusters");
  const [clusterId, setClusterId] = useState<string | null>(null);
  const [scenario, setScenario] = useState<RoleplayScenario | null>(null);
  const [mode, setMode] = useState<Mode>("Individual");
  const [timerRunning, setTimerRunning] = useState(false);
  const [response, setResponse] = useState("");
  const [judgeAnswers, setJudgeAnswers] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);
  const [grading, setGrading] = useState<GradingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState(["", ""]);
  const [micActive, setMicActive] = useState<number | null>(null); // -1 = response, 0/1/2 = judge answers
  const recognitionRef = useRef<any>(null);

  const cluster = decaClusters.find((c) => c.id === clusterId);
  const clusterScenarios = allScenarios.filter((s) => s.cluster === cluster?.id);

  function reset() {
    setView("clusters");
    setClusterId(null);
    setScenario(null);
    setMode("Individual");
    setTimerRunning(false);
    setResponse("");
    setJudgeAnswers(["", "", ""]);
    setGrading(null);
    setError(null);
    setNotes(["", ""]);
    setMicActive(null);
    recognitionRef.current?.stop();
  }

  function startMic(index: number, currentValue: string, setter: (v: string) => void) {
    if (micActive === index) {
      recognitionRef.current?.stop();
      setMicActive(null);
      return;
    }
    recognitionRef.current?.stop();
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert("Speech recognition not supported. Try Chrome."); return; }
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    let base = currentValue;
    rec.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) { base += e.results[i][0].transcript + " "; }
        else { interim += e.results[i][0].transcript; }
      }
      setter(base + interim);
    };
    rec.onend = () => setMicActive(null);
    rec.start();
    recognitionRef.current = rec;
    setMicActive(index);
  }

  async function submitForGrading() {
    if (!scenario) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario, mode, response, judgeAnswers }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGrading(data);
      setView("grading");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Grading failed.");
    } finally {
      setLoading(false);
    }
  }

  // --- Cluster select ---
  if (view === "clusters") {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-1">Roleplay Grader</h1>
        <p className="text-sm mb-10" style={{ color: "#666" }}>Select a cluster to see event-specific scenarios.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#1a1a1a" }}>
          {decaClusters.map((c) => {
            const count = allScenarios.filter((s) => s.cluster === c.id).length;
            return (
              <button key={c.id} onClick={() => { setClusterId(c.id); setView("events"); }} className="text-left p-5 flex flex-col gap-2 group cursor-pointer" style={{ background: "#080808" }}>
                <div className="text-xs uppercase tracking-widest font-medium" style={{ color: "#f97316" }}>{count} scenarios</div>
                <div className="font-semibold text-sm group-hover:text-white transition-colors">{c.name}</div>
                <div className="text-xs" style={{ color: "#555" }}>{c.description}</div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // --- Event list ---
  if (view === "events" && cluster) {
    const eventMap = new Map<string, { eventCode: string; scenarios: typeof clusterScenarios }>();
    for (const s of clusterScenarios) {
      if (!eventMap.has(s.event)) eventMap.set(s.event, { eventCode: s.eventCode, scenarios: [] });
      eventMap.get(s.event)!.scenarios.push(s);
    }
    const events = Array.from(eventMap.entries());

    function pickRandom(eventName: string) {
      const entry = eventMap.get(eventName);
      if (!entry) return;
      const pool = entry.scenarios;
      const picked = pool[Math.floor(Math.random() * pool.length)];
      setScenario(picked);
      setView("setup");
    }

    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button onClick={() => setView("clusters")} className="text-xs uppercase tracking-widest mb-8 cursor-pointer transition-colors" style={{ color: "#555" }}>← All Clusters</button>
        <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#f97316" }}>{cluster.name}</div>
        <h2 className="text-2xl font-bold mb-2">Select an Event</h2>
        <p className="text-xs mb-8" style={{ color: "#444" }}>A scenario will be randomly assigned — just like real DECA.</p>
        {events.length === 0 && (
          <div className="text-sm px-4 py-3" style={{ border: "1px solid #1a1a1a", color: "#555" }}>Scenarios for this cluster are loading. Check back shortly.</div>
        )}
        <div className="flex flex-col gap-px" style={{ background: "#1a1a1a" }}>
          {events.map(([eventName, { eventCode, scenarios }]) => (
            <button key={eventName} onClick={() => pickRandom(eventName)} className="text-left px-5 py-4 flex items-center justify-between group cursor-pointer" style={{ background: "#080808" }}>
              <div>
                <div className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: "#f97316" }}>{eventCode}</div>
                <div className="text-sm font-semibold group-hover:text-white transition-colors">{eventName}</div>
                <div className="text-xs mt-0.5" style={{ color: "#444" }}>{scenarios.length} scenario{scenarios.length !== 1 ? "s" : ""} available</div>
              </div>
              <span className="text-xs" style={{ color: "#f97316" }}>Draw Scenario →</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- Setup ---
  if (view === "setup" && scenario) {
    const planningMins = mode === "Individual" ? 10 : 30;
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <button onClick={() => setView("events")} className="text-xs uppercase tracking-widest mb-8 cursor-pointer transition-colors" style={{ color: "#555" }}>← Back to Events</button>
        <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#f97316" }}>{scenario.eventCode} — {scenario.cluster}</div>
        <h2 className="text-2xl font-bold mb-2">{scenario.event}</h2>
        <p className="text-sm mb-8" style={{ color: "#666" }}>{scenario.title}</p>
        <div className="px-5 py-4 mb-8 text-sm leading-relaxed whitespace-pre-line" style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", color: "#aaa", maxHeight: 200, overflow: "auto" }}>
          {scenario.situation.substring(0, 400)}...
        </div>
        <div className="mb-2">
          <div className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "#555" }}>Select Mode</div>
          <div className="flex gap-3">
            {(["Individual", "TDM"] as Mode[]).map((m) => (
              <button key={m} onClick={() => setMode(m)} className="px-5 py-2.5 text-sm font-semibold cursor-pointer transition-all"
                style={mode === m ? { background: "#f97316", color: "#000" } : { border: "1px solid #333", color: "#555" }}>
                {m} — {m === "Individual" ? "10 min planning · 5 PIs" : "30 min planning · 7 PIs"}
              </button>
            ))}
          </div>
        </div>
        <p className="text-xs mb-8 mt-3" style={{ color: "#444" }}>
          After planning, you will have 15 minutes to present your response, then answer 3 judge follow-up questions.
        </p>
        <button onClick={() => { setTimerRunning(true); setView("planning"); }} className="px-6 py-2.5 text-sm font-semibold cursor-pointer" style={{ background: "#f97316", color: "#000" }}>
          Start — {planningMins} min planning timer
        </button>
      </div>
    );
  }

  // --- Planning phase ---
  if (view === "planning" && scenario) {
    const secs = mode === "Individual" ? 10 * 60 : 30 * 60;
    const pis = mode === "Individual" ? scenario.individualPIs : scenario.tdmPIs;
    const paperStyle: React.CSSProperties = {
      background: "#fff",
      color: "#111",
      padding: "32px 36px",
      boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      fontSize: "12.5px",
      lineHeight: "1.6",
      display: "flex",
      flexDirection: "column",
    };
    const sectionHeaderStyle: React.CSSProperties = {
      fontWeight: 700,
      fontSize: "12px",
      borderBottom: "2px solid #003DA5",
      paddingBottom: "4px",
      marginBottom: "10px",
      marginTop: "18px",
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
    };
    const clusterLabel = decaClusters.find((c) => c.id === scenario.cluster)?.name ?? scenario.cluster;
    const eventFullName = mode === "TDM"
      ? `${scenario.event.toUpperCase()} TEAM DECISION MAKING EVENT`
      : `${scenario.event.toUpperCase()} SERIES EVENT`;

    const DecaLogo = () => (
      <img src="/deca-logo.jpg" alt="DECA" style={{ width: 160, height: "auto" }} />
    );

    const PaperHeader = () => (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <DecaLogo />
        <div style={{ textAlign: "right", fontSize: "12px" }}>
          <div style={{ fontWeight: 700, color: "#003DA5", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "10px" }}>Career Cluster</div>
          <div style={{ marginBottom: "6px" }}>{clusterLabel}</div>
          <div style={{ fontWeight: 700, color: "#003DA5", letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "10px" }}>Event</div>
          <div>{scenario.event}</div>
        </div>
      </div>
    );


    return (
      <div style={{ background: "#111", minHeight: "100vh", paddingTop: "32px", paddingBottom: "64px" }}>
        {/* Timer bar */}
        <div style={{ maxWidth: "1480px", margin: "0 auto 24px", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: "#f97316" }}>Planning Phase — {mode}</div>
            <div className="text-sm font-bold" style={{ color: "#fff" }}>{scenario.event}</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <Timer durationSeconds={secs} onExpire={() => { setTimerRunning(false); setView("response"); }} running={timerRunning} />
              <div className="text-xs mt-1" style={{ color: "#555" }}>Planning time remaining</div>
            </div>
            <button onClick={() => { setTimerRunning(false); setView("response"); }} className="px-4 py-2 text-xs font-semibold cursor-pointer" style={{ border: "1px solid #333", color: "#666" }}>
              Skip →
            </button>
          </div>
        </div>

        {/* Side-by-side pages */}
        <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "20px", alignItems: "stretch" }}>

          {/* Page 1 — PIs & Instructions */}
          <div style={{ ...paperStyle, flex: 1, minWidth: 0 }}>
            <PaperHeader />
            <div style={{ textAlign: "center", marginBottom: "14px" }}>
              <div style={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.04em" }}>{eventFullName}</div>
            </div>

            <div style={sectionHeaderStyle}>Participant Instructions</div>
            <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "0" }}>
              {[
                `The event will be presented to you through your reading of the 21st Century Skills, Performance Indicators and Case Study Situation. You will have up to ${mode === "TDM" ? "30" : "10"} minutes to review this information and prepare your presentation. You may make notes to use during your presentation.`,
                `You will have up to 15 minutes to make your presentation to the judge. ${mode === "TDM" ? "All members of the team must participate in the presentation, as well as answer any questions." : "You will also answer any questions the judge may have."}`,
                "You will be evaluated on how well you demonstrate the 21st Century Skills and meet the performance indicators of this event.",
                "Turn in all of your notes and event materials when you have completed the event.",
              ].map((line, i) => (
                <li key={i} style={{ display: "flex", gap: "8px" }}>
                  <span style={{ marginTop: "3px", flexShrink: 0, fontSize: "8px" }}>■</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div style={sectionHeaderStyle}>21st Century Skills</div>
            <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "0" }}>
              {[
                "Critical Thinking – Reason effectively and use systems thinking.",
                "Problem Solving – Make judgments and decisions, and solve problems.",
                `Communication${mode === "TDM" ? " and Collaboration" : ""} – Communicate clearly${mode === "TDM" ? " and show evidence of collaboration" : ""}.`,
                "Creativity and Innovation – Show evidence of creativity.",
              ].map((skill, i) => (
                <li key={i} style={{ display: "flex", gap: "8px" }}>
                  <span style={{ marginTop: "3px", flexShrink: 0, fontSize: "8px" }}>■</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            <div style={sectionHeaderStyle}>Performance Indicators</div>
            <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
              {pis.map((pi, i) => (
                <li key={i} style={{ display: "flex", gap: "8px" }}>
                  <span style={{ marginTop: "3px", flexShrink: 0, fontSize: "8px" }}>■</span>
                  <span>{pi}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "auto", paddingTop: "24px" }}>
              <div style={{ borderTop: "1px dashed #bbb", paddingTop: "14px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Notes — Page 1</div>
                <textarea
                  value={notes[0]}
                  onChange={(e) => setNotes([e.target.value, notes[1]])}
                  rows={6}
                  placeholder="Use this space to jot down your notes..."
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #e0e0e0", outline: "none", resize: "none", fontSize: "12px", color: "#222", fontFamily: "inherit", lineHeight: "2.2", padding: "2px 0" }}
                />
              </div>
            </div>
          </div>

          {/* Page 2 — Situation */}
          <div style={{ ...paperStyle, flex: 1, minWidth: 0 }}>
            <PaperHeader />
            <div style={sectionHeaderStyle}>Case Study Situation</div>
            <p style={{ whiteSpace: "pre-line", textAlign: "justify" }}>{scenario.situation}</p>
            <div style={{ marginTop: "auto", paddingTop: "24px" }}>
              <div style={{ borderTop: "1px dashed #bbb", paddingTop: "14px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Notes — Page 2</div>
                <textarea
                  value={notes[1]}
                  onChange={(e) => setNotes([notes[0], e.target.value])}
                  rows={6}
                  placeholder="Use this space to jot down your notes..."
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #e0e0e0", outline: "none", resize: "none", fontSize: "12px", color: "#222", fontFamily: "inherit", lineHeight: "2.2", padding: "2px 0" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Notes display for response/questions phases
  const NotesDisplay = () => {
    if (!notes[0] && !notes[1]) return null;
    return (
      <div className="mb-6 text-xs" style={{ background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 2 }}>
        <div className="px-4 py-2 text-xs uppercase tracking-widest font-medium" style={{ color: "#444", borderBottom: "1px solid #1a1a1a" }}>Your Notes (read-only)</div>
        <div className="px-4 py-3" style={{ display: "grid", gridTemplateColumns: notes[0] && notes[1] ? "1fr 1fr" : "1fr", gap: "16px" }}>
          {notes[0] && <div style={{ color: "#666", whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{notes[0]}</div>}
          {notes[1] && <div style={{ color: "#666", whiteSpace: "pre-wrap", lineHeight: "1.6", borderLeft: notes[0] ? "1px solid #1a1a1a" : "none", paddingLeft: notes[0] ? "16px" : "0" }}>{notes[1]}</div>}
        </div>
      </div>
    );
  };

  // Mic button component
  const MicButton = ({ index, currentValue, setter }: { index: number; currentValue: string; setter: (v: string) => void }) => {
    const active = micActive === index;
    return (
      <button
        onClick={() => startMic(index, currentValue, setter)}
        title={active ? "Stop recording" : "Start voice input"}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold cursor-pointer transition-all"
        style={active
          ? { background: "#ef4444", color: "#fff", animation: "pulse 1.5s infinite" }
          : { border: "1px solid #333", color: "#666" }
        }
      >
        <span style={{ fontSize: "14px" }}>{active ? "⏹" : "🎤"}</span>
        {active ? "Stop" : "Speak"}
      </button>
    );
  };

  // --- Response phase ---
  if (view === "response" && scenario) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: "#f97316" }}>Response Phase</div>
            <div className="text-lg font-bold">{scenario.event}</div>
          </div>
          <div className="text-center">
            <Timer durationSeconds={15 * 60} onExpire={() => setView("questions")} running={true} />
            <div className="text-xs mt-1" style={{ color: "#555" }}>Response time</div>
          </div>
        </div>

        <p className="text-sm mb-4" style={{ color: "#666" }}>
          Present your response to the scenario. Address all performance indicators. You have 15 minutes.
        </p>

        <NotesDisplay />

        <div className="flex justify-between items-center mb-2">
          <span className="text-xs uppercase tracking-widest" style={{ color: "#444" }}>Your Response</span>
          <MicButton index={-1} currentValue={response} setter={setResponse} />
        </div>
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Type or speak your full roleplay response here..."
          rows={14}
          className="w-full outline-none resize-none text-sm mb-4"
          style={{ background: "#0e0e0e", border: "1px solid #222", color: "#fff", padding: "14px 16px" }}
          onFocus={(e) => (e.target.style.borderColor = "#f97316")}
          onBlur={(e) => (e.target.style.borderColor = "#222")}
        />

        <button onClick={() => setView("questions")} className="px-5 py-2 text-sm font-semibold cursor-pointer" style={{ background: "#f97316", color: "#000" }}>
          Submit Response →
        </button>
      </div>
    );
  }

  // --- Judge questions ---
  if (view === "questions" && scenario) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#f97316" }}>Judge Follow-Up Questions</div>
        <h2 className="text-2xl font-bold mb-2">{scenario.event}</h2>
        <p className="text-sm mb-6" style={{ color: "#666" }}>Answer each question the judge asks. Be concise and specific.</p>

        <NotesDisplay />

        <div className="flex flex-col gap-6 mb-8">
          {scenario.judgementQuestions.map((q, i) => (
            <div key={i}>
              <div className="text-sm font-semibold mb-2">{i + 1}. {q}</div>
              <div className="flex justify-end mb-1">
                <MicButton
                  index={i}
                  currentValue={judgeAnswers[i]}
                  setter={(v) => { const updated = [...judgeAnswers]; updated[i] = v; setJudgeAnswers(updated); }}
                />
              </div>
              <textarea
                value={judgeAnswers[i]}
                onChange={(e) => { const updated = [...judgeAnswers]; updated[i] = e.target.value; setJudgeAnswers(updated); }}
                rows={3}
                placeholder="Your answer..."
                className="w-full outline-none resize-none text-sm"
                style={{ background: "#0e0e0e", border: "1px solid #222", color: "#fff", padding: "12px 14px" }}
                onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                onBlur={(e) => (e.target.style.borderColor = "#222")}
              />
            </div>
          ))}
        </div>

        {error && <div className="px-4 py-3 mb-4 text-sm" style={{ background: "#1a0a0a", border: "1px solid #4a1515", color: "#f87171" }}>{error}</div>}

        <button onClick={submitForGrading} disabled={loading}
          className="px-6 py-2.5 text-sm font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: "#f97316", color: "#000" }}>
          {loading ? "Grading..." : "Submit for Grading →"}
        </button>
      </div>
    );
  }

  // --- Grading page ---
  if (view === "grading" && grading && scenario) {
    const pis = mode === "Individual" ? scenario.individualPIs : scenario.tdmPIs;

    // Build focus areas — bottom 3 scoring items by percentage
    const allScored = [
      ...grading.piScores.map((p, i) => ({ name: pis[i] ?? p.pi, score: p.score, max: 14, explanation: p.explanation, type: "PI" })),
      ...grading.centurySkillsScores.map((s, i) => ({ name: CENTURY_SKILLS[i] ?? s.skill, score: s.score, max: 6, explanation: s.explanation, type: "Skill" })),
    ];
    const focusAreas = [...allScored].sort((a, b) => (a.score / a.max) - (b.score / b.max)).slice(0, 3);

    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#f97316" }}>{scenario.eventCode} — {scenario.cluster} — {mode}</div>
            <h2 className="text-2xl font-bold mb-1">{scenario.event}</h2>
            <p className="text-sm" style={{ color: "#555" }}>{scenario.title}</p>
          </div>
          <ScorePieChart score={grading.totalScore} />
        </div>

        {/* Overall feedback */}
        <div className="px-5 py-4 mb-8 text-sm leading-relaxed" style={{ background: "#0e0e0e", border: "1px solid #1e1e1e", color: "#aaa" }}>
          {grading.overallFeedback}
        </div>

        {/* Focus Areas */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "#555" }}>Focus Areas</div>
          <p className="text-xs mb-4" style={{ color: "#444" }}>Your lowest-scoring areas — prioritize these in your next practice.</p>
          <div className="flex flex-col gap-3">
            {focusAreas.map((item, i) => (
              <div key={i} className="px-4 py-3" style={{ background: "#0a0a0a", border: `1px solid ${levelColor(item.score / item.max <= 4/14 ? "Little/No Value" : item.score / item.max <= 8/14 ? "Below Expectations" : "Meets Expectations")}22` }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold" style={{ color: "#ccc" }}>{item.name}</span>
                  <span className="text-xs font-mono" style={{ color: "#555" }}>{item.score}/{item.max} · {item.type}</span>
                </div>
                <p className="text-xs" style={{ color: "#555", lineHeight: "1.5" }}>{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PI Table */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#555" }}>Performance Indicators</div>
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1a1a1a" }}>
                <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>PI</th>
                <th className="text-center py-2 px-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Score</th>
                <th className="text-left py-2 px-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Level</th>
                <th className="text-left py-2 pl-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {grading.piScores.map((pi, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #111" }}>
                  <td className="py-3 pr-4 text-xs" style={{ color: "#aaa", maxWidth: 260 }}>{pis[i] ?? pi.pi}</td>
                  <td className="py-3 px-3 text-center font-bold font-mono" style={{ color: "#fff" }}>{pi.score}<span style={{ color: "#444", fontWeight: 400 }}>/14</span></td>
                  <td className="py-3 px-3 text-xs font-semibold whitespace-nowrap" style={{ color: levelColor(pi.level) }}>{pi.level}</td>
                  <td className="py-3 pl-3 text-xs" style={{ color: "#666" }}>{pi.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 21st Century Skills Table */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#555" }}>21st Century Skills</div>
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1a1a1a" }}>
                <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Skill</th>
                <th className="text-center py-2 px-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Score</th>
                <th className="text-left py-2 px-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Level</th>
                <th className="text-left py-2 pl-3 text-xs uppercase tracking-widest font-medium" style={{ color: "#444" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {grading.centurySkillsScores.map((sk, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #111" }}>
                  <td className="py-3 pr-4 text-xs" style={{ color: "#aaa" }}>{CENTURY_SKILLS[i] ?? sk.skill}</td>
                  <td className="py-3 px-3 text-center font-bold font-mono" style={{ color: "#fff" }}>{sk.score}<span style={{ color: "#444", fontWeight: 400 }}>/6</span></td>
                  <td className="py-3 px-3 text-xs font-semibold whitespace-nowrap" style={{ color: levelColor(sk.level) }}>{sk.level}</td>
                  <td className="py-3 pl-3 text-xs" style={{ color: "#666" }}>{sk.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grading scale reference */}
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#555" }}>DECA Grading Scale</div>
          <div className="grid grid-cols-2 gap-px" style={{ background: "#1a1a1a" }}>
            <div className="px-4 py-3" style={{ background: "#080808" }}>
              <div className="text-xs font-semibold mb-1" style={{ color: "#555" }}>Performance Indicators (1–14)</div>
              <div className="text-xs flex flex-col gap-0.5" style={{ color: "#666" }}>
                <span><span style={{ color: "#ef4444" }}>1–4</span> Little/No Value</span>
                <span><span style={{ color: "#f59e0b" }}>5–8</span> Below Expectations</span>
                <span><span style={{ color: "#f97316" }}>9–12</span> Meets Expectations</span>
                <span><span style={{ color: "#22c55e" }}>13–14</span> Exceeds Expectations</span>
              </div>
            </div>
            <div className="px-4 py-3" style={{ background: "#080808" }}>
              <div className="text-xs font-semibold mb-1" style={{ color: "#555" }}>21st Century Skills (0–6)</div>
              <div className="text-xs flex flex-col gap-0.5" style={{ color: "#666" }}>
                <span><span style={{ color: "#ef4444" }}>0–1</span> Little/No Value</span>
                <span><span style={{ color: "#f59e0b" }}>2–3</span> Below Expectations</span>
                <span><span style={{ color: "#f97316" }}>4</span> Meets Expectations</span>
                <span><span style={{ color: "#22c55e" }}>5–6</span> Exceeds Expectations</span>
              </div>
            </div>
          </div>
        </div>

        <button onClick={reset} className="px-5 py-2 text-sm font-semibold cursor-pointer" style={{ border: "1px solid #333", color: "#777" }}>
          Try Another Scenario
        </button>
      </div>
    );
  }

  return null;
}
