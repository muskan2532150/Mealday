import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Container/Containers';
import Item from './Item';
import {AiOutlineArrowUp} from 'react-icons/ai';

const Container = () => {
const { data } = useSelector((state) => state.container);
const [scroll, setscroll] = useState(document.documentElement.scrollTop);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
    window.onscroll=()=>setscroll(document.documentElement.scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const handleScroll = () =>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;  
  setscroll(0);
    
}

  let count = 0;
  return (
    <div className="container">
      {data.map((record) => {
        count += 1;
        return <Item record={record} key={record.id} count={count} />;
      })}
      <div className='topbtn' >
        <button className={ scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type='button' onClick={()=>handleScroll()}><AiOutlineArrowUp /></button>
      </div>
      {console.log(scroll)}
    </div>
  );
};

export default Container;
