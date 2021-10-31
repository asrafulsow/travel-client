import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

import './Booking.css'

const Booking = () => {
   const {bookingId} = useParams();
   const {user} = useAuth();
    const [service, setService] = useState({})
    const [data, setData] = useState()
    useEffect( () =>{
        fetch(`https://evil-goosebumps-76567.herokuapp.com/services/${bookingId}`)
        .then(res => res.json())
        .then(data => setService(data))
    } ,[])


    //deafult from
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const priceRef = useRef()
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const price = priceRef.current.value;
        const newUser = {name,email,address,city,price};
        fetch('https://evil-goosebumps-76567.herokuapp.com/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully added the order')
                e.target.reset()
            }
        })

        e.preventDefault();
    }



    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-7">
                    <form className="shipping-form" onSubmit={handleAddUser}>
                        <input defaultValue={user.displayName} type="text" ref={nameRef}/>
                        <input defaultValue={user.email} type="email" name="" id="" ref={emailRef} />
                        <input  type="text" ref={addressRef} placeholder="address"/>
                        <input  type="text" ref={cityRef} placeholder="city"/>
                        <input defaultValue={service.price} type="text" ref={priceRef} placeholder="price"/>  
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-md-5">
                    <img style={{width: '100%'}} src={service.img} alt="" />
                    <h3>{service.title}</h3>
                    <p className="fw-bold">{service.price}</p>
                    <p>{service.des}</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;
