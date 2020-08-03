import React, {useState, useEffect, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitleBase';
import axios from '../../../util/axios-base';
import GeneralCard from '../../../components/Cards/GeneralCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingAdvancedSearch from '../../../components/Loading/LoadingAdvancedSearch'
import AmazonBook from '../../../components/Ads/AmazonBook'
import {Helmet} from 'react-helmet'

const Index = () => {
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('/book/all')
            .then(res => {
                setBooks(res.data.books)
                console.log(res.data)
            })
            .catch(err => {
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
                            <PageTitle
                                heading={`Lista de livros recomendados`}
                                subheading={''}
                                icon="lnr-book"
                                bgcolor={'bg-royal'}
                                color={'dark'}
                            />
                            {
                                books.length > 0 &&  books.map((el, ind)=> {
                                    return <AmazonBook book={el} key={ind}/>
                                })
                            }
                            {loadingSearch && <LoadingAdvancedSearch/>}

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