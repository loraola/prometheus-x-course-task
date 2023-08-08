import { Link } from "react-router-dom";
import avatar from '../Components/avatar.png';
import cart from '../Components/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';
import { BookCartContext } from "../App";
import CartWithBadge from "./CartWithBadge";
import arrowTo from '../Components/arrow--back-icon.png';

export default function HeaderBar() {
    const [BookCart, setBookCart] = useContext(BookCartContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const signOut = () => { setUser(''); setBookCart([]); navigate("/"); }
    const arrowTurn=()=>{
        navigate("/book-list");   
    }
    return (
        <div className="d-flex align-items-center">
            <img id="arrow" className="navbar-brand" src={arrowTo} alt="arrow" onClick={arrowTurn}/>
            <Link to={'/purchase-complete/'}>
                {BookCart.length !== 0 ? <CartWithBadge countAll={BookCart.reduce(
                    (acc, curr) => acc + curr.count, 0)} /> :
                    <img className="navbar-brand" src={cart} alt="basket"/>}
            </Link>
            <button className="btn_m  " onClick={signOut}>Sign-Out</button>
            <img className="navbar-brand" src={avatar} alt="profil" />
            <span> {user}</span>
        </div>
    )
}