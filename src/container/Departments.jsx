import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../dataContext'

const Departments = () => {
  const navigate = useNavigate()

  const { departments } = useGlobalContext() 

  return (
    <div className='hStack'>
      <Navbar />
      <div className='hStack gap'>
        {
          departments.map((department, index) => {
            return (
            <div key={index} className='dashCard' onClick={() => navigate(`/${department}`)}>
            {department}
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default Departments