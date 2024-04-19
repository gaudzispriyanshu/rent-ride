import React from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'

const HostCarDetail = () => {
    const { id } = useParams()
    const [currentCar, setCurrentCar] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/cars/${id}`)
            .then(res => res.json())
            .then(data => setCurrentCar(data.cars))
    }, [])
    if (!currentCar) {
        return (
            <div className='p-4'>
                <Link
                    to=".."
                    relative="path"
                    className="text-gray-700 hover:text-gray-900"
                >&larr; <span>Back to all Cars</span>
                </Link>
                <h1 className="text-xl font-semibold mt-4">Loading...</h1>
            </div>
        )
    }
    return (
        <section className="p-4">
            <Link
                to=".."
                relative="path"
                className="text-gray-700 hover:text-gray-900"
            >&larr; <span>Back to all Cars</span></Link>
            <div className=" m-4">
                <div className="">
                    <div className="mb-4 md:mb-0">
                        <img src={currentCar.imageUrl} alt={currentCar.model} className="w-1/2 h-1/2 rounded-lg" />
                    </div>
                    <div className="text-center my-4 md:text-left">
                        <h3 className="text-xl font-medium">{currentCar.make} {currentCar.model}</h3>
                    </div>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-start gap-4">
                    <NavLink to="." end className={({ isActive }) => isActive ? "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0 text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0"}>Details</ NavLink>
                    <NavLink to="pricing" className={({ isActive }) => isActive ? "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0 text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0"}>Pricing</ NavLink>
                    <NavLink to="photos" className={({ isActive }) => isActive ? "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0 text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 md:mr-4 md:mb-0 md:mb-4 md:text-xl md:font-medium md:mb-0"}>Photos</ NavLink>
                </nav>
                <Outlet context={{ currentCar }} />
            </div>
        </section>
    )
}

export default HostCarDetail





