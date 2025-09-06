import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import About from '../src/pages/About'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='*' element={ <PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App