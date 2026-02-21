export default function MosqueSilhouette() {
  return (
    <svg
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        opacity: 0.08,
        pointerEvents: "none",
        zIndex: 0,
      }}
      fill="#c8a844"
    >
      {/* Left minaret */}
      <rect x="60" y="30" width="24" height="170" />
      <polygon points="60,30 72,0 84,30" />
      <rect x="54" y="60" width="36" height="6" />
      <rect x="54" y="90" width="36" height="6" />

      {/* Right minaret */}
      <rect x="716" y="30" width="24" height="170" />
      <polygon points="716,30 728,0 740,30" />
      <rect x="710" y="60" width="36" height="6" />
      <rect x="710" y="90" width="36" height="6" />

      {/* Central dome */}
      <ellipse cx="400" cy="80" rx="120" ry="90" />
      {/* Finial */}
      <rect x="396" y="-10" width="8" height="30" />
      <polygon points="393,-10 400,-25 407,-10" />

      {/* Side domes */}
      <ellipse cx="240" cy="120" rx="75" ry="60" />
      <ellipse cx="560" cy="120" rx="75" ry="60" />

      {/* Smaller side domes */}
      <ellipse cx="150" cy="145" rx="50" ry="40" />
      <ellipse cx="650" cy="145" rx="50" ry="40" />

      {/* Main body / base */}
      <rect x="80" y="155" width="640" height="45" />

      {/* Arched windows/doors */}
      <rect x="360" y="158" width="36" height="42" rx="18" />
      <rect x="210" y="160" width="28" height="38" rx="14" />
      <rect x="562" y="160" width="28" height="38" rx="14" />
    </svg>
  );
}
