import Card from './Card';
import '../index.css';
import { useState, useContext } from "react";
import { BookContext } from "../App";
import { UserContext } from '../App';

export default function BookList() {
    const [user,setUser] = useContext(UserContext); 
    const books = useContext(BookContext);
    const [arrayBook, setArrayBook] = useState(books);

    const arrayCard = arrayBook.map((b) => <Card book={b} key={b.id}></Card>);
    const less15="0 < ціна <=15";
    const between1530="15 < ціна <=30";
    const more30="ціна > 30";

    function priceSort(order) {
        let array = [...books];
        let result = [];
        if (order === "all") {
            result = array;
        } else {
            if (order === "less15") {
                result = array.filter((book) => book.price <= 15);
            } else {
                if (order === "15-30") {
                    result = array.filter((book) => (book.price > 15 && book.price <= 30));
                } else {
                    result = array.filter((book) => book.price > 30);
                }
            }
        }

        setArrayBook(result);
    }

    function filterItems(phrase) {
        const result = books.filter(book => book.title.includes(phrase));
        if (result.length > 0)
            setArrayBook(result);
    }

    return (
        <main className='main'>
            <div className="container  d-flex">
                <div>
                    <br />
                    <input onInput={(e) => filterItems(e.target.value)} type="text" name="search" placeholder="Search by book name" id="search" />
                </div>
                <div className="dropdown">
                    <br />
                    <button type="button" className="btn_sm dropdown-toggle" data-bs-toggle="dropdown">
                        Price
                    </button>
                    <ul className="dropdown-menu">
                        <li><button onClick={() => priceSort('all')} className="dropdown-item" href="#">Всі</button></li>
                        <li><button onClick={() => priceSort('less15')} className="dropdown-item" href="#">{less15}</button></li>
                        <li><button onClick={() => priceSort('15-30')} className="dropdown-item" href="#">{between1530}</button></li>
                        <li><button onClick={() => priceSort('more30')} className="dropdown-item" href="#">{more30}</button></li>
                    </ul>

                </div>
            </div>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between" id="mainDiv">
                    {arrayCard}
                </div>
            </div>
        </main>
    )
}


