import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

const floatingWords = [
  {text: "ROYAL", x: 12, y: 18, delay: 8, size: 14},
  {text: "GHOST", x: 78, y: 20, delay: 14, size: 13},
  {text: "ORIGIN", x: 7, y: 68, delay: 20, size: 13},
  {text: "VISION", x: 82, y: 66, delay: 25, size: 14},
  {text: "LEGACY", x: 17, y: 84, delay: 30, size: 12},
  {text: "CROWN", x: 72, y: 85, delay: 34, size: 13},
];

const highlightedWords = ["NAMES", "SILVER", "ELITE"];

export const Scene01Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const introProgress = interpolate(
    frame,
    [0, 24],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );

  const exitProgress = interpolate(
    frame,
    [70, 89],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const overallOpacity = introProgress * exitProgress;

  const wordIndex = Math.min(
    Math.floor(frame / 18),
    highlightedWords.length - 1,
  );

  const activeWord = highlightedWords[wordIndex];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        overflow: "hidden",
        opacity: overallOpacity,
      }}
    >
      {/* Central green atmosphere */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 50%, rgba(55,255,135,0.18) 0%, rgba(20,100,50,0.08) 35%, transparent 75%)",
        }}
      />

      {/* Soft central glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 260,
          height: 260,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "rgba(50,255,130,0.12)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating names */}
      {floatingWords.map((word, index) => {
        const progress = interpolate(
          frame,
          [word.delay, word.delay + 18],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          },
        );

        return (
          <div
            key={word.text}
            style={{
              position: "absolute",
              left: `${word.x}%`,
              top: `${word.y}%`,
              transform: `translate(-50%, -50%) translateY(${18 - progress * 18}px)`,
              opacity: progress * 0.55,
              color: "#b8c0ba",
              fontSize: word.size,
              fontWeight: 400,
              letterSpacing: 2.5,
              fontFamily: "Arial, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {word.text}
          </div>
        );
      })}

      {/* Main headline */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 40,
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 300,
            letterSpacing: 3.5,
            textAlign: "center",
            lineHeight: 1.15,
            transform: `scale(${0.92 + introProgress * 0.08})`,
          }}
        >
          OWN THE RAREST
        </div>

        <div
          style={{
            marginTop: 8,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              color: "#43ff8a",
              fontSize: 44,
              fontWeight: 600,
              letterSpacing: 4,
              lineHeight: 1,
              textShadow: "0 0 24px rgba(67,255,138,0.35)",
            }}
          >
            {activeWord}
          </div>
        </div>

        <div
          style={{
            marginTop: 10,
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: 5,
          }}
        >
          ONLINE
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};