import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import Icon from '../../../components/Icon/Icon'
import CardQuotation from '../../../components/Cards/CardQuotation'
import CardFavorito from '../../../components/Cards/CardFavorito'
import {userId} from '../../../util/UserFunctions'
import {saudacaoHorario} from '../../../util/Utilities'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import {Link} from 'react-router-dom';

const Index = (props) => {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [infoMessage, setinfoMessage] = useState("")

    useEffect(() => {
        if(userId()){
            const token = localStorage.userToken
            setLoading(true)
            const path = `/user/dashboard/${userId()}`
            axios.get(path, {
                params: {
                    token
                }
            })
                .then(res => {
                    setLoading(false)
                    setDados(res.data)
                })
                .catch(err => {
                    setLoading(false)
                    setErrorMessage(err.response.data.message || 'Ops, um erro ocorreu!')
                })
            }
        else{
            setLoading(false)
            setinfoMessage('Você precisa logar para ter seu próprio dashboard.')
        }
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
                        {dados && console.log(dados)}
                        {dados && 
                            <Fragment>
                                <PageTitle
                                    heading={`Dashboard`}
                                    subheading={`${saudacaoHorario()}, ${dados.user.username}!`}
                                    icon="pe-7s-graph2"
                                    bgcolor={'bg-royal'}
                                    color={'dark'}
                                />
                                <CardQuotation frase={dados.frase}/>
                                {dados.favoritos.length > 0 ?
                                    <div className="row">
                                        {dados.favoritos.map((el, ind) => {
                                            return <div className="col-lg-6 col-sm-12" key={`fav${ind}`}>
                                                        <CardFavorito favorito={el}/>
                                                    </div>
                                        })}
                                    </div>
                                :
                                <div className="text-center no-favs mt-4 mb-4 slow-shadow">
                                    <Icon icon="meh"/>
                                    <p>Você ainda não está seguindo nenhum fundo.</p>
                                </div>
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
            {infoMessage && 
                <Link to="/login" className="link">
                    <div className="alert alert-info">
                        <p>{infoMessage}</p>
                    </div>
                </Link>
            }
        </Fragment>
    );
};

export default Index;