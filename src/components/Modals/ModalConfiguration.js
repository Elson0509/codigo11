import React, {useRef, useState, useEffect} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from '../../util/axios-base'
import jwt_decode from 'jwt-decode'
import {
    toast
} from 'react-toastify';

const ModalConfiguration = (props) => {
    const [file, setFile] = useState()
    const [previewUrl, setPreviewUrl] = useState()
    const [isValid, setIsvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const filePickerRef = useRef()

    useEffect(()=> {
        if(!file){
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }, [file])

    const pickedHandler = event => {
        let pickedFile
        let fileIsValid = isValid
        if(event.target.files && event.target.files.length === 1){
            pickedFile = event.target.files[0]
            setFile(pickedFile)
            setIsvalid(true)
            fileIsValid = true
        }else{
            setIsvalid(false)
            fileIsValid = false
        }
    }

    const submit = (ev) => {
        ev.preventDefault();
        const token = localStorage.userToken
        if(previewUrl && token){
            const decoded = jwt_decode(token)
            const formData = new FormData()
            formData.append('token', token);
            formData.append('profile_pic', file, file.name);
            axios.post(`/uploadPic/${decoded.uid}`,formData)
                .then(res => {
                    if(res.data=='File saved')
                        toast.info(`Imagem enviada com sucesso! Espere alguns minutos enquanto atualizo. :)`);
                    if(res.data.type && res.data.type=='size')
                        toast.error(`O tamanho da imagem está incompatível. Mande algo menor.`);
                    if(res.data.type && res.data.type=='type')
                        toast.error(`O tipo do arquivo está incompatível. Envie do tipo .jpg ou .png`);
                })
                .catch(err => {
                    setIsvalid(false)
                    console.log(err)
                    setErrorMessage('Ops. Algo deu errado.')
                })
        }
        props.toggle()
    }

    const pickImageHandler = () => {
        filePickerRef.current.click()
    }

    return (
        <span className="d-inline-block mb-2 mr-2">
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>Configurações</ModalHeader>
                    <form>
                        <ModalBody>
                        <div className="form-group">
                            <input 
                                id={props.id} 
                                ref={filePickerRef}
                                style={{display: 'none'}} 
                                type="file" 
                                accept=".jpg,.png,.jpeg"
                                onChange={pickedHandler}
                                name="profile_pic"
                            />
                            <div className={`image-upload ${props.center && 'center'}`}>
                                <div className='image-upload_preview'>
                                    {previewUrl && <img src={previewUrl} alt="Preview"/>}
                                    {!previewUrl && <p>Por favor selecione uma imagem (1 Mb máx.).</p>}
                                </div>
                                <button 
                                    type="button" 
                                    className="btn btn-info" 
                                    onClick={pickImageHandler}>Escolha imagem</button>
                            </div>
                        </div>
                        {
                            !isValid && errorMessage &&
                            <div className="alert alert-warning" role="alert">
                                {errorMessage}
                            </div>
                        }
                        </ModalBody>
                        <ModalFooter>
                            <button 
                                type="submit" 
                                className="btn btn-success" 
                                onClick={submit}
                                >Salvar
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={props.toggle}
                                >Cancelar
                            </button>
                        </ModalFooter>
                    </form>
            </Modal>
        </span>
    );
};

export default ModalConfiguration;