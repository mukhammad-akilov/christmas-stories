import PropTypes from 'prop-types';

const ChristmasStory = () => {
    return (
        <div className={`container`}>
            <div>Single story</div>
        </div>
    );
}

ChristmasStory.propTypes = {
    slug: PropTypes.string.isRequired
}

export default ChristmasStory;