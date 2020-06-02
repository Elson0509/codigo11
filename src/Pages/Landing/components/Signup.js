import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <section className="call-to-action text-white text-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                    <h2 className="mb-4">Está pronto para utilizar? Crie uma conta agora.</h2>
                    <h2 className="mb-4">É grátis.</h2>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <Link className="btn btn-block btn-lg btn-primary" to={'/login'}>
                            Criar conta
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;