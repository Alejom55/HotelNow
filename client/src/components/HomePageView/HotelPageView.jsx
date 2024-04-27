import React, { useEffect, useRef, useState } from 'react'
import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { StarIcon, CheckIcon } from '@/assets/icons'
import Autoplay from "embla-carousel-autoplay"

export const HotelPageView = () => {
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
                            <CarouselItem>
                                <img
                                    alt="Hotel Image"
                                    className="h-full w-full object-cover rounded-md aspect-video "
                                    height={400}
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/453984560.jpg?k=82f9e55fdfbcc2a133a93c6e3c516f5d178d1ad566845117b44647ed57a00fe2&o=&hp=1"
                                    width={600}
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    alt="Hotel Image"
                                    className="aspect-video object-cover rounded-md"
                                    height={400}
                                    src="https://media.staticontent.com/media/pictures/1836100a-4983-47dc-8c01-361ae8d53526/1120x700?op=fit"
                                    width={600}
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    alt="Hotel Image"
                                    className="aspect-video object-cover rounded-md"
                                    height={400}
                                    src="/placeholder.svg"
                                    width={600}
                                />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                        {current} / {count}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">Hotel Oasis</h1>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            <StarIcon className="h-5 w-5" />
                            <span className="text-lg font-medium">4.6</span>
                        </div>
                        <span className="text-gray-500 text-sm">150 reviews</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Rodeado de jardines y con una piscina, el Hotel Oasis es el lugar perfecto para familias que buscan un
                        ambiente relajado y acogedor. Disfruta de nuestras instalaciones de primer nivel, incluyendo un gimnasio, un
                        restaurante y un spa.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Servicios</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>
                                    <CheckIcon className="h-4 w-4 mr-2 inline-block text-green-500" />
                                    Piscina
                                </li>
                                <li>
                                    <CheckIcon className="h-4 w-4 mr-2 inline-block text-green-500" />
                                    Gimnasio
                                </li>
                                <li>
                                    <CheckIcon className="h-4 w-4 mr-2 inline-block text-green-500" />
                                    Restaurante
                                </li>
                                <li>
                                    <CheckIcon className="h-4 w-4 mr-2 inline-block text-green-500" />
                                    Spa
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Ubicación</h3>
                            <p className="text-gray-600">Rodeado de jardines y a solo 10 minutos en coche del centro de la ciudad.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Disponibilidad</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="w-full flex-col h-auto items-start" variant="outline">
                                        <span className="font-semibold uppercase text-[0.65rem]">Check-in</span>
                                        <span className="font-normal">4/2/2024</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 max-w-[276px]">
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="w-full flex-col h-auto items-start" variant="outline">
                                        <span className="font-semibold uppercase text-[0.65rem]">Check-out</span>
                                        <span className="font-normal">10/2/2024</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 max-w-[276px]">
                                    <Calendar />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="mt-4">
                            <Select>
                                <SelectTrigger className="h-auto">
                                    <SelectValue
                                        placeholder={
                                            <div className="flex flex-col items-start">
                                                <span className="font-semibold uppercase text-[0.65rem]">Huéspedes</span>
                                                <span className="font-normal">2 adultos</span>
                                            </div>
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1 adulto</SelectItem>
                                    <SelectItem value="2">2 adultos</SelectItem>
                                    <SelectItem value="3">3 adultos</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold">$180/noche</span>
                                <Button
                                    className=" text-white font-bold py-2 px-4 rounded"
                                >
                                    Reservar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
