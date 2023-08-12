import React from 'react'

const ItemCard = ({data}) => {
    const { name, description, price, stock, supplier, imageUrl, delivered } = data
  return (
    <div className='itemCard'>
      <img src={imageUrl} alt='product' className='product-card-image'/>
      <h2>{name}</h2>
      <div className='price-stock-section'>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      </div>
      <p>{description}</p>
      <p>Items Delivered: {delivered}</p>
      <p>Supplier: {supplier}</p>
    </div>
  )
}

export default ItemCard