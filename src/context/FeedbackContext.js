import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react/';
import feedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);

  //create feedback item
  const handleAdd = item => {
    //generate an id for each item
    item.id = uuidv4();
    // add new item to feedback state
    setFeedback([item, ...feedback]);
  };

  //delete feedback item
  const handleDelete = id => {
    if (window.confirm(`Are you sure you want to delete feedback?`)) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        //you can simply add a key (and no val) if both are the same
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
