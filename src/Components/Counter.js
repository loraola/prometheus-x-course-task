import { useState } from "react";
import arrow from '../Components/352023_arrow_drop_up_icon.svg';

export default function Counter( {notifyChange}) {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
        notifyChange(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            notifyChange(count - 1);
        }
    }

    const onChange = (event) => {
        if (event.target.value >= 0 && event.target.value <= 42) {
            setCount(event.target.value);
            notifyChange(event.target.value);
        } else {
            setCount(0);
            notifyChange(0);
        }
    }

    return (
        <div className="counter">
            <input type="number" className="counter__input" value={count} min="1" max="42" onChange={onChange} data-testid="counter" />
            <div className="counter__btn_wrapper">
                <button className="counter__button counter__button_inc" onClick={increment} title="Increase count">
                    <img className="counter__button_img" src={arrow} alt="arrow-up" />
                </button>
                <button className="counter__button counter__button_dec" onClick={decrement} title="Decrease count">
                    <img className="counter__button_img counter__button_imgd" src={arrow} alt="arrow-down" />
                </button>
            </div>
        </div>
    )
}