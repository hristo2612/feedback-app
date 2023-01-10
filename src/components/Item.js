import { useState } from 'react';

export default function Item() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Text');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}
