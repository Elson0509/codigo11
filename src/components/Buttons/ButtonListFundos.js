import React from 'react';
import { Link } from 'react-router-dom';

const ButtonListFundos = () => {
    return (
        <div className="container-btn-list mb-5">
            <Link to='/lista' 
                className="btn-lista effect01" 
                >
                <span>
                    Lista de Fundos
                </span>
            </Link>
        </div>
    );
};

export default ButtonListFundos;