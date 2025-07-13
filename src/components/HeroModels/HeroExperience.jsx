import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import RotatingLotus from "./RotatingLotus";
import { useRef } from "react";
import * as THREE from "three";

// Custom camera clamp for mobile
const ClampCameraPolarAngle = ({ minPolarAngle, maxPolarAngle }) => {
  const { camera } = useThree();
  const spherical = useRef(new THREE.Spherical());

  useFrame(() => {
    // Convert camera position to spherical
    spherical.current.setFromVector3(camera.position);

    // Clamp the vertical angle (phi)
    spherical.current.phi = THREE.MathUtils.clamp(
      spherical.current.phi,
      minPolarAngle,
      maxPolarAngle
    );

    // Convert back to Cartesian and apply to camera
    camera.position.setFromSpherical(spherical.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const maxPolarAngle = Math.PI / 5;
  const minPolarAngle = Math.PI / 3.7;

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={maxPolarAngle}
          minPolarAngle={minPolarAngle}
        />
      )}

      {isMobile && (
        <ClampCameraPolarAngle
          maxPolarAngle={maxPolarAngle}
          minPolarAngle={minPolarAngle}
        />
      )}

      <HeroLights />

      <group
        scale={isMobile ? 2.1 : 3.4}
        position={[0, -1, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <RotatingLotus />
      </group>
    </Canvas>
  );
};

export default HeroExperience;