import React from 'react'
import '../styles.css' 
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <ul className='navbar'>
        <li onClick={() => navigate("/")}>Dashboard</li>
        <li onClick={() => navigate("/departments")}>Departments</li>
        <li onClick={() => navigate("/products")}>Products</li>
    </ul>
  )
}

export default Navbar