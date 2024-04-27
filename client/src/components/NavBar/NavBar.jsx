import React from 'react'
import { HotelIcon, UserIcon } from '@/assets/icons'
import { Link } from 'react-router-dom'
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
const NavBar = () => {
    return (
        <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white sm:px-6 lg:px-8">
            <div className="flex items-center">
                <Link className="flex items-center" to="#">
                    <HotelIcon className="h-8 w-8 mr-2" />
                    <span className="text-lg font-bold">HotelNow</span>
                </Link>
            </div>
            <nav className="flex space-x-4">
                <Link className="hover:underline hidden sm:block" to="#">
                    Hoteles
                </Link>
                <Link className="hover:underline hidden sm:block" to="#">
                    Ofertas
                </Link>
                <Link className="hover:underline hidden sm:block" to="#">
                    Ayuda
                </Link>
                <Link className="hover:underline hidden sm:block" to="#">
                    Noticias
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex items-center" variant="ghost">
                            <UserIcon className="h-5 w-5 mr-2" />
                            Cuenta
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link to="#">Iniciar sesión</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="#">Registrarse</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    )
}

export default NavBar;

