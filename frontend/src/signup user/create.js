
import React from "react"; 

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import *as yup from "yup";
import {useFormik} from"formik"
const userschemavalidation=yup.object({
    firstname:yup.string().required("enter your firstname"),
    lastname:yup.string().required("enter your lastname"),
    email:yup.string().required("enter your email"),
    password:yup.string().required("enter your password")

})

function Create (){
    const history=useHistory();


    const {values,handleChange, handleSubmit,errors}=useFormik({

        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:""
        },
        validationSchema:userschemavalidation,
        onSubmit:(newdata)=>{
            createuser(newdata)

        }
    })
   
   
const createuser = async(userdata)=>{
    
    const newuser={
        name:userdata.firstname+userdata.lastname,
        email:userdata.email,
        password:userdata.password
    }
   

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
      
        
    }
        
    
catch (error) {
 toast.error(error)
    
}


    }
    return (
        <div className="creat-container">
    <Form onSubmit={handleSubmit} className="form">    

       <Form.Group  >
        <Form.Label>First Name:</Form.Label>
        <Form.Control 
        name="firstname"
        value={values.firstname}
        onChange={handleChange} 
        placeholder="first name"  />
      </Form.Group>
      {errors.firstname? <p style={{color:"crimson"}}>{errors.firstname}</p>:""}

      <Form.Group >
        <Form.Label>last Name:</Form.Label>
        <Form.Control placeholder="last name" 
        name="lastname"
        value={values.lastname}
        onChange={handleChange} 
          />
      </Form.Group>
      {errors.lastname? <p style={{color:"crimson"}}>{errors.lastname}</p>:""}
   <Form.Group  controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         name="email"
         value={values.email}
         onChange={handleChange}
         
        />
        </Form.Group>
        {errors.email? <p style={{color:"crimson"}}>{errors.email}</p>:""}

        <Form.Group  controlId="formBasicPassword">
        <Form.Label >password</Form.Label><br></br>
        <Form.Control  type="password" placeholder="password" 
       
        name="password"
        value={values.password} 
        onChange={handleChange} 
        
        />
        </Form.Group><br></br>

        {errors.password? <p style={{color:"crimson"}}>{errors.password}</p>:""}
        <button className="create-btn" type="submit">submit</button>
        
        </Form> 

        </div>
    )
    
}

export default Create
