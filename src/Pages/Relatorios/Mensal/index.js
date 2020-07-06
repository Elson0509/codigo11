import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import ChartLineDataValor from '../../../components/Charts/ChartLineDataValor'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/relatorios/mensais/${fii}`
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

    const arrayPL = () =>{
        return dados.relmensais.map(el => {
            return {
                data: el.data_ref,
                valor: el.pat_liq
            }
        })
    }
    const arrayCotas = () =>{
        return dados.relmensais.map(el => {
            return {
                data: el.data_ref,
                valor: el.cotas_qtt
            }
        })
    }
    const arrayCotistas = () =>{
        return dados.relmensais.map(el => {
            return {
                data: el.data_ref,
                valor: el.cotistas_qtt
            }
        })
    }
    const arrayAtvLiq = () =>{
        return dados.relmensais.map(el => {
            return {
                data: el.data_ref,
                valor: el.tit_priv + el.tit_pub + el.disponibilidades + el.fundos_rf
            }
        })
    }
    const arrayVpc = () =>{
        return dados.relmensais.map(el => {
            return {
                data: el.data_ref,
                valor: el.pat_liq / el.cotas_qtt
            }
        })
    }

    return (
        <Fragment>
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
                                    heading={`Informações mensais de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="lnr-calendar-full"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {dados.relmensais.length == 0 ? (
                                    <div className="alert alert-info" role="alert">
                                        Este FII ainda não possui informações suficientes para serem mostradas.
                                    </div>)
                                    :(
                                    <Fragment>
                                        <div className='row'>
                                            <div className='col-12 mt-4'>
                                                <ChartLineDataValor 
                                                    label='Patrimônio líquido' 
                                                    valores={arrayPL()}
                                                    ttprefix='R$'
                                                    backgroundColor='#07e642'
                                                    borderColor='#07e642'
                                                    borderWidth={3}
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <ChartLineDataValor 
                                                    label='Quantidade de cotas' 
                                                    valores={arrayCotas()}
                                                    backgroundColor='#f0960e'
                                                    borderColor='#f0960e'
                                                    hoverBackgroundColor='#f0960e'
                                                    borderWidth={3}
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <ChartLineDataValor 
                                                    label='Valor patrimonial por cota (VPC)' 
                                                    valores={arrayVpc()}
                                                    backgroundColor='#e0f500'
                                                    borderColor='#e0f500'
                                                    hoverBackgroundColor='#e0f500'
                                                    borderWidth={3}
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <ChartLineDataValor 
                                                    label='Quantidade de cotistas' 
                                                    valores={arrayCotistas()}
                                                    backgroundColor='#940acf'
                                                    borderColor='#940acf'
                                                    hoverBackgroundColor='#940acf'
                                                    borderWidth={2}
                                                />
                                            </div>
                                            <div className='col-12 mt-4'>
                                                <ChartLineDataValor 
                                                    label='Ativos líquidos' 
                                                    valores={arrayAtvLiq()}
                                                    fill
                                                    ttprefix='R$'
                                                    borderWidth={2}
                                                    rodape='Ativos líquidos: Valores de alta liquidez (disponibilidades, tít. públicos e privados e fundos de RF)'
                                                />
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
        </Fragment>
    );
};

export default Index;