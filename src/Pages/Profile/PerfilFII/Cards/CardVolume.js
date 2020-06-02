import React from 'react';
import {valueToRes} from '../../../../util/Utilities'

import {
    ResponsiveContainer,
    Bar,
    BarChart,
} from 'recharts';

const CardVolume = (props) => {
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
        <div>
            <div className="card mb-3 widget-chart">
                <div className="widget-chart-content">
                    <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary"/>
                        <i className="lnr-chart-bars text-primary"/>
                    </div>
                    <div className="widget-numbers">
                        {"R$ " + valueToRes(props.cotacao.volume)}
                    </div>
                    <div className="widget-subheading p-2">
                        Volume
                    </div>
                    <div className="divider"/>
                </div>
                <div className="widget-chart-wrapper chart-wrapper-relative">
                    <ResponsiveContainer height={100}>
                        <BarChart data={data}>
                            <Bar dataKey='uv' fill='#81a4ff' stroke='#3f6ad8' strokeWidth={2}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CardVolume;