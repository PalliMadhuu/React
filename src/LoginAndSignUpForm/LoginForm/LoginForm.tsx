import React, { FC, useRef } from 'react';
import './LoginForm.css';
import { Container, Form, Button } from 'react-bootstrap';
import {  Outlet ,Link, useNavigate} from 'react-router-dom';
import { validateEmail,validatePassword } from '../FormValidations/FormValidations';
import { getDataByEmail } from '../UsingAxios/UsingAxios';

interface LoginFormProps {
  checkLogin :()=>void

}

const LoginForm: FC<LoginFormProps> = (props) => {
  function onRegisterClicked()
  {
    navigate('/signUpForm')
  }
  const emailRef=useRef<HTMLSpanElement>(null)
  const pswdRef=useRef<HTMLSpanElement>(null)
  const sbmtBtnRef=useRef<HTMLSpanElement>(null)
  
  const navigate=useNavigate()

  let error=''
  let emailId='';
  let password='';
  function onEmailChange(event: any) {
    error = validateEmail(event.target.value)
    if (emailRef.current) {
      emailRef.current.innerHTML = error
    }
    if(!error)
    {
      emailId=event.target.value;
      console.log(emailId)
    }
  }
  function onPswdchanges(event: any) {
    error = validatePassword(event.target.value)
    if (pswdRef.current) {
      pswdRef.current.innerHTML = error
    }
    if(!error)
    {
      password=event.target.value;
    }
  }
  function handleSubmit(event:any)
  {
   event.preventDefault(); 
   if(emailId==='' || password==='')
   {
    console.log('sss')

     error='Please Enter Valid Pasword or Email'
     if (sbmtBtnRef.current) {
      sbmtBtnRef.current.innerHTML = error
    }
   }
   else{
 const userCred=  getDataByEmail(emailId);
 if(userCred){
 userCred.then(response=>{
 let actualPswrd=response[0].password
 if(actualPswrd===password)
 {
  window.alert('login Success');
  navigate('/HomePage')
  props.checkLogin();
 }
 else{
  error='Invalid Password'
  window.alert(error);
     if (sbmtBtnRef.current) {
      sbmtBtnRef.current.innerHTML = error
    }
 }

})
 }
 else{
  error='Invalid Email Id '
     if (sbmtBtnRef.current) {
      sbmtBtnRef.current.innerHTML = error
    }
 }

   }}
  
 
  
  return(
    
  <div className="LoginForm" data-testid="LoginForm">
    <h3>Login Here</h3>
<center>
 <Container>
      <Form  onSubmit={handleSubmit} id="loginContainer">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter Email Id" onChange={onEmailChange}
          />
          <span ref={emailRef}></span>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password" onChange={onPswdchanges}
          />
                    <span ref={pswdRef}></span>

        </Form.Group>
        <button  type="submit" className='btn-primary'>
          Login
        </button>
        <br></br>
        <span ref={sbmtBtnRef}></span>
      </Form>
    </Container>
    <br></br>
   <p> Don't Have an Account </p>
    <button type='button' onClick={onRegisterClicked} className='btn-primary'>
  Register
    </button>
    </center>
    </div>

  )
}

export default LoginForm;
