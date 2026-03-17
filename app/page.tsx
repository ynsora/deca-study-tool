import Link from "next/link";
import { decaClusters } from "./data/events";
import HeroSlideshow from "./components/HeroSlideshow";
import FadeInSection from "./components/FadeInSection";

const features = [
  {
    href: "/exams",
    title: "Past Cluster Exams",
    description: "Practice with real DECA multiple-choice exams organized by cluster. Pick your question count, timed or untimed.",
    cta: "Browse Exams",
    bg: "#1a0f00",
    border: "#7c3400",
    accent: "#f97316",
  },
  {
    href: "/flashcards",
    title: "Business Flashcards",
    description: "Master essential DECA business terminology with hundreds of interactive flashcards sorted by cluster.",
    cta: "Study Flashcards",
    bg: "#0a0a1f",
    border: "#2d2d7a",
    accent: "#818cf8",
  },
  {
    href: "/roleplay",
    title: "Roleplay Grader",
    description: "Event-specific DECA scenarios with planning timer, judge questions, and a full score breakdown.",
    cta: "Start Roleplay",
    bg: "#001a0f",
    border: "#1a5c36",
    accent: "#4ade80",
  },
  {
    href: "/quiz",
    title: "Event Finder Quiz",
    description: "Not sure which event to compete in? Answer 15 questions and we'll match you to the events that fit you best.",
    cta: "Take the Quiz",
    bg: "#0f0a1a",
    border: "#3b1f6e",
    accent: "#c084fc",
  },
];

export default function Home() {
  return (
    <div>
      {/* Full-width slideshow */}
      <HeroSlideshow />

      {/* Hero text */}
      <FadeInSection>
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="flex-1">
            <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#f97316" }}>
              Central Kitsap High School — DECA
            </div>
            <h1 className="text-6xl font-bold leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
              Hunt for<br />Success.
            </h1>
            <p className="text-base mb-10 max-w-md" style={{ color: "#666" }}>
              The complete DECA prep platform built for Cougars. Practice every cluster,
              every event, with feedback that grades you like a real judge.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/exams" className="px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer" style={{ background: "#f97316", color: "#000" }}>
                Start Practicing
              </Link>
              <Link href="/roleplay" className="px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer" style={{ border: "1px solid #333", color: "#999" }}>
                Try Roleplay
              </Link>
              <Link href="/about" className="px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer" style={{ border: "1px solid #333", color: "#999" }}>
                About CK DECA
              </Link>
            </div>
            <p className="text-xs mt-5" style={{ color: "#444" }}>Constructed by Alistair King</p>
          </div>

          {/* DECA logo only, bigger */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/635c470cc81318fc3e9c1e0e/639a07cada7a2d68f4e9ef31_DECA%20Diamond%20Blue.png"
              alt="DECA"
              width={220}
              height={220}
              style={{ objectFit: "contain", filter: "drop-shadow(0 0 50px rgba(249,115,22,0.2))" }}
            />
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #151515" }} />

      {/* Features — color-coded */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-xs uppercase tracking-widest mb-8 font-medium" style={{ color: "#555" }}>
          What&apos;s included
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FadeInSection key={f.href} delay={i * 0.08}>
              <div
                className="p-7 flex flex-col gap-4 h-full"
                style={{ background: f.bg, border: `1px solid ${f.border}`, minHeight: 200 }}
              >
                <h2 className="text-base font-bold">{f.title}</h2>
                <p className="text-sm flex-1" style={{ color: "#777" }}>{f.description}</p>
                <Link href={f.href} className="text-sm font-semibold transition-colors cursor-pointer" style={{ color: f.accent }}>
                  {f.cta} →
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #151515" }} />

      {/* Cluster Cards */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeInSection>
        <div className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: "#555" }}>
          Competitive events
        </div>
        <h2 className="text-2xl font-bold mb-8">6 Core Career Clusters</h2>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {decaClusters.map((cluster, i) => (
            <FadeInSection delay={i * 0.07}>
            <Link
              href={`/exams?cluster=${cluster.id}`}
              className="group cursor-pointer block"
              style={{ borderRadius: 10, overflow: "hidden", position: "relative", minHeight: 220, border: "1px solid #222", textDecoration: "none" }}
            >
              <div
                style={{ position: "absolute", inset: 0, backgroundImage: `url('${cluster.image}')`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.4s ease" }}
                className="group-hover:scale-105"
              />
              <div style={{ position: "absolute", inset: 0, background: cluster.color, transition: "opacity 0.3s ease" }} />
              <div style={{ position: "relative", zIndex: 1, padding: "22px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>{cluster.events.length} events</div>
                <div className="font-bold text-base text-white leading-snug mb-1">{cluster.name}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{cluster.description}</div>
                <div className="mt-3 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>Browse Events →</div>
              </div>
            </Link>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #151515" }} />

      {/* Roleplay section */}
      <FadeInSection>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: "#555" }}>Roleplay</div>
        <h2 className="text-2xl font-bold mb-4">Graded like a real judge</h2>
        <p className="max-w-lg text-sm mb-6" style={{ color: "#666" }}>
          Event-specific scenarios with a planning timer, 15-minute response window, judge follow-up questions,
          and full PI + 21st Century Skills scoring with a detailed score breakdown.
        </p>
        <Link href="/roleplay" className="inline-block px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer" style={{ background: "#f97316", color: "#000" }}>
          Try a Scenario
        </Link>
      </section>
      </FadeInSection>
    </div>
  );
}
