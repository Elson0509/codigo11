import React from 'react';
import {numberWithVirgula} from '../../../../util/Utilities'

import {
    Line,
    ResponsiveContainer,
    LineChart
} from 'recharts';

const CardCotacaoDetalhes = (props) => {

    const data = [
        {name: 'Page A', uv: 4000, pv: 4300, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 2298, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 900, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 5600, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4600, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3600, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 1200, amt: 2100},
        {name: 'Page C', uv: 2000, pv: 3900, amt: 2290},
        {name: 'Page D', uv: 4780, pv: 1908, amt: 2000},
        {name: 'Page E', uv: 2890, pv: 900, amt: 2181},
        {name: 'Page F', uv: 1390, pv: 1800, amt: 1500},
        {name: 'Page G', uv: 3490, pv: 3100, amt: 2100},
    ];

    return (
        Object.keys(props.cotacao).length > 0 && 
        <div>
            <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary"/>
                        <i className="pe-7s-graph1 text-primary"/>
                    </div>
                    {props.cotacao.cod_neg && <div className="widget-numbers">
                        {props.cotacao.cod_neg}
                    </div>}
                    {props.cotacao.pre_abe && <div className="widget-subheading mb-1">
                        Abertura: {"R$ " + numberWithVirgula(props.cotacao.pre_abe)}
                    </div>}
                    {props.cotacao.pre_max && <div className="widget-subheading mb-1">
                        Máximo: {"R$ " + numberWithVirgula(props.cotacao.pre_max)}
                    </div>}
                    {props.cotacao.pre_min && <div className="widget-subheading mb-1">
                        Mínimo: {"R$ " + numberWithVirgula(props.cotacao.pre_min)}
                    </div>}
                    {props.cotacao.data && <div className="widget-subheading">
                        Data: {props.cotacao.data}
                    </div>}
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                    <ResponsiveContainer height={100}>
                        <LineChart data={data} margin={{top: 5, right: 5, left: 5, bottom: 0}}>
                            <Line type='monotone' dataKey='pv' stroke={props.cotacao.tipo_variacao ? '#3ac47d' : '#f51b00'} strokeWidth={3}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CardCotacaoDetalhes;