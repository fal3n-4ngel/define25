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

export function DefineLogo() {
  const logoRef = useRef<THREE.Group>(null);
  const [dragging, setDragging] = useState(false);
  
  
  const { nodes } = useGLTF("/dispglass.glb", true) as GLTFResult;

  
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",
    (loader) => {
      loader.setDataType(THREE.HalfFloatType); 
    }
  );

  
  const materialConfig = useMemo(() => ({
    bounces: 2, 
    aberrationStrength: 0.02,
    ior: 1.45,
    fresnel: 1,
    color: "white",
    transmissionSampler: true,
  }), []);

  const size = 0.7;
  const meshRef = useRef<THREE.Mesh>(null);

  
  const meshProps = useMemo(() => ({
    position: new THREE.Vector3(2.112, 2.6286, -0.976),
    rotation: new THREE.Euler(-Math.PI / 1.8, -Math.PI / 2.75, 0),
    scale: new THREE.Vector3(2 * size, 0.8 * size, 1 * size),
  }), [size]);

  
  const bind = useDrag(({ movement: [mx, my], delta: [dx, dy], first, last }) => {
    if (first) {
      setDragging(true);
      
      lastMouseRef.current = { x: mx, y: my };
    }
    if (last) setDragging(false);
  
    if (logoRef.current) {
      const object = logoRef.current;
      const cameraDirection = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3(1, 0, 0);
  
      if (object.parent) {
        object.parent.getWorldDirection(cameraDirection);
        cameraDirection.normalize();
        right.crossVectors(up, cameraDirection).normalize();
      }
  
      
      const sensitivity = 0.005; 
      const deltaX = -dx * sensitivity;
      const deltaY = -dy * sensitivity;
  
      
      const rotationX = -deltaY; 
      const rotationY = -deltaX;
  
      
      object.rotateOnWorldAxis(right, rotationX);
      object.rotateOnWorldAxis(up, rotationY);
  
      
      lastMouseRef.current = { x: mx, y: my };
    }
  });
  
  
  const lastMouseRef = useRef({ x: 0, y: 0 });

  
  useFrame(() => {
    if (!logoRef.current || dragging) return;
    logoRef.current.rotation.y += 0.01;
  });

  return (
    <CubeCamera
      resolution={128} 
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
          <mesh ref={meshRef} castShadow receiveShadow geometry={nodes.Cube005.geometry} {...meshProps}>
            <MeshRefractionMaterial envMap={envMap} {...materialConfig} toneMapped={false} />
          </mesh>
        </group>
      )}
    </CubeCamera>
  );
}
