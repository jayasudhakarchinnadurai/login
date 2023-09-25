import './App.css';
import{Switch,Route}from"react-router-dom"
import Login from './signup user/login.js';
import Editpassword from './signup user/editpass.js';
import Create from './signup user/create';

function App() {
  return (
    <div className="App">
    <Switch>

      <Route exact path="/">
       <Login/>
      </Route>


      <Route path="/edit">
        <Editpassword/>

      </Route>

      <Route path="/create">
        <Create></Create>
      </Route>


    </Switch>
    </div>
  );
}

export default App;
