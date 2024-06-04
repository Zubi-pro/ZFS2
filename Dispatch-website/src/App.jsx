import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../components/Home'
import About from '../components/About'
import Service from '../components/Service'
import Error from '../components/Error'
import WhatsAppFloatingButton from '../components/Whatsapp'
import ContactPage from '../components/ContactPage'
import PrivacyPolicy from '../components/Privacy'

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />


      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    <WhatsAppFloatingButton/>
  </BrowserRouter>
  )
}

export default App
