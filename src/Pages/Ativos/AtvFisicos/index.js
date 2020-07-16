import React, {useEffect, useState, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListTerrenos from './ListTerrenos/ListTerrenos'
import ChartImovelPercReceita from '../../../components/Charts/ChartImovelPercReceita'
import ListRendaAcabados from './ListRendaAcabados/ListRendaAcabados'
import ListVendaAcabados from './ListVendaAcabados/ListVendaAcabados'
import ListRendaConstrucao from './ListaRendaContrucao/ListaRendaContrucao'
import ListVendaConstrucao from './ListVendaConstrucao/ListVendaConstrucao'
import {barCharColors, barCharColorsHover, lineCharColors, lineCharHover} from '../../../util/Utilities'
import ChartImovelArea from '../../../components/Charts/ChartImovelArea';
import ChartHorizontalLabelsObject from '../../../components/Charts/ChartHorizontalLabelsObject';
import ListCaracContr from '../../../components/Lists/ListCaracContr';
import ListSingle from '../../../components/Lists/ListSingle';
import VerctorMap from '../../../components/Map/VectorMap'
import Loading from '../../../components/Loading/Loading'
import {Helmet} from 'react-helmet'

import {
    Row, Col,
} from 'reactstrap';


const Index = (props) => {
    const [dados, setDados] = useState()
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(true)

    const fii = props.match.params.fii

    useEffect(() => {
        const path = `/ativos/fis/${fii}`
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
                <meta name="description" content={`Codigo11 - ${fii}11 - Informações de ativos físicos do FII`} />
                <title>{`Codigo11: ${fii}11 - Ativos físicos do FII`}</title>
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
                                    heading={`Ativos físicos de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={``}
                                    icon="building"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                {/*Terrenos*/}
                                <div className={`mb-3 card card-body ${props.bgColor}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>Terrenos</h4>
                                    </div>
                                    <div className="card-body">
                                        <Row className="">
                                            <ListTerrenos terrenos={dados.terrenos}/>
                                        </Row>
                                    </div>
                                    {dados.terrenos.length > 0 && 
                                        <Fragment>
                                            <div className="card-footer"/>
                                            <Row className="">
                                                <Col className="col-sm-12 col-lg-6">
                                                    <GeneralCard title="Terrenos por área" titleStyle="text-center">
                                                        <ChartImovelArea imoveis={dados.terrenos} type="Terreno"/>
                                                    </GeneralCard>
                                                </Col>
                                                <Col className="col-sm-12 col-lg-6">
                                                    <GeneralCard title="Terrenos por % Receita" titleStyle="text-center">
                                                        <ChartImovelPercReceita imoveis={dados.terrenos} type="Terreno"/>
                                                    </GeneralCard>
                                                </Col>
                                                <Col className="col-sm-12 col-lg-12">
                                                    <GeneralCard title="Terrenos no mapa" titleStyle="text-center">
                                                        <VerctorMap imoveis={dados.terrenos} markerColor="#0275d8"/>
                                                    </GeneralCard>
                                                </Col>
                                            </Row>
                                        </Fragment>
                                    }
                                </div>
                                {/*Renda-acabado*/}
                                <div className={`mb-3 card card-body ${props.bgColor}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>Imóveis para renda</h4>
                                    </div>
                                    <div className="card-body">
                                        <Row>
                                            <ListRendaAcabados imoveis={dados.renda_acabado}/>
                                        </Row>
                                    </div>
                                    {dados.renda_acabado.length > 0 && 
                                    <Fragment>
                                        <div className="card-footer"/>
                                        <Row className="">
                                            <Col className="col-sm-12 col-lg-6">
                                                <GeneralCard title="Imóveis por área" titleStyle="text-center">
                                                    <ChartImovelArea imoveis={dados.renda_acabado} type="Imóvel"/>
                                                </GeneralCard>
                                            </Col>
                                            <Col className="col-sm-12 col-lg-6">
                                                <GeneralCard title="Imóveis por % Receita" titleStyle="text-center">
                                                    <ChartImovelPercReceita imoveis={dados.renda_acabado} type="Imóvel"/>
                                                </GeneralCard>
                                            </Col>
                                            <Col className="col-sm-12 col-lg-12">
                                                <GeneralCard title="Imóveis para renda no mapa" titleStyle="text-center">
                                                    <VerctorMap imoveis={dados.renda_acabado} markerColor="#5cb85c"/>
                                                </GeneralCard>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="">
                                            {   dados.contrato_locacao_renda_acabado &&
                                                Object.entries(dados.contrato_locacao_renda_acabado).length > 0 &&
                                                    <Col className="col-sm-12 col-lg-6">
                                                        <GeneralCard title="Prazos dos contratos" titleStyle="text-center">
                                                            <ChartHorizontalLabelsObject 
                                                                label="%"
                                                                object={dados.contrato_locacao_renda_acabado}
                                                                backgroundColor={barCharColors[0]}
                                                                hoverBackgroundColor={barCharColorsHover[0]}
                                                                borderColor={lineCharColors[0]}
                                                                hoverBorderColor={lineCharHover[0]}
                                                                />
                                                        </GeneralCard>
                                                    </Col>
                                            }
                                            {   dados.contrato_indexadores &&
                                                Object.entries(dados.contrato_indexadores).length > 0 &&
                                                    <Col className="col-sm-12 col-lg-6">
                                                        <GeneralCard title="Índices dos contatos" titleStyle="text-center">
                                                            <ChartHorizontalLabelsObject 
                                                                label="%"
                                                                object={dados.contrato_indexadores}
                                                                backgroundColor={barCharColors[1]}
                                                                hoverBackgroundColor={barCharColorsHover[1]}
                                                                borderColor={lineCharColors[1]}
                                                                hoverBorderColor={lineCharHover[1]}
                                                                />
                                                        </GeneralCard>
                                                    </Col>
                                            }
                                        </Row>
                                        <div className="card-footer"/>
                                        <Row>
                                            <Col className="col-12">
                                                <ListCaracContr caracteristicas={dados.características_contratuais_renda_acabado} bgcolor="success"/>
                                            </Col>
                                        </Row>
                                        {dados.politica_seguro_renda_acabado &&
                                            <Row>
                                                <Col className="col-12">
                                                    <ListSingle 
                                                        bgcolor="success" 
                                                        icon="house-damage" 
                                                        title="Política de seguro para Imóveis para Renda" 
                                                        description={dados.politica_seguro_renda_acabado}
                                                    />
                                                </Col>
                                            </Row>
                                        }
                                    </Fragment>}
                                </div>
                                {/*Renda em contrução*/}
                                <div className={`mb-3 card card-body ${props.bgColor}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>Imóveis para renda (em construção)</h4>
                                    </div>
                                    <div className="card-body">
                                        <Row className="">
                                            <ListRendaConstrucao imoveis={dados.renda_construcao}/>
                                        </Row>
                                    </div>
                                    {dados.renda_construcao.length > 0 && 
                                    <Fragment>
                                        <div className="card-footer"/>
                                        <Row className="justify-content-center">
                                            <Col className="col-sm-12 col-lg-6">
                                                <GeneralCard title="Imóveis por área" titleStyle="text-center">
                                                    <ChartImovelArea imoveis={dados.renda_construcao} type="Imóvel"/>
                                                </GeneralCard>
                                            </Col>
                                            <Col className="col-sm-12 col-lg-12">
                                                <GeneralCard title="Imóveis para renda (em construção) no mapa" titleStyle="text-center">
                                                    <VerctorMap imoveis={dados.renda_construcao} markerColor="#f0ad4e"/>
                                                </GeneralCard>
                                            </Col>
                                        </Row>
                                        <div className="card-footer"/>
                                        {dados.politica_seguro_renda_construcao &&
                                            <Row>
                                                <Col className="col-12">
                                                    <ListSingle 
                                                        bgcolor="warning" 
                                                        icon="house-damage" 
                                                        title="Política de seguro para Imóveis para Renda (em construção)" 
                                                        description={dados.politica_seguro_renda_construcao}
                                                    />
                                                </Col>
                                            </Row>
                                        }
                                    </Fragment>}
                                </div>
                                {/*Venda acabados*/}
                                <div className={`mb-3 card card-body ${props.bgColor}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>Imóveis para venda</h4>
                                    </div>
                                    <div className="card-body">
                                        <Row className="">
                                            <ListVendaAcabados imoveis={dados.venda_acabado}/>
                                        </Row>
                                    </div>
                                    {dados.venda_acabado.length > 0 && 
                                    <Fragment>
                                        <div className="card-footer"/>
                                        <Row className="justify-content-center">
                                            <Col className="col-sm-12 col-lg-6">
                                                <GeneralCard title="Imóveis por área" titleStyle="text-center">
                                                    <ChartImovelArea imoveis={dados.venda_acabado} type="Imóvel"/>
                                                </GeneralCard>
                                            </Col>
                                            <Col className="col-sm-12 col-lg-12">
                                                <GeneralCard title="Imóveis para venda no mapa" titleStyle="text-center">
                                                    <VerctorMap imoveis={dados.venda_acabado} markerColor="#d9534f"/>
                                                </GeneralCard>
                                            </Col>
                                        </Row>
                                        
                                        <div className="card-footer"/>
                                        {dados.politica_seguro_venda_acabados &&
                                            <Row>
                                                <Col className="col-12">
                                                    <ListSingle 
                                                        bgcolor="danger" 
                                                        icon="house-damage" 
                                                        title="Política de seguro para Imóveis para Venda" 
                                                        description={dados.politica_seguro_venda_acabados}
                                                    />
                                                </Col>
                                            </Row>
                                        }
                                    </Fragment>}
                                </div>
                                {/*Venda em contrução*/}
                                <div className={`mb-3 card card-body ${props.bgColor}`}>
                                    <div className="card-header">
                                        <h4 className={`cart-title text-dark`}>Imóveis para venda (em construção)</h4>
                                    </div>
                                    <div className="card-body">
                                        <Row className="">
                                            <ListVendaConstrucao imoveis={dados.venda_construcao}/>
                                        </Row>
                                    </div>
                                    {dados.venda_construcao.length > 0 && 
                                    <Fragment>
                                        <div className="card-footer"/>
                                        <Row className="justify-content-center">
                                            <Col className="col-sm-12 col-lg-6">
                                                <GeneralCard title="Imóveis por área" titleStyle="text-center">
                                                    <ChartImovelArea imoveis={dados.venda_construcao} type="Imóvel"/>
                                                </GeneralCard>
                                            </Col>
                                            <Col className="col-sm-12 col-lg-12">
                                                <GeneralCard title="Imóveis para venda (em contrução) no mapa" titleStyle="text-center">
                                                    <VerctorMap imoveis={dados.venda_construcao} markerColor="#292b2c"/>
                                                </GeneralCard>
                                            </Col>
                                        </Row>
                                        <div className="card-footer"/>
                                        {dados.politica_seguro_venda_construcao &&
                                            <Row>
                                                <Col className="col-12">
                                                    <ListSingle 
                                                        bgcolor="dark" 
                                                        icon="house-damage" 
                                                        title="Política de seguro para Imóveis para Venda (em construção)" 
                                                        description={dados.politica_seguro_venda_construcao}
                                                    />
                                                </Col>
                                            </Row>
                                        }
                                    </Fragment>}
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

