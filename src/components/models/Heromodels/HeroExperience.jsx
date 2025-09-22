import React from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import {Room} from './Room.jsx';
import HeroLights from './HeroLights.jsx';

 const HeroExperience = () => {
   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{position: [1, 10, 0], fov: 5}}>

<OrbitControls 
enablePan={false}
enableZoom={false}
maxDistance={20}
minDistance={5}
minPolarAngle={Math.PI / 5}
maxPolarAngle={Math.PI / 2}
/> 

 <OrbitControls 
 enableZoom={false}
 
 />
  
        <HeroLights />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, 1.5, 0]}
               rotation={[0, -Math.PI / 4, 0]}
        >
   
         
         
          <Room />
        </group>
       
    </Canvas>
  )
}

export default HeroExperience;
