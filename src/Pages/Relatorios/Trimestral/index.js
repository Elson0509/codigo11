import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import ChartLineImoveisQtt from '../../../components/Charts/ChartLineImoveisQtt'
import ChartLineDataValor from '../../../components/Charts/ChartLineDataValor'
import ChartLineReceitas from '../../../components/Charts/ChartLineReceitas'
import ChartLineDespesasContas from '../../../components/Charts/ChartLineDespesasContas'
import {Helmet} from 'react-helmet'
import Adsense from '../../../components/Ads/Adsense'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/relatorios/trimestrais/${fii}`
        axios.get(path)
            .then(res => {
                setLoading(false)
                setDados(res.data)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message || 'Ops, um erro ocorreu!')
            })
    }, [])

    const formatVacancia = () => {
        return dados.vacancia.map(el => {
            return {
                data: el.data,
                valor: el.valor.toFixed(2)
            }
        })
    }

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - ${fii}11 - Relatório de Informações trimestrais do Fundo Imobiliário (FII)`} />
                <title>{`Codigo11: ${fii}11 - Relatório de Informações trimestrais`}</title>
            </Helmet>
            {!errorMessage && dados &&
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
                                    heading={`Informações trimestrais de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="lnr-calendar-full"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {dados.atv_fin.length===0 && dados.contas.length===0 && dados.imoveis_qtd.length===0 && dados.vacancia.length===0 ? (
                                    <div className="alert alert-info" role="alert">
                                        Este FII ainda não possui informações suficientes para serem mostradas.
                                    </div>)
                                    :(
                                    <Fragment>
                                        <div className='row'>
                                            <div className='col-12 mt-4'>
                                                <h3 className='h6 text-center'>Quantidade de imóveis (por tipo)</h3>
                                                <ChartLineImoveisQtt imoveis={dados.imoveis_qtd}/>
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <h3 className='h6 text-center'>% de vacância</h3>
                                                <ChartLineDataValor 
                                                    label='Vacância' 
                                                    valores={formatVacancia()}
                                                    ttsufix='%'
                                                    backgroundColor='#938294'
                                                    hoverBackgroundColor='#938294'
                                                    borderColor='#938294'
                                                    hoverBorderColor='#938294'
                                                    borderWidth={3}
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <h3 className='h6 text-center'>Valor em ativos financeiros</h3>
                                                <ChartLineDataValor 
                                                    label='Ativos financeiros' 
                                                    valores={dados.atv_fin}
                                                    ttprefix='R$ '
                                                    backgroundColor='#f2c00c'
                                                    hoverBackgroundColor='#f2c00c'
                                                    borderColor='#f2c00c'
                                                    hoverBorderColor='#f2c00c'
                                                    borderWidth={3}
                                                    rodape='Ativos financeiros: valores em outros FII, CRI, LCI, FIA, FIP, ações e outros.'
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <h3 className='h6 text-center'>Receitas (por tipo)</h3>
                                                <ChartLineReceitas contas={dados.contas}/>
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <h3 className='h6 text-center'>Taxas e despesas</h3>
                                                <ChartLineDespesasContas contas={dados.contas}/>
                                            </div>
                                        </div>
                                    </Fragment>
                                    )
                                } 
                            </Fragment>
                        }
                </ReactCSSTransitionGroup>
            }
            {
                loading && <Loading/>
            }
            {errorMessage && 
                <div className="alert alert-danger">
                    <p>{errorMessage}</p>
                </div>
            }
            <Adsense/>
        </Fragment>
    );
};

export default Index;