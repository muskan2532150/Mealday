import {useState} from 'react';
import { Popup } from './Popup';

export const Item = ({record}) => {
const [click, setclick] = useState(false);

    const handleClick = () => {
    setclick(!click);
    }

  return (
    <div className='cards'>
        <img src={record.url} alt={record.id} />
        <p>{record.date}</p>
        <button type='button' onClick={()=>handleClick()}> nbccb</button>
       {click ? <Popup record={record}/> : ''} 
    </div>
  )
}
