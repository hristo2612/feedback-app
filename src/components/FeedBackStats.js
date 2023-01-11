export default function FeedBackStats({ feedbacks }) {
  const average = (
    feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
