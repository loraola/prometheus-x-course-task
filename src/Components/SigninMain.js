import '../index.css';
import { useState } from 'react';
import avatar from '../Components/avatar.png';
import { useNavigate } from "react-router-dom";


export default function SigninMain({setUser}) {
    const [username, setUsername] = useState('');
    const [isDis, setIsDis] = useState(true);
    const Validate = (name) => {
        if (name.length > 3 && name.length < 17) {
            setUsername(name);
            setIsDis(false);
        } else {
            setIsDis(true);
        }
    }
    const navigate = useNavigate();
    return (
        <main className="main">
            <div className="container_form_v">
                <div className="avatar_box">
                    <img src={avatar} alt="avatar" />
                </div>
                <br />
                <div>
                    <div className="container_form">
                        <label htmlFor="fname"><span>Username </span></label><br />
                        <input type="text" id="fname" name="fname" placeholder="type Username"
                            onChange={(e) => Validate(e.target.value)} /><br />
                        <button disabled={isDis} type="submit"
                        onClick={()=>{setUser(username); navigate("/book-list"); }}>Sign-in</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
