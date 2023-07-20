
import '../index.css';
import cart2 from '../Components/cart2.svg';
import { BookCartContext } from "../App";
import { useContext } from 'react';
import BookToCart from './BookToCart';
import { useNavigate } from 'react-router-dom';


function FullCart({ array }) {
    let sum = 0;
    const [BookCart] = useContext(BookCartContext);
    BookCart.forEach((b) => sum += b.totalPrice*100);
    return (
        <>
            {array.map((b) => <BookToCart book={b} key={b.id} />)}
            <div className="totalPrice"><p><b>Total price, $ {sum/100}</b></p></div>
        </>
    )
}

function EmptyCart() {
    return (
        <>
            <div className="container_form_v">
                <img src={cart2} alt="basket" width="200" height="200" />
                <div>
                    Cart empty...
                </div>
            </div>
        </>)
}
export default function Cart() {
    const [BookCart, setBookCart] = useContext(BookCartContext);
    const navigate = useNavigate();
    let cart = BookCart.length > 0 ? <FullCart array={BookCart} /> : <EmptyCart />;
    const clearCart = () => {
        setBookCart([]);
        alert('Дякуємо за покупку');
        navigate("/book-list");
    }
    const shopping=()=>{
        navigate("/book-list");   
    }
    return (
        <>
            <div className="grid-container">
                <div className="purchase">
                    <button id="purch" type="submit" onClick={shopping}>Continue shopping</button>
                </div>
                <div />
                <div className="purchase">
                    <button disabled={BookCart.length === 0} type="submit" onClick={clearCart}>Purchase</button>
                </div>
            </div>
            {cart}
        </>
    )
}