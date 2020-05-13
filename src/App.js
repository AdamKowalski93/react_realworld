import React from 'react';
import SignInForm from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Route, Switch } from 'react-router-dom';


function App() {
  return (
      <html>
      <head>
        <title>Bootstrap Example</title>
        </head>
    <body>
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sign" component={SignInForm} />
            </Switch>
        </div>
    </BrowserRouter>
    </body>
</html>
  );
}

export default App;
