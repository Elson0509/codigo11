import React, {Fragment, useState, useEffect, useRef} from 'react';
import  '../../assets/landing-page.min.css'
import axios from '../../util/axios-base'
import Navbar from './components/Navbar'
import {removerAcentos} from '../../util/Utilities'
import ListSearch from '../../components/Lists/ListSearch'
import SpinnerSearch from '../../components/Loading/SpinnerSearch'
import IconsGrid from './components/IconsGrid'
import {withRouter} from 'react-router-dom';
import ImageShowcases from './components/ImageShowcases'
import Signup from './components/Signup'
import Footer from './components/Footer'
import {Helmet} from 'react-helmet'
import bgmasthead from '../../../src/assets/img/bg-masthead.jpg'


const Landing = (props) => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(false)
    const [result, setResult] = useState()
    const wrapperRef = useRef(null)

    useEffect(() => {
        if(!search || search.length < 2)  
            setResult()  

        const timer = setTimeout(() => {
            if(search && search.length >= 2){
                setLoading(true)
                setDisplay(false)
                axios.get(`/fii/${removerAcentos(search).replace(' ','_').replace('11B', '').replace('11', '')}`)
                    .then( res => {
                        setLoading(false)
                        setDisplay(true)
                        setResult(res.data.fiis)
                    })
                    .catch( err =>{
                        setResult([])
                        setLoading(false)
                    })
            }
            else{
                setResult([])
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        document.addEventListener('mousedown', handClickOutside)

        return () => {
            document.removeEventListener('mousedown', handClickOutside)
        }
    }, [])

    const handClickOutside = (event) => {
        const {current: wrap} = wrapperRef
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false)
        }
    }

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content="Codigo11 - Análise e informações grátis sobre investimento em Fundos Imobiliários - FII" />
                <title>Codigo11 - Análise e informações sobre investimento em FIIs</title>
            </Helmet>
            <Navbar/>
            <header className="masthead text-white text-center" style={{backgroundImage: "url(" + bgmasthead + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">Bem vindo a Codigo11</h1>
                            <h2 className="mb-5">A plataforma gratuita mais completa sobre fundos imobiliários.</h2>
                            <h3 className="mb-5">Comece pesquisando abaixo:</h3>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <form>
                                <div ref={wrapperRef} className="col-12 col-md-9 margin-auto">
                                    <input type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Digite nome, código ou segmento (Ex: Shopping)"
                                        onChange={(ev)=> setSearch(ev.target.value)}
                                    />
                                    {loading && <div className="loading-search-landing"><SpinnerSearch/></div>}
                                    {display && result && result.length > 0 && <ListSearch result={result} isLanding/>}
                                    {display && result && result.length === 0 && <div className="loading-search text-white">Sem resultado...</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <IconsGrid/>

            <ImageShowcases/>

            {/* <Testemonials/> */}

            <Signup/>

            <Footer/>
            
        </Fragment>
    );
};

export default withRouter(Landing);