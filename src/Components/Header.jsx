import { useState, useEffect, useRef } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(pre => !pre);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
      resetIdleTimer();
    };

    const handleMouseMove = () => {
      if (menuOpen) return;
      setIsVisible(true);
      resetIdleTimer();
    };

    const resetIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        if (!menuOpen) setIsVisible(false);
      }, 4000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header
      id='home'
      className={`fixed top-0 left-0 w-full bg-[#d1d1d1] shadow z-50 flex justify-between items-center h-16 px-4 lp:px-20 transition-transform duration-500 ${isVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >

      <div className="flex items-center">
        <h1
          className="text-xl font-logo md:ml-8"
        >
          <a href="/">NETMAGIC</a>
          
        </h1>
      </div>

      {/* Navabars*/}
      <nav className="hidden md:flex items-center gap-12 ">
        <a className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 opacity-100" href="/">Home</a>
        <a className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 opacity-100" href="/#wwd">Services</a>
        <a className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 opacity-100" href="/#resources">Resources</a>
        <a className="text-base tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 opacity-100" href="/contact">Contact</a>
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
        <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      {/* mobile view-sidebar*/}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-70 bg-blue "></div>
          <div
            id="mobile-menu"
            className="fixed inset-0 top-0 z-60 bg-white backdrop-blur-10 w-full h-full flex flex-col items-center p-8 transition-all"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col gap-8 items-center w-full backdrop-blur-xl">
              <a onClick={() => setMenuOpen(false)} className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 backdrop-blur-md" href="/">Home</a>
              <a onClick={() => setMenuOpen(false)} className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50 backdrop-blur-md" href="/#wwd">Services</a>
              <a onClick={() => setMenuOpen(false)} className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="/#resources">Resources</a>
              <a onClick={() => setMenuOpen(false)} className="text-lg tracking-wider transition-colors hover:text-grey-300 cursor-pointer z-50" href="/contact">Contact</a>
            </nav>
          </div>
        </>
      )}

    </header>
  )
}


export default Header