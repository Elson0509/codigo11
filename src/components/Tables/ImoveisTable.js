import React, {memo, useState, Fragment} from 'react';
import {numberBrazilianMoney, percentNumberBrazilian, IntegerAreaBrazilian} from '../../util/Utilities'
import {
    Tooltip
} from 'reactstrap';

const ImoveisTable = (props) => {
    const [tooltipimvter, setTooltipimvter] = useState(false)
    const [tooltipimvvacf, setTooltipimvvacf] = useState(false)
    const [tooltipimvr, setTooltipimvr] = useState(false)
    const [tooltipimvra12, setTooltipimvra12] = useState(false)
    const [tooltipimvrc, setTooltipimvrc] = useState(false)
    const [tooltipimvrmq12, setTooltipimvrmq12] = useState(false)
    const [tooltipimvv, setTooltipimvv] = useState(false)
    const [tooltipimvra3, setTooltipimvra3] = useState(false)
    const [tooltipimvvc, setTooltipimvvc] = useState(false)
    const [tooltipimvrmq3, setTooltipimvrmq3] = useState(false)
    const [tooltipimvatr, setTooltipimvatr] = useState(false)
    const [tooltipimvrvi12, setTooltipimvrvi12] = useState(false)
    const [tooltipimvvac, setTooltipimvvac] = useState(false)
    const [tooltipimvrvi3, setTooltipimvrvi3] = useState(false)

    return (
        props.imoveis ?
        <div className="over">
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row" id="imter" className={`table-${props.bgcolor}`}>Terrenos:</th>
                        <td>{props.imoveis.terrenos_qtt}</td>
                        <th scope="row" id="imvacf" className={`table-${props.bgcolor}`}>Vacância financeira:</th>
                        <td>{percentNumberBrazilian(props.imoveis.vacancia_financeira, 2)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imr" className={`table-${props.bgcolor}`}>Imóveis para renda:</th>
                        <td>{props.imoveis.renda_acab_qtt}</td>
                        <th scope="row" id="imra12" className={`table-${props.bgcolor}`}>Receita de aluguéis (12 meses):</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_alugueis_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imrc" className={`table-${props.bgcolor}`}>Imóveis para renda (contrução):</th>
                        <td>{props.imoveis.renda_const_qtt}</td>
                        <th scope="row" id="imrmq12" className={`table-${props.bgcolor}`}>Receita m² (12 meses):</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_aluguel_m2_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imv" className={`table-${props.bgcolor}`}>Imóveis para venda:</th>
                        <td>{props.imoveis.venda_acab_qtt}</td>
                        <th scope="row" id="imra3" className={`table-${props.bgcolor}`}>Receita de aluguéis (3 meses):</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_alugueis_3_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imvc" className={`table-${props.bgcolor}`}>Imóveis para venda (contrução):</th>
                        <td>{props.imoveis.venda_const_qtt}</td>
                        <th scope="row" id="imrmq3" className={`table-${props.bgcolor}`}>Receita m² (3 meses):</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_aluguel_m2_3_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imatr" className={`table-${props.bgcolor}`}>Área total para renda:</th>
                        <td>{IntegerAreaBrazilian(props.imoveis.areaTotal_renda)}</td>
                        <th scope="row" id="imrvi12" className={`table-${props.bgcolor}`}>Receita de venda de imóveis (12 meses):</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_venda_imoveis_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="imvac" className={`table-${props.bgcolor}`}>Vacância:</th>
                        <td>{percentNumberBrazilian(props.imoveis.vacancia, 2)}</td>
                        <th scope="row" id="imrvi3" className={`table-${props.bgcolor}`}>Receita de venda de imóveis (3 meses)</th>
                        <td>{numberBrazilianMoney(props.imoveis.receita_venda_imoveis_3_meses)}</td>
                    </tr>
                </tbody>
            </table>
            <Fragment>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvter}
                        target="imter" toggle={() => setTooltipimvter(prev => !prev)}>
                    Quantidade de terrrenos.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvvacf}
                        target="imvacf" toggle={() => setTooltipimvvacf(prev => !prev)}>
                    Vacância relativa ao valor de aluguel dos imóveis.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvr}
                        target="imr" toggle={() => setTooltipimvr(prev => !prev)}>
                    Quantidade de imóveis para renda.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvra12}
                        target="imra12" toggle={() => setTooltipimvra12(prev => !prev)}>
                    Total de valor em Receita de Aluguéis nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvrc}
                        target="imrc" toggle={() => setTooltipimvrc(prev => !prev)}>
                    Quantidade de imóveis para renda ainda em construção.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvrmq12}
                        target="imrmq12" toggle={() => setTooltipimvrmq12(prev => !prev)}>
                    Receita em aluguéis por metro quadrado nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvv}
                        target="imv" toggle={() => setTooltipimvv(prev => !prev)}>
                    Quantidade de imóveis com o propósito de venda.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvra3}
                        target="imra3" toggle={() => setTooltipimvra3(prev => !prev)}>
                    Receita em aluguéis por metro quadrado nos últimos 12 meses. 
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvvc}
                        target="imvc" toggle={() => setTooltipimvvc(prev => !prev)}>
                    Quantidade de imóveis para venda ainda em construção.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvrmq3}
                        target="imrmq3" toggle={() => setTooltipimvrmq3(prev => !prev)}>
                    Arrecadação de receita em aluguéis por metro quadrado nos últimos 3 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvatr}
                        target="imatr" toggle={() => setTooltipimvatr(prev => !prev)}>
                    Área total em imóveis para renda.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvrvi12}
                        target="imrvi12" toggle={() => setTooltipimvrvi12(prev => !prev)}>
                    Receita com venda de imóveis nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvvac}
                        target="imvac" toggle={() => setTooltipimvvac(prev => !prev)}>
                    Percentual de área vaga.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipimvrvi3}
                        target="imrvi3" toggle={() => setTooltipimvrvi3(prev => !prev)}>
                    Receita com venda de imóveis nos últimos 3 meses.
                </Tooltip>
            </Fragment>
        </div>
        : null
    );
};

export default memo(ImoveisTable);