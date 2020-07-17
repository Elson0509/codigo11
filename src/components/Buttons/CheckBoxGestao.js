import React from 'react';

const CheckBoxGestao = (props) => {
//checked={props.checked}
    return (
        <div className="check-gestao">
            <span className="switcher switcher-1">
                <input type="checkbox" onChange={props.clicked} />
                <label htmlFor="switcher-1"></label>
            </span>
        </div>
    );
};

export default CheckBoxGestao;