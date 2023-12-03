import React, { useState, useRef } from 'react';
import './App.css'

function UncontrolledForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [NameError,setNameError]=useState('')
  const [EmailError,setEmailError] = useState('')
  const namRef = useRef(null)
  const emailRef = useRef(null)

  
  
  const formsubmit =(event)=>{
   event.preventDefault()
   console.log("coming here")
                 const namevalue = namRef.current.value.trim()
    const emailvalue=emailRef.current.value.trim()
    
    console.log("emailva",emailvalue)
    console.log("namess",namevalue)
    if(namevalue ===''){
       setNameError('Enter any name')
    }else{
       setNameError('')
    }
    
    if(emailvalue ==''){
       setEmailError('enter any email')
    }else{
      setEmailError('')
    }

    if(emailvalue && namevalue){
       setEmailError('')
       setNameError('')
       setTimeout(()=>{
        alert("valid name and email")

       },500)
    }

 }



  return (
    <div className="maindiv">
      <div className='formdiv' >
        <form action="" onSubmit={formsubmit} >
          <h1>Form</h1>
          <div>
            <label htmlFor="">Name :</label>
            <input type="text" ref={namRef} placeholder='Enter your name' />
            <div className='Error'>{NameError}</div>
          </div>
          <div>
            <label htmlFor="">Email :</label>
            <input type="text" ref={emailRef} placeholder='Enter your email' />
            <div className='Error'>{EmailError}</div>

          </div>
          <button type='submit'>submit</button>
        </form>

      </div>
    </div>
  )
}

export default UncontrolledForm;
