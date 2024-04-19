import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from './../assets/rentride2.png';
import aboutImage2 from './../assets/rentride3.png';

const About = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
			<div className="md:order-1 p-4">
				<img src={aboutImage1} alt="a family of four enjoying the trip" className="w-full h-auto md:order-none rounded" />
			</div>

			<div className="md:order-2 flex justify-center items-center flex-col">
				<h1 className="text-3xl font-bold my-4">Find Your Perfect Ride, Anytime, Anywhere with RentRide!</h1>
				<p className='italic my-5'>
					Say goodbye to the hassle of traditional car rental and hello to RentRide – your ultimate destination for unlocking the freedom of the open road. Whether you're planning a weekend getaway, a cross-country adventure, or simply need a reliable set of wheels for your daily commute, RentRide has you covered. Browse our curated collection of vehicles, from sleek sedans to rugged SUVs, and find the perfect ride to match your style and budget. With flexible rental options, transparent pricing, and a seamless booking process, RentRide makes it easier than ever to hit the road and make unforgettable memories. Start your journey with RentRide today!
				</p>
				<Link to="/cars" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
					See our cars
				</Link>

			</div>
			<div className="md:order-2 flex justify-center items-center flex-col">
				<h1 className="text-3xl font-bold my-4">Unlock Your Car's Earning Potential with RentRide!</h1>
				<p className='italic my-5'>
					Ready to turn your idle wheels into a revenue stream? RentRide is your ticket to hassle-free car rental. Whether you're a road warrior with a spare set of keys or a savvy traveler seeking the perfect ride, our platform connects you with trusted renters and reliable vehicles. With RentRide, it's not just about sharing cars – it's about sharing experiences, savings, and smiles. Join our community today and start your journey towards effortless earning and unforgettable adventures
				</p>
				<Link to="/cars" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
					See our cars
				</Link>

			</div>
			<div className="md:order-4 p-4">
				<img src={aboutImage2} alt="a family of four enjoying the trip" className="w-full h-auto md:order-none rounded" />
			</div>
		</main>
	)
}

export default About;