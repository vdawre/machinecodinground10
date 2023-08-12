import React from 'react'
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../dataContext'

const Dashboard = () => {
    const { state } = useGlobalContext()

  return (
    <div className='hStack'>
        <Navbar />
        <div className='hStack gap p-auto'>
            <div className='dashCard'>
                <p className='dashCardItem highlight1'>
                {
                    state.reduce((acc,curr)=> acc += curr.stock, 0)
                }
                </p>
                <p>Total Stock</p>
            </div>
            <div className='dashCard'>
                <p className='dashCardItem highlight2'>
                {
                    state.reduce((acc,curr)=> acc += curr.delivered, 0)
                }
                </p>
                <p>Total Delivered</p>
            </div>
            <div className='dashCard'>
                <p className='dashCardItem highlight3'>
                {
                    state.reduce((acc,curr)=>{
                        if(curr.stock <= 10){
                            return acc+curr.stock
                        }
                        else{
                            return acc;
                        }
                    }, 0)
                }
                </p>
                <p>Low Stock Items</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard