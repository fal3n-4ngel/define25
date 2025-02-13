import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Torus,
} from "@react-three/drei";
import { DefineModel } from "./DefineLogo";

export const Model3D = () => {
  return (
    <div className="flex-1 p-10 lg:pr-40">
      <Canvas
        onCreated={(state) => state.gl.setClearColor("#05050A")}
        camera={{ position: [0, 0, 7], fov: 75 }}
      >
        <color attach={"background"} args={["#05050A"]} />
        <DefineModel />
        <OrbitControls />
        <hemisphereLight args={["#fff", "#000", 3]} />

        <Environment background={false}>
          <Lightformer
            intensity={50}
            position={[40, 0, 0]}
            scale={[70, 70, 70]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Lightformer
            intensity={1}
            position={[-40, 0, 0]}
            scale={[70, 70, 70]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
      </Canvas>
    </div>
  );
};
