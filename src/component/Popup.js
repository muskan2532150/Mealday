import React from 'react'
import { Li } from './Li';
import {AiOutlineLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { useSelector } from 'react-redux';



export const Popup = () => {
const {data} = useSelector(state=>state.popup);
    let image = `images/${data.name}.jpg`;

    return (
        <div className='popup'>
            <button>
            <Link to='/' element={<Container/>} ><AiOutlineLeft/></Link>
            </button>
            <div className='body'>
                <img src={image} alt={data.name} />
                <div> <p>Name : {data.name}</p>
                    <p>Id: {data.id}</p>
                </div>
                <p>Family : {data.family}</p>
                <p>Order : {data.order}</p>
                <p>Genus: {data.genus}</p>
                <div className='nut'>
                    <p> Nutritions :</p>
                    <Li nutritions={data.nutritions} />
                </div>
            </div>
        </div>
    )
}
