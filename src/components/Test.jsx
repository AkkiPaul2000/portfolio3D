import React from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, RenderTexture} from '@react-three/drei'

function Test() {
    const Container=styled.div`
        width: 100%;
        height: 100vh;
        scroll-snap-align: center;
      /* background-color: royalblue ; */
      color: white;
    `
    
  return (
    <Container>
        <Canvas>
          <OrbitControls enableZoom={false} />
            <mesh>
              <boxGeometry args={[1,1,1]}/>
              <ambientLight intensity={1} />
              <directionalLight position={[3,2,1]}/> 
              <meshStandardMaterial color={0x00ff00} >
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]} />
                <color attach="background" args={["#dc9dcd"]}/>
                <Text fontSize={3} color="#555">hello</Text>
              </RenderTexture>
              </meshStandardMaterial>
                    {/* <meshStandardMaterial color={0x00ff00} roughness={0.5} metalness={0.5} /> */}

            </mesh>
        </Canvas>
    </Container>
  )
}

export default Test