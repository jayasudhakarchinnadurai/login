
import React from "react"; 
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';

function Create (){
    const history=useHistory();

    const [fristname, setfirstname]=useState("")
    const[lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]= useState("") 
   
   
const createuser = async(e)=>{
    
    const newuser={
        name:fristname+lastname,
        email,
        password
    }
   
    e.preventDefault()
   
try {

    
        const response = await fetch ("https://develogin.onrender.com/api/createuser",{
            method:"POST",
            body:JSON.stringify(newuser),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await  response.json()

        
        if(data.message === "sign up successful"){
            toast.success(data.message)
            history.push("/")
        }else if(data.message === "its email already taken"){

            toast.error(data.message)
        }
       setfirstname("")
       setlastname("")
       setemail("")
       setpassword("")
        
    }
        
    
catch (error) {
 toast.error(error)
    
}


    }
    return (
        <div className="creat-container">
           

    <Form.Group >
        <Form.Label>First Name:</Form.Label>
        <Form.Control onChange={(e)=>setfirstname(e.target.value)} 
            value={fristname}
            placeholder="first name"  />
      </Form.Group>

      <Form.Group >
        <Form.Label>last Name:</Form.Label>
        <Form.Control placeholder="last name" onChange={(e)=>setlastname(e.target.value)} 
          value={lastname}
        />
      </Form.Group>

   <Form.Group  controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          onChange={(e)=>setemail(e.target.value)}
         value={email}
        />
        </Form.Group>

        <Form.Group  controlId="formBasicPassword">
        <Form.Label >password</Form.Label><br></br>
        <Form.Control  type="password" placeholder="password" 
        onChange={(e)=>setpassword(e.target.value)}
        value={password}  />
        </Form.Group>
  
        <button onClick={createuser} className="create-btn">Sign up</button> 

        </div>
    )
    
}

export default Create
