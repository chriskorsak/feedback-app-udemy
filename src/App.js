import { v4 as uuidv4 } from 'uuid';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import { useState } from 'react';
import feedbackData from './data/feedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={handleAdd} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
}

export default App;
