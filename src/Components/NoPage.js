import page404 from '../Components/page404.png';
export default function NoPage() {

    return (
        <div className="noPage">
            <h2> “Oops,something went wrong. 404 error”</h2>
            <div>
            <img  src={page404} alt="booknote-header"
            width="720" height="220"/>
            </div>
        </div>
    )
}