import notFoundImage from "../../assets/images/not-found.png";
import {Link} from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={`container`}>
            <h1>Page 404</h1>
            <img src={notFoundImage} alt="Christmas Stories" />
            <p>This page was not found</p>
            <Link to="/">Go to main page</Link>
        </div>
    );
}

export default NotFound;