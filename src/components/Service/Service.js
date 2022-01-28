import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, title, des,location,people,price,review,time,img} = service;
    console.log(_id)

    return (
        <div className="col-md-4">
            <div className="services-single mb-5">
                <img style={{width: '100%'}} src={img} alt="" />
                <p className="text-info fw-bold mt-3">{location}</p>
                <h3 className='mb-4'>{title}</h3>
                <Link to={`/booking/${_id}`}><button className="btn btn-primary">Read More {'>>'}</button></Link>
            </div>
        </div>
    );
};

export default Service;