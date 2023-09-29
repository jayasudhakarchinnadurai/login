import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import{toast} from "react-toastify"


function Change ({foremail}){
    const [changepass , setchangepass]=useState("")

    const history=useHistory();

    const changpassword= async(e)=>{
             e.preventDefault();
     const edituser={
        email:foremail,
        password:changepass
     }
    
        try {
            const res = await fetch ("http://localhost:1800/api/edit",{
              method:"PATCH",
              body:JSON.stringify(edituser),
              headers:{
                "Content-Type":"application/json"
             }
          })
            const value=  await res.json()
            console.log(value)
            toast.success(value.message)
        } catch (error) {
          toast.error(error)  
            
        }

history.push('/')


    
    }
    return(
        <div  className="login">

    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="change-in"> Enter your new password</Form.Label><br></br>

        <Form.Control type="email" 
        placeholder="Enter password" 
        className="pass-value" 
        value={changepass}
        onChange={(e)=>setchangepass(e.target.value)} />

        </Form.Group><br></br>
        <Button variant="primary" onClick={changpassword} className="sub-btn" >
        submit
      </Button>

   </Form>
        </div>

    )
}

export default Change