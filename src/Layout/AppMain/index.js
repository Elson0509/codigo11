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
const Login = lazy(() => import('../../Pages/Login'));

const AppMain = () => {
    return (
        <Fragment>
            {/* Login */}
        
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <Loading/> 
                    </div>
                </div>
            }>
                <Route path="/login" component={Login}/>
            </Suspense>

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

            {/* <Route exact path="/" render={() => (
                <Redirect to="/pesquisar"/>
            )}/> */}
            <ToastContainer/>

        </Fragment>
    )
};

export default withRouter(AppMain);