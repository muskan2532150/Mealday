import React from 'react'

export const Popup = ({record}) => {
    console.log('pop up');
    return (
        <div className='popup'>
            <img src={record.url} alt={record.id} />
            <p>{record.id}</p>
            <p>{record.date}</p>
            <p>{record.format}</p>
            <p>{record.width}</p>
            <p>{record.height}</p>
            <a href={record.iiibaseurl}></a>

            <footer>
                <p>{record.copyright}</p>
            </footer>
        </div>
    )
}
