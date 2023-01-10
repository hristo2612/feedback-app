import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

export default function FeedBackItem({ item, handleDelete }) {
  return (
    <Card>
      <div onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="red" />
      </div>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
