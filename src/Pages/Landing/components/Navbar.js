import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../../components/Buttons/LinkButton'

const Navbar = () => {
    return (
        <nav className="navbar navbar-primary bg-info static-top">
            <div className="container">
                <div className="navbar-brand logo-landing"/>
                <span>
                    <LinkButton to={'/login?aba=1'} className="login-btn criar-btn">Criar Conta</LinkButton>
                    <LinkButton to={'/login'} className="login-btn">Entrar</LinkButton>
                </span>
                {/* <Link className="btn btn-lg btn-light" to={'/login'}>
                    Entrar
                </Link> */}
            </div>
        </nav>
    );
};

export default Navbar;