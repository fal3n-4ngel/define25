import { Canvas } from "@react-three/fiber";
import { DefineLogo } from "./DefineLogo";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from "@react-three/postprocessing";
import { useMemo } from "react";

export const Model3D = () => {

  const lights = useMemo(
    () => ({
      ambient: 0.2 * Math.PI,
      pointLight: {
        decay: 0,
        position: [-10, -10, -10] as [number, number, number],
      },
      spotLight: {
        position: [10, 10, 10] as [number, number, number],
        angle: 0.15,
        penumbra: 1,
        color: "#0000FF",
        intensity: 2,
      },
    }),
    []
  );

  return (
    <div className="absolute flex-1 w-full z-0 h-full">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 15], fov: 40 }}
        dpr={[1, 2]} 
        performance={{ min: 0.5 }} 
      >
        <color attach="background" args={["#05050A"]} />
        

        <DefineLogo />

        <EffectComposer multisampling={0} >
          <Bloom
            mipmapBlur
            luminanceThreshold={1}
            intensity={0.3}
        
          />
       
          <HueSaturation hue={0} saturation={-0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
