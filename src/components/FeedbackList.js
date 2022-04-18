import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback) return 'No feedback yet!';
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
            <FeedbackItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
