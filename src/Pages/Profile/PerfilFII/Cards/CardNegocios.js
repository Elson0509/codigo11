import React from 'react';
import {numberWithDots} from '../../../../util/Utilities'

import {
    ResponsiveContainer,
    Bar,
    BarChart,
} from 'recharts';

import Icon from '../../../../components/Icon/Icon'

const CardNegocios = (props) => {
    const data = [
        {name: 'Page A', uv: 600, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 1800, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2380, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 1290, pv: 4300, amt: 2100},
        {name: 'Page C', uv: 900, pv: 6800, amt: 2290},
        {name: 'Page D', uv: 1600, pv: 7908, amt: 2000},
        {name: 'Page E', uv: 2290, pv: 9800, amt: 2181},
        {name: 'Page F', uv: 2500, pv: 3800, amt: 1500},
        {name: 'Page G', uv: 1200, pv: 4300, amt: 2100},
    ];

    return (
        Object.keys(props.cotacao).length > 0 && 
            <div>
                <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                        <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg bg-primary"/>
                            <i className="text-primary">
                                <Icon icon="handshake"/>
                            </i>
                        </div>
                        <div className="widget-numbers">
                            {numberWithDots(props.cotacao.numero_negocios)}
                        </div>
                        <div className="widget-subheading p-2">
                            Negócios Realizados
                        </div>
                        <div className="divider"/>
                    </div>
                    <div className="widget-chart-wrapper chart-wrapper-relative">
                        <ResponsiveContainer height={100}>
                            <BarChart data={data}>
                                <Bar dataKey='uv' fill='#6c966d' stroke='#003d3f' strokeWidth={2}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
    );
};

export default CardNegocios;