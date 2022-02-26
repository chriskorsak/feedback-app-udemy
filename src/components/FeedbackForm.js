import Card from './shared/Card';
import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = input => setText(input);

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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
