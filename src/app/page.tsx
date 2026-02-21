import { getCurrentRamadanDay, getRamadanStatus, getDaysUntilRamadan } from "@/lib/ramadanData";
import DayCard from "@/components/DayCard";
import Countdown from "@/components/Countdown";
import Moon from "@/components/Moon";
import MosqueSilhouette from "@/components/MosqueSilhouette";
import Link from "next/link";

// Revalidate every hour to ensure fresh data at midnight
export const revalidate = 3600;

export default function Home() {
  const status = getRamadanStatus();
  const currentDay = getCurrentRamadanDay();

  return (
    <>
      {/* Background */}
      <div className="gradient-bg" />
      <div className="stars-bg" />

      {/* Mosque silhouette */}
      <MosqueSilhouette />

      {/* Moon */}
      <Moon />

      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 20,
        left: 20,
        zIndex: 10,
        display: "flex",
        gap: 12,
      }}>
        <Link
          href="/calendrier"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            color: "rgba(200,168,68,0.8)",
            letterSpacing: 3,
            textDecoration: "none",
            border: "1px solid rgba(200,168,68,0.3)",
            padding: "8px 14px",
            borderRadius: 20,
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          📅 CALENDRIER
        </Link>
      </nav>

      {/* Main content */}
      <main className="page-wrapper" style={{ position: "relative", zIndex: 1 }}>
        {status === "before" && <Countdown />}

        {status === "during" && currentDay && (
          <DayCard dayData={currentDay} />
        )}

        {status === "after" && (
          <div style={{ textAlign: "center", animation: "fadeInUp 1s ease" }}>
            <div style={{
              fontFamily: "'Amiri', serif",
              fontSize: 32,
              color: "#c8a844",
              marginBottom: 16,
            }}>
              الحمد لله
            </div>
            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 48,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: 8,
              marginBottom: 16,
            }}>
              RAMADAN TERMINÉ
            </h1>
            <p style={{
              fontFamily: "'Amiri', serif",
              fontSize: 24,
              color: "rgba(200,168,68,0.8)",
              marginBottom: 32,
            }}>
              Que Allah accepte votre jeûne 🤲
            </p>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 4,
            }}>
              EID MUBARAK
            </p>
          </div>
        )}
      </main>
    </>
  );
}
