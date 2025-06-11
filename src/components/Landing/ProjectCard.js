import React from "react";

const cardStyle = {
  width: "180px",
  height: "150px",
  borderRadius: "12px",
  background: "linear-gradient(180deg,#008080 60%, #000000 40%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const nameStyle = {
  color: "#fff",
  fontSize: "1.25rem",
  padding: "0 0 12px 12px",
  fontFamily: "sans-serif",
  fontWeight: 500,
};

const githubIconStyle = {
  position: "absolute",
  right: "12px",
  bottom: "12px",
  width: "28px",
  height: "28px",
  background: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export default function CardComponent({ name, githubUrl }) {
  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={githubIconStyle}
        aria-label="GitHub"
      >
        {/* GitHub SVG Icon */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#24292F">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05 .89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.43c.85.004 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
        </svg>
      </a>
    </div>
  );
}
