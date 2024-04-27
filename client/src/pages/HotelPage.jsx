import React, { useState, useEffect } from 'react'
import { HotelPageView } from '@/components/HotelPageView/HotelPageView'
import HotelCard from '@/components/HotelCard/HotelCard'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const HotelPage = ({ endpoint }) => {
    let { id } = useParams();
    const [hotelsData, setHotelsData] = useState([])
    const [hotelId, setHotelId] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
            setIsLoading(false);

        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 404) {
                navigate('/');
            }
        }
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    if (!isLoading && !hotelId) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
            {isLoading ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
                </div>
            ) : (
                <>
                    <HotelPageView imgURLS={hotelId.photos} hotelName={hotelId.name} stars={hotelId.stars} reviews={hotelId.reviews} services={hotelId.services} location={hotelId.location} price={hotelId.price} description={hotelId.description} />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-600">
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                            {hotelsData.map((hotel, index) => (
                                <div key={index}>
                                    <Link to={`/hotel/${hotel.id}`} onClick={handleLinkClick} >
                                        <HotelCard
                                            id={hotel.id}
                                            imgURL={hotel.photos[0]}
                                            hotelName={hotel.name}
                                            stars={hotel.stars}
                                            description={hotel.description}
                                            price={hotel.price}
                                            key={hotel.id}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default HotelPage