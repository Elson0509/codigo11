import React from 'react';
import {
    ListGroupItem,
} from 'reactstrap';
import StartRatings from 'react-star-ratings';

const ListGroupItemProfileStar = (props) => {
    return (
        <ListGroupItem>
            <div className={`mb-2 mr-2 badge badge-dot badge-dot-lg badge-${props.color || "primary"}`}>
                ${props.color || "primary"}
            </div>
            <div className="list-group-item-profile">
                <span>
                    {props.label}
                </span>
                <StartRatings
                    rating={props.rating}
                    starRatedColor={props.colorstar || "gold"}
                    changeRating={props.changeRating}
                    starDimension="25px"
                />
            </div>
        </ListGroupItem>
    );
};

export default ListGroupItemProfileStar;