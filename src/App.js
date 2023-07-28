import { useState } from "react";
import { Navigate } from 'react-router-dom';
import SigninMain from './Components/SigninMain';
import Layout from "./Components/Layout"
import { HashRouter, Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import SpecificBook from "./Components/Specificbook";
import { createContext } from "react";
import books from "./Components/books.json";
import NoPage from "./Components/NoPage";
import Cart from "./Components/Cart";
export const BookContext = createContext();
export const UserContext = createContext();
export const BookCartContext = createContext();



function App() {
  const [user, setUser] = useState('');
  const [BookCart, setBookCart] = useState([]);
  return (

    < >
      <BookContext.Provider value={books.books}>
        <UserContext.Provider value={[user, setUser]}>
          <BookCartContext.Provider value={[BookCart, setBookCart]}>
              <HashRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<SigninMain setUser={setUser} />} />
                    <Route path="/book-list" element={!user ? <Navigate to="/" /> : <BookList />} />
                    <Route path="/specific-book/:id" element={!user ? <Navigate to="/" /> : <SpecificBook />} />
                    <Route path="/purchase-complete" element={!user ? <Navigate to="/" /> : <Cart />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </HashRouter>
          </BookCartContext.Provider>
        </UserContext.Provider>
      </BookContext.Provider>
    </>
  );
}

export default App;
