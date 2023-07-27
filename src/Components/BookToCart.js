import basket from "../Components/pngwing.com.png";
import { useContext} from 'react';
import { BookCartContext } from "../App";

export default function BookToCart({ book}) {
    const [BookCart, setBookCart] = useContext(BookCartContext);
   
    const deleteBook = () => {
    let resArray=[...BookCart];
   let index=resArray.findIndex((b) => b.id===book.id);
   if (index!=-1) {
    resArray.splice(index, 1);
    setBookCart(resArray);
   }
    };
    return (
        <div className="book-cart-row">
            <div className="book-cart-item1">
                <p>{book.title}</p>
            </div>
            <div className="book-cart-item2">
                <p>{book.count}</p>
            </div>
            <div></div>
            <div className="book-cart-item3">
                <p>{book.totalPrice}</p>
            </div>
            <div className="book-cart-item4">
                <img onClick={deleteBook} src={basket} alt="basket" width="25" height="37"/>
            </div>
        </div>
    )
}