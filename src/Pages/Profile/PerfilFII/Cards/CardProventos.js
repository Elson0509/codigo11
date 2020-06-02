import React from 'react';
import {numberToMoney, numberWithPercentual} from '../../../../util/Utilities'

const CardProventos = (props) => {
    const getListProventos = () => {
        if(props.proventos){
            return props.proventos.map((prov, ind) => (
                <tr key={`prov${ind}`}>
                    <td>{prov.ult_data_com}</td>
                    <td>{prov.data_pagamento}</td>
                    <td>{numberToMoney(prov.valor_rendimento)}</td>
                    <td>{numberToMoney(prov.valor_amortizacao)}</td>
                    <td>{prov.dy === 0 ? "---" : numberWithPercentual(prov.dy)}</td>
                </tr>
            ))
        }
    }

    return (

            <div className="card mb-3 bg-asteroid widget-chart text-white card-border">
                <div className="card-header">
                    <span className="card-header-proventos">Últimos proventos</span>
                </div>
                
                <div className="card-body over">
                    {
                    props.proventos.length > 0 ?
                        <table className="table table-hover table-sm table-striped table-dark">
                            <caption>Últimos proventos</caption>
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Últ Data Com</th>
                                <th scope="col">Data de Pagamento</th>
                                <th scope="col">Rendimento</th>
                                <th scope="col">Amortização</th>
                                <th scope="col">Yield</th>
                            </tr>
                            </thead>
                            <tbody>
                                {getListProventos()}
                            </tbody>
                        </table>
                        :
                        <h4>Ops. Não há proventos registrados!</h4>
                    }
                </div>
            </div>
    );
};

export default CardProventos;