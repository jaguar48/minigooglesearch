import React from "react";
import './App.css';
import Home from './home';
import Searchpage from './searchpage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path ="/search">
             <Searchpage/>
            </Route>
            <Route path ="/">
              <Home/>
            </Route>
          </Switch>
        {/* home */}
      
        {/* home*/}
          {/* you are not following*/}
      </Router>
    </div>
  );
}

export default App;
