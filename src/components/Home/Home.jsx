import styles from "./Home.module.scss";
import CountDownTimer from "../CoundDownTimer/CountDownTimer";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={`container ${styles.contentContainer}`}>
            <h1 className={`christmasFont ${styles.title}`}>Christmas Stories</h1>
            <div className={styles.christmasTreeContainer}>
                <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_9gmlwgi8.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />
            </div>
            <div className={styles.counterContainer}>
                <h2 className={`christmasFont ${styles.title}`}>Time left until The New Year</h2>
                <CountDownTimer />
            </div>
            <div className={styles.introDescriptionContainer}>
                <h2 className={`${styles.title}`}>Welcome to Christmas Stories</h2>
                <Link to="/christmas-stories" className={styles.linkToStories}>Let's read the stories!</Link>
            </div>
        </div>
    )
}

export default Home;