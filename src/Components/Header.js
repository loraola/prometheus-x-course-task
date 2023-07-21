
import '../index.css';
import HeaderBar from './HeaderBar';
import { useContext } from 'react';
import { UserContext } from '../App';
import bookshelfWall from '../Components/bookshelfWall.png'

export default function Header() {
const [user,setUser] = useContext(UserContext); 
let headerbar= user!==''? <HeaderBar />: null;
    return (
        <header className="header-style">
        <nav className="navbar">
            <div className="container d-flex justify-content-space-between">
                <h2 className="header_title">X-course task / Larisa Olashyn </h2>
                <img  src={bookshelfWall} alt="bookShelf" width="370" height="77"/>
                {headerbar}
            </div>
        </nav>
    </header>
)}