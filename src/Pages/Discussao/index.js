import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Dashboard Widgets
import Discussao from "./Discussao";
// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Profile = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Discussao */}
                    <Route path={`${match.path}`} component={Discussao}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);
export default Profile;