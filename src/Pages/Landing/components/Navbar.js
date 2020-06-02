import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-primary bg-info static-top">
            <div className="container">
                <div  className="navbar-brand logo-landing"/>
                <Link className="btn btn-lg btn-light" to={'/login'}>
                    Logar
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;