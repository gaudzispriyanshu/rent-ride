import React from 'react';
import Car from '../../components/Car';

const Cars = () => {
    const [cars, setCars] = React.useState([]);
    React.useEffect(() => {
        fetch("/api/cars")
            .then(res => res.json())
            .then(data => setCars(data.cars))
            .catch(error => console.error("Error fetching cars:", error));
    }, []);

    const carElements = cars.map(car => (
        <div key={car.id} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
            <Car car={car} />
        </div>
    ));

    return (
        <main className='main'>
            <div className="flex flex-wrap">
                {carElements}
            </div>
        </main>
    );
};

export default Cars;
