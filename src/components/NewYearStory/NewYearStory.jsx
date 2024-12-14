import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./NewYearStory.module.scss"
import {NEW_YEAR_STORIES_LIST} from "../../utils/utils";
import {projectTitle} from "../../config";

const NewYearStory = ({storySlug, ...props}) => {
    const [selectedStory, setSelectedStory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top of page
        window.scrollTo(0, 0);
        const [filteredStory] = NEW_YEAR_STORIES_LIST.filter(story => story.slug === storySlug);
        if (filteredStory) {
            setSelectedStory(filteredStory);
            // Set page title
            document.title = `${filteredStory.title} -  ${projectTitle}`;
        } else {
            // Redirect to 404 page
            navigate("/404", {replace: true});
        }
    }, [storySlug]);

    return (
        <>
            {selectedStory &&
                <div className={`container ${styles.contentContainer}`}>
                    <h1 className={`newyearFont ${styles.title}`}>{selectedStory.title}</h1>
                    <div className={styles.descriptionContainer}>
                        {selectedStory.content}
                    </div>
                </div>
            }
        </>
    );
}

NewYearStory.propTypes = {
    storySlug: PropTypes.string.isRequired
}

export default NewYearStory;