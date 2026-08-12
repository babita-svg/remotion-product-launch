import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene08Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const logoProgress = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [100, 119], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* Main atmosphere */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(50,255,130,0.2), rgba(20,100,50,0.05) 40%, transparent 75%)",
          opacity: intro * exit,
        }}
      />

      {/* Large soft glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 280,
          height: 280,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "rgba(67,255,138,0.12)",
          filter: "blur(90px)",
          opacity: logoProgress * exit,
        }}
      />

      {/* Brand mark */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "39%",
          transform: `
            translate(-50%, -50%)
            scale(${0.75 + logoProgress * 0.25})
          `,
          opacity: logoProgress * exit,
          width: 76,
          height: 76,
          borderRadius: 22,
          border: "1px solid rgba(67,255,138,0.55)",
          background:
            "linear-gradient(145deg, rgba(67,255,138,0.2), rgba(255,255,255,0.025))",
          boxShadow:
            "0 0 40px rgba(67,255,138,0.18), inset 0 0 30px rgba(67,255,138,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            color: "#43ff8a",
            fontSize: 31,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          OG
        </div>
      </div>

      {/* Main title */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "54%",
          textAlign: "center",
          opacity: intro * exit,
          transform: `translateY(${25 - intro * 25}px)`,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 300,
            letterSpacing: 5,
          }}
        >
          OWN YOUR
        </div>

        <div
          style={{
            marginTop: 5,
            fontSize: 42,
            fontWeight: 600,
            letterSpacing: 5,
            color: "#43ff8a",
            textShadow: "0 0 28px rgba(67,255,138,0.3)",
          }}
        >
          IDENTITY
        </div>
      </div>

      {/* Supporting line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "17%",
          textAlign: "center",
          opacity: logoProgress * exit,
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: 4,
          color: "#8c958f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        DIGITAL OWNERSHIP, REDEFINED
      </div>

      {/* Bottom line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "11%",
          width: `${logoProgress * 150}px`,
          height: 1,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(90deg, transparent, #43ff8a, transparent)",
          opacity: logoProgress * exit,
        }}
      />
    </AbsoluteFill>
  );
};