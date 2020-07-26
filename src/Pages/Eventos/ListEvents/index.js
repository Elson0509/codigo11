import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingAdvancedSearch from '../../../components/Loading/LoadingAdvancedSearch'
import EventsTable from '../../../components/Tables/EventsTable'
import {Helmet} from 'react-helmet'

const Index = () => {
    const [result, setResult] = useState()
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(()=> {
        pesquisarHandler()
    }, [])

    const pesquisarHandler = () => {
        setLoadingSearch(true)
        axios.get('/relatorios/reldias')
        .then(res => {
            setLoadingSearch(false)
            setResult(res.data)
        })
        .catch(err => {
            setLoadingSearch(false)
            setErrorMessage(err.response?.data?.message || 'Ops, um erro ocorreu!')
        })
    }

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - Últimos Eventos de Fundos de Investimento Imobiliários ativos na bolsa.`} />
                <title>{`Codigo11: Eventos recentes de Fundos Imobiliários`}</title>
            </Helmet>
            {!errorMessage && 
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <Fragment>
                            <PageTitle
                                heading={`Lista dos eventos mais recentes sobre Fundos Imobiliários`}
                                subheading={'Clique no eventos para visualizá-lo'}
                                icon="pe-7s-star"
                                bgcolor={'bg-royal'}
                                color={'dark'}
                            />
                            {loadingSearch && <LoadingAdvancedSearch/>}
                            {
                                result &&
                                <div className="row">
                                    <div className="col-12">
                                        <GeneralCard title='Emissões' comentary='Emissões de novas cotas de fundos imobiliários'>
                                            <EventsTable eventos={result.rel_emissao}/>
                                        </GeneralCard>
                                    </div>
                                    <div className="col-12">
                                        <GeneralCard title='Fatos Relevantes' comentary='Informações aos cotistas e ao mercado sobre fatos relevantes'>
                                            <EventsTable eventos={result.rel_fato}/>
                                        </GeneralCard>
                                    </div>
                                    <div className="col-12">
                                        <GeneralCard title='Relatórios Gerenciais' comentary='Relatórios gerenciais recém divulgados'>
                                            <EventsTable eventos={result.rel_gerencial}/>
                                        </GeneralCard>
                                    </div>
                                    <div className="col-12">
                                        <GeneralCard title='Relatórios Trimestrais' comentary='Relatórios trimestrais recém divulgados'>
                                            <EventsTable eventos={result.rel_trimestral}/>
                                        </GeneralCard>
                                    </div>
                                    <div className="col-12">
                                        <GeneralCard title='Informativos Mensais' comentary='informativos mensais recém divulgados'>
                                            <EventsTable eventos={result.rel_mensal}/>
                                        </GeneralCard>
                                    </div>
                                    <div className="col-12">
                                        <GeneralCard title='Aluguéis e Amortizações' comentary='Relatório de proventos recém anunciados'>
                                            <EventsTable eventos={result.rel_rendimentos}/>
                                        </GeneralCard>
                                    </div>
                                </div>
                            }
                        </Fragment>
                </ReactCSSTransitionGroup>
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