import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Creaturl (){
  
    
  
  const url="https://develogin.onrender.com/api/"
  const history=useHistory();
  const [weburl,setweburl]=useState("")
    const [shorturl, setshorturl]=useState("")

    const creaturl = async (e)=>{
        e.preventDefault()
        const longurl ={
           full:shorturl
        }
  try {
    const response = await fetch("https://develogin.onrender.com/api/createurl",{
        method:"POST",
        body:JSON.stringify(longurl),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json();
    setweburl(url+data.newshorturl.shorturl)
    
  } catch (error) {
    console.log(error)
    
  }

    }
    return(
        <div>
          <div className="signup">
        <button onClick={()=>history.push("/loginurl")} className='log-btn'>login</button>
        <button onClick={()=>history.push("/create")}  className='sign-btn'>signup</button>
       </div >
       <div className='form-container'>
        <Form>

        <Form.Group  controlId="formBasicEmail">
        <Form.Label style={{color:"red"}} >Enter your url</Form.Label>

        <Form.Control  placeholder="Enter url" 
        onChange={(e)=>setshorturl(e.target.value)} value={shorturl} />
        </Form.Group><br></br>


        <Button variant="primary" onClick={creaturl} className='url-sub' value={shorturl} >
        submit</Button>

      <Form.Group  controlId="formBasicEmail">
      <Form.Label  style={{color:"red"}}> short url</Form.Label>
      <Form.Control  placeholder='short url'
       value={weburl} />
        </Form.Group>
      <a  className='url-click'  href={url+weburl}>click</a>

   </Form>
   </div>
   
   
        </div>
    )
}

export default Creaturl;