import React from 'react'
import styled from 'styled-components'

function Works() {
  const works=['Web Design','Developer','Illustration','Production','Socials']
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
  /* background-color: red; */
  `
  const List=styled.ul`
   /* flex:1; */
   display: flex;
   flex-direction: column;
   gap: 20px;
  `
  const ListItem=styled.li`
   /* flex:1;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 50px; */
   /* border:1px solid white; */

   font-size: 90px;
   font-weight: bold;
   cursor: pointer;
   color: transparent;
   -webkit-text-stroke: 1px white;
   position: relative;
   &:after{
    content: '${props=>props.value}';
    position: absolute;
    top:0;
    left:0;
    color:pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
   }
    &:hover{
      &:after{
      animation: moveText 0.5s linear both;
      /* color: red; */
      @keyframes moveText {
        to{
          width: 100%;
        }

      }
      }
    }
   
   ;
  `

 
 const Right=styled.div`
  /* display: flex; */
  flex: 1;
  position: relative;
  /* background-color: yellowgreen; */
  `
  // const list=styled.ul`
  //   height: 100vh;
  //   scroll-snap-align: center;
  // `
  
  return (
      <Section>
      <Container>
        <Left>
          <List>
          {works.map((item)=><ListItem key={item} value={item}>
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