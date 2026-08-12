import React from "react";
import {AbsoluteFill} from "remotion";

type NeonBackgroundProps = {
  intensity?: number;
};

export const NeonBackground: React.FC<NeonBackgroundProps> = ({
  intensity = 1,
}) => {
  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background: "#020403",
      }}
    >
      {/* Main green glow */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(
              ellipse 65% 75% at 50% 48%,
              rgba(50, 255, 130, ${0.24 * intensity}) 0%,
              rgba(20, 150, 70, ${0.12 * intensity}) 30%,
              rgba(0, 0, 0, 0) 72%
            )
          `,
        }}
      />

      {/* Secondary glow */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(
              ellipse 35% 45% at 18% 82%,
              rgba(40, 255, 120, ${0.13 * intensity}) 0%,
              rgba(0, 0, 0, 0) 75%
            )
          `,
        }}
      />

      {/* Dark vignette */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(
              ellipse 85% 90% at 50% 50%,
              transparent 30%,
              rgba(0, 0, 0, 0.45) 100%
            )
          `,
        }}
      />
    </AbsoluteFill>
  );
};