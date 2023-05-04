import React, { FC, useRef, useState } from 'react';
import './SignUpForm.css';
import { Link,useNavigate } from 'react-router-dom';
import { validateName, validateEmail, validateMobile, validatePassword, getCountryCode, getMobNumLen ,validateCnfmPswd} from '../FormValidations/FormValidations';
import { postData } from '../UsingAxios/UsingAxios';
interface Values{
  [key:string]:any
}

const  userDetails:Values=({
  userName:'',
  password:'',
  emailId:'',
  mobileNumber:'',
  country:'',
  dateOfBirth:'',
  gender:'',
  isAcceptedTerms:false
})

let error: any;
let countryCode: any;
let mobNumLeng: any;

const SignUpForm: FC = () => {
  const [usetData,setUserData]=useState(userDetails);
  const nameRef = useRef<HTMLSpanElement>(null)
  const emailRef = useRef<HTMLSpanElement>(null)
  const mobRef = useRef<HTMLSpanElement>(null)
  const pswdRef = useRef<HTMLSpanElement>(null)
  const cnfPswdRef = useRef<HTMLSpanElement>(null)
  const navigate=useNavigate();
  function onNamechanges(event: any) {
    error = validateName(event.target.value)
    if (nameRef.current) {
      nameRef.current.innerHTML = error
    }
    if(!error)
    {
      userDetails.userName=event.target.value;
      console.log(userDetails.userName)
    }
  }
  function onEmailchanges(event: any) {
    error = validateEmail(event.target.value)
    if (emailRef.current) {
      emailRef.current.innerHTML = error
    }
    if(!error)
    {
      userDetails.emailId=event.target.value;
      console.log(userDetails.emailId)
    }
  }
  function onMobilechanges(event: any) {
    error = validateMobile(event.target.value, mobNumLeng)
    if (mobRef.current) {
      mobRef.current.innerHTML = error
    }
    if(!error)
    {
      userDetails.mobileNumber=event.target.value;
      console.log(userDetails.mobileNumber)
    }
  }
  function onPswdchanges(event: any) {
    error = validatePassword(event.target.value)
    if (pswdRef.current) {
      pswdRef.current.innerHTML = error
    }
    if(!error)
    {
      userDetails.password=event.target.value;
      console.log(userDetails.password)
    }
  }
  function onCountryChange(event: any) {
    countryCode = getCountryCode(event.target.value);
    mobNumLeng = getMobNumLen(countryCode);
    console.log(countryCode)
    console.log(mobNumLeng);
    userDetails.country=event.target.value
  }
  function onGenderChange(event:any)
  {
      userDetails.gender=event.target.value;
      console.log(userDetails.gender)
  }
  function onDobChange(event:any)
  {
    userDetails.dateOfBirth=event.target.value;
    console.log(userDetails.dateOfBirth)
  }
  function onCnfmPswdChange(event:any)
  {
    if(userDetails.password!==null)
    {
    error=   validateCnfmPswd(event.target.value,userDetails.password);
    console.log(userDetails.password)
    if (cnfPswdRef.current) {
      cnfPswdRef.current.innerHTML = error
    }
    if(!error)
    {
      userDetails.password=event.target.value;
      console.log(userDetails.password)
    }
    }
    else{
      if (cnfPswdRef.current) {
      cnfPswdRef.current.innerHTML='Please Fill the Password First'
      }
    }

  }

  function onCheckBoxChecked(event:any)
  {
         if(event.target.checked)
         {
          userDetails.isAcceptedTerms=true;
         }
         else{
          userDetails.isAcceptedTerms=false;
         }
  }
  function handleSubmit(event:any)
  {
    event?.preventDefault()
    console.log(userDetails)
    for(let value in userDetails)
    {
      if(userDetails[value]==="")
      {
          console.log('ddd')
          window.alert('Registration Failed');
          return;
      }
    }
    postData(userDetails);
    window.alert("Registered Successfully")
    navigate('/');

  }
  


  return (
    <center>
    <div className="SignUpForm" data-testid="SignUpForm">
      <form  onSubmit={handleSubmit}>
        <label>Enter User Name </label>
        <input type="text" placeholder="Enter Name" required onChange={onNamechanges} />
        <br></br>
        <span ref={nameRef}></span>
        <br></br>
        <label>Enter Email Id </label>
        <input type="Email" placeholder="Enter Email"  required onChange={onEmailchanges} />
        <br></br>

        <span ref={emailRef}></span>
        <br></br>

        <label>Password</label>
        
        <input type="password" placeholder='Password' required onChange={onPswdchanges} />
        <br></br>

        <span ref={pswdRef}></span>
        <br></br>

        <label>Confirm Password</label>

        <input type="password" placeholder='Confirm Password' required  onChange={onCnfmPswdChange} />
        <br></br>

        <span ref={cnfPswdRef}></span>
        <br></br>

       
        <input type="radio" id="html" name="fav_language" value="Male" required  onChange={onGenderChange} /><b>Male</b>
        <input type="radio" id="css" name="fav_language" value="Female" required onChange={onGenderChange} /><b>FeMale</b><br></br>
        <label >Select a date:</label>
        <input type="date" id="date" name="date" max={new Date().toISOString().split('T')[0]} onChange={onDobChange}  required /> 
        <br></br>
           <label>Country </label>
        <select name="Country" id="country" onChange={onCountryChange}>
          <option value="options">Select</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Newzland">Newzland</option>
          <option value="Australia">Austrailia</option>
        </select>
        <br></br>

        <label>Enter Mobile Number </label>
        <input type="text"  required placeholder="Enter Mobile Number" value={countryCode} onChange={onMobilechanges} />
        <br></br>

        <span ref={mobRef}></span>
        <br></br>

        <input type="checkbox" id="myCheckBox" required onChange={onCheckBoxChecked}/>  <label >Accept Terms And Conditions</label><br />
        <br></br>

        <button type="submit"> Sign Up</button>
        <br></br>
        <br></br>

        <button type="reset">Reset</button>

      </form>
      <ul>
      <li className="nav-item">
     Have An Account <Link to ='/' className="nav-link">Login</Link>
            </li>
            </ul> 
               </div>
               </center>
  )
}

export default SignUpForm;
