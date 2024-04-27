import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage'
import HotelPage from './pages/HotelPage'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(false)
  const hideNavBarRoutes = ['/login', '/register'];
  // const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname)? setHide(true) : setHide(false);
  return (
    <>
      <div className="font-haken">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/hotel/:id' element={<HotelPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* <Route path='/create' element={<CreateProduct />} /> */}
            {/* <Route path='/edit/:id' element={<EditProduct />} /> */}

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
