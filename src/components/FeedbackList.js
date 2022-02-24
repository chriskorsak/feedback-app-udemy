import FeedbackItem from './FeedbackItem';

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

export default FeedbackList;
