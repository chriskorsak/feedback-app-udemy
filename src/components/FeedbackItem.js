import Card from './shared/Card';
//import 'x' icon from react icons font awesome, which becomes a component called FaTimes
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="#202142" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
