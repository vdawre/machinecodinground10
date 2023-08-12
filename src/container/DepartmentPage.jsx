import React from 'react'
import { useGlobalContext } from '../dataContext'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ItemCard from '../components/ItemCard'

const DepartmentPage = () => {
    const { db } = useGlobalContext()
    const {departmentName} = useParams()

    const foundItems = db.filter((item) => item.department === departmentName)

  return (
    <div className='hStack'>
        <Navbar />
        <div className='listItemsSection vStack gap'>
            {
                foundItems.map((item, index) => {
                    return <ItemCard data={item} key={index} />
                })
            }
        </div>
    </div>
  )
}

export default DepartmentPage