import React, {useState} from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from '../../../../util/axios-base';
import { withRouter } from 'react-router-dom';

const ResetForm = (props) => {

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [buttonText, setButtonText] = useState('RESETAR')

    const validationSchema = Yup.object({
        email: Yup.string().email('Por favor, digite um formato de email válido.').required('Por favor, digite um email.'),
        password: Yup.string().required('Digite a senha.').min(6, 'Pelo menos ${min} caracteres').max(30, 'No máximo ${max} caracteres'),
        password2: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
    })

    const formik = useFormik({ 
        initialValues: {
            email: '',
            password: '',
            password2: '',
            token: props.match.params.token
        },
        onSubmit: values => {
            setButtonText('RESETANDO...')
            Axios.post(`/password/reset/${props.match.params.token}`, values)
                .then(res => {
                    setSuccessMessage(res.data.message)
                    setErrorMessage('')
                    setButtonText('SENHA RESETADA!')
                })
                .catch(err => {
                    setErrorMessage(err.response.data.message || 'Desculpe, mas um erro ocorreu.')
                    setButtonText('RESETAR')
                })
        },
        validationSchema
    })

    return (
        <div>
            {!successMessage &&
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                    <small className="form-text text-muted">Seu email cadastrado.</small>
                    {formik.touched.email && formik.errors.email && <div className="alert alert-warning" role="alert">
                        {formik.errors.email}
                    </div>}
                </div>
                <div className="form-group">
                    <label>Nova senha</label>
                    <input 
                        type="password" 
                        name='password' 
                        className="form-control" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.password}/>
                    {formik.touched.password && formik.errors.password && <div className="alert alert-warning" role="alert">
                        {formik.errors.password}
                    </div>}
                </div>
                <div className="form-group">
                    <label>Repita a Senha</label>
                    <input 
                        type="password" 
                        name='password2' 
                        className="form-control" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.password2}/>
                    {formik.touched.password2 && formik.errors.password2 && <div className="alert alert-warning" role="alert">
                        {formik.errors.password2}
                    </div>}
                </div>
                <button type="submit" 
                    className={`btn btn-lg btn-wide btn-block btn-primary mt-4 ${buttonText!=='RESETAR' ? 'disabled' : ''}`}
                    >
                        {buttonText}
                </button>
            </form>
            }
            {errorMessage && <div className="alert alert-warning" role="alert">
                {errorMessage}
            </div>}
            {successMessage && <div className="alert alert-success" role="alert">
                {successMessage}
            </div>}
            {successMessage && <div className="alert alert-info link" role="alert" onClick={() => props.history.push('/login')}>
                Clique aqui para ir para a tela de login.
            </div>}
        </div>
    );
};

export default withRouter(ResetForm);