import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contacts from './components/Contacts'
import styled from "styled-components"


function App() {
  const [count, setCount] = useState(0)
  const Components=styled.div`
  height:100vh;
  scroll-snap-type:y mandatory;
  scroll-behavior: smooth;
  overflow-y:auto;
  color:white;
  background:url("./img/bg.jpeg");
  scrollbar-width:none;
  &::-webkit-scrollbar{
  display:none;
  }
  `
  return (
    <Components>
      <Hero/>
      <Who/>
      <Works/>
      <Contacts/>
    </Components>
  )
}

export default App
