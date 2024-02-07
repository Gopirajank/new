import React from 'react'
import "./App.css"
import { useState } from "react";
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Works/>
       <Testimonials/>
       <Contact/>
       </div>
     </div>
  )
}

export default App