import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import img1 from '../../picture/maldiv.jpg';
import img2 from '../../picture/lake.jpg';
import img3 from '../../picture/sea.jpg';
import img4 from '../../picture/frist.jpg';
import img5 from '../../picture/sec.jpg';
import img6 from '../../picture/third.jpg'
import img7 from '../../picture/canada.png';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import useAuth from '../hooks/useAuth';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('https://evil-goosebumps-76567.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="text-center spinner" animation="border" variant="info" />
    }

    return (
        <div>
            <div className="carousel-area">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1>TRAVELLING AROUND THE WORLD</h1>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail</p>
                        <button>See More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {img2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h1>Life is a journey, not a destination</h1>
                        <p>I am not the same, having seen the moon shine on the other side of the world</p>
                        <button>See More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h1>Wherever you go becomes a part of you somehow</h1>
                        <p>There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them</p>
                        <button>See More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* servises area start */}
            <div className="services-area p-5 container">
                <div className="services-content text-center">
                    <p>EXPLORE GREATE PLACE</p>
                    <h1>POPULAR PACKAGES</h1>
                    <p>Our packages are very cheap and</p>
                </div>
                <div className="allservices">
                    <div className="row">
                        {
                            services.map(service => <Service
                            key ={service._id}
                            service = {service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>

            {/* our tour gallary area */}
            <div className="tour-gallary">
                <div className="container p-5">
                <div className="row">
                    <div className="col-md-5">
                        <p className="text-danger fw-bold">OUR TOUR GALLERY</p>
                        <hr className="hr" />
                        <h2 className="fw-bold fs-1">BEST TRAVELER'S SHARED PHOTOS</h2>
                        <p>The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'.[2] According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).</p>
                        <div className="tp-gallary mt-5">
                            <img style={{width:"100%"}} src={img2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6">
                                <img style={{width:"100%"}} src={img5} alt="" />
                            </div>
                            <div className="col-md-6">
                                <img style={{width:"100%"}} src={img6} alt="" />
                            </div>
                            <div className="full-img mt-4">
                            <img style={{width:'100%'}} src={img4} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            {/* about us area */}
            <div className="about-us-area p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about-us-img">
                                <img style={{width:'100%', marginRight: '10px'}} src={img7} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="about-us-content">
                                <h1>ABOUT US</h1>
                                <hr className="hr" />
                                <p className='fw-bold mb-4'>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.</p>
                                <p>On the other hand,we denounce with rightous indignation the foult anuals dislike man who are so beguiled and demoralize by the nuhaiicharms of plsure of the moment</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>* Personalized Service</p>
                                        <p>* 24/7 Support</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>* Best Price</p>
                                        <p>* Trusted Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

