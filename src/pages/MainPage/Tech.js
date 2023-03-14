import React from 'react'
import { FaCss3, FaJava, FaPhp, FaPython, FaReact, FaSwift, FaVenus } from 'react-icons/fa';
const Tech = () => {
  return (
    <div>

      <h1 className='text-center text-3xl font-bold'>Technologies I use</h1>

      <div className='p-10 justify-items-center grid  grid-cols-grid4 gap-10'>
        <FaReact size={150} className='hover:scale-125 hover:text-rose-400 duration-200' />
        <FaPython size={150} />
        <FaPhp size={150} />
        <FaJava size={150} className='animate-bounce' />
        <FaCss3 size={150} />
        <FaSwift size={150} />
      </div>

    </div>
  )
}

export default Tech