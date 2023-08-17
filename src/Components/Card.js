import { Link } from "react-router-dom";
import bookEmpty from "./bookEmpty.jpg";

export default function Card({ book }) {
  const altBook= book.image !== ""? book.image: bookEmpty;
  const titleText=book.title.length>24? book.title.slice(0,24)+"..." : book.title;
    return (
        <div className="card book-card">
            <div className="card-body bg-card-body">
                <div className="d-flex justify-content-center">
                    <img src={altBook} className="book-card-image" alt="book"></img>
                </div>
                <div className="tooltip" >
                <h6 className="card-title" >{titleText}</h6>
                <span className="tooltiptext">{book.title}</span>
                </div>
                <p className="card-text" >{book.author}</p>
                <div className="d-flex justify-content-between">
                    <h6 className="card-title">{book.price + "$"}</h6>
                    <Link to={'/specific-book/'+book.id+'#start'} className="btn_m btn_r text-black">View</Link>
                </div>
            </div>
        </div>
    )
}