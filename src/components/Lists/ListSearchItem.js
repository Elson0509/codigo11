import React from 'react';
import Icon from '../Icon/Icon'

const ListSearchItem = (props) => {
    return (
        <li className={`list-group-item item-search ${props.item.bgcolor}`}>
            <div className="icon-search">
                {console.log(props.item.icon)}
                <Icon icon={props.item.icon}/>                
            </div>
            <div className="item-search-content">
                <h5>Código: {props.item.codigo}</h5>
                <p>Segmento: {props.item.descricao}</p>
                <p>{props.item.razao_social}</p>
            </div>
        </li>
    );
};

export default ListSearchItem;