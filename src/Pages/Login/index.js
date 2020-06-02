import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import LogUser from "./Login/";
import Reset from "./Reset/";

const Login = ({match}) => (
    <Fragment>
        <div className='loginBack'>
            {/* Login */}
            <Route exact path={`${match.url}`} component={LogUser}/>
            {/* Reset */}
            <Route exact path={`${match.url}/reset/:token`} component={Reset}/>
        </div>
    </Fragment>
);
export default Login;