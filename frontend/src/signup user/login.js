import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from "react-toastify";


function Login(){
    const history=useHistory();
    let [email,setlogemail]=useState("")
    let [password,setlogpass]=useState('')

    const loginuser = async(e)=>{
    
      e.preventDefault();
      const userlogin={
          email,
          password
      }
     
     
      
  try {
  
          const response = await fetch("https://develogin.onrender.com/api/user",{
              method:"POST",
              body:JSON.stringify(userlogin),
              headers:{
                  "Content-Type":"application/json"
              }
          })
         const data = await response.json();
         if(data.message === "password wrong" ){
            toast.error(data.message)
          }else if(data.message === "login successfull"){
            sessionStorage.setItem("token" ,data.token)
            toast.success(data.message)
            history.push("/dashurl")
          }else{
            toast.error(data.message)
          }
          
      } catch (error) {
   toast.error(error)
      
  }
      }

   
    return(
    <div>
     
        <div className='form-container'>
        <Form>

        <Form.Group  controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         onChange={(e)=>setlogemail(e.target.value)}/>
        </Form.Group>

       <Form.Group  controlId="formBasicPassword">
        <Form.Label >password</Form.Label><br></br>
        <Form.Control  type="password" placeholder="password"  onChange={(e)=>setlogpass(e.target.value)} />
        </Form.Group><br></br>
        <Button variant="primary"  onClick={loginuser} className="login-btn" >
        Login
         </Button><br></br><br></br>
         <a href='/forgot' className="forgot-click">Forgot Password?</a>
      </Form> 
    </div>
    
      <div className="signup">
        <button className='log-btn' onClick={()=>history.push("/create")}>sign up</button>
      </div>
        </div>
    )
}

export default Login