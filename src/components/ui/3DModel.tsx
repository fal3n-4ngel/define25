import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
import { DefineLogo } from "./DefineLogo";

export const Model3D = () => {
  return (
    <div className="flex-1 p-10 lg:pr-40">
      <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
      <color attach="background" args={['#05050A']} />
      <ambientLight intensity={0.2 * Math.PI} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <DefineLogo />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </Canvas>
    </div>
  );
};
