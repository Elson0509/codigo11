import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import CardApresentacaoFii from '../../../components/Cards/CardApresentacaoFii'
import CardSegmento from '../../../components/Cards/CardSegmento'
import CardCotacao from '../../../components/Cards/CardCotacao'
import CardImoveis from '../../../components/Cards/CardImoveis'
import CardAtvFin from '../../../components/Cards/CardAtvFin'
import CardIndicadores from '../../../components/Cards/CardIndicadores'
import {Helmet} from 'react-helmet'

import {
    Row
} from 'reactstrap';

const Index = (props) => {

    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/dados/fundamentos/${fii}`
        axios.get(path)
            .then(res => {
                setLoading(false)
                setDados(res.data)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message || 'Desculpe, mas um erro ocorreu.')
            })
    }, [])


    return (
        <Fragment>
                <Helmet>
                    <meta name="description" content={`Codigo11 - ${fii}11 - Tabela de informações com fundamentos do FII`} />
                    <title>{`Codigo11: ${fii}11 - Tabelas de Fundamentos do FII`}</title>
                    <script data-ad-client="ca-pub-8540652797620487" 
                        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
                    </script>
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
                                    heading={`Fundamentos de ${dados.apresentacao.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="chart-line"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                <Row>
                                    <CardApresentacaoFii apresentacao={dados.apresentacao} bgcolor={dados.segmento.color}/>
                                    <CardSegmento segmento={dados.segmento}/>
                                    {dados.cotacao.codneg && <CardCotacao cotacao={dados.cotacao}  bgcolor={dados.segmento.color}/>}
                                    <CardAtvFin atv_fin={dados.atv_fin}  bgcolor={dados.segmento.color}/>
                                    <CardImoveis imoveis={dados.imoveis}  bgcolor={dados.segmento.color}/>
                                    <CardIndicadores indicadores={dados.indicadores}  bgcolor={dados.segmento.color}/>
                                </Row>
                            </Fragment>
                        }
                        {loading && <Loading/>}
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