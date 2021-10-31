import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation,useHistory} from 'react-router-dom';
import svgImg from '../../picture/logini.svg'
import useAuth from '../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogind = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <div className="login-area p-5">
                <h1 className="text-center mb-5">Working Sign In</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{width: '100%'}} src={svgImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-info">Please Log in</h4 >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button className="signin-btn" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <button onClick={handleGoogleLogind} className="google-btn btn-primary mt-4"><i className="fab fa-google"></i> Signin with google</button>
                        <p className="mt-4">Dont have an account? <Link to="/registration">Sign up</Link></p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Login;