import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "salmon",
        backgroundColor: "white",
        border: "1px solid blue",
        padding: "10px"
      }
      const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <div className="container">
                    <Navbar.Brand className="fw-bold" href="/home">Travel Agency</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <ul className="nav-link">
                            <li><NavLink activeStyle ={activeStyle} to="/home">Home</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to ="/myOrder">My Order</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to="/addNewService">Add A New Service</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to ="/manageAllOrder">Manage All Order</NavLink></li>
                            {
                                user.email ?<li><NavLink onClick={logOut} activeStyle ={activeStyle} to ="/login">Logout</NavLink></li>:
                                <li><NavLink activeStyle ={activeStyle} to ="/login">Login</NavLink></li>
                            }
                            <span style={{color: 'white'}}>{user.displayName}</span>
                        </ul>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;