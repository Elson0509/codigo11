import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import Mensal from './Mensal';
import Trimestral from './Trimestral';
import Gerencial from './Gerencial';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Relatorios = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Mensal */}

                    <Route path={`${match.path}/mensal`} component={Mensal}/>

                    {/* Trimestral */}

                    <Route path={`${match.path}/trimestral`} component={Trimestral}/>

                    {/* Gerencial */}

                    <Route path={`${match.path}/gerencial`} component={Gerencial}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Relatorios;