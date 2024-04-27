import React, { useState, useEffect } from 'react'
import { HotelPageView } from '@/components/HotelPageView/HotelPageView'
import HotelCard from '@/components/HotelCard/HotelCard'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const HotelPage = ({ endpoint }) => {


    let { id } = useParams();
    const [hotelsData, setHotelsData] = useState([])
    const [hotelId, setHotelId] = useState([])

    useEffect(() => {
        getHotelId()
        getAllHotels()
    }, [id])
    const getAllHotels = async () => {
        try {
            const res = await axios.get(`${endpoint}/hotels`)
            setHotelsData(res.data)

        } catch (error) {
            console.log(error)
        }

    }
    const getHotelId = async () => {
        try {
            const res = await axios.get(`${endpoint}/hotel/${id}`)
            setHotelId(res.data)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <HotelPageView imgURLS={hotelId.photos} hotelName={hotelId.name} stars={hotelId.stars} reviews={hotelId.reviews} services={hotelId.services} location={hotelId.location} price={hotelId.price} description={hotelId.description} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-600">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hotelsData.map((hotel) => (
                        <Link to={`/hotel/${hotel.id}`} key={hotel.id} target="_self">
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