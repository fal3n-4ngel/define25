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

const textureLoader = new RGBELoader();
textureLoader.setDataType(THREE.HalfFloatType);

export function DefineLogoTemp() {
  const logoRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [dragging, setDragging] = useState(false);

  const initialRotation = useMemo(() => new THREE.Euler(-0, 0, 0), []);
  const autoRotationSpeed = 0.5;
  const lastDragTime = useRef(0);

  const { nodes } = useGLTF("/dispglass.glb", true) as GLTFResult;

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_02_1k.hdr"
  );

  const materialConfig = useMemo(
    () => ({
      bounces: 3,
      aberrationStrength: 0.02,
      ior: 1.45,
      fresnel: 1,
      color: "white",
      transmissionSampler: false,
    }),
    []
  );

  const size = 0.75;
  const meshProps = useMemo(
    () => ({
      position: new THREE.Vector3(2.112, 2.6286, -0.976),
      rotation: new THREE.Euler(-Math.PI / 1.7, -Math.PI / 2.75, 0),
      scale: new THREE.Vector3(2 * size, 0.6 * size, 1 * size),
    }),
    [size]
  );

  const MAX_ROTATION = Math.PI / 4;

  const clampRotation = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };

  const bind = useDrag(({ delta: [dx, dy], first, last }) => {
    if (first) {
      setDragging(true);
      lastDragTime.current = Date.now();
    }
    if (last) {
      setDragging(false);

      lastDragTime.current = Date.now();
    }

    if (logoRef.current) {
      const sensitivity = 0.005;

      const newRotationY = clampRotation(
        logoRef.current.rotation.y - dx * sensitivity,
        logoRef.current.rotation.y - MAX_ROTATION,
        logoRef.current.rotation.y + MAX_ROTATION
      );

      const newRotationX = clampRotation(
        logoRef.current.rotation.x - dy * sensitivity,
        // initialRotation.x - MAX_ROTATION, -> not limiting the rotation coz it glitches fix later
        // initialRotation.x + MAX_ROTATION

        logoRef.current.rotation.x - MAX_ROTATION,
        logoRef.current.rotation.x + MAX_ROTATION
      );

      logoRef.current.rotation.y = newRotationY;
      logoRef.current.rotation.x = newRotationX;
    }
  });

  useFrame((_state, delta) => {
    if (!logoRef.current) return;
    const timeSinceLastDrag = Date.now() - lastDragTime.current;
    const dragCooldown = 100; // milliseconds

    if (!dragging && timeSinceLastDrag > dragCooldown) {
      logoRef.current.rotation.y += delta * autoRotationSpeed;

      const springStrength = 5;
      const dampingFactor = 0.8;
      const dx =
        (initialRotation.x - logoRef.current.rotation.x) *
        springStrength *
        delta;
      logoRef.current.rotation.x += dx * dampingFactor;
    }
  });

  return (
    <CubeCamera resolution={10} frames={60} envMap={texture} far={-10} near={10}>
      {(envMap) => (
        <group
          ref={logoRef}
          position={[5, -1, -1]}
          {...(bind() as unknown as GroupProps)}
        >
          <mesh ref={meshRef} geometry={nodes.Cube005.geometry} {...meshProps}>
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

useGLTF.preload("/dispglass.glb");
