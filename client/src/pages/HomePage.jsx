import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchBox from '../components/SearchBox/SearchBox'
import HotelCard from '@/components/HotelCard/HotelCard'
import Footer from '@/components/Footer/Footer'

const HomePage = () => {
    return (
        <>
            <NavBar />

            <main className="bg-gray-100 py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SearchBox />
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <HotelCard imgURL={'https://media.staticontent.com/media/pictures/fd141e7d-56fb-424c-869c-0ae7ee24020f/853x380?op=TRUNCATE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1'}
                            hotelName={'Blues Suites Medellín'}
                            stars={5}
                            description={'Blues Suites Medellín se encuentra en Medellín. Cuenta con wi-fi gratis en zonas comunes, servicio de spa y servicio de masajes, además de valet parking.'}
                            price={11525390} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage