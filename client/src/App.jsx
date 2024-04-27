import { useState } from 'react'
import './App.css'
import ShowProducts from './components/ShowProducts'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// import Navbar from './layout/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <div className="App font-haken">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar />} />
            {/* <Route path='/create' element={<CreateProduct />} /> */}
            {/* <Route path='/edit/:id' element={<EditProduct />} /> */}
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
