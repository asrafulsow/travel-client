import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import img from '../../picture/canada.png';
import img2 from '../../picture/lake.jpg'
import img3 from '../../picture/maldiv.jpg';
import img4 from '../../picture/sea.jpg';


import './Booking.css'

const Booking = () => {
    const { bookingId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({})
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`https://evil-goosebumps-76567.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    //deafult from
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const priceRef = useRef()
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const price = priceRef.current.value;
        const newUser = { name, email, address, city, price };
        fetch('https://evil-goosebumps-76567.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the order')
                    e.target.reset()
                }
            })

        e.preventDefault();
    }



    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-8">
                    <img style={{ width: '80%', height: '60%', objectFit: 'cover', marginBottom: '20px' }} src={service.img} alt="" /> <br />
                    <strong>Date: {service.date}</strong> || <strong>Posted: {service.posted}</strong> || <strong>Ratting: {service.ratting}</strong>
                    <h3 style={{ marginTop: '10px' }}>{service.title}</h3>
                    <p className="fw-bold">{service.price}</p>
                    <p className='mb-5' style={{ height: '700px' }}>{service.des}</p>
                </div>
                <div className="col-md-4">
                    <h3 className='mb-4'>Blog Search</h3>
                    <input style={{
                        width: '80%',
                        padding: '10px 10px',
                        border: '2px solid green',
                    }} type="text" placeholder='blog serarch' />

                    <div className="top-serarch mt-5">
                        <h3>Top Search</h3>
                        <div className="row mt-5">
                            <div className="col md-4">
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={img} alt="" />
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam natus ea placeat dolorum tenetur reprehenderit</p>
                                <button className='btn btn-primary'>Read More </button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col md-4">
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={img2} alt="" />
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam natus ea placeat dolorum tenetur reprehenderit</p>
                                <button className='btn btn-primary'>Read More </button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col md-4">
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={img3} alt="" />
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam natus ea placeat dolorum tenetur reprehenderit</p>
                                <button className='btn btn-primary'>Read More </button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col md-4">
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={img4} alt="" />
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam natus ea placeat dolorum tenetur reprehenderit</p>
                                <button className='btn btn-primary'>Read More </button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col md-4">
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={img2} alt="" />
                            </div>
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam natus ea placeat dolorum tenetur reprehenderit</p>
                                <button className='btn btn-primary'>Read More </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
