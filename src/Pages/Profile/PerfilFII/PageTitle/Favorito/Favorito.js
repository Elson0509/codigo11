import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faQuestionCircle,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(
    faQuestionCircle,
    faCheckCircle
);

const Favorito = (props) => {
    const favStyle = ["favorito", props.seguindo ? "favorito-active" : ""].join(' ');

    return (
        <div className={favStyle} onClick={props.onClick}>
            {props.seguindo ? <FontAwesomeIcon icon={faCheckCircle}/> : <FontAwesomeIcon icon={faQuestionCircle}/>}
            <h4>{props.seguindo ? "Seguindo" : "Seguir?"}</h4>
        </div>
    );
};

export default Favorito;