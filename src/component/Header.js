import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-9 bg-purple-700 text-white py-2 items-center'>
      <h1 className='text-xl'>Logo</h1>
      <div className='space-x-5'>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

    </div>
  )
}

export default Header