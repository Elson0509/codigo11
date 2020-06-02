import React, {useState, Fragment} from 'react';
import Icon from '../Icon/Icon'
import {numberBrazilianMoney,IntegerNumberBrazilian} from '../../util/Utilities'
import {
    Tooltip
} from 'reactstrap';

const ListCotacao = (props) => {
    const [tooltipsin, setTooltipisin] = useState(false)
    const [tooltidata, setTooltipdata] = useState(false)
    const [tooltipfech, setTooltipfech] = useState(false)
    const [tooltipmax, setTooltipmax] = useState(false)
    const [tooltipmin, setTooltipmin] = useState(false)
    const [tooltipneg, setTooltipneg] = useState(false)
    const [tooltipvol, setTooltipvol] = useState(false)


    return (
        props.cotacao ?
        <ul className="list-group">
            <li className={`list-group-item active bg-${props.bgcolor} text-center`}>
                <span className="enfase-title">
                    <span className="font-number pr-2">
                        <Icon icon="chart-line"/>
                    </span>
                    Cotação
                </span>
            </li>
            <li className="list-group-item list-group-item-action"><span className="enfase">Código: </span> {props.cotacao.codneg.cod_neg}</li>
            <li className="list-group-item list-group-item-action" id="cotisin"><span className="enfase">Código ISIN: </span>{props.cotacao.codneg.cod_isin}</li>
            <li className="list-group-item list-group-item-action" id="cotdata"><span className="enfase">Data: </span>{props.cotacao.data_ult_cotacao}</li>
            <li className="list-group-item list-group-item-action" id="cotpfech"><span className="enfase">Preço: </span>{numberBrazilianMoney(props.cotacao.cotacao)}</li>
            <li className="list-group-item list-group-item-action" id="cotmax"><span className="enfase">Preço máximo (12 meses): </span>{numberBrazilianMoney(props.cotacao.preco_max_12_meses)}</li>
            <li className="list-group-item list-group-item-action" id="cotmin"><span className="enfase">Preço mínimo (12 meses): </span>{numberBrazilianMoney(props.cotacao.preco_min_12_meses)}</li>
            <li className="list-group-item list-group-item-action" id="cotneg"><span className="enfase">Quantidade média de negócios (12 meses): </span>{IntegerNumberBrazilian(props.cotacao.negocios_medio_12_meses)}</li>
            <li className="list-group-item list-group-item-action" id="cotvol"><span className="enfase">Volume médio (12 meses): </span>{numberBrazilianMoney(props.cotacao.volume_medio_12_meses)}</li>
            <Fragment>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipsin}
                        target="cotisin" toggle={() => setTooltipisin(prev => !prev)}>
                    Número de identificação internacional do título financeiro.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltidata}
                        target="cotdata" toggle={() => setTooltipdata(prev => !prev)}>
                    Data da cotação.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipfech}
                        target="cotpfech" toggle={() => setTooltipfech(prev => !prev)}>
                    Preço de fechamento.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipmax}
                        target="cotmax" toggle={() => setTooltipmax(prev => !prev)}>
                    Cotação máxima dos últimos 12 meses
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipmin}
                        target="cotmin" toggle={() => setTooltipmin(prev => !prev)}>
                    Cotação mínimo dos últimos 12 meses
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipneg}
                        target="cotneg" toggle={() => setTooltipneg(prev => !prev)}>
                    Quantidade média de negócios por dia durante os últimos 12 meses
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipvol}
                        target="cotvol" toggle={() => setTooltipvol(prev => !prev)}>
                    Volume médio por dia durante os últimos 12 meses
                </Tooltip>
            </Fragment>
        </ul>

        : null
    );
};

export default ListCotacao;