// Redux
import {useDispatch} from "react-redux";
import {stopMusic, playMusic} from "../../store/actions/musicActions";
// Theme toggler
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import MusicMuteHandler from "../MusicMuteHandler/MusicMuteHandler";
// Assets
import christmasLogo from "../../assets/images/logo.png"
import {projectTitle} from "../../config";
// Styles
import styles from "./Header.module.scss"
// React Router
import {Link} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link
                    to="/"
                    className={styles.logoContainer}
                >
                    <img src={christmasLogo} alt={projectTitle} />
                </Link>
                <div className={styles.settingsContainer}>
                    <MusicMuteHandler />
                    <ThemeToggler />
                </div>
            </div>
        </header>
    );
}

export default Header;
