import Navbar from '../Navbar';
import Footer from '../Footer';
import { useState, useRef } from 'react';

export default function Layout(props) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className={`h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle}/>
        {props.children}
        <Footer />
    </div>
  )
}
