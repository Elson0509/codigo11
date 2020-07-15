import React from 'react';
import {numberWithVirgula, numberWithPercentual} from '../../../../util/Utilities'
import {
    Line,
    ResponsiveContainer,
    LineChart
} from 'recharts';

import Icon from '../../../../components/Icon/Icon'

const CardCotacao = (props) => {
    const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
        {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
        {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
        {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
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
                        <div className="widget-numbers">
                            {"R$ " + numberWithVirgula(props.cotacao.pre_ult)}
                        </div>
                        <div className="widget-subheading">
                            Cotação
                        </div>
                        {!isNaN(props.cotacao.variacao) && props.cotacao.variacao!=0 && props.cotacao.variacao &&(
                                props.cotacao.tipo_variacao ? 
                                <div className="widget-description text-success variation">
                                    <Icon icon="angle-up" />
                                    <span className="pl-1">{numberWithPercentual(props.cotacao.variacao)}</span>
                                </div>
                                :
                                <div className="widget-description text-danger variation">
                                    <Icon icon="angle-down"/>
                                    <span className="pl-1">{numberWithPercentual(props.cotacao.variacao)}</span>
                                </div>
                            )
                        }
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

export default CardCotacao;