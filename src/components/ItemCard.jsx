import React from 'react'

const ItemCard = ({data}) => {
    const { department, name, description, price, stock, supplier, imageUrl, delivered } = data
  return (
    <div className='itemCard'>
      <img src={imageUrl} alt='product' />
      <h2>{name}</h2>
      <div className='hStack'>
        <p>Price: {price}</p>
        <p>Stock: {stock}</p>
      </div>
      <p>{description}</p>
      <p>Items Delivered: {delivered}</p>
    </div>
  )
}

export default ItemCard