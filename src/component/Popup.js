import React from 'react'
import { Li } from './Li';
import {AiOutlineLeft} from 'react-icons/ai';


export const Popup = ({ record,handleClickProp }) => {

    let image = `images/${record.name}.jpg`;

    return (
        <div className='popup'>
              <button onClick={()=>handleClickProp()}><AiOutlineLeft/></button>
            <div className='body'>
                <img src={image} alt={record.name} />
                <div> <p>Name : {record.name}</p>
                    <p>Id: {record.id}</p>
                </div>
                <p>Family : {record.family}</p>
                <p>Order : {record.order}</p>
                <p>Genus: {record.genus}</p>
                <div className='nut'>
                    <p> Nutritions :</p>
                    <Li nutritions={record.nutritions} />
                </div>
            </div>
        </div>
    )
}
