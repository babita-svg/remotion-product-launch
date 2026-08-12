import React from "react";
import {MarketplaceCard} from "./MarketplaceCard";

export const MarketplaceDashboard: React.FC = () => {
  return (
    <div
      style={{
        width: 590,
        height: 250,
        borderRadius: 18,
        padding: 18,
        boxSizing: "border-box",
        background: "rgba(8,12,10,0.94)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.55), 0 0 40px rgba(50,255,130,0.06)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#ffffff",
          }}
        >
          OG MARKET
        </div>

        <div
          style={{
            fontSize: 10,
            color: "#43ff8a",
            letterSpacing: 1,
          }}
        >
          MARKETPLACE
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: 10,
          transform: "scale(0.95)",
          transformOrigin: "top left",
        }}
      >
        <MarketplaceCard
          title="PROMOTION"
          subtitle="Grow your digital presence"
          price="EXPLORE"
          accent
        />

        <MarketplaceCard
          title="GROWTH"
          subtitle="Build and scale"
          price="EXPLORE"
        />

        <MarketplaceCard
          title="DEVELOPMENT"
          subtitle="Digital services"
          price="EXPLORE"
        />
      </div>
    </div>
  );
};