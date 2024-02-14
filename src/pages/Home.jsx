import React from 'react'
import aboutImage1 from './../assets/rentride2.png';
import aboutImage2 from './../assets/rentride3.png';
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<main className='main'>
			<img id='home-image' src={aboutImage1} alt="a family of four enjoying the trip" />
			<div id='content'>
				<h1 id='content-heading'>Find Your Perfect Ride, Anytime, Anywhere with RentRide!</h1>
				<hr />
				<p id='content-para'>
					Say goodbye to the hassle of traditional car rental and hello to RentRide – your ultimate destination for unlocking the freedom of the open road. Whether you're planning a weekend getaway, a cross-country adventure, or simply need a reliable set of wheels for your daily commute, RentRide has you covered. Browse our curated collection of vehicles, from sleek sedans to rugged SUVs, and find the perfect ride to match your style and budget. With flexible rental options, transparent pricing, and a seamless booking process, RentRide makes it easier than ever to hit the road and make unforgettable memories. Start your journey with RentRide today!
				</p>
				<Link to="cars" id='rent-button'> See our cars </Link>
			</div>
			<div id='content'>
				<h1 id='content-heading'>Unlock Your Car's Earning Potential with RentRide!</h1>
				<hr />
				<p id='content-para'>
					Ready to turn your idle wheels into a revenue stream? RentRide is your ticket to hassle-free car rental. Whether you're a road warrior with a spare set of keys or a savvy traveler seeking the perfect ride, our platform connects you with trusted renters and reliable vehicles. With RentRide, it's not just about sharing cars – it's about sharing experiences, savings, and smiles. Join our community today and start your journey towards effortless earning and unforgettable adventures
				</p>
				<Link to="cars" id='rent-button'> Rent your car </Link>
			</div>
			<img id='home-image' src={aboutImage2} alt="a family of four enjoying the trip" />
			
		</main>
	)
}

export default About