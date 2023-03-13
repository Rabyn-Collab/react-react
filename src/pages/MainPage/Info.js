import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='flex flex-col items-center space-y-7 '>


        <h1 className='text-center text-3xl font-extrabold'>Who am I</h1>

        <div className='h-[400px] w-[400px] bg-black rounded-full  border-[3px] border-green-600 text-white flex justify-center  items-center'>

          <div>
            <p>Name: Some Person</p>
            <p>Email: someperson@gmail.com</p>
            <p>Tel:9777777</p>
            <p>Age:90</p>
            <p>Experience:python, java, dart</p>
          </div>

        </div>




      </div>


      <div className='relative '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path></svg>
        <div className='absolute bottom-0 text-white ml-[45%] mb-10'>
          <h1>Develop By</h1>
          <p>Some dev</p>

        </div>


      </div>

    </div>
  )
}

export default Info