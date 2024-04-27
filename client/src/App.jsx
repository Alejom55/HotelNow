// Routes
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage'
import HotelPage from './pages/HotelPage'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
function App() {

  return (
    <>
      <div className="font-haken">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage endpoint={endpoint}/>} />
            <Route path='/hotel/:id' element={<HotelPage endpoint={endpoint} />} />
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
