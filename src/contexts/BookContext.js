import {createContext, useState} from 'react';
import uuid from 'uuid';

export const BookContext = createContext()

export default function BookContextProvider(props) {

    const [books, setBooks] = useState([
        {title: 'Crime and Punishment', author: 'Dostoyevski', id: 1},
        {title: 'War and Peace', author: 'Tolstoy', id: 2},
    ]);

    const addBook = ({title, author}) => setBooks([...books, {title, author, id: uuid}]);

    const deleteBook = (id) => setBooks(books.filter(book => book.id !== id));

    return (
        <BookContext.Provider value={{books, addBook, deleteBook}}>
            {props.children}
        </BookContext.Provider>
    )
}