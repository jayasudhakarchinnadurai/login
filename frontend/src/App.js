import './App.css';
import{Switch,Route}from"react-router-dom"
import Login from './signup user/login.js';
import Create from './signup user/create.js';
import Forgot from './signup user/forgot.js';
import Change from './signup user/change.js';
import { useState } from 'react';

import Creaturl from './signup user/creaturl.js';
import Dashurl from './signup user/urldash.js';


function App() { 
  const [foremail,setforemail]=useState("");
  
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
       <Creaturl/>
      </Route>


      <Route  path="/loginurl">
       <Login/>
      </Route>


      
      <Route path="/dashurl">
       <Dashurl/>
      </Route>

      <Route path="/forgot">
       <Forgot  foremail={foremail} setforemail={setforemail} />
      </Route>


      <Route path="/change">
        <Change foremail={foremail} />

      </Route>

      <Route path="/create">
        <Create></Create>
      </Route>

      
      

    </Switch>
    </div>
  );
}

export default App;
