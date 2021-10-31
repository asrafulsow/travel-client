import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area bg-dark text-white p-4">
            <div className="container">
                <div className="row">
                    {/* About title */}
                    <div className="about-title col-md-3">
                        <h3 className="mb-4">ABOUT TRAVEL</h3>
                        <p>Fitness is the key of health.Stay fitness ans stay healthy.We Provide best Service in our organization</p>
                        <div className="icon mt-5">
                            <i style={{color:'#00c4ff'}} className="fab fa-facebook-square"></i>
                            <i style={{color:'salmon'}} className="fab fa-instagram-square"></i>
                            <i style={{color:'#0dc7ff'}} className="fab fa-twitter-square"></i>
                            <i style={{color:'#1d58ff'}} className="fab fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="latest-course-footer col-md-3">
                        {/* conact information */}
                        <h4 className="mb-4">CONTACT INFORMATION</h4>
                        <p>If you need any help please contact us.We provide you best suggestion.</p>
                        <div className="row">
                            <div className="col">
                                <p><i className="fas fa-map-marker-alt"></i> +10(7867)0675</p>
        	                    <p><i className="fas fa-envelope"></i> companydomain@gmail.com</p>
                                <p><i className="fas fa-map-marker-alt"></i> 34 stree, bang</p>
                            </div>
                        </div>
                    </div>
                    {/* latest-post */}
                    <div className="latest-post col-md-3">
                        <h4 className="mb-4">LATEST POST</h4>
                        <p>Life is a beautiful journey not a destination</p>
                        <small>August 17,2021 | No Comments</small>
                        <hr />
                        <p>Takes only memory leave only footpoints</p>
                        <small>August 17,2021 | No Comments</small>
                    </div>
                    {/* subscribe */}
                    <div className="subscribe-area col-md-3">
                        <h4 className="mb-4">SUBSCRIBE US</h4>
                        <p>Subscribe Our Newsletter to Get more Update and join Our Course Information</p>
                        <input type="text" placeholder="Enter Your Email"/><br />
                        <button className="btn bg-info">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;