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
        this.state = {
            'Token': store.getState().token
        }

    }

    isAuthenticated(component) {

        if (this.state.Token) {
            return component;
        } else {
            return <Redirect to="/sign"/>;
        }
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
                        <Route exact path="/" render={() => this.isAuthenticated(this.state.Token,<Home/>)}/>
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
