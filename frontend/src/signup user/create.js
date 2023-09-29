
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
        <div>
            <input 
            onChange={(e)=>setname(e.target.value)} 
            value={name}
            placeholder="name"/>
            <input 
            onChange={(e)=>setemail(e.target.value)}
            value={email}
            placeholder="email"/>
            <input 
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
             placeholder="password"/>
            <button onClick={createuser}>click</button>

        </div>
    )
    
}

export default Create
