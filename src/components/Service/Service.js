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
                <h2>{title}</h2>
                <p>{des}</p>
                <div className="row">
                    <div className="col-md-6">
                        <p className="fw-bold">People: {people}</p>
                        <p className="fw-bold">Price: {price}</p>
                    </div>
                    <div className="col-md-6">
                        <p className="fw-bold">Review: ({review} rev)</p>
                        <p className="fw-bold">Time: {time}</p>
                    </div>
                </div>
                <Link to={`/booking/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Service;