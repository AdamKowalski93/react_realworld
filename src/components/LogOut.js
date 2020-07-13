import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, withRouter} from "react-router-dom";
import store from "../store";
import remove_token from "../actions/authActions";

class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token':store.getState().token
        }
    }

    async handleClick(e) {
        e.preventDefault()
        localStorage.removeItem('login_parameters')
        store.dispatch(remove_token.remove_token())
        this.props.history.push('/sign')


    }

    render() {
        return (
            <Link  className="nav-link text-black-50" onClick={this.handleClick.bind(this)}>
                <button className='btn-danger'>
                    LogOut
                </button>
            </Link>

        )
    }
}

export default withRouter(LogOut)