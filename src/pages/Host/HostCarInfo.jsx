import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostCarInfo = () => {
    const { currentCar } = useOutletContext();

    return (
        <section className="">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2">
                    <h4 className="text-lg font-medium mb-2">Make: {currentCar.make}</h4>
                    <h4 className="text-lg font-medium mb-2">Model: {currentCar.model}</h4>
                    <h4 className="text-lg font-medium mb-2">Year: {currentCar.year}</h4>
                    <h4 className="text-lg font-medium mb-2">Color: {currentCar.color}</h4>
                </div>
                <div className="md:w-1/2">
                    <h4 className="text-lg font-medium mb-2">Description:</h4>
                    <p className="text-gray-700 mb-2">{currentCar.description}</p>
                    <h4 className="text-lg font-medium mb-2">{currentCar.insuranceIncluded ? 'Insurance Included' : 'Insurance Not Included'}</h4>
                </div>
            </div>
        </section>
    );
}

export default HostCarInfo;
