import React from 'react'
import Navbar from './Navbar'
import RestaurantCardList from './RestaurantCardList'


const Resturant = () => {
  return (
     <>
      <Navbar />
      <div className='mt-8'>
      <RestaurantCardList />
      </div>
     </>
  )
}

export default Resturant