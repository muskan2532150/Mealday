import React from 'react'

export const Popup = ({record}) => {
    
    return (
        <div className='popup'>
            <img src={record.url} alt={record.id} />
            <p>Id: {record.id}</p>
            <p>Date: {record.date}</p>
            <p>Image-format: {record.format}</p>
            <p>Width: {record.width}</p>
            <p>Height: {record.height}</p>
            <p>IIIf-Base-Url: </p> <span><a href={record.iiibaseurl}></a></span>

            <footer>
                <p>{record.copyright}</p>
            </footer>
        </div>
    )
}
