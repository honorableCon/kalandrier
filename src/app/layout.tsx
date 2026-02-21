import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramadan 2026 - Dakar, Sénégal",
  description: "Heures de Ramadan 1447H pour Dakar, Sénégal. Horaires de Fin Xeud et Dogg mis à jour chaque jour.",
  keywords: ["Ramadan", "Dakar", "Sénégal", "2026", "1447", "Horaires", "Iftar", "Suhoor"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
