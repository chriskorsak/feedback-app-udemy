import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback }) => {
  if (!feedback) return 'No feedback yet!';
  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
