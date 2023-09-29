import React,{ useState} from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function Dash(){
    const [user, setuser]=useState([])
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
                 const response = await fetch("http://localhost:1800/api/data",{
                     method:"GET",
                     headers:{
                         Authorization: `Bearer ${token}`
                     }
                     
                 })
                 const data = await response.json();
                 
                 
                 if(data.message === "token expried"){
                    logout()
                 }
                 setuser(data.user)
                 
                 
                } catch (error) {
                 console.log(error)
                 
                }
                 
             }
                 
           
           getuser();

        }else{
            logout();
        }

        
      

    },[])




    return(
        <div>
          <div>
          <button onClick={logout} className="logout-btn">logout</button>
          <button  onClick={()=>history.push("/create")} className="signup-btn">Sign up</button><br></br>

          </div>
          
          <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>Username</th>
          <th>Email</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
        {user.map((e,idx)=>{
         return <tr>
            <td key={idx}>{idx}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.createdAt.slice(0,10)}</td>
          </tr>
        })}
      </tbody>
    </Table>
         
            
        </div>
    )
}

export default Dash