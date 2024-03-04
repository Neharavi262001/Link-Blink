import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MainContainer from './components/MainContainer/MainContainer'

const App = () => {
  const [file,setFile]=useState('')
  const [result,setResult]=useState('')
  return (
    <div className='app'>
      <Navbar/>
      <MainContainer/>
      
      
    </div>
  )
}

export default App

