
import * as THREE from "three";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva"
import { useEffect, useMemo, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Cube003: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function DefineModel(props: JSX.IntrinsicElements["group"]) {
  const modelRef = useRef<THREE.Mesh>(null);

  useEffect( () => {
    modelRef.current?.geometry.computeBoundingBox();
    const boundingBox = modelRef.current?.geometry.boundingBox;
    const center = new THREE.Vector3();
    boundingBox?.getCenter(center);
    modelRef.current?.geometry.translate(-center.x,-center.y,-center.z);            
});
  
  const { nodes } = useGLTF("/untitled.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh ref={modelRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[2, 1, 1]}
      >
        <MeshTransmissionMaterial
            roughness={0.1}
            chromaticAberration={1}
            attenuationDistance={0.1}
            transmission={1}
            thickness={1}
            reflectivity={0.5}
            ior={1}
            backside
            backsideThickness={10}
        />
      </mesh>
    </group>
  );
}
