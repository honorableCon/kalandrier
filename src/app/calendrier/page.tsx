import MosqueSilhouette from "@/components/MosqueSilhouette";
import Moon from "@/components/Moon";
import SchedulePage from "@/components/SchedulePage";

export const metadata = {
  title: "Calendrier Ramadan 2026 - Dakar",
};

export default function Calendrier() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="stars-bg" />
      <MosqueSilhouette />
      <Moon />

      <main className="page-wrapper" style={{ position: "relative", zIndex: 1, paddingTop: 60 }}>
        <SchedulePage />
      </main>
    </>
  );
}
