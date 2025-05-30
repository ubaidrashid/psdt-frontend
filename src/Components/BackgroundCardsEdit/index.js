import img from "../../assets/images/backgroundcardimages/frontofbackgroundcard.jpg";
import { Link } from "react-router-dom";
import "../../Components/Editdocuments/editdoc.css";
export const BackgroundCards = () => {

    return (
        <Link to="/cardswithbackground" className="edit-doc-link">
            <div className="edit-doc-container">
                <div className="overlay">
                    <p>Edit Cards with Realistic Backgrounds</p>
                </div>
                <img src={img} alt="" className="editDocImg" />

            </div>
        </Link>
    );
}