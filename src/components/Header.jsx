import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-one-400 text-white py-4">
            <Link to="/" className="text-2xl font-montserrat ml-4 text-black" >RENTRIDE</Link>
            <nav className='navlink flex gap-4 ml-4'>
                <NavLink to="/cars" className={({isActive}) => isActive ? "hover:underline text-one-100 font-ubuntu" : "hover:underline text-three-400 font-ubuntu"}>Cars</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "hover:underline text-one-100 font-ubuntu" : "hover:underline text-three-400 font-ubuntu"}>About</NavLink>
                <NavLink to="/host" className={({isActive}) => isActive ? "hover:underline text-one-100 font-ubuntu" : "hover:underline text-three-400 font-ubuntu"}>Host</NavLink>
            </nav>
        </header>
    );
};

export default Header;
