import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import {Button, ButtonGroup, Card, Input, CardTitle} from 'reactstrap';
import { numberBrazilianMoney } from '../../../util/Utilities'
import LoadingAdvancedSearch from '../../../components/Loading/LoadingAdvancedSearch'
import SearchTable from '../../../components/Tables/SearchTable'
import Adsense from '../../../components/Ads/Adsense'
import CheckBoxGestao from '../../../components/Buttons/CheckBoxGestao'

const Index = (props) => {
    const [result, setResult] = useState()
    const [segmentosList, setSegmentosList] = useState()
    const [loading, setLoading] = useState(false)
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [search, setSearch] = useState("")
    const [textPesquisar, setTextPesquisar] = useState('Pesquisar')
    const [selectAvancada, setSelectAvancada] = useState(false)
    const [selectDY, setSelectDY] = useState(false)
    const [selectSegmento, setSelectSegmento] = useState(false)
    const [selectQtdNegocios, setSelectQtdNegocios] = useState(false)
    const [selectPL, setSelectPL] = useState(false)
    const [selectPVP, setSelectPVP] = useState(false)
    const [selectVPC, setSelectVPC] = useState(false)
    const [selectAtvFis, setSelectAtvFis] = useState(false)
    const [selectGestao, setSelectGestao] = useState(false)
    const [dyChange, setDyChange] = useState('>=')
    const [dy, setDy] = useState(0)
    const [gestao, setGestao] = useState(0)
    const [segmento, setSegmento] = useState([2])
    const [negociosChange, setNegociosChange] = useState('>=')
    const [negocios, setNegocios] = useState(10)
    const [plChange, setPlChange] = useState('>=')
    const [pl, setPl] = useState(100000000)
    const [pvpChange, setPvpChange] = useState('>=')
    const [pvp, setPvp] = useState(1)
    const [vpcChange, setVpcChange] = useState('>=')
    const [vpc, setVpc] = useState(50)
    const [atvFisChange, setAtvFisChange] = useState('>=')
    const [atvFis, setAtvFis] = useState(2)

    const pesquisarHandler = () => {
        setLoadingSearch(true)
        setTextPesquisar('Pesquisando...')
        axios.get('/fii/search', {
            params: {
                search,
                selectAvancada,
                selectDY,
                selectSegmento,
                selectQtdNegocios,
                selectPL,
                selectPVP,
                selectVPC,
                selectAtvFis,
                selectGestao,
                dyChange,
                dy,
                segmento,
                negociosChange,
                negocios,
                plChange,
                gestao,
                pl,
                pvpChange,
                pvp,
                vpcChange,
                vpc,
                atvFisChange,
                atvFis
            }
        })
        .then(res => {
            setLoadingSearch(false)
            setTextPesquisar('Pesquisar')
            setResult(res.data)
        })
        .catch(err => {
            setLoadingSearch(false)
            setTextPesquisar('Pesquisar')
            setErrorMessage(err.response?.data?.message || 'Ops, um erro ocorreu!')
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.get('/segmento')
            .then(res => {
                setLoading(false)
                setSegmentosList(res.data.segmentos)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response?.data?.message || 'Ops, um erro ocorreu!')
            })
    }, [])

    const getSegmentosOptions = () => {
        return segmentosList.map(seg => {
            return <option 
                value={seg.segmento_fii_id}
                key={`seg${seg.segmento_fii_id}`}
                >
                    {seg.descricao}
            </option>
        })
    }

    const selectSegmentosHandler = (ev) => {
        if(ev.target.options){
            let newSegmentos = []
            for(let i=0; i<ev.target.options.length; i++){
                if (ev.target.options[i].selected)
                    newSegmentos.push(ev.target.options[i].value)
            }
            setSegmento(newSegmentos)
        }
    }

    return (
        <Fragment>
            {!errorMessage && 
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <Fragment>
                            <PageTitle
                                heading={`Pesquisa avançada de fundos imobiliários`}
                                subheading={''}
                                icon="pe-7s-search"
                                bgcolor={'bg-royal'}
                                color={'dark'}
                            />
                            <div className="row">
                                <GeneralCard className="col-12">
                                    <div className="mb-4">
                                        <input 
                                            className="form-control mb-1" 
                                            type="text" 
                                            placeholder="Procure por nome ou código..." 
                                            aria-label="procurar" 
                                            value={search} 
                                            onChange={(ev) => setSearch(ev.target.value)}
                                        />
                                        <div>
                                            <button className="mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate" onClick={() => setSelectAvancada(prev => !prev)}>Pesquisa avançada</button>
                                        </div>
                                        {selectAvancada &&
                                            <div className="text-center mb-4">
                                                <ButtonGroup className="flex-wrap" size="lg">
                                                    <Button color="alternate" onClick={() => setSelectDY(prev => !prev)}
                                                            active={selectDY}>Yield médio</Button>
                                                    <Button color="danger" onClick={() => setSelectSegmento(prev => !prev)}
                                                            active={selectSegmento}>Segmentos</Button>
                                                    <Button color="primary" onClick={() => setSelectQtdNegocios(prev => !prev)}
                                                            active={selectQtdNegocios}>Negócios</Button>
                                                    <Button color="success" onClick={() => setSelectPL(prev => !prev)}
                                                            active={selectPL}>Pat. Líquido</Button>
                                                    <Button color="warning" onClick={() => setSelectPVP(prev => !prev)}
                                                            active={selectPVP}>P/VP</Button>
                                                    <Button color="secondary" onClick={() => setSelectVPC(prev => !prev)}
                                                            active={selectVPC}>Cotação</Button>
                                                    <Button color="dark" onClick={() => setSelectAtvFis(prev => !prev)}
                                                            active={selectAtvFis}>At. Físicos</Button>
                                                    <Button color="info" onClick={() => setSelectGestao(prev => !prev)}
                                                            active={selectGestao}>Gestão</Button>
                                                </ButtonGroup>
                                            </div>
                                        }
                                        
                                        <div className="divider"/>
                                        <div className="row">
                                            
                                            {selectAvancada && (
                                                <Fragment>
                                                    {selectDY && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="alternate">
                                                                <CardTitle className="text-white text-center">Dividend Yeld Médio (mensal)</CardTitle>
                                                                <Input type="select" value={dyChange} onChange={(ev) => setDyChange(ev.target.value)}>
                                                                    <option value=">=">Maior que</option>
                                                                    <option value="<=">Menor que</option>
                                                                </Input>
                                                                <Input type="range" min="0" max="2" step="0.1" value={dy} onChange={(ev) => setDy(ev.target.value)}/>
                                                                <h4 className="text-center enfase">{dy}%</h4>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectSegmento && segmentosList && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="danger">
                                                                <CardTitle className="text-white text-center">Segmentos</CardTitle>
                                                                <Input type="select" multiple value={segmento} onChange={selectSegmentosHandler}>
                                                                    {getSegmentosOptions()}
                                                                </Input>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectQtdNegocios && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card  body inverse color="primary">
                                                                <CardTitle className="text-white text-center">Quantidade de negócios</CardTitle>
                                                                <Input type="select" value={negociosChange} onChange={(ev) => setNegociosChange(ev.target.value)}>
                                                                    <option value=">=">Mais que</option>
                                                                    <option value="<=">Menos que</option>
                                                                </Input>
                                                                <Input type="select" className="mt-2" value={negocios} onChange={(ev) => setNegocios(ev.target.value)}>
                                                                    <option value="10">10 por dia</option>
                                                                    <option value="25">30 por dia</option>
                                                                    <option value="50">50 por dia</option>
                                                                    <option value="100">100 por dia</option>
                                                                    <option value="250">250 por dia</option>
                                                                    <option value="500">500 por dia</option>
                                                                    <option value="1000">1000 por dia</option>
                                                                </Input>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectPL && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="success">
                                                                <CardTitle className="text-white text-center">Patrimônio Líquido</CardTitle>
                                                                <Input type="select" value={plChange} onChange={(ev) => setPlChange(ev.target.value)}>
                                                                    <option value=">=">Maior que</option>
                                                                    <option value="<=">Menor que</option>
                                                                </Input>
                                                                <Input type="select" className="mt-2" value={pl} onChange={(ev) => setPl(ev.target.value)}>
                                                                    <option value="0">R$ 0</option>
                                                                    <option value="10000000">R$10 Milhões</option>
                                                                    <option value="50000000">R$50 Milhões</option>
                                                                    <option value="100000000">R$100 Milhões</option>
                                                                    <option value="200000000">R$200 Milhões</option>
                                                                    <option value="300000000">R$300 Milhões</option>
                                                                    <option value="500000000">R$500 Milhões</option>
                                                                    <option value="750000000">R$750 Milhões</option>
                                                                    <option value="1000000000">R$1 Bilhão</option>
                                                                    <option value="2000000000">R$2 Bilhões</option>
                                                                    <option value="3000000000">R$3 Bilhões</option>
                                                                    <option value="4000000000">R$4 Bilhões</option>
                                                                    <option value="5000000000">R$5 Bilhões</option>
                                                                </Input>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectPVP && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="warning">
                                                                <CardTitle className="text-white text-center">Preço / Valor Patrimonial</CardTitle>
                                                                <Input type="select" value={pvpChange} onChange={(ev) => setPvpChange(ev.target.value)}>
                                                                    <option value=">=">Maior que</option>
                                                                    <option value="<=">Menor que</option>
                                                                </Input>
                                                                <Input type="range" min="0.1" max="3" step="0.1" value={pvp} onChange={(ev) => setPvp(ev.target.value)}/>
                                                                <h4 className="text-center enfase">{pvp}</h4>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectVPC && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body color="secondary">
                                                                <CardTitle className="text-dark text-center">Cotação</CardTitle>
                                                                <Input type="select" value={vpcChange} onChange={(ev) => setVpcChange(ev.target.value)}>
                                                                    <option value=">=">Maior que</option>
                                                                    <option value="<=">Menor que</option>
                                                                </Input>
                                                                <Input type="range" min="10" max="1000" step="10" value={vpc} onChange={(ev) => setVpc(ev.target.value)}/>
                                                                <h4 className="text-center enfase">{numberBrazilianMoney(vpc)}</h4>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectAtvFis && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="dark">
                                                                <CardTitle className="text-white text-center">Quantidade de ativos físicos</CardTitle>
                                                                <Input type="select" value={atvFisChange} onChange={(ev) => setAtvFisChange(ev.target.value)}>
                                                                    <option value=">=">Mais que</option>
                                                                    <option value="<=">Menos que</option>
                                                                </Input>
                                                                <Input type="range" min="0" max="30" step="1" value={atvFis} onChange={(ev) => setAtvFis(ev.target.value)}/>
                                                                <h4 className="text-center enfase">{atvFis}</h4>
                                                            </Card>
                                                        </div>
                                                    }
                                                    {selectGestao && 
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2">
                                                            <Card body inverse color="info">
                                                                <CardTitle className="text-white text-center">Tipo de Gestão</CardTitle>
                                                                <CheckBoxGestao clicked={(ev) => setGestao(prev => prev == 1 ? 0 : 1)}/>
                                                            </Card>
                                                        </div>
                                                    }
                                                </Fragment>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            {result && result.length>0 && 
                                                <div className="alert alert-success mt-2" role="alert">
                                                    {result.length > 1 ? `Foram achados ${result.length} fundos!` : 'Foi achado um fundo!'}
                                                </div>
                                            }
                                            <button className={`btn btn-primary btn-rounded btn-lg my-4 ${loadingSearch ? 'disabled' : ''}`} onClick={pesquisarHandler}>{textPesquisar}</button>
                                        </div>
                                        {loadingSearch && <LoadingAdvancedSearch/>}
                                    </div>
                                </GeneralCard>
                            </div>
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