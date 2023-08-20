
import '../index.css';
import cart2 from '../Components/cart2.svg';
import { BookCartContext } from "../App";
import { useContext } from 'react';
import BookToCart from './BookToCart';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
function FullCart({ array }) {
    let sum = 0;
    const [BookCart] = useContext(BookCartContext);
    BookCart.forEach((b) => sum += b.totalPrice);
    return (
        <>
            {array.map((b) => <BookToCart book={b} key={b.id} />)}
            <div className="container totalPrice"><p><b>Total price, $ {sum.toFixed(2)}</b></p></div>
        </>
    )
}

function EmptyCart() {
    return (
        <>
            <div className="container_emptyCart">
                <img className="img-emptyCart" src={cart2} alt="basket" width="200" height="200" />
                <div className="text-emptyCart">
                    Cart empty...
                </div>
            </div>
        </>)
}
export default function Cart() {
    const [BookCart, setBookCart] = useContext(BookCartContext);
    const navigate = useNavigate();
    let cart = BookCart.length > 0 ? <FullCart array={BookCart} /> : <EmptyCart />;
    const MySwal = withReactContent(Swal);
    const clearCart = () => {
        setBookCart([]);
        MySwal.fire({
            icon:"success",
            title: <p>Thank you for purchase</p>
           }).then(() => {
            navigate("/book-list");
          }) ;      
    }
    const shopping=()=>{
        navigate("/book-list");   
    }
    return (
        <main className="page-body">
            <div className="container grid-container">
                <div className="purchase">
                <button type="text" onClick={shopping}>Continue shopping</button>
                </div>
                <div />
                <div className="purchase">
                    <button disabled={BookCart.length === 0} type="submit" onClick={clearCart}>Purchase</button>
                </div>
            </div>
            {cart}
        </main>
    )
}