import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/images/fruits-banner.png'


const Fruits = () => {
  return (
    <div>
        <CategoryPage title="Fruits & Vegetables" bgImage={BgFruits} categories={["Fruits", "Vegetables"]} />
      
    </div>
  )
}

export default Fruits
