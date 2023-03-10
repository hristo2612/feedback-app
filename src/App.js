import Header from './components/Header';
import { useState } from 'react';
import { feedBackData } from './data/feedBackData';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(feedBackData);
  const handleDelete = (id) => {
    const filteredFeedbacks = feedbacks.filter((item) => item.id !== id);
    setFeedbacks(filteredFeedbacks);
  }

  return (
    <>
      <Header title="Feedback App" />
      <div className="container">
        <FeedBackStats feedbacks={feedbacks} />
        <FeedBackList feedbacks={feedbacks} handleDelete={handleDelete} />
      </div>
    </>
  );
}
