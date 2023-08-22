import '../index.css';
import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { BookContext } from "../App";
import bookEmpty from "./bookEmpty.jpg";
import { BookCartContext } from "../App";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Counter from './Counter';



export default function SpecificBook() {
    const books = useContext(BookContext);
    const [BookCart, setBookCart] = useContext(BookCartContext);
    const { id } = useParams();

    const resultBook = books.find(book => book.id === +id);
    const altBook = resultBook.image !== "" ? resultBook.image : bookEmpty;
    const arrayTags = [...resultBook.tags];
    const tagsSpanArr = arrayTags.map((tag, index) => (<span className='tags' key={index}>{tag} </span>));
    const [priceTotal, setPriceTotal] = useState(resultBook.price);
    const [count, setCount] = useState(1);
    const MySwal = withReactContent(Swal);
   

    const AddToCart = () => {
        let resArray = [...BookCart];
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
        MySwal.fire({
            icon: "success",
            title: <p>Added to the cart</p>
        });
    }


    const countInput = ((event) => {
        if (event >= 1 && event <= 42) {
            setPriceTotal(resultBook.price * event);
            setCount(event);
        } else {
            Swal.fire({
                title: 'Введіть число від 1 до 42',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            //alert('Введіть число від 1 до 42');
            setCount(0);
            setPriceTotal(resultBook.price);
        }
    }
    )

    return (
        <main>
            <div className="container rowPropetyBook" style={{ marginTop: '30px' }}>
                <div id="start" className="row_item1">
                    <img src={altBook} alt="title_book" />
                </div>
                <div className="row_item2">
                    <h5 id="book_name"> {resultBook.title}</h5>
                    <p className="info_book"> Author: <span>{resultBook.author}</span> </p>
                    <p className="info_book"> Level:  <span>{resultBook.level}</span></p>
                    <p className="info_book"> Tags:  <span>{tagsSpanArr}</span></p>
                </div>
                <div className="row_item3">
                    <div className="column3_row">
                        <p>Price:</p>
                        <p id="price">${resultBook.price}</p>
                    </div>
                    <div className="column3_row">
                        <p>Count</p>
                    <Counter notifyChange={countInput}/>
                    </div>
                    <div className="column3_row">
                        <p>Total price:</p>
                        <p id='total'> ${priceTotal}</p>
                    </div>
                    <div className="column3_button">
                        <button type="submit" disabled={count === 0} onClick={AddToCart} >Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: '30px' }}>
                <p id="description"><span>Book description: </span>{resultBook.description}</p>
            </div>
        </main>

    )
}