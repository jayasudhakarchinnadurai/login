import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

function Creaturl (){
    const [shorturl, setshorturl]=useState("")
    const creaturl = async (e)=>{
        e.preventDefault()
        const longurl ={
           full: shorturl
        }
  try {
    const response = await fetch("http://localhost:1800/api/createurl",{
        method:"POST",
        body:JSON.stringify(longurl),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
    
  }

    }
    return(
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="pass-in">Enter your url</Form.Label><br></br>

        <Form.Control  placeholder="Enter email" className="pass-value" 
         onChange={(e)=>setshorturl(e.target.value)} />

        </Form.Group><br></br>
        <Button variant="primary" onClick={creaturl} className="sub-btn" value={shorturl} >
        submit
      </Button>

   </Form>
        </div>
    )
}

export default Creaturl;