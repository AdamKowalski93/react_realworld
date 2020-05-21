import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import {withRouter} from "react-router-dom";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            Token: ''
        }
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        let data = {
            "user": {
                email: this.state.email,
                password: this.state.password
            }
        }
        // Promises posiada funkcje jak isFulfilled dopytac jak ich tu uzyc
        let jwt = Axios.post('https://conduit.productionready.io/api/users/login', data, config).then(res => localStorage.setItem('login_parameters', JSON.stringify(res.data)))
        this.setState({'Token': jwt})
        e.preventDefault()


    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign In</h1>
                            <p className="text-xs-center">
                                Need an account?
                            </p>
                            <form onSubmit={this.onSubmit.bind(this)}>
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
                                        Sign In
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

export default withRouter(SignInForm)