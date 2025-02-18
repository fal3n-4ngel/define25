import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  // HueSaturation,
  // ToneMapping,
} from "@react-three/postprocessing";
// import { DefineLogoTemp } from "./DefineLogoTemp";
import { ACESFilmicToneMapping } from "three";
import { DefineLogo } from "./DefineLogo";

export const Model3D = () => {
  return (
    <div className="absolute z-0 h-full w-full flex-1">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 15], fov: 40 }}
        dpr={[1, 2]}
        // performance={{ min: 0.5 }}
        gl={{
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 0.8,
        }}
      >
        <color attach="background" args={["#05050A"]} />
          {/* <DefineLogoTemp /> */}
        <DefineLogo/>

        <EffectComposer multisampling={8}>
          <Bloom
            mipmapBlur
            luminanceThreshold={1.2}
            intensity={0.3}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
