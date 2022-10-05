import React from 'react';

export const Item = ({record}) => {
  return (
    <div>
        <img src={record.url} alt={record.name} />
        <p>{record.name}</p>
    </div>
  )
}
