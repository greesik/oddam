import './scss/App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Route path={"/"} component={Home}/>
      </Router>

  );
}

export default App;
