import React from 'react'
import styled from 'styled-components'
import { MdOutlineSearch } from "react-icons/md";



function Navbar() {

  const style={color:"wheat"}

    const Section=styled.div`
    display:flex;
    /* background-color:red; */
    justify-content:center;
    `
    const Container=styled.div`
    display:flex;
    /* background-color:rebeccapurple; */
    align-items: center;
    justify-content:space-between;
    width:1400px;
    padding: 10px 0px;
    `
    const Links=styled.div`
    display:flex;
    align-items: center;
    gap: 50px;
    `
    const Logo=styled.img`
    height:50px;`

    const List=styled.ul`
    display:flex;
    gap:20px;
    list-style: none;
    `
    const ListItem=styled.li`
    cursor: pointer;
    gap:50px
    `
    const Icon=styled.div`
    cursor: pointer;

    `
    const Icons=styled.div`
      display: flex;
      align-items: center;
      gap:20px;
`
    const Button=styled.button`
      width: 100px;
      padding: 10px;
      background-color: #da4ea2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    `
    

  return (
    <Section><Container>
    <Links>
        <Logo src="./img/logo1.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contacts</ListItem>

        </List>
    </Links>    
    <Icons>
    <Icon>
      <MdOutlineSearch size={30} style={style} />

    </Icon>
      <Button>Hire Now</Button>
    </Icons>
    </Container></Section>
  )
}

export default Navbar