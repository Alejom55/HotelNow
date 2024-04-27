import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchBox from '../components/SearchBox/SearchBox'

const HomePage = () => {
    return (
        <>
            <NavBar />
            <main className="bg-gray-100 py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SearchBox />
                </div>
            </main>
        </>
    )
}

export default HomePage