// Redux
import {useSelector} from "react-redux";
import styles from "./Foote.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                Footer info
            </div>
        </footer>
    );
}

export default Footer;
