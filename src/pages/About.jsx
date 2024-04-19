import React from 'react'
import homeImage from './../assets/rentride1.png';
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
			<div className="md:order-1 p-4">
				<img src={homeImage} alt="A man is looking at his rented car" className="w-full h-auto md:order-none rounded" />	
			</div>
			<div className="md:order-2 flex justify-center items-center flex-col">
				<h1 className="text-3xl font-bold my-4">Empowering Community Through Shared Mobility: The RentRide Story</h1>
				<p className='italic my-5'>
					At RentRide, we're dedicated to revolutionizing the way people travel. Our platform seamlessly connects car owners with those in need of transportation, fostering a community built on trust, convenience, and shared experiences.

					<br /><br />With RentRide, everyone wins – car owners earn extra income while helping others get where they need to go, and travelers gain access to a diverse fleet of vehicles for every adventure. Join us today and discover the future of mobility
				</p>
				<Link to="/cars" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"> Visit rental gallery </Link>
			</div>
		</main>
	)
}

export default Home