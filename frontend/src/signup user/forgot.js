
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Forgot ({foremail,setforemail}){
    const history=useHistory()
    
    
   
// const editpassword=(e)=>{
//     e.preventDefault()
//     console.log(foremail)
//     setforemail("")
// }
    return(
        <div  className="login">

    <Form>
        <Form.Group  controlId="formBasicEmail">
        <Form.Label className="sub-in">Email your email</Form.Label><br></br>

        <Form.Control type="email" placeholder="Enter email" className="pass-value" 
         onChange={(e)=>setforemail(e.target.value)} />

        </Form.Group><br></br>
        <Button variant="primary" onClick={()=>history.push("/change")} className="sub-btn" value={foremail} >
        submit
      </Button>

   </Form>
        </div>

    )
}

export default Forgot