import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import { useState } from 'react';

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = input => {
    //form validation
    if (input === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Please type at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(input);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // validate for at least 10 chars
    if (text.trim().length > 10) {
      //create new item object with state
      const newItem = {
        rating: rating,
        text: text,
      };
      handleAdd(newItem);
      //clear out input field
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={({ target }) => handleTextChange(target.value)}
            value={text}
          />
          <Button type="submit" disabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
