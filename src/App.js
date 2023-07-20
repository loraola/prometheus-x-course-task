import { useState } from "react";
import { Navigate } from 'react-router-dom';
import SigninMain from './Components/SigninMain';
import Layout from "./Components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import SpecificBook from "./Components/Specificbook";
import { createContext } from "react";
import books from "./Components/books.json";
import NoPage from "./Components/NoPage";
import Cart from "./Components/Cart";
export const BookContext = createContext();
export const UserContext = createContext();
export const BookCartContext = createContext();
export const CountAllContext = createContext();


function App() {
  const [user, setUser] = useState('');
  const [BookCart, setBookCart] = useState([]);
  const [CountAll, setCountAll] = useState(0);
  return (

    <div >
      <BookContext.Provider value={books.books}>
        <UserContext.Provider value={[user, setUser]}>
          <BookCartContext.Provider value={[BookCart, setBookCart]}>
            <CountAllContext.Provider value={[CountAll, setCountAll]}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<SigninMain setUser={setUser} />} />
                    <Route path="book-list" element={!user ? <Navigate to="/" /> : <BookList />} />
                    <Route path="specific-book/:id" element={!user ? <Navigate to="/" /> : <SpecificBook />} />
                    <Route path="purchase-complete" element={!user ? <Navigate to="/" /> : <Cart />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </CountAllContext.Provider>
          </BookCartContext.Provider>
        </UserContext.Provider>
      </BookContext.Provider>
    </div>
  );
}

export default App;
