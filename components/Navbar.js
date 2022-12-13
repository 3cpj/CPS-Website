import React from 'react'
import Image from 'next/image'

export default function Navbar({darkMode, handleThemeToggle}) {
  return (
    <header className='sticky h-0 top-0 w-full z-50'>
      <div className="bg-navbar h-20 px-7 py-5 flex justify-between">
        <Image src={'/logo.svg'} alt="Logo" width={40} height={40}/>
        { darkMode 
          ? <Image onClick={handleThemeToggle} src={'/sun.svg'} className="active:scale-105" alt="Menu" width={40} height={40}/>
          : <Image onClick={handleThemeToggle} src={'/moon.svg'} className="active:scale-105" alt="Menu" width={40} height={40}/>
        }
      </div>
    </header>
  )
}
