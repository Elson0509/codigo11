import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import ChartGraficoCotacoes from '../../../components/Charts/ChartGraficoCotacoes'
import ChartVolumeNegocios from '../../../components/Charts/ChartVolumeNegocios'
import {Helmet} from 'react-helmet'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/dados/cotacoes/${fii}`
        axios.get(path)
            .then(res => {
                setDados(res.data)
                setLoading(false)
            })
            .catch(err => {
                setErrorMessage(err.response.data.message || 'Desculpe, mas um erro ocorreu.')
                setLoading(false)
            })
    }, [])

    return (
        <Fragment>
                <Helmet>
                    <meta name="description" content={`Codigo11 - ${fii}11 - Gráfico de cotações históricas do FII`} />
                    <title>{`Codigo11: ${fii}11 - Gráfico de cotações do FII`}</title>
                </Helmet>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                        {dados && 
                            <Fragment>
                                <PageTitle
                                    heading={`Histórico de cotaçoes de ${dados.razao_social} (${dados.codigo})`}
                                    icon="chart-line"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                <div className="col-12">
                                    <ChartGraficoCotacoes cotacoes={dados.cotacoes} codigo={dados.codigo}/>
                                </div>
                                <div className="mt-4 col-12">
                                    <ChartVolumeNegocios 
                                        volnegs={dados.volnegs} 
                                        negocios={dados.negocios} 
                                        volumes={dados.volumes}
                                        dates={dados.dates}   
                                        codigo={dados.codigo} 
                                    />
                                </div>
                            </Fragment>
                        }     
                        {
                            loading && <Loading/>
                        }
                        {errorMessage && 
                            <div className="alert alert-danger">
                                <p>{errorMessage}</p>
                            </div>
                        }
                </ReactCSSTransitionGroup>
            
        </Fragment>
    );
};

export default Index;