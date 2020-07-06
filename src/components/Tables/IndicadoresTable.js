import React, {memo, useState, Fragment} from 'react';
import {numberBrazilianMoney, decimalNumberBrazilian, percentNumberBrazilian} from '../../util/Utilities'
import {
    Tooltip
} from 'reactstrap';

const IndicadoresTable = (props) => {
    const [tooltipindpvp, setTooltipindpvp] = useState(false)
    const [tooltipindtx12, setTooltipindtx12] = useState(false)
    const [tooltipindplc, setTooltipindplc] = useState(false)
    const [tooltipindtxcota, setTooltipindtxcota] = useState(false)
    const [tooltipinddy, setTooltipinddy] = useState(false)
    const [tooltipindtxpl, setTooltipindtxpl] = useState(false)
    const [tooltipinddy6, setTooltipinddy6] = useState(false)
    const [tooltipindtx3, setTooltipindtx3] = useState(false)
    const [tooltipinddy12, setTooltipinddy12] = useState(false)
    const [tooltipindr12, setTooltipindr12] = useState(false)
    const [tooltipindcap, setTooltipindcap] = useState(false)
    const [tooltipindr3, setTooltipindr3] = useState(false)
    const [tooltipindvm, setTooltipindvm] = useState(false)
    const [tooltipindvmr, setTooltipindvmr] = useState(false)

    return (
        props.indicadores ?
        <div className="over">
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row" id="indpvp" className={`table-${props.bgcolor}`}>P/VP:</th>
                        <td>{decimalNumberBrazilian(props.indicadores.pvp)}</td>
                        <th scope="row" id="indtx12" className={`table-${props.bgcolor}`}>Taxa de administração (12 meses):</th>
                        <td>{numberBrazilianMoney(props.indicadores.taxa_adm_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="indplc" className={`table-${props.bgcolor}`}>Patrimônio por cota:</th>
                        <td>{numberBrazilianMoney(props.indicadores.pl_cota)}</td>
                        <th scope="row" id="indtxcota" className={`table-${props.bgcolor}`}>Taxa de administração por cota:</th>
                        <td>{numberBrazilianMoney(props.indicadores.tx_adm_cota_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="inddy" className={`table-${props.bgcolor}`}>DY (último):</th>
                        <td>{percentNumberBrazilian(props.indicadores.dy_ult, 2)}</td>
                        <th scope="row" id="indtxpl" className={`table-${props.bgcolor}`}>Taxa adm / Patrimônio:</th>
                        <td>{percentNumberBrazilian(props.indicadores.tx_adm_pl_12_meses, 2)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="inddy6" className={`table-${props.bgcolor}`}>DY médio (6 meses):</th>
                        <td>{percentNumberBrazilian(props.indicadores.dy_6, 2)}</td>
                        <th scope="row" id="indtx3" className={`table-${props.bgcolor}`}>Taxa de administração (3 meses):</th>
                        <td>{numberBrazilianMoney(props.indicadores.taxa_adm_3_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="inddy12" className={`table-${props.bgcolor}`}>DY médio (12 meses):</th>
                        <td>{percentNumberBrazilian(props.indicadores.dy_12, 2)}</td>
                        <th scope="row" id="indr12" className={`table-${props.bgcolor}`}>Receita Total (12 meses):</th>
                        <td>{numberBrazilianMoney(props.indicadores.receita_total_12_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="indcap" className={`table-${props.bgcolor}`}>Cap Rate:</th>
                        <td>{percentNumberBrazilian(props.indicadores.cap_rate_12_meses, 2)}</td>
                        <th scope="row" id="indr3" className={`table-${props.bgcolor}`}>Receita Total (3 meses):</th>
                        <td>{numberBrazilianMoney(props.indicadores.receita_total_3_meses)}</td>
                    </tr>
                    <tr>
                        <th scope="row" id="indvm" className={`table-${props.bgcolor}`}>Valor de mercado por m²:</th>
                        <td>{numberBrazilianMoney(props.indicadores.valor_mercado_m2)}</td>
                        <th scope="row" id="indvmr" className={`table-${props.bgcolor}`}>Valor de mercado / Receita</th>
                        <td>{decimalNumberBrazilian(props.indicadores.valor_mercado_por_receita, 2)}</td>
                    </tr>
                </tbody>
            </table>
            <Fragment>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindpvp}
                        target="indpvp" toggle={() => setTooltipindpvp(prev => !prev)}>
                    Valor do patrimônio em relação a cota. Teoricamente, quanto menor mais barato.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindtx12}
                        target="indtx12" toggle={() => setTooltipindtx12(prev => !prev)}>
                    Valor da taxa de administração nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindplc}
                        target="indplc" toggle={() => setTooltipindplc(prev => !prev)}>
                    Valor patrimonial por cota.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindtxcota}
                        target="indtxcota" toggle={() => setTooltipindtxcota(prev => !prev)}>
                    Representa o valor de taxa de administração (12 meses) por cota.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipinddy}
                        target="inddy" toggle={() => setTooltipinddy(prev => !prev)}>
                    Dividend Yield do último mês.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindtxpl}
                        target="indtxpl" toggle={() => setTooltipindtxpl(prev => !prev)}>
                    Representa o percentual da taxa de administração sobre o patrimônio líquido.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipinddy6}
                        target="inddy6" toggle={() => setTooltipinddy6(prev => !prev)}>
                    Dividend Yield médio dos últimos 6 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindtx3}
                        target="indtx3" toggle={() => setTooltipindtx3(prev => !prev)}>
                    Taxa de administração do último trimestre.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipinddy12}
                        target="inddy12" toggle={() => setTooltipinddy12(prev => !prev)}>
                    Dividend Yield médio dos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindr12}
                        target="indr12" toggle={() => setTooltipindr12(prev => !prev)}>
                    Receita Total (aluguéis + juros financeiros) nos últimos 12 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindcap}
                        target="indcap" toggle={() => setTooltipindcap(prev => !prev)}>
                    Taxa de retorno esperada baseado na renda gerada. Representa o aluguel dos últimos 12 meses sobre o valor de mercado. É usado para estimar o potencial de retorno do investidor.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindr3}
                        target="indr3" toggle={() => setTooltipindr3(prev => !prev)}>
                    Receita Total (aluguéis + juros financeiros) nos últimos 3 meses.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindvm}
                        target="indvm" toggle={() => setTooltipindvm(prev => !prev)}>
                    Valor de mercado por metro quadrado. Mais interessante quando o fundo é representato inteiramente por imóveis.
                </Tooltip>
                <Tooltip className="tooltip-dark" placement='auto' isOpen={tooltipindvmr}
                        target="indvmr" toggle={() => setTooltipindvmr(prev => !prev)}>
                    Relação entre o valor de mercado e a receita total do fundo.
                </Tooltip>
            </Fragment>
        </div>
        : null
    );
};

export default memo(IndicadoresTable);