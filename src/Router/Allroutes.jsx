import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../Page/Hero'



const Allroutes = () => {
  return (
    
    <>

<Routes>
    <Route path='/*' element={<Hero />} />
</Routes>

    </>
  )
}

export default Allroutes