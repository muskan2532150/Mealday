import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from './Container';

const Popup = () => {
  const { data } = useSelector((state) => state.popup);

  return (
    <div className="popup">
      <button type="button">
        <Link to="/" element={<Container />}><AiOutlineLeft /></Link>
      </button>
      <div className="body">
        <img src={data.url} alt={data.strMeal} />
        {' '}
        <li>
          <p> Meal : </p>
          <p>
            {' '}
            {data.strMeal}
          </p>
        </li>
        <li>
          <p>Id:</p>
          <p>
            {' '}
            {data.idMeal}
            {' '}
          </p>
        </li>
        <li>
          <p>  Area : </p>
          <p>
            {' '}
            {data.strArea}
            {' '}
          </p>
        </li>
        <li>
          <p>  Category : </p>
          <p>
            {' '}
            {data.strCategory}
            {' '}
          </p>
        </li>
        <li>
          <p> Tags:  </p>
          <p>
            {' '}
            {data.Tags}
            {' '}
          </p>
        </li>
      </div>
    </div>
  );
};

export default Popup;
