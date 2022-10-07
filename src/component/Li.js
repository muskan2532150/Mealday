/* eslint-disable react/prop-types */
import React from 'react';

const Li = ({ nutritions }) => (
  <div className="li">
    <p>
      calories:
      {nutritions.calories}
    </p>
    <p>
      carbohydrates:
      {nutritions.carbohydrates}
    </p>
    <p>
      fat:
      {nutritions.fat}
    </p>
    <p>
      protein:
      {nutritions.protein}
    </p>
    <p>
      sugar:
      {nutritions.sugar}
    </p>
  </div>
);

export default Li;
