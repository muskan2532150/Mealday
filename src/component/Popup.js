import React from 'react'

export const Popup = (record) => {
  return (
    <div className='popup'>
        <img src={record.url} alt={record.id} />
        
    </div>
  )
}
