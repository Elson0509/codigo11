import React from 'react';
import ListCotacao from '../Lists/ListCotacao'

const CardCotacao = (props) => {
    return (
        <div className="col-sm-12 col-lg-6 ">
            <div className="card mb-3">
                <div className="card-body">
                    <ListCotacao cotacao={props.cotacao} bgcolor={props.bgcolor}/>
                </div>
            </div>
        </div>
    );
};

export default CardCotacao;