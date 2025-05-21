import temporary from "../../assets/images/logo/mainLogo.png";
import { Link } from "react-router-dom";
import "../Editdocuments/editdoc.css";
export const EditDoc = () => {
    return (
        <Link to="/editdocumentdetails" className="edit-doc-link">
            <div className="edit-doc-container">
                <div className="overlay">
                    <p>Document Editing & Updates</p>
                </div>
                <img src={temporary} alt="" className="editDocImg" />

            </div>
        </Link>
    );
}