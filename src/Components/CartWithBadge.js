import '../index.css';
import cart from "../Components/cart.svg";

export default function CartWithBadge({countAll}){
return(

<div className="cart-badge">
      <img className="navbar-brand" src={cart} alt="basket" />
      <div className="cart-badge__count">{countAll}</div>
    </div>
)
}