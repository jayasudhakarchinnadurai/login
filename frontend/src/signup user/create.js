
import React from "react"; 
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Create (){
    const history=useHistory();

    const [name, setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]= useState("") 
   
   
const createuser = async(e)=>{
    
    const newuser={
        name,
        email,
        password
    }
   
    e.preventDefault()
   
try {

    
        const response = await fetch ("http://localhost:1800/api/createuser",{
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
       setname("")
       setemail("")
       setpassword("")
        
    }
        
    
catch (error) {
 toast.error(error)
    
}


    }
    return (
        <div className="createuser">
            <h4>create user data</h4>
            <input 
            className="cre-input"
            onChange={(e)=>setname(e.target.value)} 
            value={name}
            placeholder="name"/><br></br><br></br>
            <input 
            className="cre-input"
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            placeholder="email"/><br></br><br></br>
            <input
            className="cre-input" 
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
             placeholder="password"/><br></br><br></br>
            <button onClick={createuser} className="create-btn">click</button>

        </div>
    )
    
}

export default Create
