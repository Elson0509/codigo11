import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import {revertData} from '../../../util/Utilities'

import CardListRelatorios from '../../Profile/PerfilFII/Cards/CardListRelatorios'

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const fii = props.match.params.fii

    const listaDataFormatada = () => {
        const newList = []
        if (dados.relgers){
            dados.relgers.forEach(el => {
                    let it = {}
                    it.data_ref= revertData(el.data_ref)
                    it.documento_nr= el.documento_nr
                    newList.push(it)
            })
        }
        return newList
    }

    useEffect(() => {
        const path = `/relatorios/gerenciais/${fii}`
        axios.get(path)
            .then(res => {
                setLoading(false)
                setDados(res.data)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(err.response.data.message || 'Ops, um erro ocorreu!')
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
                                    heading={`Relatórios Gerenciais de ${dados.razao_social} (${dados.codigo})`}
                                    subheading={''}
                                    icon="pe-7s-news-paper"
                                    bgcolor={dados.segmento.bgcolor}
                                    color={dados.segmento.color}
                                />
                                <CardListRelatorios lista={listaDataFormatada()} title='Lista de relatórios gerenciais' bgTitleColor={dados.segmento.bgcolor}/>
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