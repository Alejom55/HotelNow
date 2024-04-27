import React from 'react'
import SearchBox from '../components/SearchBox/SearchBox'
import HotelCard from '@/components/HotelCard/HotelCard'

const HomePage = ({ data }) => {
    return (
        <>
            <main className="bg-gray-100 py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SearchBox />
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((hotel, index) => (
                            <HotelCard
                                id={hotel.id}
                                imgURL={hotel.photos[0]}
                                hotelName={hotel.name}
                                stars={hotel.stars}
                                description={hotel.description}
                                price={hotel.price}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage