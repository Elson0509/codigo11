import React, {useState, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from '../../util/axios-base'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Spinner from '../../components/Loading/Spinner'

const ModalForgetPassword = (props) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [buttonSuccessText, setButtonSuccessText] = useState('Confirmar')
    const [spinner, setSpinner] = useState(false)

    const validationSchema = Yup.object({
        email: Yup.string().email('Por favor, digite um formato de email válido.').required('Por favor, digite um email.'),
    })

    const formik = useFormik({ 
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            if(buttonSuccessText=='OK'){
                props.toggle()
            }
            else{
                setSpinner(true)
                setErrorMessage('')
                axios.post('/password/reset', values)
                    .then(res => {
                        setSpinner(false)
                        setButtonSuccessText('OK')
                        setSuccessMessage(res.data.message)
                    })
                    .catch(err => {
                        setSpinner(false)
                        console.log(err.response.data.message)
                        setErrorMessage(err.response.data.message || 'Email inválido.')
                    })
            }
        },
        validationSchema
    })


    return (
        <span className="d-inline-block mb-2 mr-2">
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Esqueci minha senha</ModalHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <ModalBody>
                            {!successMessage && 
                            <div className="form-group">
                                <label>Digite seu email para resetar a senha:</label>
                                <input type="email" 
                                    name="email" 
                                    className="form-control" 
                                    aria-describedby="emailHelp" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}/>
                                {formik.touched.email && formik.errors.email && <div className="alert alert-warning" role="alert">
                                    {formik.errors.email}
                                </div>}
                            </div>}
                            {successMessage && 
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>}
                        </ModalBody>
                        <ModalFooter>
                        {!spinner && 
                            <Fragment>
                                <button 
                                    type="submit" 
                                    className="btn btn-success" 
                                    >{buttonSuccessText}
                                </button>
                                {!successMessage &&
                                <button 
                                    type="button" 
                                    className="btn btn-danger" 
                                    onClick={props.toggle}
                                    >Cancelar
                                </button>}
                            </Fragment>
                        }
                        {spinner && <Spinner/>}
                        </ModalFooter>
                    </form>
                    {errorMessage && 
                    <div className="alert alert-warning" role="alert">
                        {errorMessage}
                    </div>}
            </Modal>
        </span>
    );
};

export default ModalForgetPassword;