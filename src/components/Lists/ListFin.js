import React, {useState, Fragment} from 'react';
import Icon from '../Icon/Icon'
import {numberBrazilianMoney} from '../../util/Utilities'
import {
    Tooltip
} from 'reactstrap';

const ListFin = (props) => {
    const [tooltiptotalatvfin, setTooltiptotalatvfin] = useState(false)
    const [tooltipatvcota, setTooltipatvcota] = useState(false)
    const [tooltipRec12, setTooltipRec12] = useState(false)
    const [tooltipRec3, setTooltipRec3] = useState(false)
    const [tooltipatvliq, setTooltipatvliq] = useState(false)
    const [tooltipatvliqcota, setTooltipatvliqcota] = useState(false)

    return (
        props.atv_fin ?
        <ul className="list-group">
            <li className={`list-group-item active bg-${props.bgcolor} text-center`}>
                <span className="enfase-title">
                    <span className="font-number pr-2">
                        <Icon icon="file-invoice-dollar"/>
                    </span>
                    Ativos financeiros
                </span>
            </li>
            <li className="list-group-item list-group-item-action" id="aftotalatvfin"><span className="enfase">Total em ativos financeiros: </span>{numberBrazilianMoney(props.atv_fin.total_ativos_financeiros)}</li>
            <li className="list-group-item list-group-item-action" id="afatvcota"><span className="enfase">Ativos por cota: </span>{numberBrazilianMoney(props.atv_fin.ativos_fin_cota)}</li>
            <li className="list-group-item list-group-item-action" id="afrecj12"><span className="enfase">Receita de juros (12 meses): </span>{numberBrazilianMoney(props.atv_fin.receita_juros_12_meses)}</li>
            <li className="list-group-item list-group-item-action" id="afrecj3"><span className="enfase">Receita de juros (3 meses): </span>{numberBrazilianMoney(props.atv_fin.receita_juros_3_meses)}</li>
            <li className="list-group-item list-group-item-action" id="afatvlq"><span className="enfase">Ativos de liquidez: </span>{numberBrazilianMoney(props.atv_fin.atv_liquidez)}</li>
            <li className="list-group-item list-group-item-action" id="afatvlcota"><span className="enfase">Ativos de liquidez por cota: </span>{numberBrazilianMoney(props.atv_fin.atv_liquidez_cota)}</li>
            <Fragment>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltiptotalatvfin}
                        target="aftotalatvfin" toggle={() => setTooltiptotalatvfin(prev => !prev)}>
                    Valores totais em ativos financeiros, como participação em FII, CRI, LCI, ações, FIA e outros. Não inclui ativos de liquidez.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipatvcota}
                        target="afatvcota" toggle={() => setTooltipatvcota(prev => !prev)}>
                    Valores totais em ativos financeiros divididos pela quantidade de cotas do fundo.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipRec12}
                        target="afrecj12" toggle={() => setTooltipRec12(prev => !prev)}>
                    Receita financeira recebida pelos ativos financeiros nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipRec3}
                        target="afrecj3" toggle={() => setTooltipRec3(prev => !prev)}>
                    Receita financeira recebida pelos ativos financeiros nos últimos 3 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipatvliq}
                        target="afatvlq" toggle={() => setTooltipatvliq(prev => !prev)}>
                    Valores dos Ativos de Liquidez em posse do fundo, como por exemplo valores em disponibilidade, títulos públicos, títulos privados e fundos de renda fixa. Não inclui ativos financeiros.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipatvliqcota}
                        target="afatvlcota" toggle={() => setTooltipatvliqcota(prev => !prev)}>
                    Valores dos Ativos de Liquidez divididos pela quantidade de cotas do fundo.
                </Tooltip>
            </Fragment>
        </ul>

        : null
    );
};

export default ListFin;