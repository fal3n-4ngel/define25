import * as THREE from "three";
import { CubeCamera, MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { GLTF, RGBELoader } from "three-stdlib";
import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";

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

export function DefineLogoTemp() {
  const logoRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [dragging, setDragging] = useState(false);
  

  const initialRotation = useMemo(() => new THREE.Euler(-0, 0, 0), []);
  

  const targetRotation = useRef({
    x: initialRotation.x,
    y: initialRotation.y
  });

  // Load and cache model
  const { nodes } = useGLTF("/dispglass.glb", true) as GLTFResult;
  
  // Use preloaded texture
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr"
  );

  // Memoized configurations
  const materialConfig = useMemo(() => ({
    bounces: 1,
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
  }), [size, initialRotation]);


  const MAX_ROTATION = Math.PI / 4; 


  const clampRotation = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };


  const bind = useDrag(({ delta: [dx, dy], first, last }) => {
    if (first) setDragging(true);
    if (last) {
      setDragging(false);
      // // Store target rotation for spring back
      // targetRotation.current = {
      //   x: initialRotation.x,
      //   y: initialRotation.y
      // };
    }
    
    if (logoRef.current) {
      const sensitivity = 0.005;
      
   
      const newRotationY = clampRotation(
        logoRef.current.rotation.y - dx * sensitivity,
        initialRotation.y - MAX_ROTATION,
        initialRotation.y + MAX_ROTATION
      );
      
      const newRotationX = clampRotation(
        logoRef.current.rotation.x - dy * sensitivity,
        initialRotation.x - MAX_ROTATION,
        initialRotation.x + MAX_ROTATION
      );

      // Apply constrained rotations
      logoRef.current.rotation.y = newRotationY;
      logoRef.current.rotation.x = newRotationX;
    }
  });
  
  useFrame((state, delta) => {
    if (!logoRef.current || dragging) return;
    logoRef.current.rotation.y += delta * 0.5; 
  });

  useFrame((state, delta) => {
    if (!logoRef.current || dragging) return;


    const springStrength = 5;
    const dampingFactor = 0.8;

    const dy = (targetRotation.current.x - logoRef.current.rotation.x) * springStrength * delta;
    logoRef.current.rotation.y += delta * 0.05; 
    logoRef.current.rotation.x += dy * dampingFactor;
  });

  return (
    <CubeCamera resolution={16} frames={1} envMap={texture} far={-10} near={10}>
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