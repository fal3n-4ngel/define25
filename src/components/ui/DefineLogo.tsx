
import * as THREE from "three";
import { CubeCamera, MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { GLTF, RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};


export function DefineLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF('/dispglass.glb') as GLTFResult
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr')
  const config = {
    bounces: 3,
    aberrationStrength: 0.02,
    ior: 1.45,
    fresnel: 1,
    color: 'white'
  }
  const size = 0.7;
  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          position={[3.112, 2.6286, -0.976]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[2*size, 1*size, 1*size]}>
          <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
        </mesh>
      )}
    </CubeCamera>
  )
}