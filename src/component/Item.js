import { AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getdetail } from '../redux/popup/popup';
import { Link } from 'react-router-dom';

export const Item = ({ record, count }) => {
  const dispatch = useDispatch();
  const handleClick = (record) => {
    dispatch(getdetail(record));
  }

  let image = `images/${record.name}.jpg`;
  return (
    <div className={count % 2 ? 'cards right' : 'cards left'}>
      {<img src={image} alt={record.name} />}
      <p>{record.name}</p>
      <button onClick={()=>handleClick(record)} type='button'><Link to='/details'><AiOutlineRight /></Link>
      </button>
    </div>
  )
}
