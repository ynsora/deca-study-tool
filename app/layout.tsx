import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cougar Career Connections — DECA Prep",
  description: "DECA exam prep for Central Kitsap High School",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} min-h-screen`} style={{ background: "#080808", color: "#fff" }}>
        <nav
          style={{ borderBottom: "1px solid #1e1e1e", background: "#080808" }}
          className="px-6 py-3 flex items-center justify-between sticky top-0 z-50"
        >
          <div className="flex items-center gap-3">
            {/* CKHS Logo */}
            <img
              src="https://kokalumni.org/wp-content/uploads/2023/07/Central-Kitsap.png"
              alt="Central Kitsap High School"
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
            />
            <div>
              <Link href="/" className="block text-sm font-bold tracking-wide cursor-pointer" style={{ color: "#f97316" }}>
                Cougar Career Connections
              </Link>
              <span className="text-xs" style={{ color: "#555" }}>Central Kitsap High School</span>
            </div>
          </div>
          <div className="flex gap-1 text-sm">
            {[
              { href: "/exams", label: "Exams" },
              { href: "/flashcards", label: "Flashcards" },
              { href: "/roleplay", label: "Roleplay" },
              { href: "/about", label: "About CK DECA" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#999" }}
                className="px-3 py-1.5 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <main>{children}</main>

        <footer style={{ borderTop: "1px solid #1a1a1a", background: "#080808" }} className="px-6 py-10 mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-sm">
                <div className="text-base font-bold mb-1" style={{ color: "#f97316" }}>Cougar Career Connections</div>
                <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
                  A free DECA study platform built for Central Kitsap High School students. Practice past
                  cluster exams, master business terminology, and strengthen your roleplay skills with
                  feedback scored against real DECA Performance Indicators.
                </p>
              </div>
              <div className="flex gap-12 text-xs" style={{ color: "#444" }}>
                <div>
                  <div className="mb-2 font-semibold" style={{ color: "#666" }}>Features</div>
                  <div className="flex flex-col gap-1">
                    <Link href="/exams" className="hover:text-white transition-colors cursor-pointer">Past Exams</Link>
                    <Link href="/flashcards" className="hover:text-white transition-colors cursor-pointer">Flashcards</Link>
                    <Link href="/roleplay" className="hover:text-white transition-colors cursor-pointer">Roleplay</Link>
                    <Link href="/about" className="hover:text-white transition-colors cursor-pointer">About CK DECA</Link>
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-semibold" style={{ color: "#666" }}>Clusters</div>
                  <div className="flex flex-col gap-1">
                    <span>Marketing</span>
                    <span>Finance</span>
                    <span>Entrepreneurship</span>
                    <span>+ 3 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #151515" }} className="mt-8 pt-6 flex justify-between items-center text-xs">
              <span style={{ color: "#aaa", fontSize: "13px" }}>Central Kitsap High School — Silverdale, WA</span>
              <span style={{ color: "#bbb", fontSize: "11px" }}>Constructed by Alistair King</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
