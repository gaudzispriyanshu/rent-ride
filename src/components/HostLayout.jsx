import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';

const HostLayout = () => {
    return (
        <div>
            <nav className="bg-one-200 text-white py-4">
                <ul className="flex justify-center">
                    <li className="mr-6">
                        <NavLink to="." end className={({isActive}) => isActive ? "hover:underline text-four-400" : "hover:underline text-one-400"}>Dashboard</NavLink>
                    </li>
                    <li className="mr-6">
                        <NavLink to="income" className={({isActive}) => isActive ? "hover:underline text-four-400" : "hover:underline text-one-400"}>Income</NavLink>
                    </li>
                    <li className="mr-6">
                        <NavLink to="cars" className={({isActive}) => isActive ? "hover:underline text-four-400" : "hover:underline text-one-400"}>Cars</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={({isActive}) => isActive ? "hover:underline text-four-400" : "hover:underline text-one-400"}>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default HostLayout;
