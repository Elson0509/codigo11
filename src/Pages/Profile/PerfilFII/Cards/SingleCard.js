import React from 'react';
import Icon from '../../../../components/Icon/Icon'

const SingleCard = (props) => {

    const styleIcon = ["text-center rounded-circle font-icon text-white", "bg-"+props.bgIcon].join(' ');
    const styletext1 = ["font-size-xxl mt-1 d-block", "text-"+props.colorText1].join(' ');
    const styletext2 = ["font-size-xxl mt-1 d-block", "text-"+props.colorText2].join(' ');

    const getVariacao = () =>{
        if(props.valor){
            console.log("entrou1")
            if(props.tipo_variacao){
                return (
                    <div className="mt-2 text-success">
                        <Icon icon="angle-up"/>
                        <span className="pl-2 text-success">{props.valor}</span>
                    </div>
                )
            }
            else{
                return (
                    <div className="mt-2 text-danger">
                        <Icon icon="angle-down"/>
                        <span className="pl-2 text-danger">{props.valor}</span>
                    </div>
                )
            }
        }
        else{
            return null;
        }
    }

    return (
        <div className="card card-box mb-3 card-box-border-bottom">
            <div className="card-body">
                <div className="d-flex align-items-start">
                    <div className="mr-3">
                        <div className={styleIcon}>
                            <Icon icon={props.icon}/>
                        </div>
                    </div>
                    <div>
                        <div className="font-weight-bold">
                            <small className="text-black-50 d-block mb-1 text-uppercase enfase-title">{props.title}</small>
                            <span className={styletext1}>{props.text1}</span>
                            <span className={styletext2}>{props.text2}</span>
                        </div>
                        {getVariacao()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;