import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
export default function App() {


  return (
    <>
    <Navbar/>
    <Container className='mb-4'>

  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/store' element={<Store />} />

</Routes>
</Container>
    </>
)
}

