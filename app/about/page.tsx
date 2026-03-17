"use client";

const officers = [
  {
    name: "Annika Pexton",
    role: "President",
    year: "Senior",
    membership: "4th Year Member",
    image: "/officers/president.jpg",
  },
  {
    name: "Kai Livingston",
    role: "Vice President",
    year: "Senior",
    membership: "3rd Year Member",
    image: "/officers/vp.jpg",
  },
  {
    name: "Ava Chadwick",
    role: "Treasurer",
    year: "Senior",
    membership: "3rd Year Member",
    image: "/officers/treasurer.jpg",
  },
  {
    name: "Logan Johnson",
    role: "Secretary",
    year: "Senior",
    membership: "3rd Year Member",
    image: "/officers/secretary.jpg",
  },
  {
    name: "MiaLei Ferrugga",
    role: "Public Relations",
    year: "Senior",
    membership: "3rd Year Member",
    image: "/officers/pr.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <div
          className="text-xs uppercase tracking-widest mb-3 font-medium"
          style={{ color: "#f97316" }}
        >
          Central Kitsap High School
        </div>
        <h1 className="text-4xl font-bold mb-4">About CK DECA</h1>
        <p className="text-sm max-w-xl leading-relaxed" style={{ color: "#666" }}>
          Central Kitsap DECA is a student-led organization preparing members for careers in
          marketing, finance, hospitality, and business management. We compete at district, state,
          and international levels — and we&apos;re proud to represent Silverdale, WA.
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} className="mb-16" />

      {/* Officers */}
      <div>
        <div
          className="text-xs uppercase tracking-widest mb-2 font-medium"
          style={{ color: "#555" }}
        >
          Leadership
        </div>
        <h2 className="text-2xl font-bold mb-10">Meet Your Officers</h2>

        <div className="flex flex-col gap-px" style={{ background: "#1a1a1a" }}>
          {officers.map((officer) => (
            <div key={officer.name} className="flex gap-0" style={{ background: "#080808" }}>
              {/* Photo — portrait orientation */}
              <div
                style={{
                  border: "1px solid #f97316",
                  background: "#0e0e0e",
                  width: 160,
                  minHeight: 220,
                  flexShrink: 0,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={officer.image}
                  alt={officer.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    position: "absolute",
                    inset: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    zIndex: -1,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                    }}
                  />
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#333" }}>
                    Photo Soon
                  </span>
                </div>
              </div>

              {/* Info — right side */}
              <div className="flex flex-col justify-center px-8 py-6">
                <div
                  className="text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ color: "#f97316" }}
                >
                  {officer.role}
                </div>
                <div className="font-bold text-xl mb-1">{officer.name}</div>
                <div className="text-xs" style={{ color: "#555" }}>
                  {officer.year} — {officer.membership}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} className="mt-20 mb-16" />

      {/* Chapter info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#1a1a1a" }}>
        {[
          { label: "School", value: "Central Kitsap High School" },
          { label: "Location", value: "Silverdale, WA" },
          { label: "Competition Level", value: "District · State · International" },
        ].map((item) => (
          <div key={item.label} className="p-5" style={{ background: "#080808" }}>
            <div
              className="text-xs uppercase tracking-widest font-medium mb-1"
              style={{ color: "#555" }}
            >
              {item.label}
            </div>
            <div className="text-sm font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
