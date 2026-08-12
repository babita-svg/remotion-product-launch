import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
} from "remotion";

import {NeonBackground} from "../components/background/NeonBackground";

import {Scene01Intro} from "../scenes/Scene01Intro/Scene01Intro";
import {Scene02} from "../scenes/Scene02/Scene02";
import {Scene03} from "../scenes/Scene03/Scene03";
import {Scene04} from "../scenes/Scene04/Scene04";
import {Scene05} from "../scenes/Scene05/Scene05";
import {Scene06} from "../scenes/Scene06/Scene06";
import {Scene07} from "../scenes/Scene07/Scene07";
import {Scene08Outro} from "../scenes/Scene08Outro/Scene08Outro";

export const ProductLaunch: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      <NeonBackground />

      {/* Full reference audio - 34 seconds */}
      <Audio
        src={staticFile("assets/audio/reference-audio.m4a")}
        volume={1}
      />

      {/* Scene 1 */}
      <Sequence from={0} durationInFrames={90}>
        <Scene01Intro />
      </Sequence>

      {/* Scene 2 */}
      <Sequence from={90} durationInFrames={60}>
        <Scene02 />
      </Sequence>

      {/* Scene 3 */}
      <Sequence from={150} durationInFrames={75}>
        <Scene03 />
      </Sequence>

      {/* Scene 4 */}
      <Sequence from={225} durationInFrames={255}>
        <Scene04 />
      </Sequence>

      {/* Scene 5 */}
      <Sequence from={480} durationInFrames={210}>
        <Scene05 />
      </Sequence>

      {/* Scene 6 */}
      <Sequence from={690} durationInFrames={120}>
        <Scene06 />
      </Sequence>

      {/* Scene 7 */}
      <Sequence from={810} durationInFrames={90}>
        <Scene07 />
      </Sequence>

      {/* Scene 8 */}
      <Sequence from={900} durationInFrames={120}>
        <Scene08Outro />
      </Sequence>
    </AbsoluteFill>
  );
};