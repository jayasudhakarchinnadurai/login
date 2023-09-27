
import React from "react"; 
import { useState } from "react";


function Create (){

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

        const response = await fetch ("https://develogin.onrender.com/api/createuser",{
            method:"POST",
            body:JSON.stringify(newuser),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await  response.json();
        console.log(data)
        setname("");
        setemail("")
        setpassword("")
    
} catch (error) {

    console.log(error)
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
