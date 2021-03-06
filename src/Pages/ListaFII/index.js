import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Lista from './Lista';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const index = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.path}`} component={Lista}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default index;