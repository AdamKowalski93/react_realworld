import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, withRouter} from "react-router-dom";
import store from "../store";
import remove_token from "../actions/authActions";
import types from "../constans/types";
import {connect} from "react-redux";

class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token': ''
        }
    }

    async handleClick(e) {
        e.preventDefault()
        localStorage.removeItem('login_parameters')
        this.props.REMOVE_TOKEN()
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

function mapStateToProps(state) {
    return {auth: state.token};
}

function mapDispatchToProps(dispatch) {
    return {
        REMOVE_TOKEN: () => {
            dispatch({type: types.REMOVE_TOKEN})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogOut);