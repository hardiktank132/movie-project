import React, { useState } from 'react'
import './signup.css';
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';
function Signup() {
    const [data,setData]=useState({
        fullname:"",
        emailid:"",
        password:"",
        mobno:"",
        address:"",
    })
    const HandleChange=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        setData({
            ...data,
        [name]:value,
        })
    }
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:7002/admin/signup",data).then((res)=>console.log(res)).catch((e)=>console.error("error"));
            <Navigate to="./login"></Navigate>
        } catch (error) {
            console.log("something is wrong");
        }
    }
  return (
    <div className='signupback'>
      <div className="login-page">
  <div className="form">
    <div className="login">
      <div className="login-header">
        <h3>REGISTRATION</h3>
        <p>Please enter your credentials to Registration.</p>
      </div>
    </div>
    <form className="login-form">
      <input type="text" placeholder="full name" onChange={HandleChange} name='fullname' value={data.fullname}/>
      <input type="email" placeholder="Email id" onChange={HandleChange} name='emailid' value={data.emailid}/>
      <input type="password" placeholder="password" onChange={HandleChange} name='password'value={data.password}/>
      <input type="number" placeholder="mobile no" onChange={HandleChange} name='mobno'value={data.mobno}/>
      <input type="addresh" placeholder="address" onChange={HandleChange} name='address'value={data.address}/>
      <button onClick={HandleSubmit}>SIGN UP</button>
      <p>
        Already registered? <Link to="/">Login to account</Link>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Signup
