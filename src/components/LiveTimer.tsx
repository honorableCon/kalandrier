"use client";

import { useEffect, useState } from "react";

interface LiveTimerProps {
  targetTime: string; // "HH:MM" format
  label: string;
}

export default function LiveTimer({ targetTime, label }: LiveTimerProps) {
  const [timeLeft, setTimeLeft] = useState("");
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const [hours, minutes] = targetTime.split(":").map(Number);
      const target = new Date();
      target.setHours(hours, minutes, 0, 0);

      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setIsPast(true);
        setTimeLeft("Passé");
        return;
      }

      setIsPast(false);
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`);
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  if (!timeLeft) return null;

  return (
    <div style={{
      marginTop: 10,
      padding: "6px 14px",
      borderRadius: 20,
      background: isPast
        ? "rgba(255,100,100,0.1)"
        : "rgba(200,168,68,0.15)",
      border: `1px solid ${isPast ? "rgba(255,100,100,0.3)" : "rgba(200,168,68,0.4)"}`,
      display: "inline-block",
    }}>
      <span style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 13,
        color: isPast ? "#ff8888" : "#f0d264",
        letterSpacing: 1,
      }}>
        {isPast ? "✓" : "⏱"} {label} {isPast ? "" : `dans ${timeLeft}`}
      </span>
    </div>
  );
}
