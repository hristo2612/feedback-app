import Header from './components/Header';
import FeedBackItem from './components/FeedBackItem';

export default function App() {
  return (
    <>
      <Header title="Feedback App" />
      <div className='container'>
        <FeedBackItem />
      </div>
    </>
  );
}
