import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Container/Containers';
import { useEffect } from 'react';
import { Item } from './Item';

export const Container = () => {
  const {data,status } = useSelector(state=>state.container);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  return (
    <>
    {data.map(record=>(
      <Item record={record} key={record.id}/>
    ))}
    </>
  );
};
