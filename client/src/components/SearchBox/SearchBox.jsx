import React from 'react'
import { DownArrow } from '../../assets/icons'
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
const SearchBox = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
                <h1 className="text-2xl font-bold mb-4">Encuentra tu hotel perfecto</h1>
                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
                            Ubicación
                        </label>
                        <Input id="location" placeholder="Ingresa una ciudad" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkIn">
                            Check-in
                        </label>
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
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkOut">
                            Check-out
                        </label>
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="guests">
                            Huéspedes
                        </label>
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
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <Button className="w-full h-12" size="lg">
                            Buscar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBox;
