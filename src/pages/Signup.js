import React, { useState  } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Container = styled.div`
 max-width:100%;
 height: 79vh;
 display:flex;
 background-color:#0ff0;
 align-items:center;
 justify-content:center;
`
const Wrapper = styled.form`
 width:75%;
 max-width:463px;
 height:auto;
`
const Label = styled.label`
 font-size:20px;
 color: aqua;
 margin:25px auto;
 padding:5px;
`
const Input = styled.input`
 border:2px solid black;
 border-radius:7px;
 background-color:#fff;
 width:80%;
 margin:3px;
 padding:5px;
`

const Button = styled.button`
  border-radius:7px;
  background-color:Red;
  color:aqua;
  
  font-weight:bold;
  margin:25px auto;
  padding:8px;
  cursor:pointer;
  transition : 0.2s ease;
  &:hover{
      background-color:green;
  }
`

const Signup = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState('')
  let navigate = useNavigate()
  const submit = async(e) =>{
   e.preventDefault()
   const response = await fetch(`/api/register` , {
     method:'POST',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       name,email,password
     })
   })
    setRedirect(true)
  }
  if(redirect){
    navigate(`/login`)
  }
  return (
   
    <div>
    <Container>
        <Wrapper onSubmit={submit}>
            <Label>UserName:</Label>
            <Input onChange={e => setName(e.target.value)}/>
            <br/>
            <Label>Email:</Label>
            <br/>
            <Input type='email' onChange={e => setEmail(e.target.value)}/>
            <br/>
             <Label>Password:</Label>
             <Input type="password" onChange={e => setPassword(e.target.value)}/>
             <br/>
             <Button>Register</Button>
        </Wrapper>
    </Container>
    </div>
  )
}

export default Signup