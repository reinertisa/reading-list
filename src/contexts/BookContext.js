import {createContext, useReducer, useState} from 'react';
import {v4 as uuid} from 'uuid';
import {bookReducer} from "../reducers/bookReducer";

export const BookContext = createContext()

export default function BookContextProvider(props) {
    const [books, dispatch] = useReducer(bookReducer,[]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}