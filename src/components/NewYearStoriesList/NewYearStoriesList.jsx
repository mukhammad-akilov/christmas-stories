// React
import {useEffect} from "react";
// Redux
import {useSelector} from "react-redux";
import {NEW_YEAR_STORIES_LIST} from "../../utils/utils";
import {Link} from "react-router-dom";
import styles from "./NewYearStories.module.scss";
import {projectTitle} from "../../config";

const NewYearStoriesList = () => {
    const themeState = useSelector(state => state.theme);

    useEffect(() => {
        // Scroll to top of page
        window.scrollTo(0, 0);
        // Set page title
        document.title = `New Year Stories list -  ${projectTitle}`;
    }, [])

    return (
        <div className={`container ${styles.contentContainer}`}>
            <h1 className={`newyearFont ${styles.title}`}>New Year Stories</h1>
            <div className={styles.storiesContainer}>
                {NEW_YEAR_STORIES_LIST.map((newYearStory, index) => (
                    <div
                        key={newYearStory.id}
                        className={styles.storyContainer}
                    >
                        <Link
                            className={`${styles.link} ${themeState.theme === "dark" ? styles.linkDark : ""}`}
                            to={`/new-year-stories/${newYearStory.slug}`}
                        >
                            <h2 className={`newyearFont ${styles.title}`}>
                                <span>{index + 1}.</span> {newYearStory.title}
                            </h2>
                        
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewYearStoriesList;