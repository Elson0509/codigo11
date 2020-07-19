import React, {useEffect, useState, Fragment} from 'react';
import LoginForm from './LoginForm/LoginForm'
import SignupForm from './SignupForm/SignupForm'
import Tabs from 'react-responsive-tabs';
import { withRouter, Link } from 'react-router-dom';
import ModalForgetPassword from '../../../components/Modals/ModalForgetPassword'
import {Helmet} from 'react-helmet'


const Index = (props) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const token = localStorage.userToken
        if(!!token){
            props.history.push('/dashboard')
        }
    })

    const getTabNumber = () => {
        const queryParams = new URLSearchParams(props.location.search)
        return queryParams.get('aba') && queryParams.get('aba')==1 ? 1 : 0
    }

    const setModalHandler = () => {
        setModal(prev=>!prev)
    }

    const tabsContent = [
        {
            title: 'Login',
            content: <LoginForm toggle={setModalHandler}/>
        },
        {
            title: 'Criar Conta',
            content: <SignupForm/>
        },
    ];
    
    const getTabs = () => {
        return tabsContent.map((tab, index) => ({
            title: tab.title,
            getContent: () => tab.content,
            key: index,
        }));
    }

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content={`Codigo11 - Realização de Login ou crição de conta na plataforma`} />
                <title>{`Codigo11: Login e criação de conta`}</title>
            </Helmet>
            <ModalForgetPassword modal={modal} toggle={setModalHandler}/>
        
            <div className='loginPanel'>
                <Link to='/'>
                    <div className="logo-login margin-auto"/>
                </Link>
                <Tabs 
                    selectedTabKey={getTabNumber()}
                    tabsWrapperClass="body-tabs body-tabs-layout" 
                    transform={false} 
                    showInkBar={true} 
                    items={getTabs()}/>
            </div>
        </Fragment>
    );
};

export default withRouter(Index);