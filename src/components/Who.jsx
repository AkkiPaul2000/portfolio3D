import React from 'react'
import styled from 'styled-components'

function Who() {

  const Section=styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center ;
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
  const Right=styled.div`
  flex: 1;
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
 const Left=styled.div`
  /* display: flex; */
  flex: 1;
  /* position: relative; */
  /* background-color: yellowgreen; */
  `
  
  return (
      <Section>
      <Container>
        <Left>
        </Left>
        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>A creative group of designers and developers with a passion for the arts </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
      </Section>
      
  )
}

export default Who