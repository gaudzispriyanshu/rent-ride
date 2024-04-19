import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostCarPricing = () => {
    const { currentCar } = useOutletContext();

    return (
        <section className="">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2">
                    <p className="text-gray-700">{currentCar.pricePerDay} Dollars</p>
                </div>
                {/* You can add more pricing details here */}
            </div>
        </section>
    );
}

export default HostCarPricing;
