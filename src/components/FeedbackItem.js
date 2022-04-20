import Card from './shared/Card';
//import 'x' icon from react icons font awesome, which becomes a component called FaTimes
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="#202142" />
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="#202142" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
