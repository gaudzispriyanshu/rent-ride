import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars/Cars'
import CarDetail from './pages/Cars/CarDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostCars from './pages/Host/HostCars'
import HostCarDetail from './pages/Host/HostCarDetail'
import HostCarInfo from './pages/Host/HostCarInfo'
import HostCarPhotos from './pages/Host/HostCarPhotos'
import HostCarPricing from './pages/Host/HostCarPricing'
import { makeServer } from "../server"

if (process.env.NODE_ENV === "development") {
	makeServer({ environment: "development" })
}

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path = "/" element = {<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="cars" element={<Cars />} />
					<Route path="cars/:id" element={<CarDetail />} />
					<Route path="host" element={<HostLayout />}> 
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="reviews" element={<Reviews />} />
						<Route path="cars" element={<HostCars />} />
						<Route path="cars/:id" element={<HostCarDetail />} >
							<Route index element = {<HostCarInfo />} />
							<Route path = "pricing" element = {<HostCarPricing />} />
							<Route path = "photos" element = {<HostCarPhotos />} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App