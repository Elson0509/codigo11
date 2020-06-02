import React from 'react';
import ResetForm from './ResetForm/ResetForm'
import { withRouter } from 'react-router-dom';

const index = (props) => {
    return (
            <div className='loginPanel'>
                <div className="logo-login margin-auto"/>
                <ResetForm/>
            </div>
    );
};

export default withRouter(index);