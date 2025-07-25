import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={Home} />
          <Route path='/products' Component={Products} />
          <Route path='/about_us' Component={AboutUs} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App


// Consegna
// https://fakestoreapi.com/

// Creiamo almeno 3 pagine principali:
// Homepage (con un messaggio di benvenuto o immagine promozionale)
// Chi siamo
// Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)

// Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

// Bonus
// Centralizziamo la Navbar usando un componente Layout
// Gestiamo la classe active per i link attivi nella Navbar



// Consegna
// Completiamo il nostro routing aggiungendo la pagina di dettaglio prodotto!
// Obiettivi
// Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa <Link>)
// Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da https://fakestoreapi.com/products/:id
// Configuriamo il routing dinamico per leggere l’id del prodotto dalla URL
// Bonus
// Aggiungiamo nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo (usando useNavigate() programmaticamente)
// Gestire la pagina 404 - create un componente 404 e usatelo nella rotta catch all
// getire lo stato di caricamento della pagina mentre aspettiamo la risposta alla chiamata ajax