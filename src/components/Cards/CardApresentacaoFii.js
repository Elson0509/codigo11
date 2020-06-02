import React from 'react';
import ListApresentacaoFii from '../Lists/ListApresentacaoFii'

const CardApresentacaoFii = (props) => {
    return (
        <div className="col-sm-12 col-lg-9 ">
            <div className="card mb-3 ">
                <div className="card-body">
                    <ListApresentacaoFii apresentacao={props.apresentacao} bgcolor={props.bgcolor}/>
                </div>
            </div>
        </div>
    );
};

export default CardApresentacaoFii;