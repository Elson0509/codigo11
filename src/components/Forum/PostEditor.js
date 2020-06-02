import React from 'react';

const PostEditor = (props) => {
    return (
        <div className={`panel post-editor ${props.typePanel || 'panel-default'}`}>
            <div className="panel-body">
                <textarea 
                    className="form-control post-editor-input" 
                    rows="8" 
                    value={props.comment} 
                    placeholder="Comente aqui :)"
                    onChange={props.changed}
                />
                <div className="div-editor">
                    <span>{1000 - props.comment.length} / 1000</span>
                    <button className="btn btn-success post-editor-button" onClick={props.postar}>Postar</button>
                </div>
            </div>
        </div>
    );
};

export default PostEditor;