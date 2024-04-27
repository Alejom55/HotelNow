import React from 'react'
import { HotelIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white sm:px-6 lg:px-8">
            <div className="flex items-center">
                <Link className="flex items-center" to="/">
                    <HotelIcon className="h-8 w-8 mr-2" />
                    <span className="text-lg font-bold">HotelNow</span>
                </Link>
            </div>
            <nav className="hidden md:flex space-x-4">
                <Link className="hover:underline" to="/uwu">
                    Hoteles
                </Link>
                <Link className="hover:underline" to="#">
                    Ofertas
                </Link>
                <Link className="hover:underline" to="#">
                    Ayuda
                </Link>
                <Link className="hover:underline" to="#">
                    Cuenta
                </Link>
            </nav>
        </header>
    )
}

export default NavBar;

