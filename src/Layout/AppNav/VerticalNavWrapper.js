import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import MetisMenu from 'react-metismenu';

import {Profile, Info, Discussao, Inicio} from './NavItems';

class Nav extends Component {
    state = {};

    ItemsMenuFii(){
        return this.props.match.params.fii ? (
            <Fragment>
                <h5 className="app-sidebar__heading">Perfil do FII</h5>
                <MetisMenu content={Profile(this.props.match.params.fii)} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Informações</h5>
                <MetisMenu content={Info(this.props.match.params.fii)} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Discussão</h5>
                <MetisMenu content={Discussao(this.props.match.params.fii)} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        )
        :
        null
    }

    render() {
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">Início</h5>
                <MetisMenu content={Inicio} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                {this.ItemsMenuFii()}
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);