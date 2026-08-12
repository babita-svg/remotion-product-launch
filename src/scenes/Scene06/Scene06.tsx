import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Scene06: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [100, 119], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const float = Math.sin(frame / 18) * 5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* Background */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 50% 50%, rgba(50,255,130,0.16), transparent 72%)",
          opacity: intro * exit,
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
          opacity: intro * exit,
          transform: `translateY(${20 - intro * 20}px)`,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 300,
            letterSpacing: 4,
          }}
        >
          YOUR MARKETPLACE
        </div>

        <div
          style={{
            marginTop: 7,
            fontSize: 15,
            color: "#43ff8a",
            letterSpacing: 4,
          }}
        >
          IN YOUR POCKET
        </div>
      </div>

      {/* Phone */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "56%",
          width: 190,
          height: 350,
          transform: `
            translate(-50%, -50%)
            translateY(${float + (1 - intro) * 60}px)
            scale(${0.85 + intro * 0.15})
          `,
          opacity: intro * exit,
          borderRadius: 30,
          padding: 8,
          boxSizing: "border-box",
          background:
            "linear-gradient(145deg, #202621, #050705 55%, #17251b)",
          border: "1px solid rgba(120,255,170,0.42)",
          boxShadow:
            "0 0 35px rgba(67,255,138,0.16), 0 30px 70px rgba(0,0,0,0.55)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Camera/speaker */}
        <div
          style={{
            position: "absolute",
            top: 13,
            left: "50%",
            transform: "translateX(-50%)",
            width: 52,
            height: 6,
            borderRadius: 10,
            background: "#050705",
          }}
        />

        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 23,
            overflow: "hidden",
            background: "#080d09",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* App header */}
          <div
            style={{
              padding: "32px 15px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
              }}
            >
              OG MARKET
            </div>

            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "rgba(67,255,138,0.15)",
                border: "1px solid rgba(67,255,138,0.4)",
              }}
            />
          </div>

          {/* Search */}
          <div
            style={{
              margin: "5px 12px 12px",
              height: 28,
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              paddingLeft: 10,
              color: "#68716b",
              fontSize: 8,
              letterSpacing: 1,
            }}
          >
            SEARCH USERNAME
          </div>

          {/* Listings */}
          <div
            style={{
              padding: "0 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {["RARE", "ELITE", "LEGACY"].map((item, index) => (
              <div
                key={item}
                style={{
                  height: 62,
                  borderRadius: 10,
                  background:
                    index === 0
                      ? "rgba(67,255,138,0.1)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    index === 0
                      ? "1px solid rgba(67,255,138,0.28)"
                      : "1px solid rgba(255,255,255,0.07)",
                  padding: 10,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 1,
                  }}
                >
                  {item}
                </div>

                <div
                  style={{
                    marginTop: 6,
                    width: `${45 + index * 15}%`,
                    height: 4,
                    borderRadius: 4,
                    background: "#43ff8a",
                    opacity: 0.55,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            style={{
              position: "absolute",
              left: 18,
              right: 18,
              bottom: 14,
              height: 28,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              color: "#69736d",
              fontSize: 7,
              letterSpacing: 1,
            }}
          >
            HOME&nbsp;&nbsp;&nbsp;MARKET&nbsp;&nbsp;&nbsp;PROFILE
          </div>
        </div>
      </div>

      {/* Side glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: -80,
          width: 260,
          height: 140,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "rgba(67,255,138,0.14)",
          filter: "blur(65px)",
          opacity: intro * exit,
        }}
      />
    </AbsoluteFill>
  );
};
