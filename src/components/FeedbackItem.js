import { useState } from 'react';

const FeedbackItem = ({ item }) => {
  const [rating, setRating] = useState(7);

  const handleClick = () => {
    setRating(previous => {
      console.log(previous);
      return previous + 2;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default FeedbackItem;
