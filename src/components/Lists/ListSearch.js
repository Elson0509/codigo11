import React from 'react';
import ListSearchItem from './ListSearchItem'
import { Link, withRouter } from 'react-router-dom';

const ListSearch = (props) => {

    const getLink = (codigo) => {
        let splithPath = props.location.pathname.split('/')
        splithPath.shift()
        splithPath.shift()
        return props.match.params.fii ? `/${codigo}/${splithPath.join('/')}` : `/${codigo}/profile`
    }
    
    return (
        <div className={props.isLanding ? "final-result-landing":"final-result"}>
            <ul className="list-group search-list">
                {props.result && props.result.map((el, ind) => {
                    return (
                         <Link to={getLink(el.codigo)} key={`se${ind}`}>
                            <ListSearchItem item={el}/>
                         </Link>
                    )
                })}
            </ul>
        </div>
    );
};

export default withRouter(ListSearch);