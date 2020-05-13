import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

// import {Link} from 'react-router-dom

class Navbar extends React.Component {

    NavbarBrand() {
        return <p className="navbar-brand text-white">Conduit</p>
    }

    NavbarCollapse() {
        return <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <Link to="/home">
                    <li className="nav-item text-white">Home</li>
                </Link>
                <Link to="/sign">
                    <li className="nav-item text-white">Sign In</li>
                </Link>
                {/*<Link to="/signout">*/}
                {/*    <li className="nav-item text-white">Sign out</li>*/}
                {/*</Link>*/}
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