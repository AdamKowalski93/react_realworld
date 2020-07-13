import React from 'react';
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {connect} from "react-redux"
import {isLogin} from "./components/guardians/IsLogged";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Redirect} from "react-router";
import store from "./store";
// import TokenReducer from "./reducers/auth";


class App extends React.Component {

    constructor(props) {
        super(props);
        // this.isAuthenticated=this.isAuthenticated.bind(this)
        this.state = {
            'Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA1MDEzLCJ1c2VybmFtZSI6InRlc3QwMjIyMDEiLCJleHAiOjE1OTk4MTMzMDd9.BoFc_X58IfNqjgqke6_6r1syFDopM4K3wRmVKk8kI1M'
        }

    }

    // isAuthenticated(component) {
    //     console.log('auth:',component)
    //     if (this.state.Token !== "") {
    //         <Redirect to="/sign"/>
    //     } else {
    //         return <Redirect to="/sign"/>;
    //     }
    // }

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

function mapStateToProps(state) {
    return {props: state.token};
}

export default connect(mapStateToProps)(App);
