import { HotelIcon } from '@/assets/icons'
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center">
                    <HotelIcon className="h-6 w-6 mr-2" />
                    <span className="text-lg font-bold">HotelNow</span>
                </div>
                <nav className="flex space-x-4">
                    <Link className="hover:underline" to="#">
                        Términos de servicio
                    </Link>
                    <Link className="hover:underline" to="#">
                        Política de privacidad
                    </Link>
                    <Link className="hover:underline" to="#">
                        Contacto
                    </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer