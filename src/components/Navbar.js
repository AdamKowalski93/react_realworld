import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import LogOut from "./LogOut";
class Navbar extends React.Component {


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg  bg-white">
                        <a className="navbar-brand text-success">Conduit</a>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="navbar-nav ml-md-auto">
                                <li className="nav-item  text-black-50">
                                    <LogOut/>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-black-50">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sign" className="nav-link text-black-50">
                                        Sign In
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link text-black-50">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Navbar