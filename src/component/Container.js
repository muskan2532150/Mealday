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

  let count=0;
  return (
    <div className='container'>
    {data.map((record)=>{
      count+=1;
      return <Item record={record} key={record.id} count={count}/>
})}
    </div>
  );
};
