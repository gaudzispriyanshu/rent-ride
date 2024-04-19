import React from 'react';
import { Link } from 'react-router-dom';

const HostCars = () => {
    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/host/cars")
            .then(res => res.json())
            .then(data => setCars(data.cars));
    }, []);

    const hostCarsEls = cars.map(car => (
        <div key={car.id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
            <Link to={`/host/cars/${car.id}`} className="block">
                <div>
                    <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full rounded-lg mb-4" />
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-medium mb-2">{car.model}</h3>
                        <p className="text-gray-700">${car.pricePerDay}/day</p>
                    </div>
                </div>
            </Link>
        </div>
    ));

    return (
        <section>
            <h1 className="text-2xl font-semibold m-4 text-center">Your Listed Cars are</h1>
            <div className="flex flex-wrap">
                {cars.length > 0 ? (
                    hostCarsEls
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </section>
    );
};

export default HostCars;
