import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchdata } from '../redux/Container/Containers';
import { useEffect } from 'react';

export const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  return (
    <div>Container</div>
  );
};
