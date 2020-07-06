import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import Fundamentos from './Fundamentos';
import Alugueis from './Alugueis';
import Simulacao from './Simulacao';
import Cotacoes from './Cotacoes';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Dados = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Balanços */}
                    <Route exact path={`${match.path}/fundamentos`} component={Fundamentos}/>
                    {/* Aluguéis */}
                    <Route exact path={`${match.path}/alugueis`} component={Alugueis}/>
                    {/* Simulação */}
                    <Route exact path={`${match.path}/simulacao`} component={Simulacao}/>
                    {/* Cotações */}
                    <Route exact path={`${match.path}/cotacoes`} component={Cotacoes}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Dados;