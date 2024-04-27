import React, { useState, useEffect } from 'react'
import { HotelPageView } from '@/components/HotelPageView/HotelPageView'
import HotelCard from '@/components/HotelCard/HotelCard'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const HotelPage = ({ data, endpoint }) => {
    let { id } = useParams();
    const [hotelsData, setHotelsData] = useState([])

    useEffect(() => {
        getAllHotels()
    }, [])
    const getAllHotels = async () => {
        try {
            const res = await axios.get(`${endpoint}/hotel/${id}`)
            setHotelsData(res.data)
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }


    }
    const filteredData = data.filter(hotel => hotel.id !== id);
    return (
        <>
            <HotelPageView imgURLS={hotelsData.photos} hotelName={hotelsData.name} stars={hotelsData.stars} reviews={hotelsData.reviews} services={hotelsData.services} location={hotelsData.location} price={hotelsData.price} description={hotelsData.description} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-600">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((hotel) => (
                        <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
                            <HotelCard
                                id={hotel.id}
                                imgURL={hotel.photos[0]}
                                hotelName={hotel.name}
                                stars={hotel.stars}
                                description={hotel.description}
                                price={hotel.price}
                            />
                        </Link>

                    ))}
                </div>
            </div>
        </>
    )
}

export default HotelPage