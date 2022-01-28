import React,{useState} from 'react';
import './Register.css'
import regestration from '../../picture/regester.svg'
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const handleGoogleLogind = () =>{
        signInUsingGoogle()
    }

    const {user,registerUser,isLoading,authError} = useAuth();
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("your password didnt mathch")
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()

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
                            <input name="name" onBlur={handleOnBlur} type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Email</label>
                            <input name="email" onBlur={handleOnBlur} type="email" class="form-control" placeholder="Your email" aria-label="Email"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Password</label>
                            <input name="password" onBlur={handleOnBlur} type="password" class="form-control" placeholder="Your Password" aria-label="Password"/>
                        </div>
                        <div class="mb-3">
                            <label className="mb-2" htmlFor="">Re-Password</label>
                            <input name="password2" onBlur={handleOnBlur} type="password" class="form-control" placeholder="Your Password" aria-label="Password"/>
                        </div>
                        <button onClick={handleLoginSubmit} className='mb-3 btn-lg' type="submit">Regester</button><br />
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