import React, {useState} from 'react';
import Icon from '../Icon/Icon'
import {numberToMetroQuadrado, numberWithPercentual, equivalenciaCamposFutebol, sizeCampoFutebol} from '../../util/Utilities'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const ListTerreno = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }

    const percTotalReceita = () => {
        let total = 0;
        props.terrenos.forEach(terreno => {
            total+=terreno.porc_rec_fii
        })
        return total
    }

    const areaTotal = () => {
        let total = 0;
        props.terrenos.forEach(terreno => {
            total+=terreno.area
        })
        return total
    }

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="enfase">Quantidade de terrenos: </span>
                {props.terrenos.length}
            </li>
            <li className="list-group-item">
                <span className="enfase">Percentual total na receita: </span>
                {numberWithPercentual(percTotalReceita())}
            </li>
            <li className="list-group-item">
                <span className="enfase">Área Total: <Icon icon="th-large" id={`terrenoTotal`} clicked={toggle} iconId="terrenoTotal"/> </span>
                {numberToMetroQuadrado(areaTotal())}
                <Popover className={`popover-bg bg-focus`} placement="left" isOpen={popoverOpen} target={`terrenoTotal`} toggle={toggle}>
                    <PopoverHeader>Equivalência</PopoverHeader>
                    <PopoverBody>
                        <h6>{equivalenciaCamposFutebol(areaTotal())}</h6>
                        <p>(considerando um tamanho oficial de {numberToMetroQuadrado(sizeCampoFutebol)})</p>
                    </PopoverBody>
                </Popover>
            </li>
        </ul>
    );
};

export default ListTerreno;