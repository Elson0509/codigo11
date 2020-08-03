import {BrowserRouter as Router, withRouter, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loading from '../../components/Loading/Loading'
import {
    ToastContainer,
} from 'react-toastify';

const Ativos = lazy(() => import('../../Pages/Ativos'));
const Dados = lazy(() => import('../../Pages/Dados'));
const Relatorios = lazy(() => import('../../Pages/Relatorios'));
const Discussao = lazy(() => import('../../Pages/Discussao'));
const Dashboard = lazy(() => import('../../Pages/Dashboard'));
const Pesquisar = lazy(() => import('../../Pages/Pesquisar'));
const Profile = lazy(() => import('../../Pages/Profile'));
const ListaFII = lazy(() => import('../../Pages/ListaFII'));
const Eventos = lazy(() => import('../../Pages/Eventos'));
const Books = lazy(() => import('../../Pages/Books'));

const AppMain = () => {
    return (
        <Fragment>
            {/* Profile */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/:fii/profile" 
                    render={props => {
                        const {
                            match: {
                                params: {fii}
                            }
                        } = props;
                        return <Profile key={`profile=${fii}`} {...props}/>
                    }}
                />
            </Suspense>

            {/* Ativos */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route path="/:fii/ativos" 
                    render={props => {
                        const {
                            match: {
                                params: {fii}
                            }
                        } = props;
                        return <Ativos key={`ativos=${fii}`} {...props}/>
                    }}
                />
            </Suspense>

            {/* Dados */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route path="/:fii/dados" 
                    render={props => {
                        const {
                            match: {
                                params: {fii}
                            }
                        } = props;
                        return <Dados key={`dados=${fii}`} {...props}/>
                    }}
                />
            </Suspense>

            {/* Relatórios */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route path="/:fii/relatorios" 
                    render={props => {
                        const {
                            match: {
                                params: {fii}
                            }
                        } = props;
                        return <Relatorios key={`relatorios=${fii}`} {...props}/>
                    }}
                />
            </Suspense>

            {/* Discussão */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/:fii/discussao" 
                    render={props => {
                        const {
                            match: {
                                params: {fii}
                            }
                        } = props;
                        return <Discussao key={`discussao=${fii}`} {...props}/>
                    }}
                />
            </Suspense>

            {/* Dashboard */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Suspense>

            {/* Pesquisar */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/pesquisar" component={Pesquisar}/>
            </Suspense>

            {/* Lista de FIIs */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/lista" component={ListaFII}/>
            </Suspense>

            {/* Eventos */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/eventos" component={Eventos}/>
            </Suspense>

            {/* Books */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route exact path="/livros" component={Books}/>
            </Suspense>

            
            <ToastContainer/>

        </Fragment>
    )
};

export default withRouter(AppMain);