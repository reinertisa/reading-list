import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";
import NewBookForm from "./components/BookForm";

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
                <NewBookForm />
            </BookContextProvider>
        </div>
    );
}

export default App;
