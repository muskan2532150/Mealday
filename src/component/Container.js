import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Container/Containers';
import Item from './Item';

const Container = () => {
  const { data } = useSelector((state) => state.container);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let count = 0;
  return (
    <div className="container">
      {data.map((record) => {
        count += 1;
        return <Item record={record} key={record.id} count={count} />;
      })}
    </div>
  );
};

export default Container;
