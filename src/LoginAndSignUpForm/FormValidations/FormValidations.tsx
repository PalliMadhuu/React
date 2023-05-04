

export const validateName=(recievedName:any)=>
{
  
      let regexp=/^[a-zA-Z ]+$/
      if(!regexp.test(recievedName))
      {
        return 'Please Enter Proper Name'
      }
      return ''
     
}
export const validateEmail=(recievedEmail:any)=>
{
  let regExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(!regExp.test(recievedEmail))
    {
      return 'Please Enter Valid Email'
    }
    return ''
}
export const validateMobile=(recievedValue:any,mobNumLen:any)=>
  {
    let len=recievedValue.length===mobNumLen;
    console.log(len);
    let regexp=/^[a-zA-Z ]+$/
    if(regexp.test(recievedValue))
    {
      return 'Please Enter Valid Mobile Number '
    }
   else if(!len)
   {
    return 'please Enter ' + mobNumLen + '   Digits'
   }
   else
    return ''
  }
 export const validatePassword=(recievedValue:any)=>
  {
let regexp=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(!regexp.test(recievedValue))
    {
      return 'Please Enter Atleast 8 Digits include capital letter, small letter and one number'
    }
    return ''
  }
  export const getCountryCode=(recievedCounty:any)=>
  {
    let countryCode:any;
    switch(recievedCounty)
    {
     case 'India':return countryCode='+91' 
     case 'United States' : return countryCode ='+12'
     case 'Australia':return countryCode='+65' 
     case 'Newzland' : return countryCode ='+42'
     default: return countryCode='00' 
    }
  }
  export const getMobNumLen=(recievedConCode:any)=>
  {
    let mobLen:any;
    switch(recievedConCode)
    {
     case '+91' :return mobLen=10 
     case '+12' : return mobLen =9
     case '+65' :return mobLen=7
     case '+42' : return mobLen =8
     default: return mobLen=0 
    }
  }
  export const validateCnfmPswd=(recievedValue:any,password:any)=>
  {
    let regexp=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(!regexp.test(recievedValue))
    {
      return 'Please Enter Atleast 8 Digits include capital letter, small letter and one number'
    }
   else  if(recievedValue!==password)
    {
      console.log(password + ''+ recievedValue)

      return 'Password Mismatches '
    }
    return ''
  }



