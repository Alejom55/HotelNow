import React, { useState, useEffect } from 'react'
import SearchBox from '../components/SearchBox/SearchBox'
import HotelCard from '@/components/HotelCard/HotelCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
const HomePage = ({ endpoint }) => {
    const [hotelsData, setHotelsData] = useState([])

    useEffect(() => {
        getAllHotels()
    }, [])
    const getAllHotels = async () => {
        try {
            const res = await axios.get(`${endpoint}/hotels`)
            setHotelsData(res.data)

        } catch (error) {
            console.log(error)
        }

    }
    const handleLinkClick = () => {
        window.scrollTo(0, 0); // Scroll hacia arriba
    };
    return (
        <>
            <main className="bg-gray-100 py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SearchBox />
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hotelsData.map((hotel, index) => (
                            <Link to={`/hotel/${hotel.id}`} key={hotel.id} onClick={handleLinkClick}>
                                <HotelCard
                                    id={hotel.id}
                                    imgURL={hotel.photos[0]}
                                    hotelName={hotel.name}
                                    stars={hotel.stars}
                                    description={hotel.description}
                                    price={hotel.price}
                                    key={index}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage