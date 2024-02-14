import React from 'react'
import homeImage from './../assets/rentride1.png';
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<main className='main'>
			<img id='home-image' src={homeImage} alt="A man is looking at his rented car" />
			<div id='content'>
				<h1 id='content-heading'>Empowering Community Through Shared Mobility: The RentRide Story</h1>
				<hr />
				<p id='content-para'>
					At RentRide, we're dedicated to revolutionizing the way people travel. Our platform seamlessly connects car owners with those in need of transportation, fostering a community built on trust, convenience, and shared experiences.

					<br /><br />With RentRide, everyone wins – car owners earn extra income while helping others get where they need to go, and travelers gain access to a diverse fleet of vehicles for every adventure. Join us today and discover the future of mobility
				</p>
				<Link to="cars" id='rent-button'> Visit rental gallery </Link>
			</div>
		</main>
	)
}

export default Home