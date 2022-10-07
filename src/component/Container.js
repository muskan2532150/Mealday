import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { fetchdata } from '../redux/Container/Containers';
import Item from './Item';

const Container = () => {
  const { data } = useSelector((state) => state.container);
  const [scroll, setscroll] = useState(document.documentElement.scrollTop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata('all'));
    window.onscroll = () => setscroll(document.documentElement.scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setscroll(0);
  };

  const handleSearch = (event) => {
    const title = document.querySelector('.inputText').value;
    const cat = document.querySelector('#category').value;
    if (event.key === 'Enter') { dispatch(fetchdata(`${cat}/${title}`)); }
  };

  let count = 0;
  return (
    <div className="container">
      <div className="search">
        {/* <button type='button'><AiOutlineSearch/></button> */}
        <select name="category" id="category">
          <option value="family">Family</option>
          <option value="genus">Genus</option>
          <option value="order">Order</option>
        </select>
        <input type="text" placeholder="Enter family" className="inputText" onKeyDown={() => handleSearch(event)} />
      </div>
      {data.map((record) => {
        count += 1;
        return <Item record={record} key={record.id} count={count} />;
      })}
      <div className="topbtn">
        <button className={scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type="button" onClick={() => handleScroll()}><AiOutlineArrowUp /></button>
      </div>
    </div>
  );
};

export default Container;
