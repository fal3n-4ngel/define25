import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DefineLogo } from "./DefineLogo";
import {
  EffectComposer,
  Bloom,
  BrightnessContrast,
  HueSaturation,
} from "@react-three/postprocessing";

export const Model3D = () => {
  return (
    <div className="absolute flex-1  w-full z-0 h-full">
      <Canvas
        shadows
        camera={{ position: [10, 1.5, 15], fov: 40 }}
        className="ml-80"
      >
        <color attach="background" args={["#05050A"]} />
        <ambientLight intensity={0.2 * Math.PI} />
        <pointLight decay={0} position={[-10, -10, -10]} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          color={"#0000FF"}
          intensity={2}
        />
        <DefineLogo />

        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={6.0}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <EffectComposer>
          <Bloom
        mipmapBlur
            luminanceThreshold={1.2} // Increased from 0.9
            intensity={0.5} // Reduced from 2
            luminanceSmoothing={1} // Reduced from 2
          />

          <BrightnessContrast brightness={0} contrast={0.1} />
          <HueSaturation hue={0} saturation={-0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
