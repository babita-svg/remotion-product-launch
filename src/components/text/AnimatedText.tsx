import React from "react";
import {interpolate, useCurrentFrame} from "remotion";

type AnimatedTextProps = {
  children: React.ReactNode;
  from?: number;
  duration?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  opacity?: number;
  style?: React.CSSProperties;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  from = 0,
  duration = 20,
  fontSize = 32,
  fontWeight = 400,
  letterSpacing = 0,
  opacity = 1,
  style,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [from, from + duration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(progress, [0, 1], [18, 0]);

  return (
    <div
      style={{
        opacity: progress * opacity,
        transform: `translateY(${translateY}px)`,
        fontSize,
        fontWeight,
        letterSpacing,
        color: "#ffffff",
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
};