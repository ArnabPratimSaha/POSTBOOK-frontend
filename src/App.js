import './App.css';
import { BrowserRouter as Router, Route, Link , Switch,  Redirect} from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp"
import LogIn from "./Pages/LogIn/LogIn"

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
        <Redirect to="/login"/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
