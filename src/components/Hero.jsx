import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

function Hero() {

  const Section=styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `
  const Container=styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 1400px;
    /* background-color: red; */
    scroll-snap-align: center;
  `
  const Left=styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* background-color: red; */

  `
  const Title=styled.h1`
  font-size: 74px;
  `
  const WhatWeDo=styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  `
  const Line=styled.img`
  height: 5px;
  `
  const Subtitle=styled.h2`
  color: #da4ea2;
  `
  const Desc=styled.p`
  font-size: 24px;
  color: lightgray;
  `
  const Button=styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  `
 const Right=styled.div`
  /* display: flex; */
  flex: 3;
  position: relative;
  /* background-color: yellowgreen; */
   `
  const Img=styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  /* border: 2px solid yellow; */
  border-radius: 500px;
  @keyframes animate{
    to{
      transform: translateY(30px);
    }
  }
`
  
  return (
      <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful, human-centered digital experience</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/avatar2.png" />
        </Right>
      </Container>
      </Section>
      
  )
}

export default Hero