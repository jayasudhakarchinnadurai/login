import React,{ useState} from "react";
import { useEffect } from "react";



function Dash(){
    const [user, setuser]=useState([])
    
  
   
    

    useEffect(()=>{
        const token = sessionStorage.getItem('token')

        const getuser = async()=>{
            
    
            try {
             const response = await fetch("http://localhost:1800/api/data",{
                 method:"GET",
                 headers:{
                     Authorization: `Bearer ${token}`
                 }
                 
             })
             const data = await response.json();
             console.log(data.user)
             setuser(data.user)
             
             
            } catch (error) {
             console.log(error)
             
            }
             
         }
             
       
       getuser();
      

    },[])


let count =0

    return(
        <div>
          <p>total users:{count}</p>
           {user.map((per,idx)=>{
           
        return <div key={idx}>
                <p>{per.name}</p>
                <p>{per.email}</p>

            </div>
           
           })}
            
        </div>
    )
}

export default Dash