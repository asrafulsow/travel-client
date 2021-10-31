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
            <h1 className="fst-italic text-center mb-5 text-info">My Order</h1>
            {
                user.email?
                users.map( user => 
                    <div key={user._id}>
                        <div className="container">
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row"></th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.price}</td>
                                <td><button onClick={() => handleDeleteUser(user._id)}>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                )
                :<div className="confirm-ord">Please LogIn And Add Order</div>
            }
        </div>
    );
};

export default MyOrder;