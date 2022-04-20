import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
