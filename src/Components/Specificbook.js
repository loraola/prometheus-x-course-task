import '../index.css';
import { useParams } from 'react-router-dom';
import { useState, useContext} from 'react';
import { BookContext } from "../App";
import bookEmpty from "./bookEmpty.jpg";
import { BookCartContext } from "../App";

export default function SpecificBook() {
    const books = useContext(BookContext);
    const [BookCart, setBookCart] = useContext(BookCartContext);
    const { id } = useParams();

    const resultBook = books.find(book => book.id === +id);
    const altBook = resultBook.image !== "" ? resultBook.image : bookEmpty;
    const arrayTags = [...resultBook.tags];
    const [priceTotal, setPriceTotal] = useState(resultBook.price);
    const [count, setCount] = useState(1);
    
    const AddToCart = () => {
       let resArray=[...BookCart];
        let resFind = resArray.find(book => book.id === id);
        if (resFind) {
            resFind['totalPrice'] = resFind.totalPrice + Number(count) * resFind.price;
            resFind['count'] = Number(resFind.count) + Number(count);
            setBookCart(resArray);
        } else {
            const AddBook = {
                title: resultBook.title,
                count: Number(count),
                price: resultBook.price,
                totalPrice: count * resultBook.price,
                id: id,
            };
            setBookCart([...BookCart, AddBook]);
            
        }
        alert(`${count} Added to the cart`);
    }

    const countInput = ((event) => {
        if (event >= 1 && event <= 42) {
            setPriceTotal(resultBook.price * event);
            setCount(event);
        } else {
            alert('Введіть число від 1 до 42');
        }
    }
    )

    return (
        <main>
            <div className="row">
                <div className="row_item1">
                    <img src={altBook} alt="title_book" />
                </div>
                <div className="row_item2">
                    <p id="book_name"> {resultBook.title}</p>
                    <p className="info_book"> {resultBook.author}</p>
                    <p className="info_book"> {resultBook.level}</p>
                    <p className="info_book"> {arrayTags.join("   ")}</p>
                </div>
                <div className="row_item3">
                    <div className="column3_row">
                        <p>Price:</p>
                        <p id="price">${resultBook.price}</p>
                    </div>
                    <div className="column3_row">
                        <p>Count</p>
                        <input type="number" id="Count"
                            name="Count" onChange={(e) => countInput(e.target.value)} defaultValue={1} min="1" max="42" />
                    </div>
                    <div className="column3_row">
                        <p>Total price:</p>
                        <p id='total'> ${priceTotal}</p>
                    </div>
                    <div className="column3_button">
                        <button type="submit" onClick={AddToCart} >Add to cart</button>
                    </div>
                </div>
            </div>
            <div>
                <p id="description"><span>Book description: </span>{resultBook.description}</p>
            </div>
        </main>

    )
}