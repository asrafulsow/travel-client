import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-5 text-center">
            <h2 className="text-center">404</h2>
            <h1 className="text-center mb-4">Opps Page Not Found</h1>
            <Link to="/home"><button className="btn btn-primary text-center">Go Back</button></Link>
        </div>
    );
};

export default NotFound;<h1>Opps Page Not Found</h1>