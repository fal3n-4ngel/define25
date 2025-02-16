import * as THREE from "three";
import { CubeCamera, MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { GLTF, RGBELoader } from "three-stdlib";
import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";

// Define interfaces
interface GLTFResult extends GLTF {
  nodes: {
    Cube005: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
}

// Preload texture
const textureLoader = new RGBELoader();
textureLoader.setDataType(THREE.HalfFloatType);
const texturePromise = textureLoader.loadAsync(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr"
);

export function DefineLogo() {
  const logoRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [dragging, setDragging] = useState(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  
  // Load and cache model
  const { nodes } = useGLTF("/dispglass.glb", true) as GLTFResult;
  
  // Use preloaded texture
  const texture = useLoader(RGBELoader, 
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr"
  );

  // Memoized configurations
  const materialConfig = useMemo(() => ({
    bounces: 1, // Reduced bounces
    aberrationStrength: 0.02,
    ior: 1.45,
    fresnel: 1,
    color: "white",
    transmissionSampler: true,
  }), []);

  const size = 0.7;
  const meshProps = useMemo(() => ({
    position: new THREE.Vector3(2.112, 2.6286, -0.976),
    rotation: new THREE.Euler(-Math.PI / 1.8, -Math.PI / 2.75, 0),
    scale: new THREE.Vector3(2 * size, 0.8 * size, 1 * size),
  }), [size]);

  // Optimized drag handler
  const bind = useDrag(({ delta: [dx, dy], first, last }) => {
    if (first) setDragging(true);
    if (last) setDragging(false);
    
    if (logoRef.current) {
      const sensitivity = 0.005;
      logoRef.current.rotation.y += -dx * sensitivity;
      logoRef.current.rotation.x += -dy * sensitivity;
    }
  });

  // Optimized animation frame with delta time
  useFrame((state, delta) => {
    if (!logoRef.current || dragging) return;
    logoRef.current.rotation.y += delta * 0.5; // Smooth rotation based on frame delta
  });

  return (
    <CubeCamera
      resolution={16} // Reduced resolution
      frames={1}
      envMap={texture}
      far={-10}
      near={10}
    >
      {(envMap) => (
        <group
          ref={logoRef}
          position={[5, -1, -1]}
          {...(bind() as unknown as GroupProps)}
        >
          <mesh 
            ref={meshRef}
            geometry={nodes.Cube005.geometry}
            {...meshProps}
          >
            <MeshRefractionMaterial
              envMap={envMap}
              {...materialConfig}
              toneMapped={false}
            />
          </mesh>
        </group>
      )}
    </CubeCamera>
  );
}

// Cleanup function
useGLTF.preload("/dispglass.glb");