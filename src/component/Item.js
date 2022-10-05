import {useState} from 'react';
import { Popup } from './Popup';
import {AiOutlineRight} from 'react-icons/ai';

export const Item = ({record,count}) => {
const [click, setclick] = useState(false);
    const handleClick = () => {
    setclick(!click);
    }

  return (
    <div className={ count%2 ?'cards right':'cards left'}>
        {/* <img src={record.url} alt={record.id} /> */}
        <p>{record.name}</p>
        <button type='button' onClick={()=>handleClick()}><AiOutlineRight/></button>
       {click ? <Popup record={record}/> : ''} 
    </div>
  )
}
