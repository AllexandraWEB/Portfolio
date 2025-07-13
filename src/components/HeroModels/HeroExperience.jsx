import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import RotatingLotus from "./RotatingLotus";
// import { LotusHero } from './LotusHero';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Set angles based on device
  const maxPolarAngle = isMobile ? Math.PI / 4 : Math.PI / 5;
  const minPolarAngle = isMobile ? Math.PI / 3 : Math.PI / 3.7;

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {!isMobile && ( // OrbitControls is not allowed on mobile, this way any touch events won't be interrupted by OrbitControls and will allow normal scrollwing
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
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
