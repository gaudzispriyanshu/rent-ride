import React from 'react';
import { Link } from "react-router-dom";

const Car = (props) => {
    const { car } = props;

    return (
        <div key={car.id} className="bg-one-100 rounded-lg shadow-lg p-4 flex flex-col lg:flex-row">
            {/* Image displayed on the left for large screens */}
            <div className="lg:w-1/2 lg:pr-4">
                <Link to={`/cars/${car.id}`} className="block">
                    <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full rounded-lg mb-4" />
                </Link>
            </div>
            {/* Details displayed on the right for large screens and below for small screens */}
            <div className="lg:w-1/2 lg:pl-4">
                <Link to={`/cars/${car.id}`} className="block">
                    <div>
                        <h2 className="text-xl font-bold mb-2">{car.make}</h2>
                        <h3 className="text-lg font-medium mb-2">{car.model}</h3>
                        <p className="text-gray-700">Year: {car.year}</p>
                        <p className="text-gray-700">Color: {car.color}</p>
                        <p className="text-gray-700">Price Per Day: ${car.pricePerDay}</p>
                        {/* <p className="text-gray-700">{car.description}</p> */}
                        <p className="text-gray-700">{car.insuranceIncluded ? 'Insurance Included' : 'Insurance Not Included'}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Car;
