import React from 'react';

const AllUsers = ({user}) => {
    const {_id,name, address,price,email} = user;
    
    const handleDeleteUser = id =>{
        const procced = window.confirm('Are You Sure To Delete Your Order')
        if(procced){
            const url = `https://evil-goosebumps-76567.herokuapp.com/users/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
            if(data.deletedCount > 0){
                alert('delete successfully')
                // const reaminingUser = user.filter(item => item._id !== id)
                
            }
        })
        }
    }
    return (
        <div>
            <div className="container">
            <table className="table table-striped">
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
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{price}</td>
                    <td><button onClick={() => handleDeleteUser(user._id)}>X</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;