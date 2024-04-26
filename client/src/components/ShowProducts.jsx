import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:3001/api'

function ShowProducts() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => { }
    const deleteProduct = async (id) => { }
    return (
        <div>Tabla</div>
    )
}

export default ShowProducts