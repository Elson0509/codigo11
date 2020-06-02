import React, {memo} from 'react';

const LoadingAdvancedSearch = (props) => {
    return (
        <div className="loading-adv-search">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
            <p className="text-center enfase">
                Isso pode demorar um pouco...
            </p>
            <p className="text-center">
                (mas vai valer a pena!)
            </p>
        </div>
    );
};

export default memo(LoadingAdvancedSearch);