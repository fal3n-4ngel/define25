import { Canvas } from "@react-three/fiber";
// import { DefineLogoTemp } from "./DefineLogoTemp";
import { ACESFilmicToneMapping } from "three";
import { DefineLogo } from "./DefineLogo";
import { EffectComposer, Bloom } from "@react-three/postprocessing"

export const Model3D = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Canvas
        style={{display: "block", width: "600px", height: "600px"}}
        shadows
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
            intensity={0.005}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
