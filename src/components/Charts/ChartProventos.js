import React from 'react';
import {Bar} from 'react-chartjs-2';

const ChartProventos = (props) => {

    const data = () => {
        const info = {
            labels: [],
            datasets: [
                {
                    label: props.label,
                    backgroundColor: '#db4857',
                    borderColor: '#db4857',
                    borderWidth: 1,
                    hoverBackgroundColor: '#d65865',
                    hoverBorderColor: '#d65865',
                    borderCapStyle: 'round',
                    data: []
                }
            ]
        };


        let prov = [...props.proventos];
        prov.reverse().map( val => {
            info.labels.push(val.data_pagamento);
            info.datasets[0].data.push(val.valor_rendimento)
        })

        return info;
    }

    const plugins = [{
        afterDraw: (chartInstance, easing) => {
            const ctx = chartInstance.chart.ctx;
            ctx.fillText("codigo11.com.br", 10, 10);
        }
    }];

    return (
        props.proventos && props.proventos.length > 0 ? <Bar data={data()} plugins={plugins}/> : null
    )
};

export default ChartProventos;