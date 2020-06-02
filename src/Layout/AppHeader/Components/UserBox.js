import React, {Fragment} from 'react';
import jwt_decode from 'jwt-decode'
import {getUser, imgUrl} from '../../../util/UserFunctions'
import { withRouter, Link } from 'react-router-dom';
import ModalConfiguration from '../../../components/Modals/ModalConfiguration'

import {
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledButtonDropdown
} from 'reactstrap';

import {
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            img: '',
            modal: false,
            errorImage: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('userToken')
        window.location.reload()
    }

    userId = () => {
        const token = localStorage.userToken
        if(!!token){
            const decoded = jwt_decode(token)
            if(!!decoded)
                return decoded.uid
        }
    }

    imageErrorHandle = () => {
        this.setState({
            errorImage: true
        })
    }

    componentDidMount() {
        const token = localStorage.userToken
        if(!!token){
            const decoded = jwt_decode(token)
            getUser(decoded.uid, token).then(res => {
                this.setState({
                    username: res.data.username,
                    email: res.data.email
                })
            })
        }
    }

    render() {
        return (
            <Fragment>
                <ModalConfiguration modal={this.state.modal} center toggle={this.toggle} id='image'/>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                    {this.state.username ? 
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="link" className="p-0">
                                        {!this.state.errorImage ? 
                                            <img width='50' height='50' onError={this.imageErrorHandle} className="rounded-circle" src={imgUrl(this.userId())} alt="img-user"/>
                                            :
                                            <div className="letter-user text-center text-dark bg-light">
                                                {this.state.username.trim().toUpperCase().charAt(0)}
                                            </div>
                                        }
                                        <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown}/>
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Atividade
                                            </NavItem>
                                            <NavItem>
                                                <Link to='/dashboard' className='nolink nav-link'>
                                                    &nbsp; Dashboard
                                                </Link>
                                            </NavItem>
                                            <NavItem className="nav-item-header">
                                                Minha conta
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => this.toggle()}>
                                                &nbsp; Configurações
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={this.logout}>
                                                &nbsp; Logout
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                                
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">
                                    {this.state.username}
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <button type="button" className="btn btn-lg btn-primary" onClick={() =>  this.props.history.push('/login')}>Login</button>
                        </div>
                    }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(UserBox);