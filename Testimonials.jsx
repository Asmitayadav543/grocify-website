import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import Customer1 from "../../assets/images/customer1.jpg"
import Customer2 from "../../assets/images/customer2.jpg"
import Customer3 from "../../assets/images/customer3.jpg"
import Customer4 from "../../assets/images/customer4.jpg"
import Customer5 from "../../assets/images/customer5.jpg"
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {



  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Customers" heading="Saying" />

        <div className=' flex justify-end mt-5 py-5 gap-x-3'>
          <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 text-white transition-colors duration-500 hover:text-white cursor-pointer'>
            <IoIosArrowBack />
          </button>
          <button className='custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 text-white transition-colors duration-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>
        <Swiper navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2 , spaceBetween: 20},
            1024: { slidesPerView: 3, spaceBetween: 20 },

          }}
          modules={[Navigation]} className="mySwiper">
          {
            reviews.map(item => {
              return (
                <SwiperSlide className=' bg-zinc-100 rounded-xl p-8'>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                      <img src={item.image} className='w-full h-full'/>
                    </div>
                    <div>
                      <h5 className='text-xl font-bold'>{item.name}
                      </h5>
                      <p className='text-zinc-600'>{item.profession}</p>
                      <span className='flex text-yellow-400 mt-3 text-xl gap-1'> 
                        {Array.from({ length: item.rating }, (_, index) =>(
                          <FaStar />

                        ))}
                        
                      </span>

                    </div>

                  </div>
                  <div className='mt-10 min-h-[15vh]  '>
                    <p className='text-zinc-600'>{item.para}
                    </p>
                  </div>


                </SwiperSlide>

              )
            })
          }
        </Swiper>



      </div>

    </section>
  )
}

export default Testimonials

const reviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    rating: 4,
    para: 'FreshBasket is my go-to store for all my grocery needs. Their products are always fresh and of high quality. The staff is friendly and helpful.',
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 3,
    para: "As a chef,quality ingredients are crucial, and FreshBasket never disappoints. The variety and freshness of their produce is unmatched.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya zahra",
    profession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family`s weekly grocery needs. The delivery is always prompt.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the quality and variety of products at FreshBasket. It's become my preferred grocery destination.",
    image: Customer4,
  },

  {
    id: 5,
    name: "Sarah Williams",
    profession: "Nutritionist",
    rating: 5,
    para: "As a nutritionist, I trust FreshBasket for their high-quality, fresh produce. It's become an essential part of my clients' shopping routine.",
    image: Customer5,
  },
]