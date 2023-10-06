import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashurl(){
    const [dataurl,setdataurl]=useState([]);
    const url="https://develogin.onrender.com/api/"
    const history=useHistory();

    const logout = ()=>{
      sessionStorage.clear()
      history.push("/")

  }
 useEffect(()=>{
  const token = sessionStorage.getItem('token')

  if(token){
      const getuser = async()=>{
      

          try {
           const response = await fetch("https://develogin.onrender.com/api/data",{
               method:"GET",
               headers:{
                   Authorization: `Bearer ${token}`
               }
               
           })
           const data = await response.json();
           
           
           if(data.message === "token expried"){
              logout()
           }
           
           
          } catch (error) {
           console.log(error)
           
          }
           
       }
           
     
     getuser();

  }else{
      logout();
  }
  
    const geturl =async ()=>{
        try {
           const response = await fetch("http://localhost:1800/api/geturl",{
            method:"GET",
           }) 
           const data = await response.json();
           setdataurl(data.geturl)
           console.log(data.geturl)
           
        } catch (error) {
            console.log(error)
        }
    }
    geturl();

 },[])
    
    return(
        <div>
          <div>
          <button onClick={logout} className="logout-btn">logout</button>
          <button  onClick={()=>history.push("/create")} className="sign-btn">Sign up</button><br></br>
            <h4 className="dash">Dash Borad</h4> 
           <h6  className="dash">Total User:{" "}{dataurl.length}</h6>
          </div>
          
          <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>longurl</th>
          <th>shorturl</th>
          <th>clicks</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
       
        {dataurl.map((e,idx)=>{
         return <tr>
            <td key={idx}>{idx+1}</td>
            <td>{e.full}</td>
            <td ><a href={url+e.shorturl}>{e.shorturl}</a></td>
            <td>{e.clicks}</td>
            <td>{e.createdAt.slice(0,10)}</td>
          </tr>
        })}
      </tbody>
    </Table>
        </div>
    )

}

export default Dashurl;
