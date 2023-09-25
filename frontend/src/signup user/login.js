import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login(){
    const history=useHistory();
    const login =()=>{
        history.push("/edit")
    }
    return(
    <div>
        <div className="login">
            <from>
            <input placeholder="Example:johndoe@mail.com" className="mail"/><br></br><br></br> 
            <input placeholder="your password"/><br></br><br></br> 
            <button onClick={login}>click</button>
              </from>
      </div>
        </div>
    )
}

export default Login