import {useContext} from 'react';
import {BookContext} from "../contexts/BookContext";

export default function BookDetails({book}) {
    const {removeBook} = useContext(BookContext);

    return (
        <li onClick={() => removeBook(book.id)} key={book.id}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}