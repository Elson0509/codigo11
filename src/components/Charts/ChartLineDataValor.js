import React from 'react';
import {Line} from 'react-chartjs-2';
import {revertData} from '../../util/Utilities'

const ChartLineDataValor = (props) => {

    const data = () => {
        const info = {
            labels: [],
            datasets: [
                {
                    fill: props.fill || false,
                    label: props.label,
                    backgroundColor: props.backgroundColor || 'rgba(66, 135, 245)',
                    borderColor: props.borderColor || 'rgba(66, 75, 245)',
                    borderWidth: props.borderWidth || 1,
                    hoverBackgroundColor: props.hoverBackgroundColor || 'rgba(66, 96, 245)',
                    hoverBorderColor: props.hoverBorderColor || 'rgba(81, 66, 245)',
                    borderCapStyle: 'round',
                    data: []
                }
            ]
        };

        props.valores.forEach(el => {
            info.labels.push(revertData(el.data))
            info.datasets[0].data.push(el.valor)
        })

        return info;
    }

    const plugins = [{
        afterDraw: (chartInstance, easing) => {
            const ctx = chartInstance.chart.ctx;
            ctx.fillText("codigo11.com.br", 10, 10);
        }
    }];

    const options = {
        scales: {
          yAxes: [{
            ticks: {
              callback(value) {
                return Number(value).toLocaleString('pt-BR')
              }
            }
          }]
        },
        title: {
            display: props.title || false,
            text: props.title,
            fontSize: 16
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                        const ttprefix = props.ttprefix || ''
                        const ttsufix = props.ttsufix || ''
                        return `${ttprefix}${Number(tooltipItem.yLabel).toLocaleString('pt-BR')}${ttsufix}`

                    }
          }
        }
    }

    return (
        props.valores ? 
            <div>
                <Line data={data()} plugins={plugins} options={options}/>
                {props.rodape && <p className='text-black-50'>{`* ${props.rodape}`}</p>}
            </div>
             : null
    )
};

export default ChartLineDataValor;