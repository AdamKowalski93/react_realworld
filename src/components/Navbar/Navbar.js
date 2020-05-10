import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends React.Component {

    NavbarBrand() {
        return <a className="navbar-brand text-white" href="#">Conduit</a>
        }

     NavbarCollapse(){
        return <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item inactive">
                    <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">sign out</a>
                </li>
            </ul>
        </div>
     }

    render() {
        return(
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