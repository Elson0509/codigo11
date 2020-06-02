import React from 'react';
import {
    ListGroup, 
    ListGroupItem 
} from 'reactstrap';

const CardAdm = (props) => {
    return (
        <div>
            <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary"/>
                        <i className="text-primary lnr-briefcase"/>
                    </div>         
                    <div className="divider"/>
                    <ListGroup>
                        <ListGroupItem active tag="button" action className="bg-success">Administrador</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Nome: </span>{props.adm.nome}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">Endereço: </span>{props.adm.endereco}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">E-mail: </span>{props.adm.email}</ListGroupItem>
                        <ListGroupItem tag="button" action><span className="enfase">CNPJ: </span>{props.adm.cnpj}</ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default CardAdm;