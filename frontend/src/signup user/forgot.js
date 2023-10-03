
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from "react-toastify";



// import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




function Forgot ({foremail,setforemail}){
    const history=useHistory();

    
        const getemail =async(e)=>{
            const useremail={
              email:foremail
            }
            console.log(useremail)

            e.preventDefault()


            try {
                const response = await fetch("https://develogin.onrender.com/api/check",{
                method:"POST",
                body:JSON.stringify(useremail),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await response.json();
            console.log(data)
            if(data.message === "fetch successful"){
                toast.success(data.message)
                history.push("/change")

            }else if(data.message === "invaild email") {
                toast.error(data.message)

            }
                
            } catch (error) {
            toast.error(error)
            }
            
           
           
         }
       

   
    
 return(
        <div  className="form-container">

    <Form>
        <Form.Group  controlId="formBasicEmail">
        <Form.Label >Email your email</Form.Label><br></br>

        <Form.Control type="email" placeholder="Enter email"  
         onChange={(e)=>setforemail(e.target.value)} />

        </Form.Group><br></br>
        <Button variant="primary" onClick={getemail} className="for-btn" value={foremail} >
        submit
      </Button>

   </Form>
        </div>

    )
}

export default Forgot