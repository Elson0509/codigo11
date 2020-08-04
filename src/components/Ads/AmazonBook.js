import React, {useState, memo} from 'react';
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const AmazonBook = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }

    return (
        <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="card my-2 slow-shadow">
                <a href={props.book.link_code} target='_blank' rel="noopener noreferrer">
                    <img className="card-img-top" src={`${process.env.REACT_APP_BACKEND_URL}/books/book${props.book.id}.jpg`} alt="imagem livro"/>
                </a>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="enfase">Formato: </span>
                            {props.book.is_ebook ? "Livro Digital" : "Livro Físico"}
                        </li>
                        <li className="list-group-item text-center">
                            <button className={`btn btn-focus btn-block`} id={`book${props.book.id}`} onClick={toggle}>Detalhes</button>
                            <Popover className={`popover-bg bg-focus`} placement="left" isOpen={popoverOpen} target={`book${props.book.id}`} toggle={toggle}>
                                <PopoverHeader>{props.book.title}</PopoverHeader>
                                <PopoverBody>
                                    <p>
                                        <span className="enfase text-white">Autores: </span>
                                            {props.book.authors}
                                    </p>
                                    <p>
                                        <span className="enfase text-white">Categoria: </span>
                                            {props.book.book_category.description}
                                    </p>
                                    <p>
                                        <span className="enfase text-white">Descrição: </span>
                                            {props.book.description}
                                    </p>
                                </PopoverBody>
                            </Popover>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(AmazonBook);