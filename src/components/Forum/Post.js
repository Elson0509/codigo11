import React, {useState} from 'react';
import {imgUrl} from '../../util/UserFunctions'
import {revertData, revertCompleteData} from '../../util/Utilities'

const Post = (props) => {
    const [errorImage, setErrorImage] = useState(false)

    const errorImageHandle = (event) => {
        setErrorImage(prev => !prev)
    }

    return (
        <div className={`panel post-body ${props.typePanel || 'panel-default'}`}>
            <div className="profile-post">
                <p className="profile-username">{props.user.username}</p>
                {!errorImage ? 
                    <div >
                        <img onError={errorImageHandle} className="img-post" src={imgUrl(props.user.id)} alt="img-user-post"/>
                    </div>
                    :
                    <div className="letter-user-post text-center text-dark bg-light">
                        {props.user.username.trim().toUpperCase().charAt(0)}
                    </div>
                }
                <p className="profile-member">Membro desde</p>
                <p className="profile-member">{revertData(props.user.created_at)}</p>
            </div>
            <div className="panel-body">
                <h6>Postado em {revertCompleteData(props.post.created_at)}</h6>
                <p>{props.post.comment}</p>
            </div>
        </div>
    );
};

export default Post;