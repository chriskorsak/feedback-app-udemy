import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  //calculate feedback rating average
  let average =
    feedback.reduce((total, current) => total + current.rating, 0) /
    feedback.length;

  //only allow 1 decimal place & remove with regex if int
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length} {feedback.length === 1 ? 'Review' : 'Reviews'}
      </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
};

export default FeedbackStats;
