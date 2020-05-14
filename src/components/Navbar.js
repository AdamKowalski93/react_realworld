import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    NavbarBrand() {
        return <p className="navbar-brand text-white">Conduit</p>
    }

    NavbarCollapse() {
        return <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sign" className="nav-link text-white">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link text-white">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">
                    {this.NavbarBrand()}
                    {this.NavbarCollapse()}
                </div>
            </nav>
        )
    }
}

export default Navbar