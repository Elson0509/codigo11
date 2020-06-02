import React, {useState} from 'react';
import Icon from '../Icon/Icon'
import {numberToMetroQuadrado, numberWithPercentual, getLinkMapFromEndereco, numberWithDots} from '../../util/Utilities'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import ProgressBox from '../ProgressBars/ProgressBox';

const ListImovelRendaContrucao = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }

    const ObraSituation = () => {
        return props.imovel.porc_obra_realizado >= props.imovel.porc_obra_previsto ? <p>Obra EM DIA.</p> : <p>Obra ATRASADA.</p>
    }   

    const CustosSituation = () => {
        return props.imovel.custo_obra_realizado <= props.imovel.custo_obra_previsto ? <p>Custos DE ACORDO com o planejado.</p> : <p>Custos ACIMA do planejado.</p>
    }   

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="enfase">Nome: </span>
                {props.imovel.nome}
            </li>
            <li className="list-group-item">
                <span className="enfase">Endereço: <a target="_blank" href={getLinkMapFromEndereco(props.imovel.endereco)}><Icon icon="map-marked-alt"/></a> </span>
                {props.imovel.endereco}
            </li>
            <li className="list-group-item">
                <span className="enfase">Área: </span>
                {numberToMetroQuadrado(props.imovel.area)}
            </li>
            <li className="list-group-item">
                <span className="enfase">Unidades: </span>
                {numberWithDots(props.imovel.unidades)}
            </li>
            <li className="list-group-item">
                <span className="enfase">Custo de obra realizada: </span>
                {"R$ " + numberWithDots(props.imovel.custo_obra_realizado)}
            </li>
            <li className="list-group-item">
                <span className="enfase">Custo de obra prevista para o momento: </span>
                {"R$ " + numberWithDots(props.imovel.custo_obra_previsto)}
            </li>
            {typeof (props.imovel.porc_vendido) != "undefined" && <li className="list-group-item">
                <ProgressBox 
                    color={props.bgNumber}
                    comment={`% Vendido: ${numberWithPercentual(props.imovel.porc_vendido)}`}
                    value={props.imovel.porc_vendido}
                />                
            </li>}
            <li className="list-group-item">
                <ProgressBox 
                    color={props.bgNumber}
                    comment={`% Obra realizada: ${numberWithPercentual(props.imovel.porc_obra_realizado)}`}
                    value={props.imovel.porc_obra_realizado}
                />                
            </li>
            <li className="list-group-item">
                <ProgressBox 
                    color={props.bgNumber}
                    comment={`% Obra prevista para o momento: ${numberWithPercentual(props.imovel.porc_obra_previsto)}`}
                    value={props.imovel.porc_obra_previsto}
                />                
            </li>
            <li className="list-group-item text-center">
                <button className={`mb-2 mr-2 btn btn-${props.bgNumber}`} id={`${props.type}${props.order}`} onClick={toggle}>Caracteríticas</button>
                <Popover className={`popover-bg bg-${props.bgNumber}`} placement="left" isOpen={popoverOpen} target={`${props.type}${props.order}`} toggle={toggle}>
                    <PopoverHeader>Características do imóvel {props.order}</PopoverHeader>
                    <PopoverBody>
                        <p>{props.imovel.caracteristica}</p>
                        {typeof (props.imovel.custo_obra_realizado) != "undefined"  && ObraSituation()}
                        {typeof (props.imovel.porc_obra_realizado) != "undefined"  && CustosSituation()}
                    </PopoverBody>
                </Popover>
            </li>
        </ul>
    );
};

export default ListImovelRendaContrucao;