"use client";

import { RAMADAN_SCHEDULE, RAMADAN_START, getCurrentRamadanDay } from "@/lib/ramadanData";
import Link from "next/link";
import { ArrowLeft, Moon, Sunset, ChevronRight } from "lucide-react";

export default function SchedulePage() {
  const currentDay = getCurrentRamadanDay();

  return (
    <div style={{ width: "100%", maxWidth: 780, animation: "fadeInUp 0.8s ease" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 28,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 4,
          }}>
            CALENDRIER RAMADAN
          </h1>
          <p style={{ color: "rgba(200,168,68,0.7)", fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 3 }}>
            2026 · 1447H · DAKAR, SÉNÉGAL
          </p>
        </div>
        <Link href="/" style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 12,
          color: "#c8a844",
          letterSpacing: 3,
          textDecoration: "none",
          border: "1px solid rgba(200,168,68,0.4)",
          padding: "8px 16px",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <ArrowLeft size={14} /> AUJOURD'HUI
        </Link>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                color: "#c8a844",
                letterSpacing: 3,
                padding: "12px 16px",
                textAlign: "center",
                borderBottom: "1px solid rgba(200,168,68,0.2)",
              }}>
                JOUR
              </th>
              <th style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                color: "#c8a844",
                letterSpacing: 3,
                padding: "12px 16px",
                textAlign: "center",
                borderBottom: "1px solid rgba(200,168,68,0.2)",
              }}>
                DATE
              </th>
              <th style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                color: "#c8a844",
                letterSpacing: 3,
                padding: "12px 16px",
                textAlign: "center",
                borderBottom: "1px solid rgba(200,168,68,0.2)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  FIN XEUD <Moon size={12} />
                </div>
              </th>
              <th style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                color: "#c8a844",
                letterSpacing: 3,
                padding: "12px 16px",
                textAlign: "center",
                borderBottom: "1px solid rgba(200,168,68,0.2)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  DOGG <Sunset size={12} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {RAMADAN_SCHEDULE.map((row) => {
              const date = new Date(RAMADAN_START);
              date.setDate(date.getDate() + row.day - 1);
              const dateStr = date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
              const isCurrent = currentDay?.day === row.day;
              const isPast = currentDay ? row.day < currentDay.day : false;

              return (
                <tr key={row.day} style={{
                  background: isCurrent
                    ? "rgba(200,168,68,0.12)"
                    : row.day % 2 === 0
                      ? "rgba(255,255,255,0.02)"
                      : "transparent",
                  borderLeft: isCurrent ? "3px solid #c8a844" : "3px solid transparent",
                  opacity: isPast ? 0.5 : 1,
                  transition: "background 0.2s",
                }}>
                  <td style={{ padding: "14px 16px", textAlign: "center" }}>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: isCurrent ? 18 : 15,
                      fontWeight: isCurrent ? 700 : 400,
                      color: isCurrent ? "#f0d264" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                    }}>
                      {String(row.day).padStart(2, "0")}
                      {isCurrent && <ChevronRight size={14} />}
                    </span>
                  </td>
                  <td style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: 2,
                    textTransform: "capitalize",
                  }}>
                    {dateStr}
                  </td>
                  <td style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: 16,
                    color: isCurrent ? "#c8a844" : "#fff",
                    fontWeight: isCurrent ? 700 : 400,
                  }}>
                    {row.finXeud}
                  </td>
                  <td style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontFamily: "'Cinzel', serif",
                    fontSize: 16,
                    color: isCurrent ? "#c8a844" : "#fff",
                    fontWeight: isCurrent ? 700 : 400,
                  }}>
                    {row.dogg}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{
        marginTop: 24,
        padding: 16,
        borderTop: "1px solid rgba(200,168,68,0.2)",
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        fontFamily: "'Amiri', serif",
        fontSize: 14,
      }}>
        Source : Imam Serigne Moustapha Bousso Bakher Guédé · DAAHIRA SOULLAMOUL WOUSSOOLLE
      </div>
    </div>
  );
}
