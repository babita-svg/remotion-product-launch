import React from "react";

type GlowProps = {
  size?: number;
  opacity?: number;
  blur?: number;
};

export const Glow: React.FC<GlowProps> = ({
  size = 300,
  opacity = 0.35,
  blur = 80,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#39ff88",
        opacity,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
      }}
    />
  );
};