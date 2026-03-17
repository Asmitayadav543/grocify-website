import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeefood from '../../assets/images/seafood-banner.jpg'

const Seefood = () => {
  return (
    <div>
      <CategoryPage title="Seafood" bgImage={BgSeefood} categories={['Meat','SeaFood']}/>

    </div>
  )
}

export default Seefood
