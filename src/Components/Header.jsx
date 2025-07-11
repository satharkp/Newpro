import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const[menuOpen,setMenuOpen]=useState(false);


const toggleMenu=()=>{
  setMenuOpen(pre=>!pre)
}

  return (
    <header className="flex justify-between items-center py-4 px-4 lp:px-20">

      <div className="flex items-center">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-xl font-logo md:ml-8"
        >
          NETMAGIC
        </h1>
      </div>

      {/* Navabars*/}
      <nav className="hidden md:flex items-center gap-12 ">
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="/">Home</a>

        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href='#wwd'>What We Do</a>

        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">Resources</a>

        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">Contact</a>
      </nav>

      {/* mobile view*/}
      <button
        onClick={toggleMenu}
        className="md:hidden text-5xl p-2 z-50 cursor-pointer"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* mobile view-sidebar*/}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-white bg-opacity-0 backdrop-blur-md flex flex-col items-center p-8 transition-all"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-8 items-center w-full">
            <a className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">
              Home
            </a>
            <a className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">
              Features
            </a>
            <a className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">
              Resources
            </a>
            <a className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="">
              Contact
            </a>
          </nav>
        </div>
      )}

    </header>
  )
}


export default Header