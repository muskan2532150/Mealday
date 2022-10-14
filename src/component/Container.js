import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowUp, AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { fetchdata } from '../redux/Container/Containers';
import Item from './Item';

const Container = () => {
  const { data } = useSelector((state) => state.container);
  const [scroll, setscroll] = useState(document.documentElement.scrollTop);
  const [bool, setbool] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata(''));
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
    if (event.key === 'Enter') {
      dispatch(fetchdata(`${title}`));
      document.querySelector('.sp').innerHTML = 'Searched Meal';
    }
  };

  return (
    <main>
      <div className="search">
        { bool ? (
          <>
            <div>
              <input type="text" placeholder="Enter Meal" className="inputText" onKeyDown={() => handleSearch(event)} />
              <button
                type="button"
                onClick={() => { dispatch(fetchdata('')); document.querySelector('.inputText').value = ''; setbool(!bool); }}
              >
                <AiFillCloseCircle />
              </button>
            </div>
            {bool ? <p className="sp" /> : ''}
          </>
        )
          : <button type="button" className="sbtn" onClick={() => setbool(!bool)}><AiOutlineSearch /></button>}
      </div>
      <div className="container">
        {data.map((record) => <Item record={record} key={record.idMeal} />)}
        <div className="topbtn">
          <button className={scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type="button" onClick={() => handleScroll()}><AiOutlineArrowUp /></button>
        </div>
      </div>
    </main>

  );
};

export default Container;
