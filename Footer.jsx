import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex  flex-wrap gap-12 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='text-3xl font-bold'
                    >Gr<span className='text-orange-500 uppercase'>o
                        </span>cify</a>
                        <p className='text-zinc-600 mt-6 max-w-[350px]'>
                            Bred for a high content of beneficial substance.Our Products are all fresh healthy.

                        </p>
                        <p className='text-zinc-800 mt-6'>
                             2026 &copy;  All Rights Reserved.
                        </p>


                </div>
                <ul className='flex-1'>
                    <li className=''>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800 '>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800 '>FAQ</a>
                    </li>

                </ul>

                <ul className='flex-1'>
                    <li className=''>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800 '>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800 '>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800 '>Contact Us</a>
                    </li>

                </ul>
                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Stay Connected

                    </h5>
                    <p className='mt-6 text-zinc-600'>
                        Questions or feedback?<br/>
                         We'd love to hear from you.

                    </p>
                    <div className=' flex bg-white p-1 rounded-lg mt-6'>
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Enter Address' className='h-[5vh] pl-4  flex-1 focus:outline-none' />
                        <button className=' bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'><IoIosArrowForward /></button>
                    </div>

                </div>
            </div>

        </footer>



    )
}

export default Footer
