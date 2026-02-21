"use client";

export default function Moon() {
  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        right: 60,
        animation: "moonGlow 3s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "transparent",
          boxShadow: "-20px 5px 0 10px #f0d050",
          filter: "drop-shadow(0 0 25px rgba(240,208,80,0.6))",
        }}
      />
    </div>
  );
}
