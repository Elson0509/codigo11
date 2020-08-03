import React from 'react';

const AmazonBook = (props) => {
    console.log(props.book)
    return (
        <div>
            <p>{props.book.title}</p>
            <p>{props.book.authors}</p>
            <p>{props.book.description}</p>
            <p>{props.book.book_category.description}</p>
            <a href={props.book.link_code} target='_blank' rel="noopener noreferrer">Link</a>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/books/book${props.book.id}.jpg`} alt="imagem livro"/>
            <hr/>
        </div>
    );
};

export default AmazonBook;