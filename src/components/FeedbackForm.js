import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');
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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo: rating select component */}
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
