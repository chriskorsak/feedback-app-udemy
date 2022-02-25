import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback) return 'No feedback yet!';
  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
