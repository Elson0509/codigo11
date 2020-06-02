import React, {useState} from 'react';
import Icon from '../Icon/Icon'
import {numberToMetroQuadrado, numberWithPercentual, equivalenciaCamposFutebol, sizeCampoFutebol} from '../../util/Utilities'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import ProgressBox from '../ProgressBars/ProgressBox';

const ListImovelVendaConstTotal = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }
    
    const areaTotal = () => {
        let total = 0;
        props.imoveis.forEach(imovel => {
            total+=imovel.area
        })
        return total
    }

    const qttComCustoEmDia = () =>{
        let qtt=0;
        props.imoveis.forEach(imovel => {
            if(imovel.custo_obra_realizado <= imovel.custo_obra_previsto)
                qtt++
        })
        return qtt
    }

    const qttConstrucaoEmDia = () =>{
        let qtt=0;
        props.imoveis.forEach(imovel => {
            if(imovel.porc_obra_realizado >= imovel.porc_obra_previsto)
                qtt++
        })
        return qtt
    }

    const porcVendidoMedia = () => {
        let total = 0;
        props.imoveis.forEach(imovel => {
            total+=imovel.area * imovel.porc_vendido
        })
        return total/areaTotal()
    }

    
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="enfase">Quantidade de imóveis: </span>
                {props.imoveis.length}
            </li>
            <li className="list-group-item">
                {qttComCustoEmDia()} de {props.imoveis.length} imóveis com custos de acordo com o previsto.
            </li>
            <li className="list-group-item">
                {qttConstrucaoEmDia()} de {props.imoveis.length} imóveis com obras em dia.
            </li>
            <li className="list-group-item">
                <ProgressBox 
                    color="focus"
                    comment={`% vendido dos m²: ${numberWithPercentual(porcVendidoMedia())}`}
                    value={porcVendidoMedia()}
                />                
            </li>
            <li className="list-group-item">
                <span className="enfase">Área Total: <Icon icon="th-large" id={`imovelTotal`} clicked={toggle} iconId="imovelVendaCTotal"/> </span>
                {numberToMetroQuadrado(areaTotal())}
                <Popover className={`popover-bg bg-focus`} placement="left" isOpen={popoverOpen} target={`imovelVendaCTotal`} toggle={toggle}>
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

export default ListImovelVendaConstTotal;