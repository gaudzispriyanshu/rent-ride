import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 text-center">
            <p>&copy; Made by <Link to="https://www.linkedin.com/in/gaudz/" className="underline hover:text-gray-400">Priyanshu Thakur</Link>. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
