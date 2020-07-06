import React, {useEffect, useState, Fragment} from 'react';
import LoginForm from './LoginForm/LoginForm'
import SignupForm from './SignupForm/SignupForm'
import Tabs from 'react-responsive-tabs';
import { withRouter, Link } from 'react-router-dom';
import ModalForgetPassword from '../../../components/Modals/ModalForgetPassword'

const Index = (props) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const token = localStorage.userToken
        if(!!token){
            props.history.push('/dashboard')
        }
    })

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
            <ModalForgetPassword modal={modal} toggle={setModalHandler}/>
        
            <div className='loginPanel'>
                <Link to='/'>
                    <div className="logo-login margin-auto"/>
                </Link>
                <Tabs 
                    tabsWrapperClass="body-tabs body-tabs-layout" 
                    transform={false} 
                    showInkBar={true} 
                    items={getTabs()}/>
            </div>
        </Fragment>
    );
};

export default withRouter(Index);