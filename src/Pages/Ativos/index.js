import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import AtvFisicos from './AtvFisicos';
import AtvFinanceiros from './AtvFinanceiros';
import AtvConsolidado from './AtvConsolidado';
import AtvAquisicoes from './AtvAquisicoes';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Ativos = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Físicos */}
                    <Route path={`${match.path}/fisicos`} component={AtvFisicos}/>

                    {/* Financeiros */}
                    <Route path={`${match.path}/financeiros`} component={AtvFinanceiros}/>

                    {/* Consolidado */}
                    <Route path={`${match.path}/consolidado`} component={AtvConsolidado}/>

                    {/* Aquisições */}
                    <Route path={`${match.path}/aquisicoes`} component={AtvAquisicoes}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Ativos;