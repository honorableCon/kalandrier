"use client";

import { RamadanDay, RAMADAN_START } from "@/lib/ramadanData";
import LiveTimer from "./LiveTimer";
import { Moon, Sunset, MapPin, Heart } from "lucide-react";
import React from "react";

interface DayCardProps {
  dayData: RamadanDay;
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", maxWidth: 480, margin: "28px auto" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c8a844, transparent)" }} />
      <div style={{ width: 8, height: 8, background: "#c8a844", transform: "rotate(45deg)", boxShadow: "0 0 10px #c8a844" }} />
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c8a844, transparent)" }} />
    </div>
  );
}

function TimeCard({
  icon,
  labelFr,
  labelAr,
  time,
  timerLabel,
}: {
  icon: React.ReactNode;
  labelFr: string;
  labelAr: string;
  time: string;
  timerLabel: string;
}) {
  return (
    <div style={{
      background: "linear-gradient(160deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
      border: "1px solid rgba(200,168,68,0.3)",
      borderRadius: 24,
      padding: "28px 32px",
      textAlign: "center",
      flex: 1,
      minWidth: 200,
      maxWidth: 280,
      position: "relative",
      overflow: "hidden",
      animation: "fadeInUp 1s ease",
      backdropFilter: "blur(10px)",
    }}>
      {/* Top accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: "15%", right: "15%",
        height: 2,
        background: "linear-gradient(90deg, transparent, #c8a844, transparent)",
      }} />

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>{icon}</div>

      <div style={{
        fontFamily: "'Amiri', serif",
        fontSize: 22,
        color: "#c8a844",
        marginBottom: 4,
      }}>
        {labelAr}
      </div>

      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 11,
        color: "rgba(255,255,255,0.5)",
        letterSpacing: 4,
        textTransform: "uppercase",
        marginBottom: 18,
      }}>
        {labelFr}
      </div>

      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 52,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: 2,
        textShadow: "0 0 30px rgba(200,168,68,0.6)",
        lineHeight: 1,
      }}>
        {time}
      </div>

      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 11,
        color: "rgba(255,255,255,0.4)",
        letterSpacing: 3,
        marginTop: 8,
      }}>
        HEURES
      </div>

      <div style={{ marginTop: 12 }}>
        <LiveTimer targetTime={time} label={timerLabel} />
      </div>
    </div>
  );
}

export default function DayCard({ dayData }: DayCardProps) {
  // Calculate actual date for this day
  const dayDate = new Date(RAMADAN_START);
  dayDate.setDate(dayDate.getDate() + dayData.day - 1);
  const dateStr = dayDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Progress in Ramadan
  const progress = (dayData.day / 30) * 100;

  return (
    <div style={{ width: "100%", maxWidth: 680, animation: "fadeInUp 0.8s ease" }}>
      {/* Arabic header */}
      <div style={{
        fontFamily: "'Amiri', serif",
        fontSize: 32,
        color: "#c8a844",
        letterSpacing: 6,
        textAlign: "center",
        textShadow: "0 0 20px rgba(200,168,68,0.5)",
        marginBottom: 6,
        animation: "fadeInDown 1s ease",
      }}>
        رَمَضَان كَرِيم
      </div>

      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(36px, 8vw, 60px)",
        fontWeight: 900,
        color: "#fff",
        letterSpacing: 10,
        textAlign: "center",
        textTransform: "uppercase",
        textShadow: "0 0 50px rgba(200,168,68,0.5)",
        marginBottom: 6,
      }}>
        RAMADAN
      </h1>

      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 14,
        color: "rgba(200,168,68,0.7)",
        letterSpacing: 6,
        textAlign: "center",
        marginBottom: 32,
      }}>
        2026 · 1447 H
      </div>

      {/* Day badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, #c8a844, #8b6914)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: "pulse 2.5s ease-in-out infinite",
          position: "relative",
        }}>
          {/* Outer rings */}
          <div style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            border: "1px solid rgba(200,168,68,0.3)",
          }} />
          <div style={{
            position: "absolute",
            inset: -18,
            borderRadius: "50%",
            border: "1px solid rgba(200,168,68,0.15)",
          }} />

          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: 5,
            color: "rgba(255,248,220,0.9)",
            textTransform: "uppercase",
            marginBottom: 0,
          }}>
            JOUR
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 80,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}>
            {String(dayData.day).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Date */}
      <div style={{
        textAlign: "center",
        color: "rgba(255,255,255,0.5)",
        fontFamily: "'Cinzel', serif",
        fontSize: 13,
        letterSpacing: 3,
        textTransform: "capitalize",
        marginBottom: 0,
      }}>
        {dateStr}
      </div>

      <Divider />

      {/* Time cards */}
      <div style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 32,
      }}>
        <TimeCard
          icon={<Moon size={40} color="#c8a844" />}
          labelFr="Fin Xeud"
          labelAr="الفجر"
          time={dayData.finXeud}
          timerLabel="Xeud"
        />
        <TimeCard
          icon={<Sunset size={40} color="#c8a844" />}
          labelFr="Dogg"
          labelAr="الإفطار"
          time={dayData.dogg}
          timerLabel="Dogg"
        />
      </div>

      {/* Ramadan progress bar */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          color: "rgba(200,168,68,0.7)",
          letterSpacing: 3,
        }}>
          <span>JOUR 1</span>
          <span>{Math.round(progress)}% DU RAMADAN</span>
          <span>JOUR 30</span>
        </div>
        <div style={{
          height: 4,
          background: "rgba(255,255,255,0.1)",
          borderRadius: 4,
          overflow: "hidden",
        }}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #8b6914, #c8a844, #f0d264)",
            borderRadius: 4,
            transition: "width 1s ease",
            boxShadow: "0 0 10px rgba(200,168,68,0.5)",
          }} />
        </div>
      </div>

      <Divider />

      {/* Location & blessing */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "rgba(255,255,255,0.4)",
        fontFamily: "'Cinzel', serif",
        fontSize: 13,
        letterSpacing: 5,
        textTransform: "uppercase",
        marginBottom: 12,
      }}>
        <MapPin size={16} /> <span style={{ color: "rgba(200,168,68,0.7)" }}>Dakar</span> · Sénégal
      </div>

      <div style={{
        fontFamily: "'Amiri', serif",
        fontSize: 26,
        color: "rgba(200,168,68,0.8)",
        textAlign: "center",
        fontStyle: "italic",
        textShadow: "0 0 20px rgba(200,168,68,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}>
        Bon Ramadan Moubarak <Heart size={24} />
      </div>
    </div>
  );
}
