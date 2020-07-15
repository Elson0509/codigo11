import React, {memo, useState} from 'react';
import Icon from '../Icon/Icon'
import LinkButton from '../Buttons/LinkButton'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {numberBrazilianMoney, IntegerNumberBrazilian, valueToRes} from '../../util/Utilities'
import {
    ListGroup, 
    ListGroupItem 
} from 'reactstrap';

import {
    faPlusSquare,
    faMinusSquare
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CardFavoritoCollapse = (props) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="slow-shadow mt-4">
                <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                        <div>
                            <div 
                              className={`margin-auto rounded-circle font-icon text-white ${props.favorito.bgcolor}`} 
                              >
                                <Icon icon={props.favorito.icon}/>
                            </div> 
                            <div className="divider"/>
                            <div className={`${props.favorito.bgcolor} h4 p-2 text-white card-fav-collapse`}>
                                
                                <span className="text-card-fav">
                                    {props.favorito.codigo}
                                </span>
                                <span className="link icon-right" onClick={() => setCollapse(prev => !prev)}>
                                    <FontAwesomeIcon icon={collapse && faMinusSquare ||faPlusSquare}/>
                                </span>
                            </div>
                            
                        </div>
                        <TransitionGroup component={null}>
                        {collapse &&
                            <CSSTransition classNames="dialog" timeout={500}>
                                <div>
                                    <ListGroup className="link">
                                        <ListGroupItem tag="button" action><span className="enfase">Nome: </span>{props.favorito.nome_fundo}</ListGroupItem>
                                        <ListGroupItem tag="button" action><span className="enfase">Segmento: </span>{props.favorito.descricao}</ListGroupItem>
                                        <ListGroupItem tag="button" action><span className="enfase">CNPJ: </span>{props.favorito.cnpj}</ListGroupItem>
                                        <ListGroupItem tag="button" action><span className="enfase">Cotas: </span>{IntegerNumberBrazilian(props.favorito.cotas_emitidas)}</ListGroupItem>
                                        <ListGroupItem tag="button" action><span className="enfase">Gestão: </span>{props.favorito.gestao ? 'Ativa' : 'Passiva'}</ListGroupItem>
                                        <ListGroupItem tag="button" action><span className="enfase">Adm: </span>{props.favorito.adm_nome}</ListGroupItem>
                                        {props.favorito.cotacao && <ListGroupItem tag="button" action><span className="enfase">Cotação: </span>{numberBrazilianMoney(props.favorito.cotacao)}</ListGroupItem>}
                                        {props.favorito.cotacao && <ListGroupItem tag="button" action><span className="enfase">Valor de mercado: </span>R$ {valueToRes(props.favorito.cotacao * props.favorito.cotas_emitidas)}</ListGroupItem>}
                                        <ListGroupItem action>
                                            <LinkButton to={`/${props.favorito.codigo}/profile`} className="btn btn-primary btn-lg btn-block">
                                                VER PERFIL
                                            </LinkButton>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </CSSTransition>
                        }
                        </TransitionGroup>
                    </div>
                </div>
        </div>
    );
};

export default memo(CardFavoritoCollapse);