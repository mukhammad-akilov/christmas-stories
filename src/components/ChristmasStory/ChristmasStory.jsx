import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./ChristmasStory.module.scss";
import {christmasStoriesList} from "../../utils/utils";

const ChristmasStory = ({storySlug, ...props}) => {
    const [selectedStory, setSelectedStory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const [filteredStory] = christmasStoriesList.filter(story => story.slug === storySlug);
        if (filteredStory) {
            setSelectedStory(filteredStory);
        } else {
            // Redirect to 404 page
            navigate("/404", {replace: true});
        }
    }, [storySlug]);

    return (
        <>
            {selectedStory &&
                <div className={`container ${styles.contentContainer}`}>
                    <h1 className={`christmasFont ${styles.title}`}>{selectedStory.title}</h1>
                    <div className={styles.descriptionContainer}>
                        {selectedStory.content}
                    </div>
                </div>
            }
        </>
    );
}

ChristmasStory.propTypes = {
    storySlug: PropTypes.string.isRequired
}

export default ChristmasStory;