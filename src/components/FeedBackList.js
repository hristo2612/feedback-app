import FeedBackItem from './FeedBackItem';

export default function FeedBackList({ feedbacks, handleDelete }) {
  if (!feedbacks?.length) {
    return <h3 className="text-center">No Feedbacks Yet</h3>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
