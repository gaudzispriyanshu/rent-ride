import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'

const App = () => {
	return (
		<BrowserRouter>
			<header className='navbar'>
				<Link to="/" className='heading'>RENTRIDE</Link>
				<nav className='navlink'>
					<Link to="/cars" className='navlink1'>Cars</Link>
					<Link to="/about" className='navlink2'>About</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/cars' element={<Cars />} />
			</Routes>
			<footer className="footer">
				<p className='footer-text'>&copy; Made by <Link className='linkedin-link' to="https://www.linkedin.com/in/gaudz/</p>">Priyanshu Thakur</Link>. All rights reserved.</p>
			</footer>
		</BrowserRouter>
	)
}

export default App