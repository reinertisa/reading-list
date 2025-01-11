import {useContext, useState} from 'react';
import {BookContext} from "../contexts/BookContext";

export default function NewBookForm() {

    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
            />

            <input
                type="text"
                placeholder="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required={true}
            />
            <input type="submit" value="add book"/>
        </form>
    )
}