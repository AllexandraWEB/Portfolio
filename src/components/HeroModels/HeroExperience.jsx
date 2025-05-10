import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import RotatingLotus from "./RotatingLotus";
// import { LotusHero } from './LotusHero';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 5}
        minPolarAngle={Math.PI / 3.7}
      />

      <HeroLights />

      <group
        scale={isMobile ? 2.1 : 3.4} // 4.8 or 2.8
        position={[0, -1, 0]} //3.8
        rotation={[0, -Math.PI / 4, 0]}
      >
        <RotatingLotus />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
