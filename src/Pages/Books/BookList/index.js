import React, {useState, useEffect, Fragment} from 'react';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loading from '../../../components/Loading/Loading'
import AmazonBook from '../../../components/Ads/AmazonBook'
import Icon from '../../../components/Icon/Icon'
import {Helmet} from 'react-helmet'

const Index = () => {
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        setLoadingSearch(true)
        axios.get('/book/all')
            .then(res => {
                setBooks(res.data.books)
                setLoadingSearch(false)
            })
            .catch(err => {
                setLoadingSearch(false)
                setErrorMessage(err.response?.data?.message || 'Ops, um erro ocorreu!')
            })
    }, [])

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - Lista de livros recomendados para estudo.`} />
                <title>Codigo11: Lista de livros recomendados</title>
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
                            <div className="row">
                                <div className="col-12">
                                    <GeneralCard bgColor="bg-focus text-white">
                                        <h4 className="book-h4">
                                            <span className="mr-4 font-icon">
                                                <Icon icon="book"/>
                                            </span>
                                            Lista especial de livros recomendados
                                        </h4>
                                        <p className="book-p">A Codigo11 acredita que os investidores não deveriam terceirizar suas decisões de investimentos. Os relatórios sobre FII vendidos por alguns sites de internet devem ser encarados como informação complementar e opcional, mas não principal.</p>
                                        <p className="book-p">O investidor é plenamente capaz de tomar suas decisões sem precisar pagar pela opinião de terceiros, que acabam sugerindo apenas fundos que estão na moda. Além disso, como cada investidor possui um perfil diferente, um relatório generalista nunca suprirá sua necessidade.</p>
                                        <p className="book-p">Investir na mesma coisa que todo mundo está investindo apenas porque outros recomendaram, além de perigoso, não trará resultados acima da média. Trate seu esforçado dinheiro com respeito. Não existe apenas uma forma de investir. Para que você tenha base na escolha de seus próprios ativos com segurança, indicamos livros.</p>
                                        <p className="book-p">Os livros são, sem dúvida, a fonte mais confiável de informação. Por meio da leitura de alguns, você terá base para formar um portfolio de primeira linha.</p>
                                        <p className="book-p">Abaixo está a lista de livros recomendados pela Codigo11. Além de evoluir seu conhecimento, seu investimento neles ajudará a manter a plataforma viva e gratuita.</p>
                                    </GeneralCard>
                                </div>
                            </div>
                            <div className="card-deck">
                                {
                                    books.length > 0 &&  books.map((el, ind)=> {
                                        return <AmazonBook book={el} key={ind}/>
                                    })
                                }
                            </div>
                            {loadingSearch && <Loading/>}

                        </Fragment>
                </ReactCSSTransitionGroup>
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