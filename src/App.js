import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'


const App = () => {

  const [date, setDate] = useState(new Date());


  setInterval(() => {
    setDate(new Date());
  }, 1000);



  return (
    <>
      <h1>{date.getHours()} :{date.getMinutes()}: {date.getSeconds()}</h1>

      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

    </>
  )
}




export default App