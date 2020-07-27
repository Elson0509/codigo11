import React, {useState, useEffect, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from '../../../util/axios-base';
import PageTitle from './PageTitle/PageTitle';
import CardCotacao from './Cards/CardCotacao';
import CardCotacaoDetalhes from './Cards/CardCotacaoDetalhes';
import CardVolume from './Cards/CardVolume';
import CardNegocios from './Cards/CardNegocios';
import CardAdm from './Cards/CardAdm';
import CardLiquidez from './Cards/CardLiquidez';
import SingleCard from './Cards/SingleCard';
import CardProventos from './Cards/CardProventos';
import CardListRelatorios from './Cards/CardListRelatorios';
import {valueToRes, numberWithDots, numberWithPercentual, numberWithVirgula, numberToMoney} from '../../../util/Utilities'
import Loading from '../../../components/Loading/Loading'
import jwt_decode from 'jwt-decode'
import {Helmet} from 'react-helmet'

import {
    Row, Col,
} from 'reactstrap';

import {
    toast
} from 'react-toastify';


const PerfilFII = (props) => {
    const [dados, setDados] = useState()
    const [favorito, setFavorito] = useState(false)
    const [notaCommunity, setNotaCommunity] = useState(0)
    const [notaUser, setNotaUser] = useState(0)
    const [segmento, setSegmento] = useState({})
    const [adm, setAdm] = useState({})
    const [proventos, setproventos] = useState()
    const [cotacao, setCotacao] = useState({})
    const [relGers, setRelGers] = useState()
    const [relTris, setRelTris] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const configToast = {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const fii = props.match.params.fii

    const changeRating = (newRating, name) => {
        const token = localStorage.userToken
        if(!!token && !!jwt_decode(token)){
            setNotaUser(newRating)
            if(newRating==5)
                toast.warn(`Nota ${newRating} registrada. Você gosta mesmo desse fundo!`, configToast);
            else
                toast.warn(`Nota ${newRating} registrada. Obrigado!`, configToast);
            const decode = jwt_decode(token)
            axios.post(`/notas/update`, {
                id: decode.uid,
                fii,
                nota: newRating,
                token
            })
        }
        else{
            toast.error(`Essa nota só tem efeito se você estiver logado :(`, configToast);
        }
    }

    const favoritoHandler = () => {
        const token = localStorage.userToken
        if(!!token && !!jwt_decode(token)){
            let newFav = !favorito
            setFavorito(newFav)
            if(newFav)
                toast.info(`Você agora está seguindo ${cotacao.cod_neg} e passará a receber e-mails sempre que houver alguma novidade!`, configToast);
            else
                toast.error(`Você não está mais seguindo ${cotacao.cod_neg} :(`, configToast);
            const decode = jwt_decode(token)
            axios.post(`/favoritos/update`, {
                id: decode.uid,
                fii,
                favorito: newFav,
                token
            })
        }
        else{
            toast.error('Você precisa estar logado para seguir esse FII.');
        }
    }
    

    useEffect(() => {
        const filename = `/profile/${fii}`
        axios.get(filename)
            .then(res => {
                setDados(res.data)  
                setSegmento(res.data.segmento)  
                setAdm(res.data.administrador_fii)  
                setproventos(res.data.proventos)   
                setCotacao(res.data.cotacao)
                setRelGers(res.data.relatorios_gerenciais)
                setRelTris(res.data.relatorios_trimestrais)
                setLoading(false)
            })
            .catch(err => {
                setErrorMessage('Ops, algo deu errado. Favor, reinicie a página.')
                //setErrorMessage(err.response.data.message)
                setLoading(false)
            })
    },[])

    useEffect(() => {
        const token = localStorage.userToken
        if(!!token){
            const decoded = jwt_decode(token)
            if(!!decoded){
                axios.get(`favoritos/${decoded.uid}/${fii}`)
                    .then(res => {
                        setFavorito(res.data.favorito)
                    })
                    .catch(err => {
                        setFavorito(false)
                    })
            }
        }
    }, [])

    useEffect(() => {
        axios.get(`notas/media/${fii}`)
            .then(res => {
                setNotaCommunity(res.data.nota)
            })
            .catch(err => {
                setNotaCommunity(0)
            })
    }, [])

    useEffect(() => {
        const token = localStorage.userToken
        if(!!token && !!jwt_decode(token)){
            const decode = jwt_decode(token)
            axios.get(`/notas/${fii}/${decode.uid}`, {
                params: {
                    token
                }
            })
            .then(res => {
                setNotaUser(res.data.nota)
            })
            .catch(err => {
                setNotaUser(0)
            })
        }
    }, [])

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - ${fii}11 - Perfil e informações gerais relevantes do Fundo imobiliário`} />
                <title>{`Codigo11: ${fii}11 - Perfil de FII`}</title>
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
                {loading && <Loading/>}
                {!errorMessage && dados &&
                    <div key="div">
                            <PageTitle
                                heading={dados.razao_social}
                                segmento={segmento}
                                codigo={cotacao && cotacao.cod_neg ? cotacao.cod_neg : ''}
                                cnpj={dados.cnpj}
                                site={dados.site}
                                data_func = {dados.data_func}
                                idade = {dados.idade}
                                tipoGestao = {dados.tipo_gestao}
                                notaComunidade = {notaCommunity}
                                notaUsuario = {notaUser}
                                changeRating = {changeRating}
                                seguindo={favorito}
                                favoritoClick = {favoritoHandler}
                            />

                            <Row>
                                {cotacao && <Col lg="3" md="6" sm="12">
                                    <CardCotacao cotacao={cotacao}/>
                                </Col>}
                                {cotacao && 
                                <Col lg="3" md="6" sm="12">
                                    <CardCotacaoDetalhes cotacao={cotacao}/>
                                </Col>}
                                {cotacao && 
                                <Col lg="3" md="6" sm="12">
                                    <CardVolume cotacao={cotacao}/>
                                </Col>}
                                {cotacao && 
                                <Col lg="3" md="6" sm="12">
                                    <CardNegocios cotacao={cotacao}/>
                                </Col>}
                            </Row>
                            <Row>
                                {adm &&
                                <Col lg="6" md="6" sm="12">
                                    <CardAdm adm={adm}/>
                                </Col>}
                                {dados &&
                                <Col lg="6" md="6" sm="12">
                                    <CardLiquidez dados={dados}/>
                                </Col>}
                            </Row>
                            <Row>
                                {proventos && proventos.length > 0 && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="piggy-bank"
                                        bgIcon="happy-itmeo" 
                                        title={`Último Rendimento (${proventos[0].data_pagamento})`}
                                        text1={"Rendimento: R$ " + numberWithVirgula(proventos[0].valor_rendimento)}
                                        colorText1="dark"
                                        text2={"Amortização: R$ " + numberWithVirgula(proventos[0].valor_amortizacao)}
                                        colorText2="dark"
                                    />
                                </div>}
                                {dados && !isNaN(dados.dy_medio) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="chart-line"
                                        bgIcon="night-sky" 
                                        title="Yield médio"   
                                        text1={numberWithPercentual(dados.dy_medio)}
                                        colorText1="success"
                                        text2="12 meses"
                                        colorText2="secondary"
                                    />
                                </div>}
                                {dados && !isNaN(dados.cotistas_qtt) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="users"
                                        bgIcon="love-kiss" 
                                        title="Quantidade de Cotistas"   
                                        text1={numberWithDots(dados.cotistas_qtt)}
                                        colorText1="primary"
                                    />
                                </div>}
                                {dados && !isNaN(dados.cotas_emitidas) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="th"
                                        bgIcon="mean-fruit" 
                                        title="Cotas emitidas"   
                                        text1={numberWithDots(dados.cotas_emitidas)}
                                        colorText1="warning"
                                    />
                                </div>}
                                {dados && !isNaN(dados.valor_mercado) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="coins"
                                        bgIcon="plum-plate" 
                                        title="Valor de Mercado"   
                                        text1={"R$" + valueToRes(dados.valor_mercado)}
                                        colorText1="dark"
                                    />
                                </div>}
                                {dados && !isNaN(dados.pat_liq) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="lnr-apartment"
                                        bgIcon="asteroid" 
                                        title="Patrimônio Líquido"   
                                        text1={"R$ " + valueToRes(dados.pat_liq)}
                                        colorText1="primary"
                                        text2={"R$" + numberWithDots(dados.pat_liq)}
                                        colorText2="secondary"
                                    />
                                </div>}
                                {dados && !isNaN(dados.pvp) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="lnr-apartment"
                                        bgIcon="happy-green" 
                                        title="P/VP"   
                                        text1={dados.pat_liq_res}
                                        colorText1="primary"
                                        text2={numberWithVirgula(dados.pvp)}
                                        colorText2="dark"
                                    />
                                </div>}
                                {dados && !isNaN(dados.valor_tx_adm) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="percentage"
                                        bgIcon="malibu-beach" 
                                        title="Taxa Adm/Patrimônio Líquido"   
                                        text1={numberWithPercentual(dados.tx_adm_pl)}
                                        colorText1="danger"
                                        text2={"Último mês: R$" + valueToRes(dados.valor_tx_adm)}
                                        colorText2="secondary"
                                    />
                                </div>}
                                {dados && !isNaN(dados.custo_tx_por_cota_anual) && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="wallet"
                                        bgIcon="warning" 
                                        title="Custo anual da taxa adm / cota"   
                                        text1={numberToMoney(dados.custo_tx_por_cota_anual)}
                                        colorText1="danger"
                                    />
                                </div>}
                                {dados && dados.pat_cota && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="chart-pie"
                                        bgIcon="success" 
                                        title="Valor Patrimonial por Cota"   
                                        text1={"R$ " + numberWithVirgula(dados.pat_cota)}
                                        colorText1="primary"
                                    />
                                </div>}
                            
                                {dados && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="city"
                                        bgIcon="sunny-morning" 
                                        title="Quantidade de Bens Imóveis"   
                                        text1={dados.bens_imoveis_qtt}
                                        colorText1="warning"
                                    />
                                </div>}
                                {dados && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="file-invoice-dollar"
                                        bgIcon="premium-dark" 
                                        title="Quantidade de ativos financeiros"
                                        text1={dados.ativos_fin}
                                        colorText1="danger"
                                    />
                                </div>}
                                {dados && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="cart-plus"
                                        bgIcon="royal" 
                                        title="Aquisições do trimestre"   
                                        text1={dados.aquisicoes_trimestre}
                                        colorText1="dark"
                                    />
                                </div>}
                                {dados && <div className="col-md-6 col-xl-4">
                                    <SingleCard 
                                        icon="cart-arrow-down"
                                        bgIcon="danger" 
                                        title="Alienações do trimestre"   
                                        text1={dados.alienacoes_trimestre}
                                        colorText1="info"
                                    />
                                </div>}
                            </Row>
                            {proventos && <Row>
                                <div className="col-12">
                                    <CardProventos proventos={proventos}/>
                                </div>
                            </Row>}
                            <Row>
                                {relGers && relGers.length > 0 && <div className="col-md-12 col-xl-6 mb-3">
                                    <CardListRelatorios title="Últimos Relatórios Gerenciais" lista={relGers} bgTitleColor="bg-plum-plate"/>
                                </div>}
                                {relTris && relTris.length > 0 && <div className="col-md-12 col-xl-6 mb-3">
                                    <CardListRelatorios title="Últimos Relatórios Trimestrais" lista={relTris} bgTitleColor="bg-midnight-bloom"/>
                                </div>}
                            </Row>
                            
                    </div>
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

export default PerfilFII;