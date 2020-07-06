import React from 'react';
import AnimatedProgressBar from './AnimatedProgressBar'

const ProgressBox = (props) => {
    return (
        <div className="widget-content">
            <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                        <div className="widget-numbers fsize-3 text-muted">
                            {props.textValue}
                        </div>
                    </div>
                    <div className="widget-content-right">
                        <div className="text-muted">
                            {props.comment}
                        </div>
                    </div>
                </div>
                <div className="widget-progress-wrapper mt-1">
                    <AnimatedProgressBar
                        color={props.color}
                        value={props.value}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBox;