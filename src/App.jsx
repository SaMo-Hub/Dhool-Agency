import './App.css'
import ReactLenis from 'lenis/react'
import Home from './Home';
import { NavBar } from './components/NavBar';
import { PageProjets } from './Project/PageProjets';
import { Footer } from './Footer';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop';
import ScrollToHashElement from './components/ScrollToHasElement';


function App() {
  const location = useLocation()

 return (
  <>
        {/* Navbar pour naviguer */}
           <NavBar/>
        {/* Définition des routes */}
        {/* <ScrollToTop/> */}
        <AnimatePresence mode='wait'>
        <ScrollToHashElement/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} /> {/* Home */}
          <Route path="/projets/:id" element={<PageProjets />} /> {/* Home */}
        </Routes>
        <Footer/>
        </AnimatePresence>

  </>
  );
}

export default App
