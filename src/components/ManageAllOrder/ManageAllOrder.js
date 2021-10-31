import React,{useState,useEffect} from 'react';
import AllUsers from '../AllUsers/AllUsers';

const ManageAllOrder = () => {
    const [users, setUser] = useState([]);
    useEffect( () =>{
        fetch('https://evil-goosebumps-76567.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])
    return (
        <div className="p-5">
            <h1 className="fst-italic text-center mb-5 text-info">Manage all order {users.length}</h1>
            {
                users.map(user => <AllUsers key={user._id} user={user}></AllUsers>)
            }
        </div>
    );
};

export default ManageAllOrder;