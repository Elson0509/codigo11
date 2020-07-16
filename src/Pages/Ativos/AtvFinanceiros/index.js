import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AtvFinTable from '../../../components/Tables/AtvFinTable'
import GeneralCard from '../../../components/Cards/GeneralCard'
import ChartPieAtvFin from '../../../components/Charts/ChartPieAtvFin'
import Loading from '../../../components/Loading/Loading'
import {Helmet} from 'react-helmet'

import {
    Col,
} from 'reactstrap';

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/ativos/fin/${fii}`
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

    const allEmpty = () => {
        let find = true;
        dados.atvFin.forEach(element => {
            if(element.ativos.length>0)
                find = false;
        });
        return find;
    }

    const content = () => {
        let count = 1;
        return (
            <Fragment>
                {!errorMessage && 
                    <Fragment>
                    {dados &&
                    allEmpty() ?
                        <h3>Este fundo não possui ativos financeiros.</h3>
                        :
                        <Fragment>
                            {dados.atvFin.map((atv, ind) => {
                                return atv.ativos.length > 0 ?
                                <div className={`mb-3 card card-body ${props.bgColor}`} key={`atfin${ind}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>{`${count++}. ${atv.descricao}`}</h4>
                                    </div>
                                    <div className="card-body over">
                                        <AtvFinTable ativos={atv.ativos}/>
                                    </div>
                                    <div className="card-footer"/>
                                        <Col className="col-sm-12 col-lg-12">
                                            <GeneralCard title={`% - ${atv.descricao}`} titleStyle="text-center">
                                                <ChartPieAtvFin ativos={atv.ativos}/>
                                            </GeneralCard>
                                        </Col>
                                    
                                </div>
                                :
                                null
                            })}
                        </Fragment>
                    }
                    </Fragment>
                }
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - ${fii}11 - Informações de ativos financeiros do FII`} />
                <title>{`Codigo11: ${fii}11 - Ativos financeiros do FII`}</title>
            </Helmet>
            {dados && 
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
                                    heading={`Ativos financeiros de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="file-invoice-dollar"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {dados.atvFin.length > 0 ?
                                    content()
                                    : 
                                    <h4>Não há ativos Financeiros para serem mostrados</h4>                                
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