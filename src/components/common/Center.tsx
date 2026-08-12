import React from "react";
import {AbsoluteFill} from "remotion";

type CenterProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Center: React.FC<CenterProps> = ({children, style}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};