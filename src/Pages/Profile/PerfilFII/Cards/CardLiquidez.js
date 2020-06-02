import React from 'react';
import {
    ListGroup, 
    ListGroupItem 
} from 'reactstrap';
import {valueToRes} from '../../../../util/Utilities'
import Icon from '../../../../components/Icon/Icon'

const CardLiquidez = (props) => {
    return (
        props.dados &&
        <div>
            <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary"/>
                        <i className="text-primary">
                            <Icon icon="money-bill-wave"/>
                        </i>
                    </div>         
                    <div className="divider"/>
                    <ListGroup>
                        <ListGroupItem active tag="button" action>Ativos de Liquidez</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Disponibilidades: </span>{valueToRes(props.dados.disponibilidades)}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Títulos Públicos: </span>{valueToRes(props.dados.tit_pub)}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Títulos Privados: </span>{valueToRes(props.dados.tit_priv)}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Fundos de renda fixa: </span>{valueToRes(props.dados.fundos_rf)}</ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default CardLiquidez;