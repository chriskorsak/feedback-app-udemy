import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react/';
import feedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //create feedback item
  const handleAdd = item => {
    //generate an id for each item
    item.id = uuidv4();
    // add new item to feedback state
    setFeedback([item, ...feedback]);
  };

  // updates feedbackEdit state to keep track of which item is going to be edited
  const handleEdit = item => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const handleUpdate = (id, updatedItem) => {
    setFeedback(
      feedback.map(item =>
        id === item.id ? { ...item, ...updatedItem } : item
      )
    );
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
        feedbackEdit,
        handleAdd,
        handleEdit,
        handleDelete,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
