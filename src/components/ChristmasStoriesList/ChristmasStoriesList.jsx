// Redux
import {useSelector} from "react-redux";
import {christmasStoriesList} from "../../utils/utils";
import {Link} from "react-router-dom";
import styles from "./ChristmasStories.module.scss";

const ChristmasStoriesList = () => {
    const themeState = useSelector(state => state.theme);

    return (
        <div className={`container ${styles.contentContainer}`}>
            <h1 className={`christmasFont ${styles.title}`}>Christmas Stories</h1>
            <div className={styles.storiesContainer}>
                {christmasStoriesList.map((christmasStory, index) => (
                    <div
                        key={christmasStory.id}
                        className={styles.storyContainer}
                    >
                        <Link
                            className={`${styles.link} ${themeState.theme === "dark" ? styles.linkDark : ""}`}
                            to={`/christmas-stories/${christmasStory.slug}`}
                        >
                            <h2 className={`christmasFont ${styles.title}`}>
                                <span>{index + 1}.</span> {christmasStory.title}
                            </h2>
                        {/*<div>{christmasStory.content}</div>*/}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChristmasStoriesList;