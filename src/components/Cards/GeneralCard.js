import React from 'react';

const GeneralCard = (props) => {
    return (
        <div className={`mb-3 card card-body ${props.bgColor}`}>
            <h4 className={`cart-title ${props.titleStyle}`}>
                {props.title}
            </h4>
            <p>
                {props.comentary}
            </p>
                {props.children}
        </div>
    );
};

export default GeneralCard;