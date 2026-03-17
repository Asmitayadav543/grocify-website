import React from 'react'
import Button from '../Buttons/Button'
import FreshFruits from '../../assets/images/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col  max-w-[1400px] mx-auto py-10'>
            <span className='md:text-7xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20% OFF</span>
            <div className='max-w-[700px] '>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Discount !</h3>
                <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery Website! shope fresh essentails and save big on your first purchase.Fast delivery and quality guranteed

                </p>
                <Button content="Get a discount"/>

            </div>


        </div>

    </section>
  )
}

export default Discount
