import ChristmasStory from "../components/ChristmasStory/ChristmasStory";
import {useParams} from "react-router-dom";

const ChristmasStoryRoute = () => {
    const params = useParams();

    return (
        <ChristmasStory slug={params.christmasStoryId} />
    );
}
export default ChristmasStoryRoute;