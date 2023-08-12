import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../dataContext'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()

  const { db } = useGlobalContext()

  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [isLowStockChecked, setIsLowStockChecked] = useState(false)
  const [sortType, setSortType] = useState("name")

  const sortFurther = (temp) => {
    if (sortType === "name") {
      return temp.sort((a, b) => a.name - b.name);
    }
    else if (sortType === "price") {
      return temp.sort((a, b) => a.price - b.price);
    }
    else {
      return temp.sort((a, b) => a.stock - b.stock);
    }
  }

  const filteredData = () => {
    var temp = []
    if (selectedDepartment === "All") {
      temp = db
    } else {
      temp = db.filter((item) => item.department === selectedDepartment)
    }
    temp = temp.filter((item) => {
      if (isLowStockChecked) {
        sortFurther(temp)
        return item.stock <= 10
      } else {
        sortFurther(temp)
        return item
      }
    })

    return temp
  }

  return (
    <div className='hStack'>
      <Navbar />
      <div className='vStack gap'>
        <div className='filterSection hStack gap'>
          <p>Products</p>
          <div className='hStack gap'>
            <select onChange={(e) => setSelectedDepartment(e.target.value)}>
              <option value='All'>All</option>
              <option value='Kitchen'>Kitchen</option>
              <option value='Clothing'>Clothing</option>
              <option value='Toys'>Toys</option>
            </select>
            <div>
              <input type='checkbox' id='lowStockCheckbox' onChange={(e) => {
                if (e.target.checked === true) {
                  setIsLowStockChecked(true)
                } else {
                  setIsLowStockChecked(false)
                }
              }}></input>
              <label htmlFor='lowStockCheckbox'>Low Stock Items</label>
            </div>
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value='name'>Name</option>
              <option value='price'>Price</option>
              <option value='stock'>Stock</option>
            </select>
            <button>Add new product</button>
          </div>
        </div>
        <div className='listProducts vStack gap'>
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
            {
              filteredData().map((item, index) => {
                const { id, imageUrl, name, description, price, stock, supplier } = item
                return (
                  <tr key={index} onClick={() => navigate(`/products/${id}`)}>
                    <td><img src={imageUrl} alt='product'/></td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                    <td>{supplier}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products