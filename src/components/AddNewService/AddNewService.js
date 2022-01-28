import React, { useRef } from 'react';
import './AddNewService.css'

const AddNewService = () => {
    //deafult from
    const nameRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const loactionRef = useRef();
    const timeRef = useRef();
    const dateRef = useRef();
    const postedRef = useRef();
    const rattingRef = useRef();

    const handleAddService = e =>{
        const title = nameRef.current.value;
        const des = desRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const location= loactionRef.current.value;
        const time = timeRef.current.value;
        const date = dateRef.current.value;
        const posted = postedRef.current.value;
        const ratting = rattingRef.current.value;
        const newUsers = {title,des,img,price,location,time,date,posted,ratting};
        fetch('https://evil-goosebumps-76567.herokuapp.com/services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUsers)
        })
        .then()

        e.preventDefault();
    }

    return (
        <div className='add-services p-5'>
            <div className="container">
                <h1 className='text-center mb-4 text-primary'>Add new service area</h1>
                <form onSubmit={handleAddService}>
                        <input type="text" ref={nameRef} placeholder="title"/>
                        <input type="text" ref={desRef} placeholder="desctiption"/>
                        <input type="text" ref={imgRef} placeholder="img url"/>
                        <input type="number" ref={priceRef} placeholder="price"/>
                        <input type="text" ref={loactionRef} placeholder="location"/>
                        <input type="text" ref={timeRef} placeholder="time"/>
                        <input type="text" ref={dateRef} placeholder="date"/>
                        <input type="text" ref={postedRef} placeholder="posted"/>
                        <input type="text" ref={rattingRef} placeholder="ratting"/>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        </div>
    );
};

export default AddNewService;
