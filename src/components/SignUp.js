import React from "react";
import Axios from "axios";
import {withRouter} from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

     async onSubmit(e) {

        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        let data = {
            "user": {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        }
        e.preventDefault()
         const response = await Axios.post('https://conduit.productionready.io/api/users/',data,config)
         localStorage.setItem('login_parameters', JSON.stringify(response.data))
         this.setState({Token: response.data}, () => {
             console.log(this.state);
             this.props.history.push('/')})
    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign Up</h1>
                            <p className="text-xs-center">
                                Need an account?
                            </p>
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <label className="custom-label">Username</label>
                                    <input
                                        value={this.state.username}
                                        onChange={this.onChange.bind(this)}
                                        type="text"
                                        name="username"
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="custom-label">Email</label>
                                    <input
                                        value={this.state.email}
                                        onChange={this.onChange.bind(this)}
                                        type="text"
                                        name="email"
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="custom-label">Password</label>
                                    <input
                                        value={this.state.password}
                                        onChange={this.onChange.bind(this)}
                                        type="text"
                                        name="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-lg">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter( SignUpForm)