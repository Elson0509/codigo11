import React from 'react';
import Icon from '../Icon/Icon'

const ListSingle = (props) => {

    return (
        <ul className="list-group">
                <li className={`list-group-item active bg-${props.bgcolor}`}>
                    <span className="enfase">
                        <span className="font-number pr-2">
                            {props.icon && <Icon icon={props.icon}/>}
                        </span>
                        {props.title}
                    </span>
                </li>
                <li className="list-group-item">
                    <p>{props.description}</p>
                </li>
        </ul>
    );
};

export default ListSingle;