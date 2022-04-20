import { useState, useEffect, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = e => {
    setSelected(Number(e.currentTarget.value));
    select(Number(e.currentTarget.value));
  };
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul className="rating">
      {ratings.map(rating => (
        <li key={rating}>
          <input
            id={`num${rating}`}
            value={rating}
            type="radio"
            name="rating"
            onChange={handleChange}
            checked={selected === rating}
          />
          <label htmlFor={`num${rating}`}>{rating}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
