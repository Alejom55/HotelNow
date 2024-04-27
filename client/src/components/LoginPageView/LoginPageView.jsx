import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import React from 'react'
import { HotelIcon } from "@/assets/icons"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const LoginPageView = () => {
    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 py-6 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Link to={'/'}>
                            <HotelIcon className="h-8 w-8" />
                        </Link>
                        <h2 className="text-2xl font-bold">Iniciar sesión</h2>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                id="email"
                                placeholder="nombre@ejemplo.com"
                                type="email"
                            />
                        </div>
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="password">
                                Contraseña
                            </Label>
                            <Input
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                id="password"
                                placeholder="••••••••"
                                type="password"
                            />
                        </div>
                        <Button className="w-full" type="submit">
                            Aceptar
                        </Button>
                    </form>
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        ¿No tienes una cuenta?
                        <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/register">
                            Regístrate
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPageView;