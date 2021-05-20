import logo from './logo.svg';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Offer from "./components/Offer"
import Welcom from "./components/Welcom"
import All from "./components/All"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import GetService from "./components/GetService"


import './App.css';

function App() {
  return (
    <div className="App">
          <Router>

          <Route path="/" exact component ={SignIn}>           
            </Route>
            <Route path="/SignUp" exact component ={SignUp}>           
            </Route>
            <Route path="/Welcom" exact component ={Welcom}>           
            </Route>
            <Route path="/All" exact component ={All}>           
            </Route>
          </Router>


    </div>
  );
}

export default App;
