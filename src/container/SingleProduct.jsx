import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../dataContext'
import Navbar from '../components/Navbar'

const SingleProduct = () => {
    const { db } = useGlobalContext()
    const { productId } = useParams()

    const foundProduct = db.find((item) => item.id === Number(productId))

    console.log(foundProduct)

  return (
    <div className='hStack'>
        <Navbar />
        <div className='vStack gap p-auto'>
            <h2>{foundProduct.name}</h2>
            <img src={foundProduct.imageUrl} alt="product" className='productImg'/>
            <p>Price: {foundProduct.price}</p>
            <p>Stock: {foundProduct.stock}</p>
            <p>Supplier: {foundProduct.supplier}</p>
            <p>SKU: {foundProduct.sku}</p>
            <p>Delivered: {foundProduct.delivered}</p>
            <p>Description: {foundProduct.description}</p>
        </div>
    </div>
  )
}

export default SingleProduct