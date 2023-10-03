import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashurl(){
    const [dataurl,setdataurl]=useState([]);
    const url="http://localhost:1800/api/"
 useEffect(()=>{
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
