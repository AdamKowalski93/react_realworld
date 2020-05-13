import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import SignInForm from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <html>
      <head>
        <title>Bootstrap Example</title>
        </head>
    <body>
    <Router>
    <div className='App'>
        <Navbar/>
        <Switch>
            <Route patch='/' exact component={Home}/>
            <Route patch='/sign' component={SignInForm}/>
        </Switch>

    </div>
    </Router>
    </body>
</html>
  );
}

export default App;
