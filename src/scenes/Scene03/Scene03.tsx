import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const accountsExit = interpolate(frame, [25, 38], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const socialProgress = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const finalOpacity = interpolate(frame, [65, 74], [1, 0], {
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
      {/* Ambient glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 50%, rgba(55,255,135,0.15), transparent 72%)",
        }}
      />

      {/* ACCOUNTS */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: intro * accountsExit * finalOpacity,
          transform: `translateY(${(1 - intro) * 25}px)`,
        }}
      >
        <div
          style={{
            fontSize: 62,
            fontWeight: 300,
            letterSpacing: 7,
            lineHeight: 1,
          }}
        >
          ACCOUNTS
        </div>
      </AbsoluteFill>

      {/* SOCIAL PAGES */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: socialProgress * finalOpacity,
          transform: `
            translateY(${30 - socialProgress * 30}px)
            scale(${0.92 + socialProgress * 0.08})
          `,
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 300,
            letterSpacing: 5,
            textAlign: "center",
          }}
        >
          SOCIAL
          <br />
          <span
            style={{
              color: "#43ff8a",
              textShadow: "0 0 24px rgba(67,255,138,0.35)",
            }}
          >
            PAGES
          </span>
        </div>
      </AbsoluteFill>

      {/* Small transition line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `${socialProgress * 160}px`,
          height: 1,
          transform: "translate(-50%, 48px)",
          background:
            "linear-gradient(90deg, transparent, #43ff8a, transparent)",
          opacity: socialProgress * 0.7,
        }}
      />
    </AbsoluteFill>
  );
};
