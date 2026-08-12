import React from "react";

type MarketplaceCardProps = {
  title: string;
  subtitle: string;
  price?: string;
  accent?: boolean;
};

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  subtitle,
  price,
  accent = false,
}) => {
  return (
    <div
      style={{
        width: 190,
        height: 118,
        borderRadius: 14,
        padding: 14,
        boxSizing: "border-box",
        background: accent
          ? "linear-gradient(145deg, rgba(50,255,130,0.18), rgba(10,20,15,0.95))"
          : "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
        border: accent
          ? "1px solid rgba(67,255,138,0.5)"
          : "1px solid rgba(255,255,255,0.12)",
        boxShadow: accent
          ? "0 0 28px rgba(67,255,138,0.12)"
          : "0 12px 35px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 7,
            fontSize: 11,
            color: "#9ca59f",
            letterSpacing: 0.5,
          }}
        >
          {subtitle}
        </div>
      </div>

      {price && (
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: accent ? "#43ff8a" : "#ffffff",
          }}
        >
          {price}
        </div>
      )}
    </div>
  );
};