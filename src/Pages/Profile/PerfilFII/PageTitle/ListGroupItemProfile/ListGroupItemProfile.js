import React from 'react';
import {
    ListGroupItem,
} from 'reactstrap';

const ListGroupItemProfile = (props) => {
    return (
        <ListGroupItem>
            <div className={`mb-2 mr-2 badge badge-dot badge-dot-lg badge-${props.color || "primary"}`}>
                ${props.color || "primary"}
            </div>
            <div className="list-group-item-profile">
                <span>
                    {props.label}
                </span>
                {props.text}
            </div>
        </ListGroupItem>
    );
};

export default ListGroupItemProfile;