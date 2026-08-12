import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

const steps = [
  {
    number: "01",
    title: "BUY",
    description: "Secure the digital asset",
  },
  {
    number: "02",
    title: "PROTECT",
    description: "Transaction stays protected",
  },
  {
    number: "03",
    title: "TRANSFER",
    description: "Ownership moves securely",
  },
];

export const Scene05: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene entrance
  const intro = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Scene exit
  const exit = interpolate(frame, [185, 209], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const sceneOpacity = intro * exit;

  // Subtle central pulse
  const pulse = 1 + Math.sin(frame * 0.08) * 0.025;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* Background atmosphere */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(50,255,130,0.14), transparent 72%)",
          opacity: sceneOpacity,
        }}
      />

      {/* Secondary atmospheric glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 51%, rgba(67,255,138,0.08), transparent 25%)",
          opacity: sceneOpacity,
        }}
      />

      {/* Heading */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: sceneOpacity,
          transform: `translateY(${22 - intro * 22}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 300,
            letterSpacing: 3,
            lineHeight: 1.1,
          }}
        >
          EVERY TRANSACTION
        </div>

        <div
          style={{
            marginTop: 7,
            fontSize: 18,
            letterSpacing: 4,
            color: "#43ff8a",
            fontWeight: 500,
          }}
        >
          PROTECTED
        </div>
      </div>

      {/* Central security system */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 154,
          height: 154,
          transform: `
            translate(-50%, -50%)
            scale(${(0.72 + intro * 0.28) * pulse})
          `,
          borderRadius: "50%",
          border: "1px solid rgba(67,255,138,0.42)",
          background:
            "radial-gradient(circle, rgba(67,255,138,0.15), rgba(10,20,14,0.78) 62%, transparent 73%)",
          boxShadow:
            "0 0 55px rgba(67,255,138,0.13), inset 0 0 45px rgba(67,255,138,0.08)",
          opacity: sceneOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: "absolute",
            width: 106,
            height: 106,
            borderRadius: "50%",
            border: "1px solid rgba(67,255,138,0.20)",
            boxShadow: "0 0 22px rgba(67,255,138,0.08)",
          }}
        />

        {/* Center shield */}
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: 18,
            border: "1px solid rgba(67,255,138,0.65)",
            background:
              "linear-gradient(145deg, rgba(67,255,138,0.10), rgba(67,255,138,0.025))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#43ff8a",
            boxShadow:
              "0 0 25px rgba(67,255,138,0.18), inset 0 0 18px rgba(67,255,138,0.06)",
          }}
        >
          {/* CSS check mark — avoids corrupted UTF-8 characters */}
          <div
            style={{
              width: 22,
              height: 12,
              borderLeft: "3px solid #43ff8a",
              borderBottom: "3px solid #43ff8a",
              transform: "rotate(-45deg) translate(2px, -2px)",
              filter: "drop-shadow(0 0 5px rgba(67,255,138,0.45))",
            }}
          />
        </div>
      </div>

      {/* Transaction steps */}
      {steps.map((step, index) => {
        const delay = 30 + index * 28;

        const progress = interpolate(frame, [delay, delay + 22], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });

        const leftSide = index === 0;
        const rightSide = index === 2;

        let x = 50;

        if (leftSide) x = 18;
        if (rightSide) x = 82;

        let y = 50;

        if (index === 1) y = 74;
        if (leftSide || rightSide) y = 51;

        return (
          <div
            key={step.number}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: `
                translate(-50%, -50%)
                translateY(${28 - progress * 28}px)
              `,
              opacity: progress * exit * 0.95,
              width: 190,
              padding: 16,
              boxSizing: "border-box",
              borderRadius: 14,
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.065), rgba(255,255,255,0.018))",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 10px 35px rgba(0,0,0,0.22), inset 0 0 20px rgba(255,255,255,0.015)",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            {/* Step number */}
            <div
              style={{
                color: "#43ff8a",
                fontSize: 10,
                letterSpacing: 2,
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              {step.number}
            </div>

            {/* Step title */}
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              {step.title}
            </div>

            {/* Step description */}
            <div
              style={{
                marginTop: 7,
                fontSize: 10,
                lineHeight: 1.5,
                color: "#969e99",
              }}
            >
              {step.description}
            </div>
          </div>
        );
      })}

      {/* Left connecting line */}
      <div
        style={{
          position: "absolute",
          left: "26%",
          top: "51%",
          width: "20%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(67,255,138,0.55))",
          opacity: sceneOpacity,
        }}
      />

      {/* Right connecting line */}
      <div
        style={{
          position: "absolute",
          left: "54%",
          top: "51%",
          width: "20%",
          height: 1,
          background:
            "linear-gradient(90deg, rgba(67,255,138,0.55), transparent)",
          opacity: sceneOpacity,
        }}
      />

      {/* Bottom statement */}
      <div
        style={{
          position: "absolute",
          bottom: 42,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 12,
          letterSpacing: 3,
          color: "#7f8983",
          opacity: sceneOpacity,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        SIMPLE {"·"} SECURE {"·"} PROTECTED
      </div>
    </AbsoluteFill>
  );
};