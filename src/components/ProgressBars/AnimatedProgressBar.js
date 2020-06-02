import React from 'react';
import {
    Progress
} from 'reactstrap';

const AnimatedProgressBar = (props) => {
    return (
            <Progress
                className="progress-bar-sm progress-bar-animated-alt"
                color={props.color}
                value={props.value}
            />
    );
};

export default AnimatedProgressBar;