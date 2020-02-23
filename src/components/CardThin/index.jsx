import React from 'react';
import { Link } from 'react-router-dom';

export default ({
    id,
    name,
    description,
    price,
    img
}) => (

    <div className='col-lg-4 d-flex align-items-stretch'>
        <div className='card'>
            <img className='card-img-top' src={img} />
            <div className='card-body text-center'>
                <h3><Link to={`/item/${id}`}>{name}</Link></h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
)