import {Composition} from "remotion";
import {ProductLaunch} from "./compositions/ProductLaunch";
import {VIDEO, COMPOSITION_ID} from "./constants";

export const MyComposition = () => {
  return (
    <Composition
      id={COMPOSITION_ID}
      component={ProductLaunch}
      durationInFrames={VIDEO.durationInFrames}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  );
};