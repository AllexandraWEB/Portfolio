import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import RotatingLotus from "./RotatingLotus";
import { useEffect } from "react";

const ConditionalOrbitControls = ({ isMobile }) => {
  const { gl } = useThree();

  useEffect(() => {
    if (isMobile) {
      // Prevent OrbitControls from blocking scroll
      const handler = (e) => {
        gl.domElement.style.touchAction = "auto"; // enables scrolling
      };
      handler();
    } else {
      gl.domElement.style.touchAction = "none"; // disables scrolling (OrbitControls needs this)
    }
  }, [isMobile, gl]);

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      enableRotate={!isMobile}
      maxPolarAngle={Math.PI / 5}
      minPolarAngle={Math.PI / 3.7}
      makeDefault
    />
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ConditionalOrbitControls isMobile={isMobile} />
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