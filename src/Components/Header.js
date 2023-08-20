
import '../index.css';
import HeaderBar from './HeaderBar';
import { useContext } from 'react';
import { UserContext } from '../App';

export default function Header() {
const [user] = useContext(UserContext); 
let headerbar= user!==''? <HeaderBar />: null;
    return (
        <header className="header-style page-header">
        <nav className="navbar">
            <div className="container d-flex justify-content-space-between">
                <h2 className="header_title">X-course task / Larisa Olashyn </h2>
              
                {headerbar}
            </div>
        </nav>
    </header>
)}