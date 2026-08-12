import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

const platforms = [
  {name: "X", x: 18, y: 25, delay: 0},
  {name: "IG", x: 50, y: 20, delay: 3},
  {name: "YT", x: 82, y: 25, delay: 6},
  {name: "TT", x: 25, y: 72, delay: 9},
  {name: "DC", x: 50, y: 78, delay: 12},
  {name: "TG", x: 75, y: 72, delay: 15},
];

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [48, 59], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        color: "#ffffff",
        overflow: "hidden",
        opacity: intro * exit,
      }}
    >
      {/* Background glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 60% 75% at 50% 50%, rgba(55,255,135,0.13), transparent 72%)",
        }}
      />

      {/* Heading */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 400,
            letterSpacing: 4,
            lineHeight: 1,
          }}
        >
          OG USERNAMES
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: 4,
            color: "#7cffaa",
          }}
        >
          ACROSS 14 PLATFORMS
        </div>
      </AbsoluteFill>

      {/* Platform cards */}
      {platforms.map((platform) => {
        const progress = interpolate(
          frame,
          [platform.delay, platform.delay + 14],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.2)),
          },
        );

        return (
          <div
            key={platform.name}
            style={{
              position: "absolute",
              left: `${platform.x}%`,
              top: `${platform.y}%`,
              transform: `
                translate(-50%, -50%)
                translateY(${30 - progress * 30}px)
                scale(${0.75 + progress * 0.25})
              `,
              opacity: progress * 0.9,
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid rgba(100,255,160,0.35)",
              background:
                "linear-gradient(145deg, rgba(50,255,130,0.13), rgba(255,255,255,0.025))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              color: "#ffffff",
              boxShadow: "0 0 22px rgba(50,255,130,0.08)",
            }}
          >
            {platform.name}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
