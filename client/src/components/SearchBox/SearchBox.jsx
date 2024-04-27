import React from 'react'
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from "@/components/ui/form"
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
    city: z.string().min(1, {
        message: "Ingresa una ciudad",
    }),


})
const SearchBox = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            city: "",
        },
    })

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
                <h1 className="text-2xl font-bold mb-4">Encuentra tu hotel perfecto</h1>
                <Form {...form}>
                    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-sm font-medium text-gray-700 mb-1"> Ubicación</FormLabel>
                                    <Input placeholder="Ingresa una ciudad" {...field} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="check_in"
                            render={({ field }) => (
                                <FormItem>
                                    <div>
                                        <FormLabel className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkIn">
                                            Check-in
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button className="w-full flex-col h-auto items-start" variant="outline">
                                                    {field.value ? (
                                                        <>
                                                            {format(field.value, "PPP")}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="font-normal">Selecciona una fecha</span>
                                                        </>
                                                    )}
                                                </Button>
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
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="check_out"
                            render={({ field }) => (
                                <FormItem>
                                    <div>
                                        <FormLabel className="block text-sm font-medium text-gray-700 mb-1" htmlFor="checkOut">
                                            Check-out
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button className="w-full flex-col h-auto items-start" variant="outline">
                                                    {field.value ? (
                                                        <>
                                                            {format(field.value, "PPP")}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="font-normal">Selecciona una fecha</span>
                                                        </>
                                                    )}
                                                </Button>
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
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="guests"
                            render={({ field }) => (
                                <FormItem>
                                    <div>
                                        <FormLabel className="block text-sm font-medium text-gray-700 mb-1" htmlFor="guests">
                                            Huéspedes
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="h-auto">
                                                <SelectValue
                                                    placeholder={
                                                        <div className="flex flex-col items-start">
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
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Button className="w-full h-12" size="lg" type="submit">
                                Buscar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div >
    )
}

export default SearchBox;
