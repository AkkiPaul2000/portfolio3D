import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'

function Contacts() {

  const Section=styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
  `
  const Container=styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex: 1;
`
const Left=styled.div`
    flex: 1;
    height: 100vh;
    /* background-color: lightblue; */
    display: flex;
    align-items: center;
    justify-content: end;
  `
const Title=styled.h1`
  font-weight: 200;
`
const Form=styled.form`
display: flex;
flex-direction: column;
  gap: 50px;
  width: 400px;
  /* margin: 0px 60px; */
`
const Input=styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea=styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const Button=styled.button`
  padding: 20px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  background-color: #da4ea2;
`
const Right=styled.div`
    flex:1 ;
    margin: auto;
  `
    const ref=useRef()
const [success,setSuccess]=useState(null)

     const handleSubmit=e=>{
    e.preventDefault()
    console.log("Submit button clicked")
    emailjs
    .sendForm('service_1mvulr1', 'template_ps9pf5q', ref.current,'YeIc68zKj38JJf5_d')
    .then(
      (result) => {
        console.log("Done",result.text);
        setSuccess(true)
      },
      (error) => {
        console.log("beee done",error.text);
        setSuccess(false)

      },
    );

  }
  return (
      <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>          
            <Title>Contact us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder='Write your name' rows={10} name="message" />
            <Button type="submit">Send</Button>
            {success && "Form Submitted! Will be soon connecting with you."}

          </Form>
          
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
      </Section>
      
  )
}

export default Contacts

///////////////////////////////////////////////////////////////////////////









// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import styled from 'styled-components'
// import Map from './Map'

// function Contacts() {

//   const Section=styled.div`
//     height: 100vh;
//     scroll-snap-align: center;
//     display: flex;
//   `
//   const Container=styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   gap: 50px;
//   flex: 1;
// `
// const Left=styled.div`
//     flex: 1;
//     height: 100vh;
//     /* background-color: lightblue; */
//     display: flex;
//     align-items: center;
//     justify-content: end;
//   `
// const Title=styled.h1`
//   font-weight: 200;
// `
// const Form=styled.form`
// display: flex;
// flex-direction: column;
//   gap: 50px;
//   width: 400px;
//   /* margin: 0px 60px; */
// `
// const Input=styled.input`
//   padding: 20px;
//   background-color: #e8e6e6;
//   border: none;
//   border-radius: 5px;
// `
// const TextArea=styled.textarea`
//   padding: 20px;
//   background-color: #e8e6e6;
//   border: none;
//   border-radius: 5px;
// `
// const Button=styled.button`
//   padding: 20px;
//   color: white;
//   border: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   background-color: #da4ea2;
// `
// const Right=styled.div`
//     flex:1 ;
//     margin: auto;
//   `
// const ref=useRef()
// const [success,setSuccess]=useState(null)


//   const handleSubmit=e=>{
//     e.preventDefault()
//     // emailjs
//     // .sendForm('service_1mvulr1', 'template_ps9pf5q', ref.current,'YeIc68zKj38JJf5_d')
//     // .then(
//     //   (result) => {
//     //     console.log(result.text);
//     //     setSuccess(true)
//     //   },
//     //   (error) => {
//     //     console.log(error.text);
//     //     setSuccess(false)

//     //   },
//     // );

//   }

//   return (
//       <Section>
//       <Container>
//         <Left>
//           <Form ref={ref} onSubmit={handleSubmit}>          
//             <Title>Contact us</Title>
//             <Input placeholder="Name"  name="name"/>
//             <Input placeholder="Email"  name="email" />
//             <TextArea name="message" placeholder='Write your name' rows={10} />
//             <Button  type="submit">Send</Button>
//             {success && "Form Submitted! Will be soon connecting with you."}
//           </Form>
          
//         </Left>
//         <Right>
//           <Map/>
//         </Right>
//       </Container>
//       </Section>
      
//   )
// }

// export default Contacts