// Calendrier Ramadan 2026 - Dakar, Sénégal
// Source: Imam Serigne Moustapha Bousso Bakher Guédé
// Le calendrier commence le jeudi 19 février 2026

export interface RamadanDay {
  day: number;
  finXeud: string; // Abstinence (Diapp) - Suhoor end
  dogg: string;    // Rupture (Dogg) - Iftar time
}

// Ramadan 1447H starts February 19, 2026
export const RAMADAN_START = new Date(2026, 1, 19); // Month is 0-indexed (1 = February)

export const RAMADAN_SCHEDULE: RamadanDay[] = [
  { day: 1,  finXeud: "06:10", dogg: "19:18" },
  { day: 2,  finXeud: "06:09", dogg: "19:18" },
  { day: 3,  finXeud: "06:09", dogg: "19:18" },
  { day: 4,  finXeud: "06:08", dogg: "19:19" },
  { day: 5,  finXeud: "06:08", dogg: "19:19" },
  { day: 6,  finXeud: "06:07", dogg: "19:20" },
  { day: 7,  finXeud: "06:07", dogg: "19:20" },
  { day: 8,  finXeud: "06:07", dogg: "19:20" },
  { day: 9,  finXeud: "06:06", dogg: "19:20" },
  { day: 10, finXeud: "06:05", dogg: "19:20" },
  { day: 11, finXeud: "06:05", dogg: "19:20" },
  { day: 12, finXeud: "06:04", dogg: "19:21" },
  { day: 13, finXeud: "06:04", dogg: "19:21" },
  { day: 14, finXeud: "06:04", dogg: "19:21" },
  { day: 15, finXeud: "06:03", dogg: "19:21" },
  { day: 16, finXeud: "06:02", dogg: "19:21" },
  { day: 17, finXeud: "06:01", dogg: "19:22" },
  { day: 18, finXeud: "06:01", dogg: "19:22" },
  { day: 19, finXeud: "06:01", dogg: "19:22" },
  { day: 20, finXeud: "06:00", dogg: "19:22" },
  { day: 21, finXeud: "05:59", dogg: "19:22" },
  { day: 22, finXeud: "05:58", dogg: "19:23" },
  { day: 23, finXeud: "05:58", dogg: "19:23" },
  { day: 24, finXeud: "05:58", dogg: "19:23" },
  { day: 25, finXeud: "05:57", dogg: "19:23" },
  { day: 26, finXeud: "05:56", dogg: "19:23" },
  { day: 27, finXeud: "05:55", dogg: "19:23" },
  { day: 28, finXeud: "05:55", dogg: "19:23" },
  { day: 29, finXeud: "05:54", dogg: "19:23" },
  { day: 30, finXeud: "05:53", dogg: "19:24" },
];

export function getCurrentRamadanDay(): RamadanDay | null {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(RAMADAN_START.getFullYear(), RAMADAN_START.getMonth(), RAMADAN_START.getDate());

  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Day 1 is day 0 in offset
  const dayIndex = diffDays;

  if (dayIndex < 0 || dayIndex >= RAMADAN_SCHEDULE.length) {
    return null; // Before or after Ramadan
  }

  return RAMADAN_SCHEDULE[dayIndex];
}

export function getRamadanStatus(): "before" | "during" | "after" {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(RAMADAN_START.getFullYear(), RAMADAN_START.getMonth(), RAMADAN_START.getDate());
  const end = new Date(start);
  end.setDate(end.getDate() + 30);

  if (today < start) return "before";
  if (today >= end) return "after";
  return "during";
}

export function getDaysUntilRamadan(): number {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(RAMADAN_START.getFullYear(), RAMADAN_START.getMonth(), RAMADAN_START.getDate());
  const diff = start.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
