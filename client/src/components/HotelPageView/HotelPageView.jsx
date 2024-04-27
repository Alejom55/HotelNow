import React, { useEffect, useRef, useState } from 'react'
import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"

import { StarIcon, CheckIcon } from '@/assets/icons'
import Autoplay from "embla-carousel-autoplay"

import HotelForm from './HotelForm/HotelForm'

export const HotelPageView = ({ imgURLS, hotelName, stars, reviews, services, location, price, description }) => {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const plugin = useRef(
        Autoplay({ delay: 4500, stopOnInteraction: true })
    )

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1 md:h-auto">
                    <Carousel className="w-full cursor-grab " plugins={[plugin.current]} setApi={setApi}>
                        <CarouselContent>
                            {imgURLS && imgURLS.map((img, index) => (
                                <CarouselItem key={index}>
                                    <img
                                        alt="Hotel Image"
                                        className="h-full w-full object-cover rounded-md aspect-video "
                                        height={400}
                                        src={img}
                                        width={600}
                                    />
                                </CarouselItem>

                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                        {current} / {count}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{hotelName}</h1>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            <StarIcon className="h-5 w-5" />
                            <span className="text-lg font-medium">{stars}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{reviews} reviews</span>
                    </div>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Servicios</h3>
                            <ul className="text-gray-600 space-y-2">
                                {services && services.map((service, index) => (
                                    <li key={index}>
                                        <CheckIcon className="h-4 w-4 mr-2 inline-block text-green-500" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Ubicación</h3>
                            <p className="text-gray-600">{location}</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Disponibilidad</h2>
                <HotelForm price={price} />
            </div>
        </div>
    )


}
