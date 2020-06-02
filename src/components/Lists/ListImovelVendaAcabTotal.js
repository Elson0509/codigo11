import React, {useState} from 'react';
import Icon from '../Icon/Icon'
import {numberToMetroQuadrado, numberWithPercentual, equivalenciaCamposFutebol, sizeCampoFutebol} from '../../util/Utilities'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import ProgressBox from '../ProgressBars/ProgressBox';

const ListImovelRendaAcabTotal = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }

    const areaTotal = () => {
        let total = 0;
        props.imoveis.map(imovel => {
            total+=imovel.area
        })
        return total
    }

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="enfase">Quantidade de imóveis: </span>
                {props.imoveis.length}
            </li>
            <li className="list-group-item">
                <span className="enfase">Área Total: <Icon icon="th-large" id={`imovelTotal`} clicked={toggle} iconId="imovelTotal"/> </span>
                {numberToMetroQuadrado(areaTotal())}
                <Popover className={`popover-bg bg-focus`} placement="left" isOpen={popoverOpen} target={`imovelTotal`} toggle={toggle}>
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

export default ListImovelRendaAcabTotal;