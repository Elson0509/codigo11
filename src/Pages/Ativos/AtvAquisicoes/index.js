import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimelineOperations from '../../../components/Timelines/TimelineOperations'
import Loading from '../../../components/Loading/Loading'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const fii = props.match.params.fii
        const path = `/ativos/aquiali/${fii}`
        axios.get(path)
            .then(res => {
                setLoading(false)
                setDados(res.data)
                console.log(dados)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message)
                console.log('Erro', err.response.data.message)
                
            })
    }, [])

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
                        {dados && console.log(dados)}
                        {dados && console.log(props)}
                        {dados && 
                            <Fragment>
                                <PageTitle
                                    heading={`Timeline de Aquisições e Alienações de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={`Data de referência: ${dados.data_ref}`}
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
        </Fragment>
    );
};

export default Index;