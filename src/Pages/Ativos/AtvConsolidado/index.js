import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AtvFisConsTable from '../../../components/Tables/AtvFisConsTable'
import AtvFinConsTable from '../../../components/Tables/AtvFinConsTable'
import GeneralCard from '../../../components/Cards/GeneralCard'
import Icon from '../../../components/Icon/Icon'
import ChartDoughImovelConsArea from '../../../components/Charts/ChartDoughImovelConsArea'
import ChartPieImovelConsReceita from '../../../components/Charts/ChartPieImovelConsReceita'
import ChartDoughAtvFinCons from '../../../components/Charts/ChartDoughAtvFinCons'
import Loading from '../../../components/Loading/Loading'


const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const fii = props.match.params.fii
        const path = `/ativos/con/${fii}`
        axios.get(path)
            .then(res => {
                setDados(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message)
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
                        {dados && 
                            <Fragment>
                                <PageTitle
                                    heading={`Consolidação dos ativos de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="chart-pie"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {/*Ativos Físicos*/}
                                <div className={`mb-3 card card-body`}>
                                    <div className="card-header bg-vicious-stance text-white">
                                        <span className="font-number pr-2 mb-2">
                                            <Icon icon="building"/>
                                        </span>
                                        <h4 className={`cart-title text-white`}>Ativos físicos</h4>
                                    </div>
                                    {dados.AtvFis && dados.AtvFis.length > 0 ?
                                        (
                                            <Fragment>
                                                <div className="card-body over">
                                                    <AtvFisConsTable ativos={dados.AtvFis}/>
                                                </div>
                                                <div className="card-footer"/>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-6">
                                                            <GeneralCard title={`% - Área de Ativos físicos`} titleStyle="text-center">
                                                                <ChartDoughImovelConsArea ativos={dados.AtvFis}/>
                                                            </GeneralCard>
                                                        </div>
                                                        <div className="col-sm-12 col-lg-6">
                                                            <GeneralCard title={`% - Receita de Ativos físicos`} titleStyle="text-center">
                                                                <ChartPieImovelConsReceita ativos={dados.AtvFis}/>
                                                            </GeneralCard>
                                                        </div>
                                                    </div>
                                                
                                            </Fragment>   
                                        )
                                        : 
                                        <h4 className='text-center m-4'>Este fundo não apresentou ativos físicos em seu último trimestre.</h4>                                
                                    }
                                </div>
                                {/*Ativos Financeiros*/}
                                <div className={`mb-3 card card-body`}>
                                    <div className="card-header bg-vicious-stance text-white">
                                        <span className="font-number pr-2 mb-2">
                                            <Icon icon="file-invoice-dollar"/>
                                        </span>
                                        <h4 className={`cart-title text-white`}>Ativos financeiros</h4>
                                    </div>
                                    {dados.AtvFin && dados.AtvFin.length > 0 ?
                                        (
                                            <Fragment>
                                                <div className="card-body over">
                                                    <AtvFinConsTable ativos={dados.AtvFin}/>
                                                </div>
                                                <div className="card-footer"/>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-12">
                                                            <GeneralCard title={`% - Valor de Ativos financeiros`} titleStyle="text-center">
                                                                <ChartDoughAtvFinCons ativos={dados.AtvFin}/>
                                                            </GeneralCard>
                                                        </div>
                                                    </div>
                                                
                                            </Fragment>   
                                        )
                                        : 
                                        <h4 className='text-center m-4'>Este fundo não apresentou ativos financeiros em seu último trimestre.</h4>                                
                                    }
                                </div>
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