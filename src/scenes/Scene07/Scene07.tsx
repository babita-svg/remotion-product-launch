import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

const listings = [
  {name: "RARE", value: "$2,400"},
  {name: "ELITE", value: "$4,800"},
  {name: "LEGACY", value: "$7,200"},
];

export const Scene07: React.FC = () => {
  const frame = useCurrentFrame();

  const intro = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [72, 89], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const laptopY = interpolate(intro, [0, 1], [55, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020403",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* Ambient green glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 50% 52%, rgba(50,255,130,0.15), transparent 72%)",
          opacity: intro * exit,
        }}
      />

      {/* Heading */}
      <div
        style={{
          position: "absolute",
          top: 38,
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
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: 4,
          }}
        >
          EVERYTHING
        </div>

        <div
          style={{
            marginTop: 6,
            fontSize: 16,
            letterSpacing: 4,
            color: "#43ff8a",
          }}
        >
          IN ONE PLACE
        </div>
      </div>

      {/* Laptop */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "57%",
          width: 570,
          transform: `
            translate(-50%, -50%)
            translateY(${laptopY}px)
            scale(${0.88 + intro * 0.12})
          `,
          opacity: intro * exit,
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Laptop screen */}
        <div
          style={{
            width: "100%",
            height: 310,
            borderRadius: "15px 15px 7px 7px",
            padding: 9,
            boxSizing: "border-box",
            background:
              "linear-gradient(145deg, #222923, #070a08 65%, #151d17)",
            border: "1px solid rgba(120,255,170,0.35)",
            boxShadow:
              "0 0 40px rgba(67,255,138,0.13), 0 30px 80px rgba(0,0,0,0.65)",
          }}
        >
          {/* Display */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 9,
              overflow: "hidden",
              background: "#080d09",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Browser bar */}
            <div
              style={{
                height: 25,
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#526057",
                  }}
                />
              ))}

              <div
                style={{
                  marginLeft: 10,
                  flex: 1,
                  height: 12,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.045)",
                }}
              />
            </div>

            {/* App layout */}
            <div
              style={{
                display: "flex",
                height: "calc(100% - 25px)",
              }}
            >
              {/* Sidebar */}
              <div
                style={{
                  width: 95,
                  padding: 14,
                  boxSizing: "border-box",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    marginBottom: 18,
                  }}
                >
                  OG MARKET
                </div>

                {["Dashboard", "Marketplace", "Saved", "Activity"].map(
                  (item, index) => (
                    <div
                      key={item}
                      style={{
                        padding: "7px 5px",
                        marginBottom: 5,
                        borderRadius: 5,
                        background:
                          index === 1
                            ? "rgba(67,255,138,0.1)"
                            : "transparent",
                        color: index === 1 ? "#43ff8a" : "#747d77",
                        fontSize: 7,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>

              {/* Main content */}
              <div
                style={{
                  flex: 1,
                  padding: 16,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: 1,
                  }}
                >
                  Marketplace
                </div>

                <div
                  style={{
                    marginTop: 5,
                    fontSize: 7,
                    color: "#69736d",
                    letterSpacing: 1,
                  }}
                >
                  DISCOVER RARE DIGITAL ASSETS
                </div>

                {/* Search/filter */}
                <div
                  style={{
                    marginTop: 13,
                    height: 24,
                    display: "flex",
                    gap: 7,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      borderRadius: 5,
                      background: "rgba(255,255,255,0.045)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />

                  <div
                    style={{
                      width: 50,
                      borderRadius: 5,
                      background: "rgba(67,255,138,0.1)",
                      border: "1px solid rgba(67,255,138,0.2)",
                    }}
                  />
                </div>

                {/* Listings */}
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 14,
                  }}
                >
                  {listings.map((listing, index) => (
                    <div
                      key={listing.name}
                      style={{
                        flex: 1,
                        height: 120,
                        borderRadius: 8,
                        padding: 10,
                        boxSizing: "border-box",
                        background:
                          index === 0
                            ? "rgba(67,255,138,0.09)"
                            : "rgba(255,255,255,0.035)",
                        border:
                          index === 0
                            ? "1px solid rgba(67,255,138,0.25)"
                            : "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        style={{
                          height: 48,
                          borderRadius: 5,
                          background:
                            "linear-gradient(135deg, rgba(67,255,138,0.14), rgba(255,255,255,0.025))",
                        }}
                      />

                      <div
                        style={{
                          marginTop: 8,
                          fontSize: 8,
                          letterSpacing: 1,
                          fontWeight: 600,
                        }}
                      >
                        {listing.name}
                      </div>

                      <div
                        style={{
                          marginTop: 5,
                          fontSize: 7,
                          color: "#43ff8a",
                        }}
                      >
                        {listing.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div
          style={{
            margin: "0 auto",
            width: "112%",
            height: 18,
            transform: "translateX(-5.3%)",
            borderRadius: "0 0 18px 18px",
            background:
              "linear-gradient(180deg, #303731, #111512 65%, #080a09)",
            border: "1px solid rgba(120,255,170,0.2)",
            boxShadow: "0 18px 35px rgba(0,0,0,0.55)",
          }}
        />

        {/* Trackpad */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -10,
            width: 80,
            height: 4,
            transform: "translateX(-50%)",
            borderRadius: 5,
            background: "rgba(255,255,255,0.12)",
          }}
        />
      </div>

      {/* Floor glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: -70,
          width: 520,
          height: 150,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "rgba(67,255,138,0.13)",
          filter: "blur(70px)",
          opacity: intro * exit,
        }}
      />
    </AbsoluteFill>
  );
};
