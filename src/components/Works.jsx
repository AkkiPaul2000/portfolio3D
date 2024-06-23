import React from 'react'
import styled from 'styled-components'

function Works() {
  const works=['Web design','Developer','Illustration','Production','Socials']
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* background-color: red; */
  `
  const List=styled.ul`
  
  flex:1;
   background-color: red;
   display: flex;
   flex-direction: column;
  `
  const ListItem=styled.li`
   /* flex:1;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 50px; */
   /* border:1px solid white; */
   
  `

 
 const Right=styled.div`
  /* display: flex; */
  flex: 1;
  position: relative;
  /* background-color: yellowgreen; */
  `
  const list=styled.ul`
    height: 100vh;
    scroll-snap-align: center;
  `
  
  return (
      <Section>
      <Container>
        <Left>
          <List>
          {works.map((item)=><ListItem key={item}>
              {item}
              </ListItem>)}
            
          </List>
        </Left>
        <Right>
 
        </Right>
      </Container>
      </Section>
      
  )
}

export default Works