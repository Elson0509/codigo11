import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingAdvancedSearch from '../../../components/Loading/LoadingAdvancedSearch'
import SearchTable from '../../../components/Tables/SearchTable'
import Adsense from '../../../components/Ads/Adsense'
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
        axios.get('/fii/search', {
            params: {
                search: '',
                selectAvancada: false,
                selectDY: false,
                selectSegmento: false,
                selectQtdNegocios: false,
                selectPL: false,
                selectPVP: false,
                selectVPC: false,
                selectAtvFis: false,
                selectGestao: false,
                dyChange: '>=',
                dy: 0,
                segmento: [2],
                negociosChange: '>=',
                negocios: 10,
                plChange: '>=',
                gestao: 0,
                pl: 100000000,
                pvpChange: '>=',
                pvp: 1,
                vpcChange: '>=',
                vpc: 50,
                atvFisChange: '>=',
                atvFis: 2
            }
        })
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
                <meta name="description" content={`Codigo11 - Lista de Fundos de Investimento Imobiliários ativos na bolsa.`} />
                <title>{`Codigo11: Lista de Fundos Imobiliários`}</title>
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
                                heading={`Lista de fundos imobiliários disponíveis para análise`}
                                subheading={'Clique no fundo para visualizar mais informações'}
                                icon="lnr-list"
                                bgcolor={'bg-royal'}
                                color={'dark'}
                            />
                            {loadingSearch && <LoadingAdvancedSearch/>}
                            {
                                result &&
                                <div className="row">
                                    <div className="col-12">
                                        <GeneralCard>
                                            <SearchTable fiis={result}/>
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
            <Adsense/>
        </Fragment>
    );
};

export default Index;