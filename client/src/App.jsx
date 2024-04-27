// Routes
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage'
import HotelPage from './pages/HotelPage'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'
function App() {
  const [hotelsData, setHotelsData] = useState([])

  useEffect(() => {
    getAllHotels()
  }, [])
  const getAllHotels = async () => {
    try {
      const res = await axios.get(`${endpoint}/hotels`)
      setHotelsData(res.data)

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <div className="font-haken">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage data={hotelsData} />} />
            <Route path='/hotel/:id' element={<HotelPage data={hotelsData} endpoint={endpoint} />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}



export default App;
