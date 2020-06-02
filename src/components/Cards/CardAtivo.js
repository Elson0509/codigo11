import React from 'react';

const CardAtivo = (props) => {

    const styleNumber = ["text-center rounded-circle font-number text-white", "bg-"+props.bgNumber].join(' ');

    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="card card-box mb-5 card-box-border-bottom">
                <div className="card-body">
                    <div className="d-flex">
                        <div className="mr-1">
                            <div className={styleNumber}>
                                {props.order}
                            </div>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardAtivo;