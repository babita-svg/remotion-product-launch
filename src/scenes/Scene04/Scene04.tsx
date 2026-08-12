import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {MarketplaceDashboard} from "../../components/cards/MarketplaceDashboard";

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();

  const titleIn = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const dashboardIn = interpolate(frame, [28, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const dashboardScale = interpolate(dashboardIn, [0, 1], [0.88, 1]);

  const exit = interpolate(frame, [225, 254], [1, 0], {
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
      {/* Green atmosphere */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 48%, rgba(50,255,130,0.16), transparent 72%)",
        }}
      />

      {/* Heading */}
      <div
        style={{
          position: "absolute",
          top: 42,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleIn * exit,
          transform: `translateY(${25 - titleIn * 25}px)`,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 31,
            fontWeight: 300,
            letterSpacing: 3,
          }}
        >
          A MARKETPLACE
        </div>

        <div
          style={{
            marginTop: 6,
            fontSize: 17,
            letterSpacing: 4,
            color: "#43ff8a",
          }}
        >
          FOR DIGITAL OWNERSHIP
        </div>
      </div>

      {/* Dashboard */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "55%",
          transform: `
            translate(-50%, -50%)
            scale(${dashboardScale})
          `,
          opacity: dashboardIn * exit,
        }}
      >
        <MarketplaceDashboard />
      </div>

      {/* Bottom glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: -100,
          width: 450,
          height: 180,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "rgba(50,255,130,0.12)",
          filter: "blur(70px)",
          opacity: dashboardIn * exit,
        }}
      />
    </AbsoluteFill>
  );
};
