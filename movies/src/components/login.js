import React, { useState } from 'react'
import './login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
  const navigate=useNavigate();
  const [data,setData]=useState({  
    emailid:"",
    password:"",
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
        await axios.post("http://localhost:7002/admin/login",data).then((res)=>{
          console.log(res);
          alert("login success");
          navigate("/home");
        });

        <Navigate to="./home"></Navigate>
    } catch (error) {
        console.log("something is wrong");
    }
}
  return (
    
      <>

  <nav></nav>
  <div className='loginback'>
  <div className="form-wrapper">
    <h2>Sign In</h2>
    <form action="#">
      <div>
        <input type="text" require="" className="form-control" onChange={HandleChange} name='emailid' value={data.emailid}/>
        <label>Email or phone number</label>
      </div>
      <div>
        <input type="password" required="" className="form-control" onChange={HandleChange} name='password' value={data.password} />
        <label>Password</label>
      </div>
      <input type="submit" onClick={HandleSubmit} value="Submit" className='btn btn-success'/>
      
    </form>
    <p>
      New <Link to="/signup">Sign up now</Link>
    </p>
    
  </div>
  </div>
</>


  )
}

export default Login
