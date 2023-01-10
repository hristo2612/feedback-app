import Header from './components/Header';
import { useState } from 'react';
import { feedBackData } from './data/feedBackData';
import FeedBackList from './components/FeedBackList';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(feedBackData);

  return (
    <>
      <Header title="Feedback App" />
      <div className="container">
        <FeedBackList feedbacks={feedbacks} />
      </div>
    </>
  );
}
