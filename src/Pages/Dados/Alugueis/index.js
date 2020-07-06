import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import ChartProventos from '../../../components/Charts/ChartProventos'
import ChartDY from '../../../components/Charts/ChartDY'
import CardProventos from '../../../components/Cards/CardProventos'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const fii = props.match.params.fii
        const path = `/dados/alugueis/${fii}`
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
                                    heading={`Histórico de aluguéis de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="coins"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {dados.proventos.length===0 ? (
                                    <div className="alert alert-info" role="alert">
                                        Este FII ainda não possui informações suficientes para serem mostradas.
                                    </div>)
                                    :(
                                    <Fragment>
                                        <div className="m-4">
                                            <ChartProventos proventos={dados.proventos} label="Aluguéis - R$"/>
                                        </div>
                                        <div className="m-4">
                                            <ChartDY proventos={dados.proventos} label="DY - Histórico"/>
                                        </div>
                                        <div className="m-4">
                                            <CardProventos proventos={dados.proventos}/>
                                        </div>
                                    </Fragment>
                                    )
                                }
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