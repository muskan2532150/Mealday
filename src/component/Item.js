import {useState} from 'react';
import { Popup } from './Popup';

export const Item = ({record,count}) => {
const [click, setclick] = useState(false);
    const handleClick = () => {
    setclick(!click);
    }

  return (
    <div className={ count%2 ?'cards right':'cards left'}>
        <img src={record.url} alt={record.id} />
        <p>{record.date}</p>
        <button type='button' onClick={()=>handleClick()}> nbccb</button>
       {click ? <Popup record={record}/> : ''} 
    </div>
  )
}
