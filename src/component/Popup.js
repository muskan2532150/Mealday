import React from 'react'
import { Li } from './Li';

export const Popup = ({record}) => {
    
    let image = `images/${record.name}.jpg`;

    return (
        <div className='popup'>
          <div className='body'>
          <img src={image} alt={record.name} />
           <div> <p>Name : {record.name}</p>
            <p>Id: {record.id}</p></div>
            <p>Family : {record.family}</p>
            <p>Order : {record.order}</p>
            <p>Genus: {record.genus}</p>
            <div>
                <p> Nutritions :</p>
                <Li nutritions={record.nutritions}/>
            </div>
          </div>
        </div>
    )
}
