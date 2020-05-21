import React from 'react';
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { isAuthenticated } from "./components/guardians/Auth"
import {isLogin} from "./components/guardians/IsLogged";
import { BrowserRouter,Route, Switch } from 'react-router-dom';


function App() {
  return (
      <html>
            <head>
                <title>Bootstrap Example</title>
            </head>
            <body>
            <BrowserRouter >
                <div className="App" className='container'>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" render={() => isAuthenticated(<Home/>)}/>
                        <Route path="/sign" render={() => isLogin(<SignInForm/>)} />
                        <Route path="/signup" component={SignUpForm} />
                    </Switch>
                </div>
            </BrowserRouter>
            </body>
      </html>
  );
}

export default App;
