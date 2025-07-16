import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer = useRef(null);
  const location = useLocation();

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
    <>
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
        <nav className="hidden custom:flex justify-end items-center gap-8 w-full bg-[#d1d1d1] py-3 text-sm font-semibold">
          <a
            href="/"
            className={`px-3 py-1 rounded ${location.pathname === '/' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            HOME
          </a>

          <div className="relative group">
            <a className="px-3 py-1 cursor-pointer hover:text-blue-500">SERVICES ▼</a>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 w-40">
              <a href="/services/web" className="block px-4 py-2 hover:bg-gray-100">Web</a>
              <a href="/services/app" className="block px-4 py-2 hover:bg-gray-100">App</a>
            </div>
          </div>

          <div className="relative group">
            <a className="px-3 py-1 cursor-pointer hover:text-blue-500">SOLUTIONS ▼</a>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 w-40">
              <a href="/solutions/cloud" className="block px-4 py-2 hover:bg-gray-100">Cloud</a>
              <a href="/solutions/security" className="block px-4 py-2 hover:bg-gray-100">Security</a>
            </div>
          </div>

          <div className="relative group">
            <a className="px-3 py-1 cursor-pointer hover:text-blue-500">PRODUCTS ▼</a>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 w-40">
              <a href="/products/software" className="block px-4 py-2 hover:bg-gray-100">Software</a>
              <a href="/products/hardware" className="block px-4 py-2 hover:bg-gray-100">Hardware</a>
            </div>
          </div>

          <a
            href="/industries"
            className={`px-3 py-1 rounded ${location.pathname === '/industries' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            INDUSTRIES
          </a>
          <a
            href="/support"
            className={`px-3 py-1 rounded ${location.pathname === '/support' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            SUPPORT
          </a>

          <div className="relative group">
            <a className="px-3 py-1 cursor-pointer hover:text-blue-500">COMPANY ▼</a>
            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 w-40">
              <a href="/company/about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="/company/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
            </div>
          </div>

          <a
            href="/contact"
            className={`px-3 py-1 rounded ${location.pathname === '/contact' ? 'text-white bg-blue-500' : 'hover:text-blue-500'}`}
          >
            CONTACT
          </a>
        </nav>

        {/* mobile view*/}
        <button
          onClick={toggleMenu}
          className="custom:hidden text-5xl p-2 z-50 cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

      </header>
      <>
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black opacity-40"></div>
            <div
              id="mobile-menu"
              className="fixed inset-0 top-0 z-[9999] bg-white backdrop-blur-10 w-full h-full flex flex-col pt-20 px-6 transition-all overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-3xl text-gray-700"
                aria-label="Close menu"
              >
                <i className="bx bx-x"></i>
              </button>
              <nav className="flex flex-col gap-6 items-start w-full max-w-sm">
                <a onClick={() => setMenuOpen(false)} href="/" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">HOME</a>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">SERVICES</summary>
                  <div className="flex flex-col pl-6">
                    <a onClick={() => setMenuOpen(false)} href="/services/web" className="py-1 hover:underline">Web</a>
                    <a onClick={() => setMenuOpen(false)} href="/services/app" className="py-1 hover:underline">App</a>
                  </div>
                </details>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">SOLUTIONS</summary>
                  <div className="flex flex-col pl-6">
                    <a onClick={() => setMenuOpen(false)} href="/solutions/cloud" className="py-1 hover:underline">Cloud</a>
                    <a onClick={() => setMenuOpen(false)} href="/solutions/security" className="py-1 hover:underline">Security</a>
                  </div>
                </details>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">PRODUCTS</summary>
                  <div className="flex flex-col pl-6">
                    <a onClick={() => setMenuOpen(false)} href="/products/software" className="py-1 hover:underline">Software</a>
                    <a onClick={() => setMenuOpen(false)} href="/products/hardware" className="py-1 hover:underline">Hardware</a>
                  </div>
                </details>

                <a onClick={() => setMenuOpen(false)} href="/industries" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">INDUSTRIES</a>
                <a onClick={() => setMenuOpen(false)} href="/support" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">SUPPORT</a>

                <details className="w-full">
                  <summary className="text-lg font-bold px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">COMPANY</summary>
                  <div className="flex flex-col pl-6">
                    <a onClick={() => setMenuOpen(false)} href="/company/about" className="py-1 hover:underline">About Us</a>
                    <a onClick={() => setMenuOpen(false)} href="/company/careers" className="py-1 hover:underline">Careers</a>
                  </div>
                </details>

                <a onClick={() => setMenuOpen(false)} href="/contact" className="text-lg font-bold px-4 py-2 w-full hover:bg-gray-100 rounded">CONTACT</a>
              </nav>
            </div>
          </>
        )}
      </>
    </>
  )

}

export default Header