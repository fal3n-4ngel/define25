import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { DefineModel } from '../../DefineLogo';


export const Model3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Environment
          environmentIntensity={0.5}
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/cyclorama_hard_light_1k.hdr"
          background={false}
        />
        <color attach="background" args={["#05050a"]} />
        <DefineModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
