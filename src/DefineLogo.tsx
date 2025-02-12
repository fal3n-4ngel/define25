import * as THREE from "three";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube003: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function DefineModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/untitled.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        position={[-0.943, 3.421, -0.986]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[2, 1, 1]}
      >
        <MeshTransmissionMaterial
            roughness={0.2}
            clearcoat={1}
            chromaticAberration={1}
            attenuationColor={"white"}
            attenuationDistance={0.1}
            transmission={1}
            thickness={1}
            ior={1}
            backside
            backsideThickness={10}
        />
      </mesh>
    </group>
  );
}
