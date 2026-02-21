"use client";

import { useEffect, useState } from "react";
import { RAMADAN_START } from "@/lib/ramadanData";
import { MapPin } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const diff = RAMADAN_START.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ];

  return (
    <div style={{ textAlign: "center", animation: "fadeInUp 1s ease" }}>
      <div style={{
        fontFamily: "'Amiri', serif",
        fontSize: 28,
        color: "#c8a844",
        letterSpacing: 4,
        marginBottom: 8,
        textShadow: "0 0 20px rgba(200,168,68,0.5)"
      }}>
        رَمَضَان كَرِيم
      </div>

      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(36px, 8vw, 64px)",
        fontWeight: 900,
        letterSpacing: 10,
        textTransform: "uppercase",
        textShadow: "0 0 40px rgba(200,168,68,0.5)",
        marginBottom: 8,
      }}>
        RAMADAN
      </h1>
      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 16,
        color: "#c8a844aa",
        letterSpacing: 6,
        marginBottom: 48,
      }}>
        2026 · 1447 H · DAKAR
      </div>

      <p style={{ color: "#ffffff88", fontSize: 18, letterSpacing: 4, marginBottom: 32, fontFamily: "'Cinzel', serif" }}>
        DÉBUT DANS
      </p>

      <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
        {units.map(({ label, value }) => (
          <div key={label} style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            border: "1px solid rgba(200,168,68,0.3)",
            borderRadius: 20,
            padding: "24px 28px",
            minWidth: 110,
            textAlign: "center",
            animation: "countdownPulse 2s ease-in-out infinite",
          }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 0 20px rgba(200,168,68,0.6)",
              lineHeight: 1,
            }}>
              {String(value).padStart(2, "0")}
            </div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              color: "#c8a844",
              letterSpacing: 3,
              marginTop: 8,
              textTransform: "uppercase",
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 48,
        color: "#ffffff55",
        fontSize: 14,
        letterSpacing: 3,
        fontFamily: "'Cinzel', serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}>
        <MapPin size={14} /> DAKAR · SÉNÉGAL · 19 FÉVRIER 2026
      </div>
    </div>
  );
}
