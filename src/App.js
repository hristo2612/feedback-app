import Header from './components/Header';
import Item from './components/Item';

export default function App() {
  return (
    <>
      <Header title="Feedback App" />
      <div className='container'>
        <Item />
      </div>
    </>
  );
}
