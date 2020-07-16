import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimelineOperations from '../../../components/Timelines/TimelineOperations'
import Loading from '../../../components/Loading/Loading'
import {Helmet} from 'react-helmet'
import Adsense from '../../../components/Ads/Adsense'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/ativos/aquiali/${fii}`
        axios.get(path)
            .then(res => {
                setLoading(false)
                setDados(res.data)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message)
                
            })
    }, [])

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - ${fii}11 - Aquisições e alienações históricas do Fundo imobiliário (FII).`} />
                <title>{`Codigo11: ${fii}11 - Aquisições e alienações do FII`}</title>
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
                                    heading={`Timeline de Aquisições e Alienações de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="clock"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                    {dados.operacoes.length > 0 ?
                                        <TimelineOperations operacoes={dados.operacoes}/>
                                        :
                                        <h4>Este FII não apresentou operações de aquisição / alienação de imóveis.</h4>
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