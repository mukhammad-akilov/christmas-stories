// Redux
import {useSelector} from "react-redux";
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
    const themeState = useSelector(state => state.theme);

    return (
        <header
            className={`${styles.header} ${styles.headerShadow} ${themeState.theme === "dark" ? styles.headerDark : ""}`}
        >
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
