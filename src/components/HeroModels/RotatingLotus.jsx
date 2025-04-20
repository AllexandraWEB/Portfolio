import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { LotusHero } from './LotusHero';

const RotatingLotus = () => {
  const lotusRef = useRef();

  useFrame(() => {
    if (lotusRef.current) {
      lotusRef.current.rotation.y += 0.0009;
    }
  });

  return (
    <group ref={lotusRef}>
      <LotusHero />
    </group>
  );
};

export default RotatingLotus;