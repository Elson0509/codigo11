import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import Tabs from 'react-responsive-tabs';
import Forum from '../../../components/Forum/Forum'
import {Helmet} from 'react-helmet'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    const tabsContent = [
        {
            title: 'Geral',
            content: <Forum secao={1} fii={fii}/>
        },
        {
            title: 'Eventos',
            content: <Forum secao={2} fii={fii}/>
        },
        {
            title: 'Proventos',
            content: <Forum secao={3} fii={fii}/>
        },
        {
            title: 'Vacância',
            content: <Forum secao={4} fii={fii}/>
        },
        {
            title: 'Relatórios',
            content: <Forum secao={5} fii={fii}/>
        },
        {
            title: 'Ativos Físicos',
            content: <Forum secao={6} fii={fii}/>
        },
        {
            title: 'Ativos Financeiros',
            content: <Forum secao={7} fii={fii}/>
        },
        {
            title: 'Outros',
            content: <Forum secao={8} fii={fii}/>
        },
    ];

    const getTabs = () => {
        return tabsContent.map((tab, index) => ({
            title: tab.title,
            getContent: () => tab.content,
            key: index,
        }));
    }

    useEffect(() => {
        
        const filename = `/dados/alugueis/${fii}`
        axios.get(filename)
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
                    <meta name="description" content={`Codigo11 - ${fii}11 - Fórum de discussão do Fundo Imobiliário (FII)`} />
                    <title>{`Codigo11: ${fii}11 - Fórum de discussão`}</title>
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
                                    heading={`Fórum para discussão de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="comments"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                    <Tabs 
                                        tabsWrapperClass="body-tabs body-tabs-layout" 
                                        transform={false} 
                                        showInkBar={true} 
                                        items={getTabs()}
                                        />
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