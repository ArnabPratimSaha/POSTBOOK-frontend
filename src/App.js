import './App.css';
import { BrowserRouter as Router, Route, Link , Switch,  Redirect} from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp"
import LogIn from "./Pages/LogIn/LogIn"
import HomePage from "./Pages/Home/HomePage"
import Httperror from "./Pages/http-error-page/http-error";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path = "/login" exact>
          <LogIn/>
        </Route>
        <Route path = "/signup" exact>
          <SignUp/>
        </Route>
        <Route path="/home" exact>
          <HomePage/>
        </Route>
        <Route path="/error" exact>
          <Httperror/>
        </Route>
        <Redirect to="/home"/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
