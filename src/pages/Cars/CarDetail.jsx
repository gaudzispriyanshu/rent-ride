import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const params = useParams();
    const [car, setCar] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/cars/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.cars));
    }, [params.id]);

    return (
        <main className="p-4">
            {car ? (
                <div className="bg-one-100 rounded-lg shadow-lg p-4">
                    <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full rounded-lg mb-4" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">{car.make}</h2>
                        <h3 className="text-lg font-medium mb-2">{car.model}</h3>
                        <p className="text-gray-700">Year: {car.year}</p>
                        <p className="text-gray-700">Color: {car.color}</p>
                        <p className="text-gray-700">Price Per Day: ${car.pricePerDay}</p>
                        <p className="text-gray-700">{car.description}</p>
                        <p className="text-gray-700">{car.insuranceIncluded ? 'Insurance Included' : 'Insurance Not Included'}</p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </main>
    );
}

export default CarDetail;
