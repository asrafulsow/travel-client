import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const [users, setUser] = useState([]);
    const {user} = useAuth()
    useEffect( () =>{
        fetch('https://evil-goosebumps-76567.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])


    //delete order
    const handleDeleteUser = id =>{
        const procced = window.confirm('Are You Sure, You want to delete')
        if(procced){
            const url = `https://evil-goosebumps-76567.herokuapp.com/users/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('Delete Successfully')
                    const remainingUser = users.filter(user => user._id !== id);
                    setUser(remainingUser)
                }
            })
        }
    }
    return (
        <div className="p-5">
            
        </div>
    );
};

export default MyOrder;