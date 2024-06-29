import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  /* background-color: royalblue; */
  color: white;
`;

function Test() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={0x00ff00} />
          <Text 
            position={[0, 0, 0.51]} 
            fontSize={0.2} 
            color="#555"
            anchorX="center" 
            anchorY="middle"
          >
            hello
          </Text>
        </mesh>
      </Canvas>
    </Container>
  );
}

export default Test;
