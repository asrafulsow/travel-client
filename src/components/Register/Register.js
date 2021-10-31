import React from 'react';
import './Register.css'
import regestration from '../../picture/regester.svg'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const handleGoogleLogind = () =>{
        signInUsingGoogle()
    }
    return (
        <div>
            <h3 className="text-center mt-5">Please Resister Form fill up</h3>
            <div className="container p-5">
            <div class="row">
                <div className="col-md-6">
                    <img style={{width: '100%'}} src={regestration} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="regestration-area">
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Frist name</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Last name</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Email</label>
                            <input type="email" class="form-control" placeholder="Your email" aria-label="Email"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Password</label>
                            <input type="password" class="form-control" placeholder="Your Password" aria-label="Password"/>
                        </div>
                        <button className='mb-3 btn-lg' type="submit">Submit</button><br />
                        <button onClick={handleGoogleLogind} className="btn-lg">Sign Up Google</button>
                        <p>Already have an account? <Link to ="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;