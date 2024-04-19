import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const HostCarPhotos = () => {
    const { currentCar } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="">
            <div>
                <img
                    src={currentCar.imageUrl}
                    alt={currentCar.model}
                    className="cursor-pointer w-full h-auto max-w-40"
                    onClick={openModal}
                />
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative max-w-3xl w-full h-auto">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={currentCar.imageUrl}
                            alt={currentCar.model}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HostCarPhotos;
