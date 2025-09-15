import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import  Blogs from './Pages/Blogs'
import BlogPost from './Pages/BlogPost'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blog/:id' element={<BlogPost/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
