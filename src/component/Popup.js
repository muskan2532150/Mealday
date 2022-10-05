import React from 'react'
import { Li } from './Li';

export const Popup = ({record}) => {
    
    return (
        <div className='popup'>
            {/* <img src={record.url} alt={record.id} /> */}
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
    )
}
