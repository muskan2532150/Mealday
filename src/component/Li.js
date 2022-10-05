import React from 'react'

export const Li = ({nutritions}) => {
  return (
    <div>
       
         <p>calories: {nutritions.calories}</p>
<p>carbohydrates: {nutritions.carbohydrates}</p>
<p>fat: {nutritions.fat}</p>
<p>protein: {nutritions.protein}</p>
<p>sugar: {nutritions.sugar}</p>
            </div>
  )
}
