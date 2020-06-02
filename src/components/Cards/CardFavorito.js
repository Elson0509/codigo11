import React, {memo} from 'react';
import Icon from '../Icon/Icon'
import { Link } from 'react-router-dom';
import {numberBrazilianMoney, IntegerNumberBrazilian, valueToRes} from '../../util/Utilities'
import {
    ListGroup, 
    ListGroupItem 
} from 'reactstrap';

const CardFavorito = (props) => {
    return (
        <div className="slow-shadow mt-4">
            <Link to={`/${props.favorito.codigo}/profile`} className="nolink link">
                <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                            <div className={`margin-auto rounded-circle font-icon text-white ${props.favorito.bgcolor}`}>
                                <Icon icon={props.favorito.icon}/>
                            </div> 
                        <div className="divider"/>
                        <ListGroup className="link">
                            <ListGroupItem active tag="button" action className={props.favorito.bgcolor}>{props.favorito.codigo}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">Nome: </span>{props.favorito.nome_fundo}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">Segmento: </span>{props.favorito.descricao}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">CNPJ: </span>{props.favorito.cnpj}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">Cotas: </span>{IntegerNumberBrazilian(props.favorito.cotas_emitidas)}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">Gestão: </span>{props.favorito.gestao ? 'Ativa' : 'Passiva'}</ListGroupItem>
                            <ListGroupItem tag="button" action><span className="enfase">Adm: </span>{props.favorito.adm_nome}</ListGroupItem>
                            {props.favorito.cotacao && <ListGroupItem tag="button" action><span className="enfase">Cotação: </span>{numberBrazilianMoney(props.favorito.cotacao)}</ListGroupItem>}
                            {props.favorito.cotacao && <ListGroupItem tag="button" action><span className="enfase">Valor de mercado: </span>R$ {valueToRes(props.favorito.cotacao * props.favorito.cotas_emitidas)}</ListGroupItem>}

                        </ListGroup>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default memo(CardFavorito);