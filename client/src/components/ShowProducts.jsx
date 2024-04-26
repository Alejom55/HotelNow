import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = `http://localhost:8000/api`
// const endpoint = `${process.env.REACT_APP_AXIOS_URL}/api`
const ShowProducts = () => {
    // console.log(process.env.REACT_PUBLIC_AXIOS_URL)
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const res = await axios.get(`${endpoint}/products`)
        setProducts(res.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }
    return (
        <div>
            <table className=''>
                <thead>
                    <tr>Descripcion</tr>
                    <tr>Price</tr>
                    <tr>Stock</tr>
                    <tr>Actions</tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts