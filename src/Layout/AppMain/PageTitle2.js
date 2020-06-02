import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Card, CardBody, CardHeader,
    ListGroup, Tooltip
} from 'reactstrap';

import { Fragment } from 'react';
import ListGroupItemProfile from './ListGroupItemProfile/ListGroupItemProfile';
import ListGroupItemProfileStar from './ListGroupItemProfile/ListGroupItemProfileStar';
import Favorito from './Favorito/Favorito';
import Icon from '../../components/Icon/Icon'


class PageTitle2 extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        let {
            heading,
            segmento,
            codigo,
            cnpj,
            data_func,
            idade,
            tipoGestao,
            notaComunidade,
            notaUsuario,
            changeRating,
            seguindo,
            favoritoClick,
            
        } = this.props;

        return (
            <Card className="mb-3" inverse color={segmento.color || "primary"}>
                {console.log("this.props", this.props)}
                <CardHeader className="card-header">
                    <div className="card-header-profile">
                        <div>
                            <div className="card-header-profile-title">
                                <div className="card-header-profile-icon" id="TooltipIcon">
                                    <Fragment>
                                        <Icon icon={segmento.icon || "building"}/>
                                        <Tooltip className="tooltip-light" placement='auto' isOpen={this.state.tooltipOpen}
                                                target="TooltipIcon" toggle={this.toggle}>
                                            {segmento.descricao}
                                        </Tooltip>
                                    </Fragment>
                                </div>
                                <h1>{heading}</h1>
                            </div>
                        </div>
                        <Favorito seguindo={seguindo} onClick={favoritoClick}/>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="card-profile-body">
                    <ListGroup className={segmento.color ? `text-${segmento.color}` : "text-primary"}>
                        {segmento.descricao && <ListGroupItemProfile color={segmento.color} label="Segmento: " text={segmento.descricao}/>}
                        {codigo && <ListGroupItemProfile color={segmento.color} label="Código: " text={codigo}/>}
                        {cnpj && <ListGroupItemProfile color={segmento.color} label="CNPJ: " text={cnpj}/>}
                        {data_func && <ListGroupItemProfile color={segmento.color} label="Data de funcionamento: " text={data_func}/>}
                        {idade && <ListGroupItemProfile color={segmento.color} label="Idade: " text={idade}/>}
                        {tipoGestao && <ListGroupItemProfile color={segmento.color} label="Tipo de gestão: " text={tipoGestao}/>}
                        {notaUsuario && <ListGroupItemProfileStar color={segmento.color} changeRating={changeRating} label="Sua nota: " rating={notaUsuario}/>}
                        {notaComunidade && <ListGroupItemProfileStar color={segmento.color} label="Nota da comunidade: " rating={notaComunidade}/>}
                    </ListGroup>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle2);