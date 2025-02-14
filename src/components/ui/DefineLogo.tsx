import * as THREE from "three";
import { CubeCamera, MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { GLTF, RGBELoader } from "three-stdlib";
import { useLoader, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Cube005: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

// Separate DefineLogo component with optimizations
export function DefineLogo(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/dispglass.glb", true) as GLTFResult; // Added draco compression
  const texture = useLoader(RGBELoader, 
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",
    (loader) => {
      loader.setDataType(THREE.HalfFloatType); // Use half float for better performance
    }
  );

  const config = useMemo(() => ({
    bounces: 2, // Reduced bounces
    aberrationStrength: 0.02,
    ior: 1.45,
    fresnel: 1,
    color: "white",
    transmissionSampler: true,
  }), []);

  const size = 0.7;
  const meshRef = useRef<THREE.Mesh>(null);

  // Memoize position, rotation, and scale
  const meshProps = useMemo(() => ({
    position: new THREE.Vector3(2.112, 2.6286, -0.976),
    rotation: new THREE.Euler(-Math.PI / 1.8, -Math.PI / 2.75, 0),
    scale: new THREE.Vector3(2 * size, 0.8 * size, 1 * size)
  }), [size]);

  return (
    <CubeCamera
      resolution={128} // Reduced resolution
      frames={1} // Reduced frames for better performance
      envMap={texture}
      far={-10}
      near={10}
    >
      {(texture) => (
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          {...meshProps}
        >
          <MeshRefractionMaterial
            envMap={texture}
            {...config}
            toneMapped={false}
          />
        </mesh>
      )}
    </CubeCamera>
  );
}