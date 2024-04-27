import React, { useState, useEffect } from 'react'
import { format } from "date-fns"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { formattedPrice } from '@/lib/utils'


const FormSchema = z.object({
    check_in: z.date({
        required_error: "Selecciona una fecha",
    }),
    check_out: z.date({
        required_error: "Selecciona una fecha",
    }),
    guests: z.string({
        required_error: "Selecciona una opción",
    }),

})

const HotelForm = ({ price }) => {

    const [formattedPrices, setFormattedPrices] = useState([]);
    useEffect(() => {
        if (price) {
            const formattedPriceResult = formattedPrice(price);
            setFormattedPrices(formattedPriceResult);
        }
    }, [price]);
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="check_in"
                    render={({ field }) => (
                        <FormItem>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                                            {field.value ? (
                                                <>
                                                    <span className="font-semibold uppercase text-[0.65rem]">Check-in</span>
                                                    {format(field.value, "PPP")}
                                                </>
                                            ) : (
                                                <>
                                                    <span className="font-semibold uppercase text-[0.65rem]">Check-in</span>
                                                    <span className="font-normal">Selecciona una fecha</span>
                                                </>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 max-w-[276px]">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date()
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="check_out"
                    render={({ field }) => (
                        <FormItem >
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button className="w-full flex-col h-auto items-start" variant="outline">
                                            {field.value ? (
                                                <>
                                                    <span className="font-semibold uppercase text-[0.65rem]">Check-out</span>
                                                    {format(field.value, "PPP")}
                                                </>
                                            ) : (
                                                <>
                                                    <span className="font-semibold uppercase text-[0.65rem]">Check-out</span>
                                                    <span className="font-normal">Selecciona una fecha</span>
                                                </>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 max-w-[276px]">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date()
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                        <FormItem>
                            <div className="mt-4">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="h-auto">
                                        <SelectValue
                                            placeholder={
                                                <div className="flex flex-col items-start">
                                                    <span className="font-semibold uppercase text-[0.65rem]">Huéspedes</span>
                                                    <span className="font-normal">Seleccione</span>
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
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold">{formattedPrices}/noche</span>
                        <Button
                            className=" text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Reservar
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default HotelForm

