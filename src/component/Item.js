import React from 'react';

export const Item = ({record}) => {
    const handleClick = () => {
    console.log('image is clicked');
    }
  return (
    <div className='cards'>
        <img src={record.url} alt={record.id} />
        <p>{record.date}</p>
        <button type='button' onClick={()=>handleClick()}> nbccb</button>
    </div>
  )
}
