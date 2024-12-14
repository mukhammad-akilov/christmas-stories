import NewyearStory from "../components/NewYearStory/NewYearStory";
import {useParams} from "react-router-dom";

const NewYearStoryRoute = () => {
    const params = useParams();

    return (
        <NewyearStory storySlug={params.newYearStorySlug} />
    );
}
export default NewYearStoryRoute;