import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import GoogleButton from '../pages/Google'
const Container = styled.div`
 max-width:100%;
 height:89vh;
 display:flex;
 background-color:#0f00;
 align-items:center;
 justify-content:center;
`
const Wrapper = styled.form`
 width:50%;
 max-width:463px;
 height:auto;
`
const Label = styled.label`
 font-size:20px;
 color: aqua;
 margin:25px auto;
 padding:10px;
 width:auto;
`
const Input = styled.input`
 border:2px solid black;
 border-radius:7px;
 background-color:#fff;
 width:80%;
 margin:10px auto;
 padding:7px;
`

const Button = styled.button`
  border-radius:7px;
  background-color:Red;
  color:white;
  font-weight:bold;
  justify-content:center;
  align-items:center;
  margin:25px auto;
  cursor:pointer;
  padding:7px;
  border:none;
  box-shadow:3px black;
  margin:25px auto;
  &:hover{
      width: 100px;
      height: 50px;
      transition : width 2s height 0.5s;
      background-color:green;
  }
`

const Login = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState('')
  let navigate = useNavigate()
  const submit = async(e) => {
     e.preventDefault()
      const response =  await fetch(`/api/login` ,{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      body: JSON.stringify({
        email,password
      })
      
    })
    const content = await response.json()
    
    setRedirect(true)
    props.setName(content.email)    
  }
  if(redirect){
    navigate(`/`)
  }

  return (
    <div>
    <Container>
       <Wrapper onSubmit={submit}>
            <Label >Email:</Label>
            <Input onChange={e => setEmail(e.target.value)}/>
             <Label>Password:</Label>
             <Input type="password" onChange={e => setPassword(e.target.value)}/>
             <br/>
             <Button >Login</Button>
             <GoogleButton/>
        </Wrapper>
        
        
    </Container>
    </div>
  )
}

export default Login