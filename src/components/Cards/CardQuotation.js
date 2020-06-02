import React, {memo} from 'react';

const CardQuotation = (props) => {
    const randomColor = () => {
        const colors = ['blue', 'green', 'red', 'yellow', '']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        props.frase ?
        <blockquote className={`quote-card ${randomColor()}-card`}>
            <p>
                {props.frase.frase}
            </p>
            <cite>
                {props.frase.name}
            </cite>
        </blockquote>
        :
        null
    );
};

export default memo(CardQuotation);