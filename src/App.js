import React from 'react';
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({Token: nextProps})
    }

    render() {
        return (
            <html>
            <head>
                <title>Bootstrap Example</title>
            </head>
            <body>
            <BrowserRouter>
                <div className='container'>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/sign" component={SignInForm}/>
                        <Route exact path="/signup" component={SignUpForm}/>
                    </Switch>
                </div>
            </BrowserRouter>
            </body>
            </html>
        );
    }


}


export default (App);
