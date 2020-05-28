import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, withRouter} from "react-router-dom";
import {get_jwt} from "./guardians/Auth"

class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'Token': get_jwt()
        }
    }



    async handleClick(e) {
        e.preventDefault()
        localStorage.removeItem('login_parameters')
        this.setState({Token: ''}, () => {
            console.log(this.state);
            this.props.history.push('/sign')
        })


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