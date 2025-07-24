import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about_us' element={<AboutUs />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App


// Consegna
// https://fakestoreapi.com/

// Obiettivi
// Installiamo React Router DOM: npm i react-router-dom

// Creiamo almeno 3 pagine principali:
// Homepage (con un messaggio di benvenuto o immagine promozionale)
// Chi siamo
// Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)

// Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

// Bonus
// Centralizziamo la Navbar usando un componente Layout
// Gestiamo la classe active per i link attivi nella Navbar