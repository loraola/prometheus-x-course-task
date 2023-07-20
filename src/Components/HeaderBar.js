import { Link } from "react-router-dom";
import avatar from '../Components/avatar.png';
import cart from '../Components/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';
import { BookCartContext } from "../App";
import CartWithBadge from "./CartWithBadge";

export default function HeaderBar() {
    const [BookCart]=useContext(BookCartContext);
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const signOut = () => { setUser(''); navigate("/"); }
    return (
        <div className="d-flex align-items-center">
            <Link to={'/purchase-complete/'}>
                {BookCart.length !== 0 ? <CartWithBadge countAll={BookCart.reduce(
                    (acc, curr) => acc + curr.count, 0)} /> :
                    <img className="navbar-brand" src={cart} alt="basket" width="50" height="50" />}
            </Link>
            <button className="btn_m  " onClick={signOut}>Sign-Out</button>
            <img className="navbar-brand" src={avatar} alt="profil" width="50" height="50" />
            <span> {user}</span>
        </div>
    )
}