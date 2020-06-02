import React, {useState} from 'react';
import Icon from '../Icon/Icon'
import {numberToMetroQuadrado, numberWithPercentual, getLinkMapFromEndereco} from '../../util/Utilities'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const ListTerreno = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="enfase">Endereço: <a target="_blank" rel="noopener noreferrer" href={getLinkMapFromEndereco(props.terreno.endereco)}><Icon icon="map-marked-alt"/></a> </span>
                {props.terreno.endereco}
            </li>
            <li className="list-group-item">
                <span className="enfase">Percentual na receita: </span>
                {numberWithPercentual(props.terreno.porc_rec_fii)}
            </li>
            <li className="list-group-item">
                <span className="enfase">Área: </span>
                {numberToMetroQuadrado(props.terreno.area)}
            </li>
            <li className="list-group-item text-center">
                <button className={`mb-2 mr-2 btn btn-${props.bgNumber}`} id={`terreno${props.order}`} onClick={toggle}>Caracteríticas</button>
                <Popover className={`popover-bg bg-focus`} placement="left" isOpen={popoverOpen} target={`terreno${props.order}`} toggle={toggle}>
                    <PopoverHeader>Características do terreno {props.order}</PopoverHeader>
                    <PopoverBody>
                        {props.terreno.caracteristica}
                    </PopoverBody>
                </Popover>
            </li>
        </ul>
    );
};

export default ListTerreno;